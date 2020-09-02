/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#include "vast/system/index.hpp"

#include "vast/chunk.hpp"
#include "vast/concept/parseable/to.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/bitmap.hpp"
#include "vast/concept/printable/vast/error.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/concept/printable/vast/table_slice.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/cache.hpp"
#include "vast/detail/fill_status_map.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/detail/notifying_stream_manager.hpp"
#include "vast/error.hpp"
#include "vast/expression_visitors.hpp"
#include "vast/fbs/index.hpp"
#include "vast/fbs/meta_index.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/fbs/uuid.hpp"
#include "vast/fbs/version.hpp"
#include "vast/fwd.hpp"
#include "vast/ids.hpp"
#include "vast/io/read.hpp"
#include "vast/io/save.hpp"
#include "vast/json.hpp"
#include "vast/load.hpp"
#include "vast/logger.hpp"
#include "vast/save.hpp"
#include "vast/system/accountant.hpp"
#include "vast/system/evaluator.hpp"
#include "vast/system/filesystem.hpp"
#include "vast/system/partition.hpp"
#include "vast/system/query_supervisor.hpp"
#include "vast/system/shutdown.hpp"
#include "vast/system/spawn_indexer.hpp"
#include "vast/table_slice.hpp"

#include <caf/make_counted.hpp>
#include <caf/stateful_actor.hpp>

#include <chrono>
#include <deque>
#include <memory>
#include <unordered_set>

#include "caf/error.hpp"
#include "caf/response_promise.hpp"

using namespace std::chrono;

// clang-format off
//
// The index is implemented as a stream stage that hooks into the table slice
// stream coming from the importer, and forwards them to the current active
// partition
//
//              table slice              table slice                      table slice column
//   importer ----------------> index ---------------> active partition ------------------------> indexer
//                                                                      ------------------------> indexer
//                                                                                ...
//
// At the same time, the index is also involved in the lookup path, where it
// receives an expression and loads the partitions that might contain relevant
// results into memory.
//
//      expression                atom::evaluate
//     ------------>  index     ----------------->   partition
//
//                                   [indexer]
//                  (spawns     <----------------     
//                   evaluator) 
//
//                                  curried_predicate
//                   evaluator  -------------------------------> indexer
//
//                                            ids
//                              <------------------------------
// clang-format on

