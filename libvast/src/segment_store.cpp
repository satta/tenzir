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

#include "vast/segment_store.hpp"

#include "vast/bitmap_algorithms.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/error.hpp"
#include "vast/concept/printable/vast/filesystem.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/error.hpp"
#include "vast/fbs/segment.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/segment_store.hpp"
#include "vast/table_slice.hpp"

#include <caf/config_value.hpp>
#include <caf/dictionary.hpp>
#include <caf/settings.hpp>

namespace vast {

// TODO: return expected<segment_store_ptr> for better error propagation.
segment_store_ptr segment_store::make(path dir, size_t max_segment_size,
                                      size_t in_memory_segments) {
  VAST_TRACE(VAST_ARG(dir), VAST_ARG(max_segment_size),
             VAST_ARG(in_memory_segments));
  VAST_ASSERT(max_segment_size > 0);
  auto result = segment_store_ptr{
    new segment_store{std::move(dir), max_segment_size, in_memory_segments}};
  if (auto err = result->register_segments())
    return nullptr;
  return result;
}

segment_store::segment_store(path dir, uint64_t max_segment_size,
                             size_t in_memory_segments)
  : dir_{std::move(dir)},
    max_segment_size_{max_segment_size},
    cache_{in_memory_segments} {
  // nop
}

segment_store::~segment_store() {
  // nop
}

caf::error segment_store::put(table_slice_ptr xs) {
  VAST_TRACE(VAST_ARG(xs));
  VAST_DEBUG(this, "adds a table slice");
  if (auto error = builder_.add(xs))
    return error;
  if (!segments_.inject(xs->offset(), xs->offset() + xs->rows(), builder_.id()))
    return make_error(ec::unspecified, "failed to update range_map");
  num_events_ += xs->rows();
  if (builder_.table_slice_bytes() < max_segment_size_)
    return caf::none;
  // We have exceeded our maximum segment size and now finish.
  return flush();
}

std::unique_ptr<store::lookup> segment_store::extract(const ids& xs) const {
  class lookup : public store::lookup {
  public:
    using uuid_iterator = std::vector<uuid>::iterator;

    lookup(const segment_store& store, ids xs, std::vector<uuid>&& candidates)
      : store_{store}, xs_{std::move(xs)}, candidates_{std::move(candidates)} {
      // nop
    }

    caf::expected<table_slice_ptr> next() override {
      // Update the buffer if it has been consumed or the previous
      // refresh return an error.
      while (!buffer_ || it_ == buffer_->end()) {
        buffer_ = handle_segment();
        if (!buffer_)
          // Either an error occurred, or the list of candidates is exhausted.
          return buffer_.error();
        it_ = buffer_->begin();
      }
      return *it_++;
    }

  private:
    caf::expected<std::vector<table_slice_ptr>> handle_segment() {
      if (first_ == candidates_.end())
        return caf::no_error;
      auto& cand = *first_++;
      if (cand == store_.builder_.id()) {
        VAST_DEBUG(this, "looks into the active segement", cand);
        return store_.builder_.lookup(xs_);
      }
      auto i = store_.cache_.find(cand);
      if (i != store_.cache_.end()) {
        VAST_DEBUG(this, "got cache hit for segment", cand);
        return i->second.lookup(xs_);
      }
      VAST_DEBUG(this, "got cache miss for segment", cand);
      auto s = store_.load_segment(cand);
      if (!s)
        return s.error();
      store_.cache_.emplace(cand, *s);
      return s->lookup(xs_);
    }

    const segment_store& store_;
    ids xs_;
    std::vector<uuid> candidates_;
    uuid_iterator first_ = candidates_.begin();
    caf::expected<std::vector<table_slice_ptr>> buffer_{caf::no_error};
    std::vector<table_slice_ptr>::iterator it_;
  };

  VAST_TRACE(VAST_ARG(xs));
  // Collect candidate segments by seeking through the ID set and
  // probing each ID interval.
  std::vector<uuid> candidates;
  if (auto err = select_segments(xs, candidates)) {
    VAST_WARNING(this, "failed to get candidates for ids", xs);
    return nullptr;
  }
  VAST_DEBUG(this, "processes", candidates.size(), "candidates");
  std::partition(candidates.begin(), candidates.end(), [&](const auto& id) {
    return id == builder_.id() || cache_.find(id) != cache_.end();
  });
  return std::make_unique<lookup>(*this, std::move(xs), std::move(candidates));
}

caf::error segment_store::erase(const ids& xs) {
  VAST_TRACE(VAST_ARG(xs));
  // Get affected segments.
  std::vector<uuid> candidates;
  if (auto err = select_segments(xs, candidates))
    return err;
  if (candidates.empty())
    return caf::none;
  auto is_subset_of_xs = [&](const ids& ys) { return is_subset(ys, xs); };
  // Counts number of total erased events for user-facing output.
  uint64_t erased_events = 0;
  // Implements the body of the for-loop below. This lambda must be generic,
  // because the argument is either a `segment` or a `segment_builder`. This
  // algorithm removes all events with IDs in `xs` from a segment. For existing
  // segments, we create a new segment that contains all table slices that
  // remain after erasing `xs` from the input segment. For builders, we update
  // the builder directly by replacing the set of table slices. In any case, we
  // have to update `segments_` to point to the new segment ID.
  auto impl = [&](auto& seg) {
    auto segment_id = seg.id();
    // Get all slices in the segment and generate a new segment that contains
    // only what's left after dropping the selection.
    auto segment_ids = seg.ids();
    // Check whether we can drop the entire segment.
    if (is_subset_of_xs(segment_ids)) {
      erased_events += drop(seg);
      return;
    }
    std::vector<table_slice_ptr> slices;
    if (auto maybe_slices = seg.lookup(segment_ids)) {
      slices = std::move(*maybe_slices);
      if (slices.empty()) {
        VAST_WARNING(this, "got no slices after lookup for segment", segment_id,
                     "=> erases entire segment!");
        erased_events += drop(seg);
        return;
      }
    } else {
      VAST_WARNING(this, "was unable to get table slice for segment",
                   segment_id, "=> erases entire segment!");
      erased_events += drop(seg);
      return;
    }
    VAST_ASSERT(slices.size() > 0);
    // We have IDs we wish to delete in `xs`, but we need a bitmap of what to
    // keep for `select` in order to fill `new_slices` with the table slices
    // that remain after dropping all deleted IDs from the segment.
    auto keep_mask = ~xs;
    std::vector<table_slice_ptr> new_slices;
    for (auto& slice : slices) {
      // Expand keep_mask on-the-fly if needed.
      auto max_id = slice->offset() + slice->rows();
      if (keep_mask.size() < max_id)
        keep_mask.append_bits(true, max_id - keep_mask.size());
      size_t new_slices_size_before = new_slices.size();
      select(new_slices, slice, keep_mask);
      size_t remaining_rows = 0;
      for (size_t i = new_slices_size_before; i < new_slices.size(); ++i)
        remaining_rows += new_slices[i]->rows();
      erased_events += slice->rows() - remaining_rows;
    }
    if (new_slices.empty()) {
      VAST_WARNING(this, "was unable to generate any new slice for segment",
                   segment_id, "=> erases entire segment!");
      erased_events += drop(seg);
      return;
    }
    VAST_DEBUG(this, "shrinks segment", segment_id, "from", slices.size(), "to",
               new_slices.size(), "slices");
    // Remove stale state.
    segments_.erase_value(segment_id);
    // Create a new segment from the remaining slices.
    segment_builder tmp_builder;
    segment_builder* builder = &tmp_builder;
    if constexpr (std::is_same_v<decltype(seg), segment_builder&>) {
      // If `update` got called with a builder then we simply use that by
      // resetting it and filling it with new content. Otherwise, we fill
      // `tmp_builder` instead and replace the the segment `seg` in the next
      // `if constexpr` block.
      seg.reset();
      builder = &seg;
    }
    for (auto& slice : new_slices) {
      if (auto err = builder->add(slice)) {
        VAST_ERROR(this, "failed to add slice to builder:", err);
      } else if (!segments_.inject(slice->offset(),
                                   slice->offset() + slice->rows(),
                                   builder->id()))
        VAST_ERROR(this, "failed to update range_map");
    }
    // Flush the new segment and remove the previous segment.
    if constexpr (std::is_same_v<decltype(seg), segment&>) {
      auto new_segment = builder->finish();
      auto filename = segment_path() / to_string(new_segment.id());
      if (auto err = write(filename, new_segment.chunk()))
        VAST_ERROR(this, "failed to persist the new segment");
      auto stale_filename = segment_path() / to_string(segment_id);
      // Schedule deletion of the segment file when releasing the chunk.
      seg.chunk()->add_deletion_step([=] { rm(stale_filename); });
    }
    // else: nothing to do, since we can continue filling the active segment.
  };
  // Iterate affected segments.
  for (auto& candidate : candidates) {
    auto j = cache_.find(candidate);
    if (j != cache_.end()) {
      VAST_DEBUG(this, "erases from the cached segement", candidate);
      impl(j->second);
      cache_.erase(j);
    } else if (candidate == builder_.id()) {
      VAST_DEBUG(this, "erases from the active segement", candidate);
      impl(builder_);
    } else if (auto s = load_segment(candidate)) {
      VAST_DEBUG(this, "erases from the segement", candidate);
      impl(*s);
    }
  }
  if (erased_events > 0) {
    VAST_ASSERT(erased_events <= num_events_);
    num_events_ -= erased_events;
    VAST_INFO(this, "erased", erased_events, "events");
  }
  return caf::none;
}

caf::expected<std::vector<table_slice_ptr>> segment_store::get(const ids& xs) {
  VAST_TRACE(VAST_ARG(xs));
  // Collect candidate segments by seeking through the ID set and
  // probing each ID interval.
  std::vector<uuid> candidates;
  if (auto err = select_segments(xs, candidates))
    return err;
  // Process candidates in reverse order for maximum LRU cache hits.
  std::vector<table_slice_ptr> result;
  VAST_DEBUG(this, "processes", candidates.size(), "candidates");
  std::partition(candidates.begin(), candidates.end(), [&](const auto& id) {
    return id == builder_.id() || cache_.find(id) != cache_.end();
  });
  for (auto cand = candidates.begin(); cand != candidates.end(); ++cand) {
    auto& id = *cand;
    caf::expected<std::vector<table_slice_ptr>> slices{caf::no_error};
    if (id == builder_.id()) {
      VAST_DEBUG(this, "looks into the active segement", id);
      slices = builder_.lookup(xs);
    } else {
      auto i = cache_.find(id);
      if (i == cache_.end()) {
        VAST_DEBUG(this, "got cache miss for segment", id);
        auto x = load_segment(id);
        if (!x)
          return x.error();
        i = cache_.emplace(id, std::move(*x)).first;
      } else {
        VAST_DEBUG(this, "got cache hit for segment", id);
      }
      VAST_DEBUG(this, "looks into segment", id);
      slices = i->second.lookup(xs);
    }
    if (!slices)
      return slices.error();
    result.reserve(result.size() + slices->size());
    result.insert(result.end(), slices->begin(), slices->end());
  }
  return result;
}

caf::error segment_store::flush() {
  if (!dirty())
    return caf::none;
  VAST_DEBUG(this, "finishes current builder");
  auto seg = builder_.finish();
  auto filename = segment_path() / to_string(seg.id());
  if (auto err = write(filename, seg.chunk()))
    return err;
  // Keep new segment in the cache.
  cache_.emplace(seg.id(), seg);
  VAST_DEBUG(this, "wrote new segment to", filename.trim(-3));
  return caf::none;
}

void segment_store::inspect_status(caf::settings& dict) {
  using caf::put;
  put(dict, "segment-path", segment_path().str());
  put(dict, "max-segment-size", max_segment_size_);
  put(dict, "num-events", num_events_);
  // Note: `for (auto& kvp : segments_)` does not compile.
  // FIXME: This is too slow for large archives and blocks the node.
  // auto& segments = put_dictionary(dict, "segments");
  // for (auto i = segments_.begin(); i != segments_.end(); ++i) {
  //   std::string range = "[";
  //   range += std::to_string(i->left);
  //   range += ", ";
  //   range += std::to_string(i->right);
  //   range += ")";
  //   put(segments, range, to_string(i->value));
  // }
  auto& cached = put_list(dict, "cached");
  for (auto& kvp : cache_)
    cached.emplace_back(to_string(kvp.first));
  auto& current = put_dictionary(dict, "current-segment");
  put(current, "id", to_string(builder_.id()));
  put(current, "size", builder_.table_slice_bytes());
}

caf::error segment_store::register_segments() {
  for (auto filename : directory{segment_path()})
    if (auto err = register_segment(filename))
      return err;
  return caf::none;
}

caf::error segment_store::register_segment(const path& filename) {
  auto chk = chunk::mmap(filename);
  if (!chk)
    return make_error(ec::filesystem_error, "failed to mmap chunk", filename);
  auto s = fbs::as_flatbuffer<fbs::Segment>(as_bytes(chk));
  if (s == nullptr)
    return make_error(ec::format_error, "segment integrity check failed");
  num_events_ += s->events();
  auto segment_uuid = uuid{fbs::as_bytes<16>(*s->uuid())};
  VAST_DEBUG(this, "found segment", segment_uuid);
  for (auto interval : *s->ids())
    if (!segments_.inject(interval->begin(), interval->end(), segment_uuid))
      return make_error(ec::unspecified, "failed to update range_map");
  return caf::none;
}

caf::expected<segment> segment_store::load_segment(uuid id) const {
  auto filename = segment_path() / to_string(id);
  VAST_DEBUG(this, "mmaps segment from", filename);
  auto chk = chunk::mmap(filename);
  if (!chk)
    return make_error(ec::filesystem_error, "failed to mmap chunk", filename);
  return segment::make(std::move(chk));
}

caf::error segment_store::select_segments(const ids& selection,
                                          std::vector<uuid>& candidates) const {
  VAST_DEBUG(this, "retrieves table slices with requested ids");
  auto f = [](auto x) { return std::pair{x.left, x.right}; };
  auto g = [&](auto x) {
    auto id = x.value;
    if (candidates.empty() || candidates.back() != id)
      candidates.push_back(id);
    return caf::none;
  };
  auto begin = segments_.begin();
  auto end = segments_.end();
  return select_with(selection, begin, end, f, g);
}

uint64_t segment_store::drop(segment& x) {
  uint64_t erased_events = 0;
  auto segment_id = x.id();
  // TODO: discuss whether we want to allow accessing a segment through the
  // flatbuffers API. The (heavy-weight) altnerative here would be to create a
  // custom iterator so that a segment can be iterated as a list of table_slice
  // instances.
  for (auto buffer : *fbs::GetSegment(x.chunk()->data())->slices())
    erased_events += buffer->data_nested_root()->rows();
  VAST_INFO(this, "erases entire segment", segment_id);
  // Schedule deletion of the segment file when releasing the chunk.
  auto filename = segment_path() / to_string(segment_id);
  x.chunk()->add_deletion_step([=] { rm(filename); });
  segments_.erase_value(segment_id);
  return erased_events;
}

uint64_t segment_store::drop(segment_builder& x) {
  uint64_t erased_events = 0;
  auto segment_id = x.id();
  for (auto& slice : x.table_slices())
    erased_events += slice->rows();
  VAST_INFO(this, "erases segment under construction", segment_id);
  x.reset();
  segments_.erase_value(segment_id);
  return erased_events;
}

} // namespace vast
