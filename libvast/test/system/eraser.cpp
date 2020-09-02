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

#define SUITE eraser

#include "vast/system/eraser.hpp"

#include "vast/test/fixtures/actor_system_and_events.hpp"
#include "vast/test/test.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/expression.hpp"
#include "vast/concept/parseable/vast/uuid.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/spawn_container_source.hpp"
#include "vast/error.hpp"
#include "vast/expression.hpp"
#include "vast/fwd.hpp"
#include "vast/ids.hpp"
#include "vast/system/index.hpp"
#include "vast/table_slice.hpp"

using namespace std::literals::chrono_literals;
using namespace vast;

namespace {

constexpr std::string_view uuid_str = "423b45a1-c217-4f99-ba43-9e3fc3285cd3";

constexpr size_t taste_count = 3;

template <class T>
T take_one(std::vector<T>& xs) {
  if (xs.empty())
    FAIL("cannot take from an empty list");
  auto result = std::move(xs.front());
  xs.erase(xs.begin());
  return result;
}

struct mock_index_state {
  static inline constexpr auto name = "mock-index";

  std::vector<ids> deltas;
};

caf::behavior mock_index(caf::stateful_actor<mock_index_state>* self) {
  return {
    [=](expression&) {
      auto& deltas = self->state.deltas;
      deltas = std::vector<ids>{
        make_ids({1, 3, 5}),    make_ids({7, 9, 11}),  make_ids({13, 15, 17}),
        make_ids({2, 4, 6}),    make_ids({8, 10, 12}), make_ids({14, 16, 18}),
        make_ids({19, 20, 21}),
      };
      auto query_id = unbox(to<uuid>(uuid_str));
      auto hdl = caf::actor_cast<caf::actor>(self->current_sender());
      self->send(hdl, query_id, uint32_t{7}, uint32_t{3});
      for (size_t i = 0; i < taste_count; ++i)
        self->send(hdl, take_one(deltas));
      self->send(hdl, atom::done_v);
    },
    [=](const uuid&, uint32_t n) {
      auto hdl = caf::actor_cast<caf::actor>(self->current_sender());
      for (size_t i = 0; i < n; ++i)
        self->send(hdl, take_one(self->state.deltas));
      self->send(hdl, atom::done_v);
    },
  };
}

struct mock_archive_state {
  ids hits;
  static inline constexpr const char* name = "mock-archive";
};

using mock_archive_actor = caf::stateful_actor<mock_archive_state>;

caf::behavior mock_archive(mock_archive_actor* self) {
  return {[=](atom::erase, ids hits) { self->state.hits = hits; }};
}

struct fixture : fixtures::deterministic_actor_system_and_events {
  fixture() : query_id(unbox(to<uuid>(uuid_str))) {
    archive = sys.spawn(mock_archive);
    sched.run();
  }

  ~fixture() override {
    self->send_exit(aut, caf::exit_reason::user_shutdown);
    self->send_exit(index, caf::exit_reason::user_shutdown);
  }

  // @pre index != nullptr
  void spawn_aut(std::string query = "#time < 1 week ago") {
    if (index == nullptr)
      FAIL("cannot start AUT without INDEX");
    aut = sys.spawn(vast::system::eraser, 6h, std::move(query), index, archive);
    sched.run();
  }

  uuid query_id;
  caf::actor index;
  caf::actor archive;
  caf::actor aut;
};

} // namespace

FIXTURE_SCOPE(eraser_tests, fixture)

TEST(eraser on mock INDEX) {
  index = sys.spawn(mock_index);
  spawn_aut();
  sched.trigger_timeouts();
  expect((atom::run), from(aut).to(aut));
  expect((expression), from(aut).to(index));
  expect((uuid, uint32_t, uint32_t),
         from(index).to(aut).with(query_id, 7u, 3u));
  expect((ids), from(index).to(aut));
  expect((ids), from(index).to(aut));
  expect((ids), from(index).to(aut));
  expect((atom::done), from(index).to(aut));
  expect((uuid, uint32_t), from(aut).to(index).with(query_id, 3u));
  expect((ids), from(index).to(aut));
  expect((ids), from(index).to(aut));
  expect((ids), from(index).to(aut));
  expect((atom::done), from(index).to(aut));
  expect((uuid, uint32_t), from(aut).to(index).with(query_id, 1u));
  expect((ids), from(index).to(aut));
  expect((atom::done), from(index).to(aut));
  expect((atom::erase, ids),
         from(aut).to(archive).with(_, make_ids({{1, 22}})));
}

TEST(eraser on actual INDEX with Zeek conn logs) {
  auto slices = take(zeek_conn_log_full, 4);
  MESSAGE("spawn INDEX ingest 4 slices with 100 rows (= 1 partition) each");
  index = self->spawn(system::index, directory / "index",
                      defaults::import::table_slice_size, 100, taste_count, 1);
  detail::spawn_container_source(sys, std::move(slices), index);
  run();
  // Predicate for running all actors *except* aut.
  auto not_aut = [&](caf::resumable* ptr) { return ptr != &deref(aut); };
  MESSAGE("spawn and run ERASER for query ':addr == 192.168.1.104'");
  spawn_aut(":addr == 192.168.1.104");
  sched.trigger_timeouts();
  expect((atom::run), from(aut).to(aut));
  expect((expression), from(aut).to(index));
  expect((uuid, uint32_t, uint32_t), from(index).to(aut).with(_, 4u, 3u));
  sched.run_jobs_filtered(not_aut);
  while (allow((ids), from(_).to(aut)))
    ; // repeat
  expect((atom::done), from(_).to(aut));
  expect((uuid, uint32_t), from(aut).to(index).with(_, 1u));
  sched.run_jobs_filtered(not_aut);
  while (allow((ids), from(_).to(aut)))
    ; // repeat
  expect((atom::done), from(_).to(aut));
  expect((atom::erase, ids), from(aut).to(archive));
  REQUIRE(!sched.has_job());
  // The magic number 133 was computed via:
  // bro-cut < libvast_test/artifacts/logs/zeek/conn.log
  //   | head -n 400
  //   | grep 192.168.1.104
  //   | wc -l
  CHECK_EQUAL(rank(deref<mock_archive_actor>(archive).state.hits), 133u);
}

FIXTURE_SCOPE_END()