namespace vast::system {

namespace v2 {

caf::actor partition_factory::operator()(const uuid& id) const {
  // Load partition from disk.
  VAST_ASSERT(std::find(state_.persisted_partitions.begin(),
                        state_.persisted_partitions.end(), id)
              != state_.persisted_partitions.end());
  auto path = state_.dir / to_string(id);
  VAST_DEBUG(state_.self, "loads partition", id, "from path", path);
  // TODO: Don't read the partition eagerly here, just verify that the file
  // exists and pass the path to the partition actor constructor.
  auto bytes = io::read(path);
  if (!bytes)
    return nullptr;
  auto chunk = chunk::make(std::move(*bytes));
  if (!chunk)
    return nullptr;
  return state_.self->spawn(readonly_partition, id, *chunk);
}

index_state::index_state(caf::stateful_actor<index_state>* self)
  : self{self}, lru_partitions{0, partition_factory{*this}} {
}

caf::error index_state::load_from_disk() {
  // We dont use the filesystem actor here because this function is only
  // called once during startup, when no other actors exist yet.
  if (!exists(dir)) {
    VAST_INFO(self, "found no prior state, starting with clean slate");
    return caf::none;
  }
  if (auto fname = index_filename(); exists(fname)) {
    VAST_VERBOSE(self, "loads state from", fname);
    auto buffer = io::read(fname);
    if (!buffer) {
      VAST_ERROR(self, "failed to read index file:",
                 self->system().render(buffer.error()));
      return buffer.error();
    }
    // TODO: Create a `index_ondisk_state` struct and move this part of the
    // code into an `unpack()` function.
    auto index = fbs::GetIndex(buffer->data());
    auto version = index->version();
    if (version != fbs::Version::v0)
      return make_error(ec::format_error, "unsupported index version, either remove the existing vast.db "
                "directory or try again with a newer version of VAST");
    auto meta_idx = index->meta_index();
    VAST_ASSERT(meta_idx);
    auto error = unpack(*meta_idx, this->meta_idx);
    if (error)
      return error;
    auto partition_uuids = index->partitions();
    VAST_ASSERT(partition_uuids);
    for (auto uuid_fb : *partition_uuids) {
      VAST_ASSERT(uuid_fb);
      vast::uuid partition_uuid;
      unpack(*uuid_fb, partition_uuid);
      if (exists(dir / to_string(partition_uuid)))
        persisted_partitions.insert(partition_uuid);
      else
        // TODO: remove the problematic uuid from the meta index if we get here
        VAST_WARNING(self, "found partition", partition_uuid,
                     "in the index state but not on disk. This may have been "
                     "caused b");
    }
    auto stats = index->stats();
    if (!stats)
      return make_error(ec::format_error, "No stats in index flatbuffer");
    for (const auto& stat : *stats) {
      this->stats.layouts[stat->name()->str()]
        = layout_statistics{stat->count()};
    }
  } else {
    VAST_WARNING(self, "found existing database dir", dir,
                 "without index statefile, will start with fresh state. If "
                 "this database was not empty, results will be missing from "
                 "queries.");
  }
  return caf::none;
}

bool index_state::worker_available() {
  return !idle_workers.empty();
}

caf::actor index_state::next_worker() {
  auto result = std::move(idle_workers.back());
  idle_workers.pop_back();
  return result;
}

void index_state::add_flush_listener(caf::actor listener) {
  VAST_DEBUG(self, "adds a new 'flush' subscriber:", listener);
  flush_listeners.emplace_back(std::move(listener));
  detail::notify_listeners_if_clean(*this, *stage);
}

void index_state::notify_flush_listeners() {
  VAST_DEBUG(self, "sends 'flush' messages to", flush_listeners.size(),
             "listeners");
  for (auto& listener : flush_listeners)
    self->send(listener, atom::flush_v);
  flush_listeners.clear();
}

caf::dictionary<caf::config_value> index_state::status() const {
  using caf::put_dictionary;
  using caf::put_list;
  caf::dictionary<caf::config_value> result;
  // Statistics.
  auto& stats_object = put_dictionary(result, "statistics");
  auto& layout_object = put_dictionary(stats_object, "layouts");
  for (auto& [name, layout_stats] : stats.layouts) {
    auto xs = caf::dictionary<caf::config_value>{};
    xs.emplace("count", layout_stats.count);
    // We cannot use put_dictionary(layout_object, name) here, because this
    // function splits the key at '.', which occurs in every layout name.
    // Hence the fallback to low-level primitives.
    layout_object.insert_or_assign(name, std::move(xs));
  }
  // Resident partitions.
  auto& partitions = put_dictionary(result, "partitions");
  if (active_partition.actor != nullptr)
    partitions.emplace("active", to_string(active_partition.id));
  auto& cached = put_list(partitions, "cached");
  for (auto& kv : lru_partitions)
    cached.emplace_back(to_string(kv.first));
  auto& unpersisted = put_list(partitions, "unpersisted");
  for (auto& kv : this->unpersisted)
    unpersisted.emplace_back(to_string(kv.first));
  // General state such as open streams.
  detail::fill_status_map(result, self);
  return result;
}

void index_state::request_query_map(query_state& lookup,
                                    uint32_t num_partitions) {
  VAST_TRACE(VAST_ARG(lookup), VAST_ARG(num_partitions));
  if (num_partitions == 0 || lookup.partitions.empty())
    return;
  // Prefer partitions that are already available in RAM.
  auto partition_is_loaded = [&](const uuid& candidate) {
    return (active_partition.actor != nullptr
            && active_partition.id == candidate)
           || unpersisted.count(candidate)
           || lru_partitions.contains(candidate);
  };
  std::partition(lookup.partitions.begin(), lookup.partitions.end(),
                 partition_is_loaded);
  // Helper function to spin up EVALUATOR actors for a single partition.
  auto spin_up = [&](const uuid& partition_id) -> caf::actor {
    // We need to first check whether the ID is the active partition or one
    // of our unpersisted ones. Only then can we dispatch to our LRU cache.
    caf::actor part;
    if (active_partition.actor != nullptr
        && active_partition.id == partition_id)
      part = active_partition.actor;
    else if (auto it = unpersisted.find(partition_id); it != unpersisted.end())
      part = it->second;
    else if (auto it = persisted_partitions.find(partition_id);
             it != persisted_partitions.end())
      part = lru_partitions.get_or_load(partition_id);
    if (!part)
      VAST_ERROR("Could not load partition", partition_id,
                 "that was part of a query");
    return part;
  };
  // Loop over the candidate set until we either successfully scheduled
  // num_partitions partitions or run out of candidates.
  //
  // NOTE: The previous code immediately discarded partitions that were
  // selected by the meta index but didnt produce an evaluation map, so
  // that they didn't count towards the minimum. This is kinda hard to
  // replicate in the new asynchronous scenario, but if it turns out to
  // be relevant to performance we might need to reinstate it.
  auto it = lookup.partitions.begin();
  auto last = lookup.partitions.end();
  auto count = std::min<size_t>(std::distance(it, last), num_partitions);
  std::vector<std::pair<uuid, caf::actor>> launched;
  for (size_t i = 0; i < count; ++i) {
    auto& id = *it++;
    if (auto part = spin_up(id))
      launched.push_back(std::make_pair(id, part));
  }
  lookup.partitions.erase(lookup.partitions.begin(), it);
  VAST_DEBUG(self, "launched", launched.size(),
             "await handlers to fill the pending query map");
  // Note that `.await()` doesnt block until after the handler returns.
  // FIXME: I think a better design is request() -> then() -> send
  // atom::resume with the created pending_query_map as param
  struct counter {
    explicit counter(size_t expected, caf::response_promise&& response): expected(expected), response(std::move(response)) {}
    size_t expected;
    size_t received;
    pending_query_map pqm;
    caf::response_promise response;
  };
  auto shared_counter = std::make_shared<counter>(launched.size(), self->make_response_promise());
  for (auto& kv : launched) {
    auto partition_id = kv.first;
    auto partition_actor = kv.second;
    self->request(partition_actor, caf::infinite, atom::evaluate_v, lookup.expression)
      .then(
        [=](evaluation_triples triples) {
          ++shared_counter->received;
          if (triples.empty()) {
            VAST_DEBUG(self, "identified partition", partition_id,
                       "as candidate in the meta index, but it didn't produce "
                       "an "
                       "evaluation map");
            return;
          }
          shared_counter->pqm.emplace(partition_id, std::move(triples));
          if (shared_counter->received == shared_counter->expected)
            self->send(self, atom::resume_v, )
        },
        [=](const caf::error& error) {
          ++shared_counter->received;
          VAST_ERROR(self, "failed to request evaluation map", error);
        });
  }
  return;
}

query_map
index_state::launch_evaluators(pending_query_map& pqm, expression expr) {
  query_map result;
  for (auto& [id, eval] : pqm) {
    std::vector<caf::actor> xs{self->spawn(evaluator, expr, std::move(eval))};
    result.emplace(id, std::move(xs));
  }
  pqm.clear();
  return result;
}

path index_state::index_filename(path basename) const {
  return basename / dir / "index.bin";
}

caf::expected<flatbuffers::Offset<fbs::Index>>
pack(flatbuffers::FlatBufferBuilder& builder, const index_state& state) {
  auto meta_idx = pack(builder, state.meta_idx);
  if (!meta_idx)
    return meta_idx.error();
  VAST_VERBOSE(state.self, "persisting", state.persisted_partitions.size(),
               " definitely persisted and ", state.unpersisted.size(),
               " maybe persisted partitions uuids");
  std::vector<flatbuffers::Offset<fbs::UUID>> partition_offsets;
  for (auto uuid : state.persisted_partitions) {
    auto uuid_fb = pack(builder, uuid);
    if (!uuid_fb)
      return uuid_fb.error();
    partition_offsets.push_back(*uuid_fb);
  }
  // We don't know if these will make it to disk before the index and the rest
  // of the system is shut down (in case of a hard/dirty shutdown), so we just
  // store everything and throw out the missing partitions when loading the
  // index.
  for (auto& kv : state.unpersisted) {
    auto uuid_fb = pack(builder, kv.first);
    if (!uuid_fb)
      return uuid_fb.error();
    partition_offsets.push_back(*uuid_fb);
  }
  auto partitions = builder.CreateVector(partition_offsets);
  std::vector<flatbuffers::Offset<fbs::LayoutStatistics>> stats_offsets;
  for (auto& [name, layout_stats] : state.stats.layouts) {
    auto name_fb = builder.CreateString(name);
    fbs::LayoutStatisticsBuilder stats_builder(builder);
    stats_builder.add_name(name_fb);
    stats_builder.add_count(layout_stats.count);
    auto offset = stats_builder.Finish();
    stats_offsets.push_back(offset);
  }
  auto stats = builder.CreateVector(stats_offsets);
  fbs::IndexBuilder index_builder(builder);
  index_builder.add_version(fbs::Version::v0);
  index_builder.add_meta_index(*meta_idx);
  index_builder.add_partitions(partitions);
  index_builder.add_stats(stats);
  return index_builder.Finish();
}

/// Persists the state to disk.
// TODO: This function should delegate the actual writing of the data to the
// filesystem actor, in order to not block the ingest path.
caf::error index_state::flush_to_disk() {
  flatbuffers::FlatBufferBuilder builder;
  auto index = pack(builder, *this);
  if (!index)
    return index.error();
  builder.Finish(*index, vast::fbs::file_identifier);
  auto span = vast::span<const byte>{
    reinterpret_cast<const byte*>(builder.GetBufferPointer()),
    builder.GetSize()};
  return io::save(index_filename(), span);
}

caf::behavior
index(caf::stateful_actor<index_state>* self, filesystem_type fs, path dir,
      size_t partition_capacity, size_t in_mem_partitions,
      size_t taste_partitions, size_t num_workers) {
  VAST_VERBOSE(self, "initializes index in", dir);
  VAST_VERBOSE(self, "caps partition size at", partition_capacity, "events");
  // Set members.
  self->state.self = self;
  self->state.fs_actor = fs;
  self->state.dir = dir;
  self->state.partition_capacity = partition_capacity;
  self->state.taste_partitions = taste_partitions;
  self->state.lru_partitions.resize(in_mem_partitions);
  // Read persistent state.
  if (auto err = self->state.load_from_disk()) {
    VAST_ERROR(self, "cannot load index state from disk:", err);
    VAST_ERROR_ANON("Please try again or remove "
                    "it to start with a clean state (after making a backup");
    self->quit(err);
    return {};
  }
  // Creates a new active partition and updates index state.
  auto create_active_partition = [=] {
    auto id = uuid::random();
    caf::settings index_opts;
    // TODO: Set the 'cardinality' option once ch19167 is resolved.
    // index_opts["cardinality"] = partition_capacity;
    auto part = self->spawn(partition, id, self->state.fs_actor, index_opts);
    auto slot = self->state.stage->add_outbound_path(part);
    self->state.active_partition.actor = part;
    self->state.active_partition.stream_slot = slot;
    self->state.active_partition.capacity = partition_capacity;
    self->state.active_partition.id = id;
    VAST_DEBUG(self, "created new partition", to_string(id));
  };
  auto decomission_active_partition = [=] {
    auto& active = self->state.active_partition;
    auto id = active.id;
    self->state.unpersisted[id] = active.actor;
    // Send buffered batches.
    self->state.stage->out().fan_out_flush();
    self->state.stage->out().force_emit_batches();
    // Remove active partition from the stream.
    self->state.stage->out().close(active.stream_slot);
    // Persist active partition asynchronously.
    auto part_dir = dir / to_string(id);
    VAST_DEBUG(self, "persists active partition to", part_dir);
    self->request(active.actor, caf::infinite, atom::persist_v, part_dir)
      .then(
        [=](atom::ok) {
          VAST_VERBOSE(self, "successfully persisted partition", id);
          self->state.unpersisted.erase(id);
          self->state.persisted_partitions.insert(id);
        },
        [=](const caf::error& err) {
          VAST_ERROR(self, "failed to persist partition", id, ":", err);
          self->quit(err);
        });
  };
  // Setup stream manager.
  self->state.stage = detail::attach_notifying_stream_stage(
    self,
    /* continuous = */ true,
    [=](caf::unit_t&) {
      VAST_DEBUG(self, "initializes new table slice stream");
    },
    [=](caf::unit_t&, caf::downstream<table_slice_ptr>& out,
        table_slice_ptr x) {
      self->state.stats.layouts[x->layout().name()].count += x->rows();
      auto& active = self->state.active_partition;
      if (!active.actor) {
        create_active_partition();
      } else if (x->rows() > active.capacity) {
        VAST_DEBUG(self, "exceeds active capacity by",
                   (x->rows() - active.capacity));
        decomission_active_partition();
        self->state.flush_to_disk();
        create_active_partition();
      }
      VAST_DEBUG(self, "forwards table slice", to_string(*x));
      VAST_DEBUG(self, "slice info:", active.capacity,
                 self->state.partition_capacity, x->rows());

      out.push(x);
      self->state.meta_idx.add(active.id, *x);
      if (active.capacity == self->state.partition_capacity
          && x->rows() > active.capacity) {
        VAST_WARNING(self, "got table slice with", x->rows(),
                     "rows that exceeds the default partition capacity",
                     self->state.partition_capacity);
        active.capacity = 0;
      } else {
        VAST_ASSERT(active.capacity >= x->rows());
        active.capacity -= x->rows();
        VAST_DEBUG(self, "reduces active partition capacity to",
                   (std::to_string(active.capacity) + '/'
                    + std::to_string(self->state.partition_capacity)));
      }
    },
    [=](caf::unit_t&, const caf::error& err) {
      // We get an 'unreachable' error when the stream becomes unreachable
      // because the actor was destroyed; in this case we can't use `self`
      // anymore.
      if (err
          && caf::exit_reason{err.code()} != caf::exit_reason::unreachable) {
        VAST_ERROR(self, "aborted with error", self->system().render(err));
        // We can shutdown now because we only get a single stream from the
        // importer.
        self->send_exit(self, err);
      }
      VAST_DEBUG_ANON("index finalized streaming");
    });
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_DEBUG(self, "received EXIT from", msg.source,
               "with reason:", msg.reason);
    // Flush buffered batches and end stream.
    self->state.stage->out().fan_out_flush();
    self->state.stage->out().force_emit_batches();
    self->state.stage->out().close();
    self->state.stage->shutdown();
    // Bring down active partition.
    if (self->state.active_partition.actor)
      decomission_active_partition();
    // Collect partitions for termination.
    std::vector<caf::actor> partitions;
    partitions.reserve(self->state.lru_partitions.size() + 1);
    partitions.push_back(self->state.active_partition.actor);
    for ([[maybe_unused]] auto& [_, part] : self->state.lru_partitions)
      partitions.push_back(part);
    // META-FIXME: The below fixme is still for the old code, check if its
    // still true.
    // FIXME: this manual ref-count decrementing should not be necessary, but
    // it currently doesn't work otherwise.
    // self->state.lru_partitions.clear();
    // Terminate partition actors.
    VAST_DEBUG(self, "brings down", partitions.size(), "partitions");
    shutdown<policy::parallel>(self, std::move(partitions));
    self->state.flush_to_disk();
  });
  // Launch workers for resolving queries.
  for (size_t i = 0; i < num_workers; ++i)
    self->spawn(query_supervisor, self);
  // We switch between has_worker behavior and the default behavior (which
  // simply waits for a worker).
  self->set_default_handler(caf::skip);
  self->state.has_worker.assign(
    [=](caf::stream<table_slice_ptr> in) {
      VAST_DEBUG(self, "got a new table slice stream");
      return self->state.stage->add_inbound_path(in);
    },
    // The partition delegates the actual writing to the filesystem actor,
    // so we dont really get more information than a binary ok/not-ok here.
    [=](caf::result<atom::ok> write_result) {
      if (write_result.err)
        VAST_ERROR(self, "could not persist:", write_result.err);
      else
        VAST_VERBOSE(self, "successfully persisted partition");
    },
    // Query handling
    [=](vast::expression expr) {
      auto respond = [&](auto&&... xs) {
        auto mid = self->current_message_id();
        unsafe_response(self, self->current_sender(), {}, mid.response_id(),
                        std::forward<decltype(xs)>(xs)...);
      };
      // Sanity check.
      if (self->current_sender() == nullptr) {
        VAST_ERROR(self, "got an anonymous query (ignored)");
        respond(caf::sec::invalid_argument);
        return;
      }
      auto& st = self->state;
      auto client = caf::actor_cast<caf::actor>(self->current_sender());
      // Convenience function for dropping out without producing hits.
      // Makes sure that clients always receive a 'done' message.
      auto no_result = [&] {
        respond(uuid::nil(), uint32_t{0}, uint32_t{0});
        self->send(client, atom::done_v);
      };
      // Get all potentially matching partitions.
      auto candidates = st.meta_idx.lookup(expr);
      // Report no result if no candidates are found.
      if (candidates.empty()) {
        VAST_DEBUG(self, "returns without result: no partitions qualify");
        no_result();
        return;
      }
      // Allows the client to query further results after initial taste.
      auto query_id = uuid::random();
      auto lookup = query_state{query_id, expr, std::move(candidates),
                                pending_query_map{}};
      auto result = st.pending.emplace(query_id, std::move(lookup));
      VAST_ASSERT(result.second);
      auto& inserted_lookup = result.first->second;
      st.request_query_map(inserted_lookup, st.taste_partitions);
      // "Yield" the current function.
      auto mid = self->current_message_id();
      auto sender = self->current_sender();
      self->delegate(caf::actor_cast<caf::actor>(self), atom::resume_v, expr,
                     inserted_lookup.id, client, sender, mid);
    },
    // The `.await()` handlers that are added to this actor in
    // `request_query_map()` are running as soon as the current coroutine is
    // suspended, so in between the above handler and the "resume" handler
    // below. So the query map is filled with the responses from all the
    // selected partitions when we enter the function below.
    [=](atom::resume, vast::expression expr, uuid query_id, caf::actor client,
        caf::strong_actor_ptr sender, caf::message_id mid) {
      auto& st = self->state;
      // TODO: Can it happen that `st.pending[query_id]` was modified in between
      // the two steps?
      auto it = st.pending.find(query_id);
      if (it == st.pending.end()) {
        VAST_ERROR(self, "ignoring continuation for query", query_id,
                   "which doesnt exist");
        return;
      }
      auto& lookup = it->second;
      auto& pqm = lookup.pqm;
      // TODO: Does this still work after `delegate()`? Also, why exactly is it
      // necessary?
      auto respond = [&](auto&&... xs) {
        // auto sender = self->current_sender();
        // auto mid = self->current_message_id();
        unsafe_response(self, sender, {}, mid.response_id(),
                        std::forward<decltype(xs)>(xs)...);
      };
      if (pqm.empty()) {
        if (!lookup.partitions.empty()) {
          // None of the partitions of the first round produced an evaluation
          // triple, but there are still more to go.
          st.request_query_map(lookup, st.taste_partitions);
          self->delegate(caf::actor_cast<caf::actor>(self), atom::resume_v,
                         expr, lookup.id, client, sender, mid);
          return;
        }
        VAST_DEBUG(self, "returns without result: no partitions qualify");
        respond(uuid::nil(), uint32_t{0}, uint32_t{0});
        self->send(client, atom::done_v);
        return;
      }
      auto hits = pqm.size() + lookup.partitions.size();
      auto scheduling = std::min(taste_partitions, hits);
      // Notify the client that we don't have more hits.
      if (scheduling == hits)
        lookup.id = uuid::nil();
      respond(lookup.id, detail::narrow<uint32_t>(hits),
              detail::narrow<uint32_t>(scheduling));
      auto qm = st.launch_evaluators(pqm, expr);
      VAST_DEBUG(self, "scheduled", qm.size(), "/", hits,
                 "partitions for query", expr);
      // Delegate to query supervisor (uses up this worker) and report
      // query ID + some stats to the client.
      VAST_DEBUG(self, "has", st.idle_workers.size(), "idle workers");
      self->send(st.next_worker(), std::move(expr), std::move(qm), client);
      if (!st.worker_available())
        self->unbecome();
    },
    [=](const uuid& query_id, uint32_t num_partitions) {
      auto& st = self->state;
      // A zero as second argument means the client drops further results.
      if (num_partitions == 0) {
        VAST_DEBUG(self, "dropped remaining results for query ID", query_id);
        st.pending.erase(query_id);
        return;
      }
      // Sanity checks.
      if (self->current_sender() == nullptr) {
        VAST_ERROR(self, "got an anonymous query (ignored)");
        return;
      }
      auto client = caf::actor_cast<caf::actor>(self->current_sender());
      auto iter = st.pending.find(query_id);
      if (iter == st.pending.end()) {
        self->send(client, atom::done_v);
        return;
      }
      st.request_query_map(iter->second, num_partitions);
      self->delegate(caf::actor_cast<caf::actor>(self), atom::resume_v,
                     query_id, client);
    },
    // See also comment on the previous `atom::resume` handler above.
    [=](atom::resume, uuid query_id, caf::actor client) {
      auto& st = self->state;
      auto iter = st.pending.find(query_id);
      if (iter == st.pending.end()) {
        VAST_ERROR(self, "ignoring continuation for unknown query", query_id);
        self->send(client, atom::done_v);
        return;
      }
      auto& pqm = iter->second.pqm;
      if (pqm.empty()) {
        VAST_ASSERT(iter->second.partitions.empty());
        st.pending.erase(iter);
        VAST_DEBUG(self, "returns without result: no partitions qualify");
        self->send(client, atom::done_v);
        return;
      }
      auto qm = st.launch_evaluators(pqm, iter->second.expression);
      // Delegate to query supervisor (uses up this worker) and report
      // query ID + some stats to the client.
      VAST_DEBUG(self, "schedules", qm.size(), "more partition(s) for query",
                 iter->first, "with", iter->second.partitions.size(),
                 "remaining");
      self->send(st.next_worker(), iter->second.expression, std::move(qm),
                 client);
      // Cleanup if we exhausted all candidates.
      if (iter->second.partitions.empty())
        st.pending.erase(iter);
    },
    [=](atom::worker, caf::actor& worker) {
      self->state.idle_workers.emplace_back(std::move(worker));
    },
    [=](atom::done, [[maybe_unused]] uuid partition_id) {
      // Nothing to do.
      VAST_VERBOSE(self, "query for partition", partition_id, "is done");
    },
    [=](caf::stream<table_slice_ptr> in) {
      VAST_DEBUG(self, "got a new source");
      return self->state.stage->add_inbound_path(in);
    },
    [=](atom::status) -> caf::config_value::dictionary {
      return self->state.status();
    },
    [=](atom::subscribe, atom::flush, [[maybe_unused]] caf::actor& listener) {
      self->state.add_flush_listener(std::move(listener));
    });
  return {
    // The default behaviour
    [=](atom::worker, caf::actor& worker) {
      auto& st = self->state;
      st.idle_workers.emplace_back(std::move(worker));
      self->become(caf::keep_behavior, st.has_worker);
    },
    [=](atom::done, uuid partition_id) {
      VAST_VERBOSE(self, "query for partition", partition_id, "is done");
    },
    [=](caf::stream<table_slice_ptr> in) {
      VAST_DEBUG(self, "got a new source");
      return self->state.stage->add_inbound_path(in);
    },
    [=](accountant_type accountant) {
      namespace defs = defaults::system;
      self->state.accountant = std::move(accountant);
      // TODO: The index
    },
    [=](atom::status) -> caf::config_value::dictionary {
      return self->state.status();
    },
    [=](atom::subscribe, atom::flush, [[maybe_unused]] caf::actor& listener) {
      self->state.add_flush_listener(std::move(listener));
    },
  };
}

} // namespace v2

