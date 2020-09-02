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

#define SUITE importer

#include "vast/system/importer.hpp"

#include "vast/test/fixtures/actor_system_and_events.hpp"
#include "vast/test/test.hpp"

#include "vast/caf_table_slice_builder.hpp"
#include "vast/concept/printable/stream.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/make_io_stream.hpp"
#include "vast/detail/spawn_container_source.hpp"
#include "vast/format/zeek.hpp"
#include "vast/system/archive.hpp"
#include "vast/system/source.hpp"
#include "vast/system/type_registry.hpp"
#include "vast/table_slice.hpp"

using namespace caf;
using namespace vast;

// -- scaffold for both test setups --------------------------------------------

namespace {

behavior dummy_sink(event_based_actor* self, size_t num_events, actor overseer) {
  auto count_events = [](auto& xs) {
    size_t result = 0;
    for (auto& x : xs)
      result += x->rows();
    return result;
  };
  return {
    [=](stream<table_slice_ptr> in) {
      self->unbecome();
      self->send(overseer, atom::ok_v);
      self->make_sink(
        in,
        [=](std::vector<table_slice_ptr>&) {
          // nop
        },
        [=](std::vector<table_slice_ptr>& xs, table_slice_ptr x) {
          xs.emplace_back(std::move(x));
          auto num_received = count_events(xs);
          if (num_received == num_events)
            self->send(overseer, xs);
          else if (num_received > num_events)
            FAIL("dummy sink received too many events");
        });
    }
  };
}

template <class Base>
struct importer_fixture : Base {
  importer_fixture(size_t table_slice_size) : slice_size(table_slice_size) {
    MESSAGE("spawn importer");
    this->directory /= "importer";
    using vast::system::archive_type;
    using vast::system::type_registry_type;
    importer
      = this->self->spawn(system::importer, this->directory, archive_type{},
                          caf::actor{}, type_registry_type{});
  }

  ~importer_fixture() {
    this->self->send_exit(importer, exit_reason::user_shutdown);
  }

  auto make_sink() {
    return this->self->spawn(dummy_sink, this->zeek_conn_log.size(), this->self);
  }

  auto add_sink() {
    auto snk = make_sink();
    anon_send(importer, atom::add_v, snk);
    fetch_ok();
    return snk;
  }

  virtual void fetch_ok() = 0;

  auto make_source() {
    return vast::detail::spawn_container_source(this->self->system(),
                                                this->zeek_conn_log, importer);
  }

  auto make_zeek_source() {
    namespace bf = format::zeek;
    auto stream = unbox(
      vast::detail::make_input_stream(artifacts::logs::zeek::small_conn));
    bf::reader reader{vast::defaults::import::table_slice_type, caf::settings{},
                      std::move(stream)};
    return this->self->spawn(system::source<bf::reader>, std::move(reader),
                             slice_size, caf::none,
                             vast::system::type_registry_type{}, vast::schema{},
                             std::string{}, vast::system::accountant_type{});
  }

  // Checks whether two event buffers are equal.
  void verify(const std::vector<table_slice_ptr>& result,
              const std::vector<table_slice_ptr>& reference) {
    REQUIRE_EQUAL(result.size(), reference.size());
    for (size_t i = 0; i < result.size(); ++i)
      if (*result[i] != *reference[i])
        FAIL("result differs from reference at index " << i);
  }

  size_t slice_size;
  actor importer;
};

} // namespace <anonymous>

// -- deterministic testing ----------------------------------------------------

namespace {

using deterministic_fixture_base
  = importer_fixture<fixtures::deterministic_actor_system_and_events>;

struct deterministic_fixture : deterministic_fixture_base {
  deterministic_fixture() : deterministic_fixture_base(100u) {
    MESSAGE("run initialization code");
    run();
  }

  void fetch_ok() override {
    run();
    expect((atom_value), from(_).to(self).with(atom::ok::value));
  }

  auto fetch_result() {
    if (!received<std::vector<table_slice_ptr>>(self))
      FAIL("no result available");
    std::vector<table_slice_ptr> result;
    self->receive(
      [&](std::vector<table_slice_ptr>& xs) { result = std::move(xs); });
    return result;
  }
};

} // namespace <anonymous>

FIXTURE_SCOPE(deterministic_import_tests, deterministic_fixture)

TEST(deterministic importer with one sink) {
  MESSAGE("connect sink to importer");
  add_sink();
  MESSAGE("spawn dummy source");
  make_source();
  consume_message();
  MESSAGE("loop until importer becomes idle");
  run();
  MESSAGE("verify results");
  verify(fetch_result(), zeek_conn_log);
}

