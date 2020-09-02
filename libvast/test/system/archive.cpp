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

#include "vast/system/archive.hpp"

#include "vast/concept/printable/stream.hpp"
#include "vast/detail/spawn_container_source.hpp"
#include "vast/ids.hpp"
#include "vast/table_slice.hpp"

#define SUITE archive
#include "vast/test/fixtures/actor_system_and_events.hpp"
#include "vast/test/test.hpp"

using namespace caf;
using namespace vast;

namespace {

struct fixture : fixtures::deterministic_actor_system_and_events {
  system::archive_type a;

  fixture() {
    a = self->spawn(system::archive, directory, 10, 1024 * 1024);
    self->send(a, atom::exporter_v, self);
  }

  void push_to_archive(std::vector<table_slice_ptr> xs) {
    vast::detail::spawn_container_source(sys, std::move(xs), a);
    run();
  }

  std::vector<table_slice_ptr> query(const ids& ids) {
    bool done = false;
    std::vector<table_slice_ptr> result;
    self->send(a, ids);
    run();
    self
      ->do_receive(
        [&](vast::atom::done, const caf::error& err) {
          REQUIRE(!err);
          done = true;
        },
        [&](table_slice_ptr slice) { result.push_back(std::move(slice)); })
      .until(done);
    return result;
  }

  std::vector<table_slice_ptr> query(std::initializer_list<id_range> ranges) {
    return query(make_ids(ranges));
  }
};

} // namespace

FIXTURE_SCOPE(archive_tests, fixture)

TEST(zeek conn logs slices) {
  push_to_archive(zeek_conn_log);
  auto result = query({{10, 15}});
  CHECK_EQUAL(rows(result), 5u);
}

TEST(archiving and querying) {
  MESSAGE("import Zeek conn logs to archive");
  push_to_archive(zeek_conn_log);
  MESSAGE("import Zeek DNS logs to archive");
  push_to_archive(zeek_dns_log);
  MESSAGE("import Zeek HTTP logs to archive");
  push_to_archive(zeek_http_log);
  MESSAGE("query events");
  // conn.log = [0, 20)
  // dns.log  = [20, 52)
  // http.log = [1052, 1092)
  auto result = query(make_ids({{24, 56}, {1076, 1096}}));
  REQUIRE_EQUAL(rows(result), (52u - 24) + (1092 - 1076));
  // ID 20 is the first entry in the dns.log; then add 4 more.
  CHECK_EQUAL(result[0]->at(3, 1), make_data_view("JoNZFZc3lJb"));
  // ID 1052 is the first entry in the http.log; then add 4 more.
  auto last = result[result.size() - 1];
  CHECK_EQUAL(last->at(last->rows() - 1, 1), make_data_view("rydI6puScNa"));
  self->send_exit(a, exit_reason::user_shutdown);
}

FIXTURE_SCOPE_END()