namespace {

auto make_index_stage(index_state* st) {
  using impl
    = detail::notifying_stream_manager<caf::stateful_actor<index_state>,
                                       indexer_stage_driver>;
  auto result = caf::make_counted<impl>(st->self, st->self);
  result->continuous(true);
  return result;
}

} // namespace

partition_ptr index_state::partition_factory::operator()(const uuid& id) const {
  // The factory must not get called for the active partition nor for
  // partitions that are currently unpersisted.
  VAST_ASSERT(st_->active == nullptr || id != st_->active->id());
  VAST_ASSERT(std::none_of(st_->unpersisted.begin(), st_->unpersisted.end(),
                           [&](auto& kvp) { return kvp.first->id() == id; }));
  // Load partition from disk.
  VAST_DEBUG(st_->self, "loads partition", id);
  auto result = std::make_unique<partition>(st_, id, st_->max_partition_size);
  if (auto err = result->init())
    VAST_ERROR(st_->self, "unable to load partition state from disk:", id);
  return result;
}

index_state::index_state(caf::stateful_actor<index_state>* self)
  : self(self),
    factory(spawn_indexer),
    lru_partitions(10, partition_lookup{}, partition_factory{this}) {
  // nop
}

index_state::~index_state() {
  VAST_VERBOSE(self, "tearing down");
  if (active != nullptr) {
    [[maybe_unused]] auto unregistered = stage->out().unregister(active.get());
    VAST_ASSERT(unregistered);
  }
  if (flush_on_destruction)
    flush_to_disk();
}