TEST(deterministic importer with two sinks) {
  MESSAGE("connect two sinks to importer");
  add_sink();
  add_sink();
  run();
  MESSAGE("spawn dummy source");
  make_source();
  consume_message();
  MESSAGE("loop until importer becomes idle");
  run();
  MESSAGE("verify results");
  auto result = fetch_result();
  auto second_result = fetch_result();
  CHECK_EQUAL(result, second_result);
  verify(result, zeek_conn_log);
}

TEST(deterministic importer with one sink and zeek source) {
  MESSAGE("connect sink to importer");
  add_sink();
  MESSAGE("spawn zeek source");
  auto src = make_zeek_source();
  consume_message();
  self->send(src, atom::sink_v, importer);
  MESSAGE("loop until importer becomes idle");
  run();
  MESSAGE("verify results");
  verify(fetch_result(), zeek_conn_log);
}

TEST(deterministic importer with two sinks and zeek source) {
  MESSAGE("connect sinks to importer");
  add_sink();
  add_sink();
  MESSAGE("spawn zeek source");
  auto src = make_zeek_source();
  consume_message();
  self->send(src, atom::sink_v, importer);
  MESSAGE("loop until importer becomes idle");
  run();
  MESSAGE("verify results");
  auto result = fetch_result();
  auto second_result = fetch_result();
  CHECK_EQUAL(result, second_result);
  verify(result, zeek_conn_log);
}

TEST(deterministic importer with one sink and failing zeek source) {
  MESSAGE("connect sink to importer");
  auto snk = add_sink();
  MESSAGE("spawn zeek source");
  auto src = make_zeek_source();
  consume_message();
  self->send(src, atom::sink_v, importer);
  MESSAGE("loop until first ack_batch");
  if (!allow((upstream_msg::ack_batch), from(importer).to(src)))
    sched.run_once();
  MESSAGE("kill the source");
  self->send_exit(src, exit_reason::kill);
  expect((exit_msg), from(self).to(src));
  MESSAGE("loop until we see the forced_close");
  if (!allow((downstream_msg::forced_close), from(src).to(importer)))
    sched.run_once();
  MESSAGE("make sure importer and sink remain unaffected");
  self->monitor(snk);
  self->monitor(importer);
  do {
    disallow((downstream_msg::forced_close), from(importer).to(snk));
  } while (sched.try_run_once());
  using namespace std::chrono_literals;
  self->receive(
    [](const down_msg& x) {
      FAIL("unexpected down message: " << x);
    },
    after(0s) >> [] {
      // nop
    }
  );
}

FIXTURE_SCOPE_END()

// -- nondeterministic testing -------------------------------------------------

namespace {

using nondeterministic_fixture_base
  = importer_fixture<fixtures::actor_system_and_events>;

struct nondeterministic_fixture : nondeterministic_fixture_base {
  nondeterministic_fixture()
    : nondeterministic_fixture_base(vast::defaults::import::table_slice_size) {
    // nop
  }

  void fetch_ok() override {
    self->receive([](atom::ok) {
      // nop
    });
  }

  auto fetch_result() {
    std::vector<table_slice_ptr> result;
    self->receive(
      [&](std::vector<table_slice_ptr>& xs) { result = std::move(xs); });
    return result;
  }
};

} // namespace <anonymous>

FIXTURE_SCOPE(nondeterministic_import_tests, nondeterministic_fixture)

TEST(nondeterministic importer with one sink) {
  MESSAGE("connect sink to importer");
  add_sink();
  MESSAGE("spawn dummy source");
  make_source();
  MESSAGE("verify results");
  verify(fetch_result(), zeek_conn_log);
}

TEST(nondeterministic importer with two sinks) {
  MESSAGE("connect two sinks to importer");
  add_sink();
  add_sink();
  MESSAGE("spawn dummy source");
  make_source();
  MESSAGE("verify results");
  auto result = fetch_result();
  MESSAGE("got first result");
  auto second_result = fetch_result();
  MESSAGE("got second result");
  CHECK_EQUAL(result, second_result);
  verify(result, zeek_conn_log);
}

TEST(nondeterministic importer with one sink and zeek source) {
  MESSAGE("connect sink to importer");
  add_sink();
  MESSAGE("spawn zeek source");
  auto src = make_zeek_source();
  self->send(src, atom::sink_v, importer);
  MESSAGE("verify results");
  verify(fetch_result(), zeek_conn_log);
}

TEST(nondeterministic importer with two sinks and zeek source) {
  MESSAGE("connect sinks to importer");
  add_sink();
  add_sink();
  MESSAGE("spawn zeek source");
  auto src = make_zeek_source();
  self->send(src, atom::sink_v, importer);
  MESSAGE("verify results");
  auto result = fetch_result();
  MESSAGE("got first result");
  auto second_result = fetch_result();
  MESSAGE("got second result");
  CHECK_EQUAL(result, second_result);
  verify(result, zeek_conn_log);
}

FIXTURE_SCOPE_END()
