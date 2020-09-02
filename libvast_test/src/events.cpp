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

#include "fixtures/events.hpp"

#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/data.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/format/test.hpp"
#include "vast/format/zeek.hpp"
#include "vast/msgpack_table_slice_builder.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/table_slice_builder_factory.hpp"
#include "vast/table_slice_factory.hpp"
#include "vast/type.hpp"

#include <caf/binary_deserializer.hpp>
#include <caf/settings.hpp>

// Pull in the auto-generated serialized table slices.

namespace artifacts::logs::zeek {

extern char conn_buf[];

extern size_t conn_buf_size;

} // namespace artifacts::logs::zeek

namespace fixtures {

namespace {

struct ascending {};
struct alternating {};

template <class Policy>
std::vector<table_slice_ptr> make_integers(size_t count) {
  auto layout = record_type{{"value", integer_type{}}}.name("test.int");
  auto builder = msgpack_table_slice_builder::make(layout);
  VAST_ASSERT(builder != nullptr);
  std::vector<table_slice_ptr> result;
  result.reserve(count);
  for (size_t i = 0; i < count; ++i) {
    integer x;
    if constexpr (std::is_same_v<Policy, ascending>)
      x = i;
    else if constexpr (std::is_same_v<Policy, alternating>)
      x = i % 2;
    else
      static_assert(detail::always_false_v<Policy>, "invalid policy");
    if (!builder->add(x))
      FAIL("could not add data to builder at row" << i);
    if (i % events::slice_size == 0)
      result.push_back(builder->finish());
  }
  VAST_ASSERT(!result.empty());
  return result;
}

template <class Reader>
std::vector<table_slice_ptr>
extract(Reader&& reader, table_slice::size_type slice_size) {
  std::vector<table_slice_ptr> result;
  auto add_slice
    = [&](table_slice_ptr ptr) { result.emplace_back(std::move(ptr)); };
  auto [err, produced]
    = reader.read(std::numeric_limits<size_t>::max(), slice_size, add_slice);
  if (err && err != ec::end_of_input)
    FAIL("reader returned an error: " << to_string(err));
  return result;
}

template <class Reader>
std::vector<table_slice_ptr>
inhale(const char* filename, table_slice::size_type slice_size) {
  auto input = std::make_unique<std::ifstream>(filename);
  Reader reader{defaults::import::table_slice_type, caf::settings{},
                std::move(input)};
  return extract(reader, slice_size);
}

} // namespace

std::vector<table_slice_ptr> events::zeek_conn_log;
std::vector<table_slice_ptr> events::zeek_conn_log_full;
std::vector<table_slice_ptr> events::zeek_dns_log;
std::vector<table_slice_ptr> events::zeek_http_log;
std::vector<table_slice_ptr> events::random;
std::vector<table_slice_ptr> events::ascending_integers;
std::vector<table_slice_ptr> events::alternating_integers;

events::events() {
  // Only read initialize the fixture data once per process.
  static bool initialized = false;
  if (initialized)
    return;
  factory<table_slice>::initialize();
  factory<table_slice_builder>::initialize();
  initialized = true;
  // Ingest the log data.
  MESSAGE("inhaling unit test suite events");
  zeek_conn_log = inhale<format::zeek::reader>(
    artifacts::logs::zeek::small_conn, slice_size);
  REQUIRE_EQUAL(rows(zeek_conn_log), 20u);
  CHECK_EQUAL(zeek_conn_log[0]->layout().name(), "zeek.conn");
  zeek_dns_log
    = inhale<format::zeek::reader>(artifacts::logs::zeek::dns, slice_size);
  REQUIRE_EQUAL(rows(zeek_dns_log), 32u);
  zeek_http_log
    = inhale<format::zeek::reader>(artifacts::logs::zeek::http, slice_size);
  REQUIRE_EQUAL(rows(zeek_http_log), 40u);
  // For the full conn.log, we're using a different table slice size for
  // historic reasons: there used to be a utility that generated a binary set
  // of table slices that used a different table slice size than the other
  // table slice collections.
  zeek_conn_log_full = inhale<format::zeek::reader>(
    artifacts::logs::zeek::conn, vast::defaults::import::table_slice_size);
  REQUIRE_EQUAL(rows(zeek_conn_log_full), 8462u);
  // Create random table slices.
  caf::settings opts;
  caf::put(opts, "import.test.seed", std::size_t{42});
  caf::put(opts, "import.max-events", std::size_t{1000});
  vast::format::test::reader rd{defaults::import::table_slice_type,
                                std::move(opts), nullptr};
  random = extract(rd, slice_size);
  REQUIRE_EQUAL(rows(random), 1000u);
  // Create integer test data.
  ascending_integers = make_integers<ascending>(250);
  alternating_integers = make_integers<alternating>(250);
  // Assign IDs
  auto i = id{0};
  auto assign_ids = [&](auto& slices) {
    for (auto& slice : slices) {
      slice.unshared().offset(i);
      i += slice->rows();
    }
  };
  assign_ids(zeek_conn_log);
  assign_ids(zeek_dns_log);
  i += 1'000; // cause an artificial gap in the ID space
  assign_ids(zeek_http_log);
  assign_ids(ascending_integers);
  assign_ids(alternating_integers);
  // The full conn.log stands out in that it has its own offset.
  i = 100'000;
  assign_ids(zeek_conn_log_full);
}

} // namespace fixtures