caf::error
index_state::init(const path& dir, size_t max_partition_size,
                  uint32_t in_mem_partitions, uint32_t taste_partitions) {
  VAST_TRACE(VAST_ARG(dir), VAST_ARG(max_partition_size),
             VAST_ARG(in_mem_partitions), VAST_ARG(taste_partitions));
  // This option must be kept in sync with vast/address_synopsis.hpp.
  put(meta_idx.factory_options(), "max-partition-size", max_partition_size);
  // Set members.
  this->dir = dir;
  this->max_partition_size = max_partition_size;
  this->lru_partitions.size(in_mem_partitions);
  this->taste_partitions = taste_partitions;
  this->flush_on_destruction = false;
  // Read persistent state.
  if (auto err = load_from_disk())
    return err;
  // Dont try to overwrite existing state on boot failure.
  this->flush_on_destruction = true;
  // Spin up the stream manager.
  stage = make_index_stage(this);
  return caf::none;
}

caf::error index_state::load_from_disk() {
  VAST_TRACE("");
  // Nothing to load is not an error.
  if (!exists(dir)) {
    VAST_DEBUG(self, "found no directory to load from");
    return caf::none;
  }
  if (auto fname = statistics_filename(); exists(fname)) {
    VAST_VERBOSE(self, "loads statistics from", fname);
    if (auto err = load(&self->system(), fname, stats)) {
      VAST_ERROR(self,
                 "failed to load statistics:", self->system().render(err));
      return err;
    }
    VAST_DEBUG(self, "loaded statistics");
  }
  if (auto fname = meta_index_filename(); exists(fname)) {
    VAST_VERBOSE(self, "loads meta index from", fname);
    auto buffer = io::read(fname);
    if (!buffer) {
      VAST_ERROR(self, "failed to read meta index file:",
                 self->system().render(buffer.error()));
      return buffer.error();
    }
    auto bytes = span<const byte>{*buffer};
    if (auto err = fbs::unwrap<fbs::MetaIndex>(bytes, meta_idx))
      return err;
    VAST_DEBUG(self, "loaded meta index");
  }
  return caf::none;
}

caf::error index_state::flush_meta_index() {
  VAST_VERBOSE(self, "writes meta index to", meta_index_filename());
  auto flatbuf = fbs::wrap(meta_idx, fbs::file_identifier);
  if (!flatbuf)
    return flatbuf.error();
  return io::save(meta_index_filename(), as_bytes(*flatbuf));
}

caf::error index_state::flush_statistics() {
  VAST_VERBOSE(self, "writes statistics to", statistics_filename());
  return save(&self->system(), statistics_filename(), stats);
}

caf::error index_state::flush_to_disk() {
  VAST_TRACE("");
  auto flush_all = [this]() -> caf::error {
    // Flush meta index to disk.
    if (auto err = flush_meta_index())
      return err;
    // Flush statistics to disk.
    if (auto err = flush_statistics())
      return err;
    // Flush active partition.
    if (active != nullptr)
      if (auto err = active->flush_to_disk())
        return err;
    // Flush all unpersisted partitions. This only writes the meta state of
    // each partition. For actually writing the contents of each INDEXER we
    // need to rely on messaging.
    for (auto& kvp : unpersisted)
      if (auto err = kvp.first->flush_to_disk())
        return err;
    return caf::none;
  };
  if (auto err = flush_all()) {
    VAST_ERROR(self, "failed to flush state:", self->system().render(err));
    return err;
  }
  return caf::none;
}

path index_state::statistics_filename() const {
  return dir / "statistics";
}

path index_state::meta_index_filename() const {
  return dir / "meta";
}

bool index_state::worker_available() {
  return !idle_workers.empty();
}

caf::actor index_state::next_worker() {
  auto result = std::move(idle_workers.back());
  idle_workers.pop_back();
  return result;
}

caf::dictionary<caf::config_value> index_state::status() const {
  using caf::put_dictionary;
  using caf::put_list;
  caf::dictionary<caf::config_value> result;
  // Misc parameters.
  result.emplace("meta-index-filename", meta_index_filename().str());
  // Statistics.
  auto& stats_object = put_dictionary(result, "statistics");
  auto& layout_object = put_dictionary(stats_object, "layouts");
  for (auto& [name, layout_stats] : stats.layouts) {
    auto xs = caf::dictionary<caf::config_value>{};
    xs.emplace("count", layout_stats.count);
    // We cannot use put_dictionary(layout_object, name) here, because this
    // function splits the key at '.', which occurs in every layout name.
    // Hence the fallback to low-level primitives.
    layout_object.insert_or_assign(name, std::move(xs));
  }
  // Resident partitions.
  auto& partitions = put_dictionary(result, "partitions");
  if (active != nullptr)
    partitions.emplace("active", to_string(active->id()));
  auto& cached = put_list(partitions, "cached");
  for (auto& part : lru_partitions.elements())
    cached.emplace_back(to_string(part->id()));
  auto& unpersisted = put_list(partitions, "unpersisted");
  for (auto& kvp : this->unpersisted)
    unpersisted.emplace_back(to_string(kvp.first->id()));
  // General state such as open streams.
  detail::fill_status_map(result, self);
  return result;
}

void index_state::reset_active_partition() {
  // Persist meta data and the state of all INDEXER actors when the active
  // partition gets replaced becomes full.
  if (active != nullptr) {
    [[maybe_unused]] auto unregistered = stage->out().unregister(active.get());
    VAST_ASSERT(unregistered);
    if (auto err = active->flush_to_disk())
      VAST_ERROR(self, "failed to persist active partition:", err);
    // Store this partition as unpersisted to make sure we're not attempting
    // to load it from disk until it is safe to do so.
    if (active_partition_indexers > 0)
      unpersisted.emplace_back(std::move(active), active_partition_indexers);
  }
  // Persist the current version of the meta_index and statistics to preserve
  // the state and be partially robust against crashes.
  if (auto err = flush_meta_index())
    VAST_ERROR(self, "failed to persist the meta index:", err);
  if (auto err = flush_statistics())
    VAST_ERROR(self, "failed to persist the statistics:", err);
  active = make_partition();
  stage->out().register_partition(active.get());
  active_partition_indexers = 0;
}

partition* index_state::get_or_add_partition(const table_slice_ptr& slice) {
  if (!active || active->capacity() < slice->rows())
    reset_active_partition();
  return active.get();
}

partition_ptr index_state::make_partition() {
  return make_partition(uuid::random());
}

partition_ptr index_state::make_partition(uuid id) {
  VAST_DEBUG(self, "starts a new partition:", id);
  return std::make_unique<partition>(this, std::move(id), max_partition_size);
}

caf::actor index_state::make_indexer(path filename, type column_type,
                                     uuid partition_id, std::string fqn) {
  VAST_TRACE(VAST_ARG(dir), VAST_ARG(column_type), VAST_ARG(index),
             VAST_ARG(partition_id));
  caf::settings index_opts;
  index_opts["cardinality"] = max_partition_size;
  return factory(self, self->state.accountant, std::move(filename),
                 std::move(column_type), std::move(index_opts), self,
                 partition_id, std::move(fqn));
}

void index_state::decrement_indexer_count(uuid partition_id) {
  if (partition_id == active->id())
    active_partition_indexers--;
  else {
    auto i
      = std::find_if(unpersisted.begin(), unpersisted.end(), [&](auto& kvp) {
          return kvp.first->id() == partition_id;
        });
    if (i == unpersisted.end())
      VAST_ERROR(self,
                 "received done from unknown indexer:", self->current_sender());
    if (--i->second == 0) {
      VAST_DEBUG(self, "successfully persisted", partition_id);
      unpersisted.erase(i);
    }
  }
}

partition* index_state::find_unpersisted(const uuid& id) {
  auto i = std::find_if(unpersisted.begin(), unpersisted.end(),
                        [&](auto& kvp) { return kvp.first->id() == id; });
  return i != unpersisted.end() ? i->first.get() : nullptr;
}

index_state::pending_query_map
index_state::build_query_map(lookup_state& lookup, uint32_t num_partitions) {
  VAST_TRACE(VAST_ARG(lookup), VAST_ARG(num_partitions));
  if (num_partitions == 0 || lookup.partitions.empty())
    return {};
  // Prefer partitions that are already available in RAM.
  std::partition(lookup.partitions.begin(), lookup.partitions.end(),
                 [&](const uuid& candidate) {
                   return (active != nullptr && active->id() == candidate)
                          || find_unpersisted(candidate) != nullptr
                          || lru_partitions.contains(candidate);
                 });
  // Maps partition IDs to the EVALUATOR actors we are going to spawn.
  pending_query_map result;
  // Helper function to spin up EVALUATOR actors for a single partition.
  auto spin_up = [&](const uuid& partition_id) {
    // We need to first check whether the ID is the active partition or one
    // of our unpersistet ones. Only then can we dispatch to our LRU cache.
    partition* part;
    if (active != nullptr && active->id() == partition_id)
      part = active.get();
    else if (auto ptr = find_unpersisted(partition_id); ptr != nullptr)
      part = ptr;
    else
      part = lru_partitions.get_or_add(partition_id).get();
    auto eval = part->eval(lookup.expr);
    if (eval.empty()) {
      VAST_DEBUG(self, "identified partition", partition_id,
                 "as candidate in the meta index, but it didn't produce an "
                 "evaluation map");
      return;
    }
    result.emplace(partition_id, std::move(eval));
  };
  // Loop over the candidate set until we either successfully scheduled
  // num_partitions partitions or run out of candidates.
  {
    auto i = lookup.partitions.begin();
    auto last = lookup.partitions.end();
    for (; i != last && result.size() < num_partitions; ++i)
      spin_up(*i);
    lookup.partitions.erase(lookup.partitions.begin(), i);
  }
  return result;
}

query_map
index_state::launch_evaluators(pending_query_map pqm, expression expr) {
  query_map result;
  for (auto& [id, eval] : pqm) {
    std::vector<caf::actor> xs{self->spawn(evaluator, expr, std::move(eval))};
    result.emplace(id, std::move(xs));
  }
  return result;
}

void index_state::add_flush_listener(caf::actor listener) {
  VAST_DEBUG(self, "adds a new 'flush' subscriber:", listener);
  flush_listeners.emplace_back(std::move(listener));
  detail::notify_listeners_if_clean(*this, *stage);
}

void index_state::notify_flush_listeners() {
  VAST_DEBUG(self, "sends 'flush' messages to", flush_listeners.size(),
             "listeners");
  for (auto& listener : flush_listeners)
    self->send(listener, atom::flush_v);
  flush_listeners.clear();
}

caf::behavior index(caf::stateful_actor<index_state>* self, const path& dir,
                    size_t max_partition_size, size_t in_mem_partitions,
                    size_t taste_partitions, size_t num_workers) {
  VAST_TRACE(VAST_ARG(dir), VAST_ARG(max_partition_size),
             VAST_ARG(in_mem_partitions), VAST_ARG(taste_partitions),
             VAST_ARG(num_workers));
  VAST_ASSERT(max_partition_size > 0);
  VAST_ASSERT(in_mem_partitions > 0);
  VAST_DEBUG(self, "spawned:", VAST_ARG(max_partition_size),
             VAST_ARG(in_mem_partitions), VAST_ARG(taste_partitions));
  if (auto err = self->state.init(dir, max_partition_size, in_mem_partitions,
                                  taste_partitions)) {
    self->quit(std::move(err));
    return {};
  }
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    VAST_DEBUG(self, "got EXIT from", msg.source);
    self->quit(msg.reason);
  });
  // Launch workers for resolving queries.
  for (size_t i = 0; i < num_workers; ++i)
    self->spawn(query_supervisor, self);
  // We switch between has_worker behavior and the default behavior (which
  // simply waits for a worker).
  self->set_default_handler(caf::skip);
  self->state.has_worker.assign(
    [=](expression& expr) {
      auto respond = [&](auto&&... xs) {
        auto mid = self->current_message_id();
        unsafe_response(self, self->current_sender(), {}, mid.response_id(),
                        std::forward<decltype(xs)>(xs)...);
      };
      // Sanity check.
      if (self->current_sender() == nullptr) {
        VAST_ERROR(self, "got an anonymous query (ignored)");
        respond(caf::sec::invalid_argument);
        return;
      }
      auto& st = self->state;
      auto client = caf::actor_cast<caf::actor>(self->current_sender());
      // Convenience function for dropping out without producing hits. Makes
      // sure that clients always receive a 'done' message.
      auto no_result = [&] {
        respond(uuid::nil(), uint32_t{0}, uint32_t{0});
        self->send(client, atom::done_v);
      };
      // Get all potentially matching partitions.
      auto candidates = st.meta_idx.lookup(expr);
      // Report no result if no candidates are found.
      if (candidates.empty()) {
        VAST_DEBUG(self, "returns without result: no partitions qualify");
        no_result();
        return;
      }
      // Allows the client to query further results after initial taste.
      auto query_id = uuid::random();
      auto lookup = index_state::lookup_state{expr, std::move(candidates)};
      auto pqm = st.build_query_map(lookup, st.taste_partitions);
      if (pqm.empty()) {
        VAST_ASSERT(lookup.partitions.empty());
        VAST_DEBUG(self, "returns without result: no partitions qualify");
        no_result();
        return;
      }
      auto hits = pqm.size() + lookup.partitions.size();
      auto scheduling = std::min(taste_partitions, hits);
      // Notify the client that we don't have more hits.
      if (scheduling == hits)
        query_id = uuid::nil();
      respond(query_id, detail::narrow<uint32_t>(hits),
              detail::narrow<uint32_t>(scheduling));
      auto qm = st.launch_evaluators(pqm, expr);
      VAST_DEBUG(self, "scheduled", qm.size(), "/", hits,
                 "partitions for query", expr);
      if (!lookup.partitions.empty()) {
        [[maybe_unused]] auto result
          = st.pending.emplace(query_id, std::move(lookup));
        VAST_ASSERT(result.second);
      }
      // Delegate to query supervisor (uses up this worker) and report
      // query ID + some stats to the client.
      self->send(st.next_worker(), std::move(expr), std::move(qm), client);
      if (!st.worker_available())
        self->unbecome();
    },
    [=](const uuid& query_id, uint32_t num_partitions) {
      auto& st = self->state;
      // A zero as second argument means the client drops further results.
      if (num_partitions == 0) {
        VAST_DEBUG(self, "dropped remaining results for query ID", query_id);
        st.pending.erase(query_id);
        return;
      }
      // Sanity checks.
      if (self->current_sender() == nullptr) {
        VAST_ERROR(self, "got an anonymous query (ignored)");
        return;
      }
      auto client = caf::actor_cast<caf::actor>(self->current_sender());
      auto iter = st.pending.find(query_id);
      if (iter == st.pending.end()) {
        VAST_WARNING(self, "got a request for unknown query ID", query_id);
        self->send(client, atom::done_v);
        return;
      }
      auto pqm = st.build_query_map(iter->second, num_partitions);
      if (pqm.empty()) {
        VAST_ASSERT(iter->second.partitions.empty());
        st.pending.erase(iter);
        VAST_DEBUG(self, "returns without result: no partitions qualify");
        self->send(client, atom::done_v);
        return;
      }
      auto qm = st.launch_evaluators(pqm, iter->second.expr);
      // Delegate to query supervisor (uses up this worker) and report
      // query ID + some stats to the client.
      VAST_DEBUG(self, "schedules", qm.size(), "more partition(s) for query",
                 iter->first, "with", iter->second.partitions.size(),
                 "remaining");
      self->send(st.next_worker(), iter->second.expr, std::move(qm), client);
      // Cleanup if we exhausted all candidates.
      if (iter->second.partitions.empty())
        st.pending.erase(iter);
    },
    [=](atom::worker, caf::actor& worker) {
      self->state.idle_workers.emplace_back(std::move(worker));
    },
    [=](atom::done, uuid partition_id) {
      self->state.decrement_indexer_count(partition_id);
    },
    [=](caf::stream<table_slice_ptr> in) {
      VAST_DEBUG(self, "got a new source");
      return self->state.stage->add_inbound_path(in);
    },
    [=](atom::status) -> caf::config_value::dictionary {
      return self->state.status();
    },
    [=](atom::subscribe, atom::flush, caf::actor& listener) {
      self->state.add_flush_listener(std::move(listener));
    });
  return {[=](atom::worker, caf::actor& worker) {
            auto& st = self->state;
            st.idle_workers.emplace_back(std::move(worker));
            self->become(caf::keep_behavior, st.has_worker);
          },
          [=](atom::done, uuid partition_id) {
            self->state.decrement_indexer_count(partition_id);
          },
          [=](caf::stream<table_slice_ptr> in) {
            VAST_DEBUG(self, "got a new source");
            return self->state.stage->add_inbound_path(in);
          },
          [=](accountant_type accountant) {
            namespace defs = defaults::system;
            self->state.accountant = std::move(accountant);
            self->send(self->state.accountant, atom::announce_v, "index");
            self->delayed_send(self, defs::telemetry_rate, atom::telemetry_v);
          },
          [=](atom::status) -> caf::config_value::dictionary {
            return self->state.status();
          },
          [=](atom::subscribe, atom::flush, caf::actor& listener) {
            self->state.add_flush_listener(std::move(listener));
          }};
}

} // namespace vast::system
