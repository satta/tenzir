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

#define SUITE value_index

#include "vast/value_index.hpp"

#include "vast/test/fixtures/events.hpp"
#include "vast/test/test.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/address.hpp"
#include "vast/concept/parseable/vast/data.hpp"
#include "vast/concept/parseable/vast/subnet.hpp"
#include "vast/concept/parseable/vast/time.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/bitmap.hpp"
#include "vast/load.hpp"
#include "vast/save.hpp"
#include "vast/table_slice.hpp"
#include "vast/value_index_factory.hpp"

#include <caf/test/dsl.hpp>

using namespace vast;
using namespace std::string_literals;

namespace {

struct fixture : fixtures::events {
  fixture() {
    factory<value_index>::initialize();
  }
};

} // namespace <anonymous>

FIXTURE_SCOPE(value_index_tests, fixture)

TEST(bool) {
  auto idx = factory<value_index>::make(bool_type{}, caf::settings{});
  REQUIRE_NOT_EQUAL(idx, nullptr);
  MESSAGE("append");
  REQUIRE(idx->append(make_data_view(true)));
  REQUIRE(idx->append(make_data_view(true)));
  REQUIRE(idx->append(make_data_view(false)));
  REQUIRE(idx->append(make_data_view(true)));
  REQUIRE(idx->append(make_data_view(false)));
  REQUIRE(idx->append(make_data_view(false)));
  REQUIRE(idx->append(make_data_view(false)));
  REQUIRE(idx->append(make_data_view(true)));
  MESSAGE("lookup");
  auto f = idx->lookup(equal, make_data_view(false));
  CHECK_EQUAL(to_string(unbox(f)), "00101110");
  auto t = idx->lookup(not_equal, make_data_view(false));
  CHECK_EQUAL(to_string(unbox(t)), "11010001");
  auto xs = list{true, false};
  auto multi = unbox(idx->lookup(in, make_data_view(xs)));
  CHECK_EQUAL(to_string(multi), "11111111");
  MESSAGE("serialization");
  std::string buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  value_index_ptr idx2;
  REQUIRE_EQUAL(load(nullptr, buf, idx2), caf::none);
  t = idx2->lookup(equal, make_data_view(true));
  CHECK_EQUAL(to_string(unbox(t)), "11010001");
}

TEST(integer) {
  caf::settings opts;
  opts["base"] = "uniform(10, 20)";
  auto idx = factory<value_index>::make(integer_type{}, std::move(opts));
  REQUIRE_NOT_EQUAL(idx, nullptr);
  MESSAGE("append");
  REQUIRE(idx->append(make_data_view(-7)));
  REQUIRE(idx->append(make_data_view(42)));
  REQUIRE(idx->append(make_data_view(10000)));
  REQUIRE(idx->append(make_data_view(4711)));
  REQUIRE(idx->append(make_data_view(31337)));
  REQUIRE(idx->append(make_data_view(42)));
  REQUIRE(idx->append(make_data_view(42)));
  MESSAGE("lookup");
  auto leet = idx->lookup(equal, make_data_view(31337));
  CHECK(to_string(unbox(leet)) == "0000100");
  auto less_than_leet = idx->lookup(less, make_data_view(31337));
  CHECK(to_string(unbox(less_than_leet)) == "1111011");
  auto greater_zero = idx->lookup(greater, make_data_view(0));
  CHECK(to_string(unbox(greater_zero)) == "0111111");
  auto xs = list{42, 10, 4711};
  auto multi = unbox(idx->lookup(in, make_data_view(xs)));
  CHECK_EQUAL(to_string(multi), "0101011");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  value_index_ptr idx2;
  REQUIRE_EQUAL(load(nullptr, buf, idx2), caf::none);
  less_than_leet = idx2->lookup(less, make_data_view(31337));
  CHECK(to_string(unbox(less_than_leet)) == "1111011");
}

TEST(floating-point with custom binner) {
  using index_type = arithmetic_index<real, precision_binner<6, 2>>;
  caf::settings opts;
  opts["base"] = "uniform64(10)";
  auto idx = index_type{real_type{}, opts};
  MESSAGE("append");
  REQUIRE(idx.append(make_data_view(-7.8)));
  REQUIRE(idx.append(make_data_view(42.123)));
  REQUIRE(idx.append(make_data_view(10000.0)));
  REQUIRE(idx.append(make_data_view(4711.13510)));
  REQUIRE(idx.append(make_data_view(31337.3131313)));
  REQUIRE(idx.append(make_data_view(42.12258)));
  REQUIRE(idx.append(make_data_view(42.125799)));
  MESSAGE("lookup");
  auto result = idx.lookup(less, make_data_view(100.0));
  CHECK_EQUAL(to_string(unbox(result)), "1100011");
  result = idx.lookup(less, make_data_view(43.0));
  CHECK_EQUAL(to_string(unbox(result)), "1100011");
  result = idx.lookup(greater_equal, make_data_view(42.0));
  CHECK_EQUAL(to_string(unbox(result)), "0111111");
  result = idx.lookup(not_equal, make_data_view(4711.14));
  CHECK_EQUAL(to_string(unbox(result)), "1110111");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  auto idx2 = index_type{real_type{}, opts};
  REQUIRE_EQUAL(load(nullptr, buf, idx2), caf::none);
  result = idx2.lookup(not_equal, make_data_view(4711.14));
  CHECK_EQUAL(to_string(unbox(result)), "1110111");
}

TEST(duration) {
  using namespace std::chrono;
  caf::settings opts;
  opts["base"] = "uniform64(10)";
  // Default binning gives granularity of seconds.
  auto idx = arithmetic_index<vast::duration>{duration_type{}, opts};
  MESSAGE("append");
  REQUIRE(idx.append(make_data_view(milliseconds(1000))));
  REQUIRE(idx.append(make_data_view(milliseconds(2000))));
  REQUIRE(idx.append(make_data_view(milliseconds(3000))));
  REQUIRE(idx.append(make_data_view(milliseconds(911))));
  REQUIRE(idx.append(make_data_view(milliseconds(1011))));
  REQUIRE(idx.append(make_data_view(milliseconds(1411))));
  REQUIRE(idx.append(make_data_view(milliseconds(2222))));
  REQUIRE(idx.append(make_data_view(milliseconds(2322))));
  MESSAGE("lookup");
  auto lookup = [&](relational_operator op, auto dv) {
    return to_string(unbox(idx.lookup(op, dv)));
  };
  auto hun = make_data_view(milliseconds(1034));
  auto twelve = make_data_view(milliseconds(1200));
  auto twokay = make_data_view(milliseconds(2000));
  CHECK_EQUAL(lookup(equal, hun), "10001100");
  CHECK_EQUAL(lookup(less_equal, twokay), "11011111");
  CHECK_EQUAL(lookup(greater, twelve), "11101111");
  CHECK_EQUAL(lookup(greater_equal, twelve), "11101111");
  CHECK_EQUAL(lookup(less, twelve), "10011100");
  CHECK_EQUAL(lookup(less_equal, twelve), "10011100");
}

TEST(time) {
  caf::settings opts;
  opts["base"] = "uniform64(10)";
  arithmetic_index<vast::time> idx{time_type{}, opts};
  auto ts = to<vast::time>("2014-01-16+05:30:15");
  MESSAGE("append");
  REQUIRE(idx.append(make_data_view(unbox(ts))));
  ts = to<vast::time>("2014-01-16+05:30:12");
  REQUIRE(idx.append(make_data_view(unbox(ts))));
  ts = to<vast::time>("2014-01-16+05:30:15");
  REQUIRE(idx.append(make_data_view(unbox(ts))));
  ts = to<vast::time>("2014-01-16+05:30:18");
  REQUIRE(idx.append(make_data_view(unbox(ts))));
  ts = to<vast::time>("2014-01-16+05:30:15");
  REQUIRE(idx.append(make_data_view(unbox(ts))));
  ts = to<vast::time>("2014-01-16+05:30:19");
  REQUIRE(idx.append(make_data_view(unbox(ts))));
  MESSAGE("lookup");
  ts = to<vast::time>("2014-01-16+05:30:15");
  auto fifteen = idx.lookup(equal, make_data_view(unbox(ts)));
  CHECK(to_string(unbox(fifteen)) == "101010");
  ts = to<vast::time>("2014-01-16+05:30:20");
  auto twenty = idx.lookup(less, make_data_view(unbox(ts)));
  CHECK(to_string(unbox(twenty)) == "111111");
  ts = to<vast::time>("2014-01-16+05:30:18");
  auto eighteen = idx.lookup(greater_equal, make_data_view(unbox(ts)));
  CHECK(to_string(unbox(eighteen)) == "000101");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  arithmetic_index<vast::time> idx2{time_type{}, opts};
  CHECK_EQUAL(load(nullptr, buf, idx2), caf::none);
  eighteen = idx2.lookup(greater_equal, make_data_view(unbox(ts)));
  CHECK(to_string(*eighteen) == "000101");
}

TEST(string) {
  caf::settings opts;
  opts["max-size"] = 100;
  string_index idx{string_type{}, opts};
  MESSAGE("append");
  REQUIRE(idx.append(make_data_view("foo")));
  REQUIRE(idx.append(make_data_view("bar")));
  REQUIRE(idx.append(make_data_view("baz")));
  REQUIRE(idx.append(make_data_view("foo")));
  REQUIRE(idx.append(make_data_view("foo")));
  REQUIRE(idx.append(make_data_view("bar")));
  REQUIRE(idx.append(make_data_view("")));
  REQUIRE(idx.append(make_data_view("qux")));
  REQUIRE(idx.append(make_data_view("corge")));
  REQUIRE(idx.append(make_data_view("bazz")));
  MESSAGE("lookup");
  auto result = idx.lookup(equal, make_data_view("foo"));
  CHECK_EQUAL(to_string(unbox(result)), "1001100000");
  result = idx.lookup(equal, make_data_view("bar"));
  CHECK_EQUAL(to_string(unbox(result)), "0100010000");
  result = idx.lookup(equal, make_data_view("baz"));
  CHECK_EQUAL(to_string(unbox(result)), "0010000000");
  result = idx.lookup(equal, make_data_view(""));
  CHECK_EQUAL(to_string(unbox(result)), "0000001000");
  result = idx.lookup(equal, make_data_view("qux"));
  CHECK_EQUAL(to_string(unbox(result)),   "0000000100");
  result = idx.lookup(equal, make_data_view("corge"));
  CHECK_EQUAL(to_string(unbox(result)), "0000000010");
  result = idx.lookup(equal, make_data_view("bazz"));
  CHECK_EQUAL(to_string(unbox(result)),  "0000000001");
  result = idx.lookup(not_equal, make_data_view(""));
  CHECK_EQUAL(to_string(unbox(result)),    "1111110111");
  result = idx.lookup(not_equal, make_data_view("foo"));
  CHECK_EQUAL(to_string(unbox(result)), "0110011111");
  result = idx.lookup(not_ni, make_data_view(""));
  CHECK_EQUAL(to_string(unbox(result)), "0000000000");
  result = idx.lookup(ni, make_data_view(""));
  CHECK_EQUAL(to_string(unbox(result)),     "1111111111");
  result = idx.lookup(ni, make_data_view("o"));
  CHECK_EQUAL(to_string(unbox(result)),    "1001100010");
  result = idx.lookup(ni, make_data_view("oo"));
  CHECK_EQUAL(to_string(unbox(result)),   "1001100000");
  result = idx.lookup(ni, make_data_view("z"));
  CHECK_EQUAL(to_string(unbox(result)),    "0010000001");
  result = idx.lookup(ni, make_data_view("zz"));
  CHECK_EQUAL(to_string(unbox(result)),   "0000000001");
  result = idx.lookup(ni, make_data_view("ar"));
  CHECK_EQUAL(to_string(unbox(result)),   "0100010000");
  result = idx.lookup(ni, make_data_view("rge"));
  CHECK_EQUAL(to_string(unbox(result)),  "0000000010");
  result = idx.lookup(match, make_data_view("foo"));
  CHECK(!result);
  auto xs = list{"foo", "bar", "baz"};
  result = idx.lookup(in, make_data_view(xs));
  CHECK_EQUAL(to_string(unbox(result)), "1111110000");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  auto idx2 = string_index{string_type{}};
  CHECK_EQUAL(load(nullptr, buf, idx2), caf::none);
  result = idx2.lookup(equal, make_data_view("foo"));
  CHECK_EQUAL(to_string(unbox(result)), "1001100000");
  result = idx2.lookup(equal, make_data_view("bar"));
  CHECK_EQUAL(to_string(unbox(result)), "0100010000");
}

TEST(address) {
  address_index idx{address_type{}};
  MESSAGE("append");
  auto x = *to<address>("192.168.0.1");
  REQUIRE(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.2");
  REQUIRE(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.3");
  REQUIRE(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.1");
  REQUIRE(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.1");
  REQUIRE(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.2");
  REQUIRE(idx.append(make_data_view(x)));
  MESSAGE("address equality");
  x = *to<address>("192.168.0.1");
  auto bm = idx.lookup(equal, make_data_view(x));
  CHECK(to_string(unbox(bm)) == "100110");
  bm = idx.lookup(not_equal, make_data_view(x));
  CHECK(to_string(unbox(bm)) == "011001");
  x = *to<address>("192.168.0.5");
  CHECK(to_string(*idx.lookup(equal, make_data_view(x))) == "000000");
  MESSAGE("invalid operator");
  CHECK(!idx.lookup(match, make_data_view(x)));
  MESSAGE("prefix membership");
  x = *to<address>("192.168.0.128");
  CHECK(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.130");
  CHECK(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.240");
  CHECK(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.127");
  CHECK(idx.append(make_data_view(x)));
  x = *to<address>("192.168.0.33");
  CHECK(idx.append(make_data_view(x)));
  auto y = subnet{*to<address>("192.168.0.128"), 25};
  bm = idx.lookup(in, make_data_view(y));
  CHECK(to_string(unbox(bm)) == "00000011100");
  bm = idx.lookup(not_in, make_data_view(y));
  CHECK(to_string(unbox(bm)) == "11111100011");
  y = {*to<address>("192.168.0.0"), 24};
  bm = idx.lookup(in, make_data_view(y));
  CHECK(to_string(unbox(bm)) == "11111111111");
  y = {*to<address>("192.168.0.0"), 20};
  bm = idx.lookup(in, make_data_view(y));
  CHECK(to_string(unbox(bm)) == "11111111111");
  y = {*to<address>("192.168.0.64"), 26};
  bm = idx.lookup(not_in, make_data_view(y));
  CHECK(to_string(unbox(bm)) == "11111111101");
  auto xs = list{*to<address>("192.168.0.1"), *to<address>("192.168.0.2")};
  auto multi = unbox(idx.lookup(in, make_data_view(xs)));
  CHECK_EQUAL(to_string(multi), "11011100000");
  MESSAGE("gaps");
  x = *to<address>("192.168.0.2");
  CHECK(idx.append(make_data_view(x), 42));
  x = *to<address>("192.168.0.2");
  auto str = "01000100000"s + std::string(42 - 11, '0') + '1';
  CHECK_EQUAL(to_string(unbox(idx.lookup(equal, make_data_view(x)))), str);
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  address_index idx2{address_type{}};
  CHECK_EQUAL(load(nullptr, buf, idx2), caf::none);
  CHECK_EQUAL(to_string(unbox(idx2.lookup(equal, make_data_view(x)))), str);
}

TEST(subnet) {
  subnet_index idx{subnet_type{}};
  auto s0 = *to<subnet>("192.168.0.0/24");
  auto s1 = *to<subnet>("192.168.1.0/24");
  auto s2 = *to<subnet>("fe80::/10");
  MESSAGE("append");
  REQUIRE(idx.append(make_data_view(s0)));
  REQUIRE(idx.append(make_data_view(s1)));
  REQUIRE(idx.append(make_data_view(s0)));
  REQUIRE(idx.append(make_data_view(s0)));
  REQUIRE(idx.append(make_data_view(s2)));
  REQUIRE(idx.append(make_data_view(s2)));
  MESSAGE("address lookup (ni)");
  auto a = unbox(to<address>("192.168.0.0")); // network address
  auto bm = idx.lookup(ni, make_data_view(a));
  CHECK_EQUAL(to_string(unbox(bm)), "101100");
  a = unbox(to<address>("192.168.0.1"));
  bm = idx.lookup(ni, make_data_view(a));
  CHECK_EQUAL(to_string(unbox(bm)), "101100");
  a = unbox(to<address>("192.168.1.42"));
  bm = idx.lookup(ni, make_data_view(a));
  CHECK_EQUAL(to_string(unbox(bm)), "010000");
  // IPv6
  a = unbox(to<address>("feff::")); // too far out
  bm = idx.lookup(ni, make_data_view(a));
  CHECK_EQUAL(to_string(unbox(bm)), "000000");
  a = unbox(to<address>("fe80::aaaa"));
  bm = idx.lookup(ni, make_data_view(a));
  CHECK_EQUAL(to_string(unbox(bm)), "000011");
  MESSAGE("equality lookup");
  bm = idx.lookup(equal, make_data_view(s0));
  CHECK_EQUAL(to_string(unbox(bm)), "101100");
  bm = idx.lookup(not_equal, make_data_view(s1));
  CHECK_EQUAL(to_string(unbox(bm)), "101111");
  MESSAGE("subset lookup (in)");
  auto x = unbox(to<subnet>("192.168.0.0/23"));
  bm = idx.lookup(in, make_data_view(x));
  CHECK_EQUAL(to_string(unbox(bm)), "111100");
  x = unbox(to<subnet>("192.168.0.0/25"));
  bm = idx.lookup(in, make_data_view(x));
  CHECK_EQUAL(to_string(unbox(bm)), "000000");
  MESSAGE("subset lookup (ni)");
  bm = idx.lookup(ni, make_data_view(s0));
  CHECK_EQUAL(to_string(unbox(bm)), "101100");
  x = unbox(to<subnet>("192.168.1.128/25"));
  bm = idx.lookup(ni, make_data_view(x));
  CHECK_EQUAL(to_string(unbox(bm)), "010000");
  x = unbox(to<subnet>("192.168.0.254/32"));
  bm = idx.lookup(ni, make_data_view(x));
  CHECK_EQUAL(to_string(unbox(bm)), "101100");
  x = unbox(to<subnet>("192.0.0.0/8"));
  bm = idx.lookup(ni, make_data_view(x));
  CHECK_EQUAL(to_string(unbox(bm)), "000000");
  auto xs = list{s0, s1};
  auto multi = unbox(idx.lookup(in, make_data_view(xs)));
  CHECK_EQUAL(to_string(multi), "111100");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  subnet_index idx2{subnet_type{}};
  CHECK_EQUAL(load(nullptr, buf, idx2), caf::none);
  bm = idx2.lookup(not_equal, make_data_view(s1));
  CHECK_EQUAL(to_string(unbox(bm)), "101111");
}

TEST(port) {
  port_index idx{port_type{}};
  MESSAGE("append");
  REQUIRE(idx.append(make_data_view(port(80, port::tcp))));
  REQUIRE(idx.append(make_data_view(port(443, port::tcp))));
  REQUIRE(idx.append(make_data_view(port(53, port::udp))));
  REQUIRE(idx.append(make_data_view(port(8, port::icmp))));
  REQUIRE(idx.append(make_data_view(port(31337, port::unknown))));
  REQUIRE(idx.append(make_data_view(port(80, port::tcp))));
  REQUIRE(idx.append(make_data_view(port(80, port::udp))));
  REQUIRE(idx.append(make_data_view(port(80, port::unknown))));
  REQUIRE(idx.append(make_data_view(port(8080, port::tcp))));
  MESSAGE("lookup");
  port http{80, port::tcp};
  auto bm = idx.lookup(equal, make_data_view(http));
  CHECK(to_string(unbox(bm)) == "100001000");
  bm = idx.lookup(not_equal, make_data_view(http));
  CHECK_EQUAL(to_string(unbox(bm)), "011110111");
  port port80{80, port::unknown};
  bm = idx.lookup(not_equal, make_data_view(port80));
  CHECK_EQUAL(to_string(unbox(bm)), "011110001");
  port priv{1024, port::unknown};
  bm = idx.lookup(less_equal, make_data_view(priv));
  CHECK(to_string(unbox(bm)) == "111101110");
  bm = idx.lookup(greater, make_data_view(port{2, port::unknown}));
  CHECK(to_string(unbox(bm)) == "111111111");
  auto xs = list{http, port(53, port::udp)};
  auto multi = unbox(idx.lookup(in, make_data_view(xs)));
  CHECK_EQUAL(to_string(multi), "101001000");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  port_index idx2{port_type{}};
  CHECK_EQUAL(load(nullptr, buf, idx2), caf::none);
  bm = idx2.lookup(less_equal, make_data_view(priv));
  CHECK_EQUAL(to_string(unbox(bm)), "111101110");
}

TEST(list) {
  auto container_type = list_type{string_type{}};
  list_index idx{container_type};
  MESSAGE("append");
  list xs{"foo", "bar"};
  REQUIRE(idx.append(make_data_view(xs)));
  xs = {"qux", "foo", "baz", "corge"};
  REQUIRE(idx.append(make_data_view(xs)));
  xs = {"bar"};
  REQUIRE(idx.append(make_data_view(xs)));
  REQUIRE(idx.append(make_data_view(xs)));
  REQUIRE(idx.append(make_data_view(xs), 7));
  MESSAGE("lookup");
  auto x = "foo"s;
  CHECK_EQUAL(to_string(*idx.lookup(ni, make_data_view(x))), "11000000");
  CHECK_EQUAL(to_string(*idx.lookup(not_ni, make_data_view(x))), "00110001");
  x = "bar";
  CHECK_EQUAL(to_string(*idx.lookup(ni, make_data_view(x))), "10110001");
  x = "not";
  CHECK_EQUAL(to_string(*idx.lookup(ni, make_data_view(x))), "00000000");
  MESSAGE("serialization");
  std::vector<char> buf;
  CHECK_EQUAL(save(nullptr, buf, idx), caf::none);
  list_index idx2{container_type};
  CHECK_EQUAL(load(nullptr, buf, idx2), caf::none);
  x = "foo";
  CHECK_EQUAL(to_string(*idx2.lookup(ni, make_data_view(x))), "11000000");
}

TEST(none values - string) {
  auto idx = factory<value_index>::make(string_type{}, caf::settings{});
  REQUIRE_NOT_EQUAL(idx, nullptr);
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view("bar")));
  REQUIRE(idx->append(make_data_view("bar")));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view("bar")));
  REQUIRE(idx->append(make_data_view("bar")));
  REQUIRE(idx->append(make_data_view("bar")));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view("foo")));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  auto bm = idx->lookup(equal, make_data_view("foo"));
  CHECK_EQUAL(to_string(unbox(bm)), "01100010000001110001100");
  bm = idx->lookup(not_equal, make_data_view("foo"));
  CHECK_EQUAL(to_string(unbox(bm)), "10011101111110001110011");
  bm = idx->lookup(equal, make_data_view(caf::none));
  CHECK_EQUAL(to_string(unbox(bm)), "10011100011110000000011");
  bm = idx->lookup(not_equal, make_data_view(caf::none));
  CHECK_EQUAL(to_string(unbox(bm)), "01100011100001111111100");
}

TEST(none values - arithmetic) {
  auto idx = factory<value_index>::make(count_type{}, caf::settings{});
  REQUIRE_NOT_EQUAL(idx, nullptr);
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(42)));
  REQUIRE(idx->append(make_data_view(43)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  REQUIRE(idx->append(make_data_view(caf::none)));
  auto bm = idx->lookup(less, make_data_view(50));
  CHECK_EQUAL(to_string(unbox(bm)), "01100");
  bm = idx->lookup(greater, make_data_view(42));
  CHECK_EQUAL(to_string(unbox(bm)), "00100");
}

// This test uncovered a regression that ocurred when computing the rank of a
// bitmap representing conn.log events. The culprit was the EWAH bitmap
// encoding, because swapping out ewah_bitmap for null_bitmap in address_index
// made the bug disappear.
TEST(regression - build an address index from zeek events) {
  // Populate the index with data up to the critical point.
  address_index idx{address_type{}};
  size_t row_id = 0;
  for (auto& slice : zeek_conn_log_full) {
    for (size_t row = 0; row < slice->rows(); ++row) {
      // Column 2 is orig_h.
      if (!idx.append(slice->at(row, 2), row_id))
        FAIL("appending to the value_index failed!");
      if (++row_id == 6464) {
        // The last ID should be 720 at this point.
        auto addr = unbox(to<data>("169.254.225.22"));
        auto before = unbox(idx.lookup(equal, make_data_view(addr)));
        CHECK_EQUAL(rank(before), 4u);
        CHECK_EQUAL(select(before, -1), id{720});
      }
    }
  }
  // Checking again after ingesting all events must not change the outcome.
  auto addr = unbox(to<data>("169.254.225.22"));
  auto before = unbox(idx.lookup(equal, make_data_view(addr)));
  CHECK_EQUAL(rank(before), 4u);
  CHECK_EQUAL(select(before, -1), id{720});
}

// This was the first attempt in figuring out where the bug sat. I didn't fire.
TEST(regression - checking the result single bitmap) {
  ewah_bitmap bm;
  bm.append<0>(680);
  bm.append<1>();     //  681
  bm.append<0>();     //  682
  bm.append<1>();     //  683
  bm.append<0>(36);   //  719
  bm.append<1>();     //  720
  bm.append<1>();     //  721
  for (auto i = bm.size(); i < 6464; ++i)
    bm.append<0>();
  CHECK_EQUAL(rank(bm), 4u); // regression had rank 5
  bm.append<0>();
  CHECK_EQUAL(rank(bm), 4u);
  CHECK_EQUAL(bm.size(), 6465u);
}

TEST(regression - manual address bitmap index from bitmaps) {
  MESSAGE("populating index");
  std::array<ewah_bitmap, 32> idx;
  size_t row_id = 0;
  for (auto& slice : zeek_conn_log_full) {
    for (size_t row = 0; row < slice->rows(); ++row) {
      // Column 2 is orig_h.
      auto x = caf::get<view<address>>(slice->at(row, 2));
      for (auto i = 0u; i < 4; ++i) {
        auto byte = x.data()[i + 12];
        for (auto j = 0u; j < 8; ++j)
          idx[(i * 8) + j].append_bits((byte >> j) & 1, 1);
      }
      if (++row_id == 6464) {
        auto addr = unbox(to<address>("169.254.225.22"));
        auto result = ewah_bitmap{idx[0].size(), true};
        REQUIRE_EQUAL(result.size(), 6464u);
        for (auto i = 0u; i < 4; ++i) {
          auto byte = addr.data()[i + 12];
          for (auto j = 0u; j < 8; ++j) {
            auto& bm = idx[(i * 8) + j];
            result &= ((byte >> j) & 1) ? bm : ~bm;
          }
        }
        CHECK_EQUAL(rank(result), 4u);
        CHECK_EQUAL(select(result, -1), id{720});
        // Done testing, we're only interested in the first 6464 rows.
        return;
      }
    }
  }
}

TEST(regression - manual address bitmap index from 4 byte indexes) {
  using byte_index = bitmap_index<uint8_t, bitslice_coder<ewah_bitmap>>;
  std::array<byte_index, 4> idx;
  idx.fill(byte_index{8});
  size_t row_id = 0;
  MESSAGE("populating index");
  for (auto& slice : zeek_conn_log_full) {
    for (size_t row = 0; row < slice->rows(); ++row) {
      // Column 2 is orig_h.
      auto x = caf::get<view<address>>(slice->at(row, 2));
      for (auto i = 0u; i < 4; ++i) {
        auto byte = x.data()[i + 12];
        idx[i].append(byte);
      }
      if (++row_id == 6464) {
        MESSAGE("querying 169.254.225.22");
        auto x = unbox(to<address>("169.254.225.22"));
        auto result = ewah_bitmap{idx[0].size(), true};
        REQUIRE_EQUAL(result.size(), 6464u);
        for (auto i = 0u; i < 4; ++i) {
          auto byte = x.data()[i + 12];
          result &= idx[i].lookup(equal, byte);
        }
        CHECK_EQUAL(rank(result), 4u);
        CHECK_EQUAL(select(result, -1), id{720});
        // Done testing, we're only interested in the first 6464 rows.
        return;
      }
    }
  }
}

TEST(regression - zeek conn log service http) {
  // The number of occurrences of the 'service == "http"' in the conn.log,
  // sliced in batches of 100. Pre-computed via:
  //  zeek-cut service < test/logs/zeek/conn.log
  //    | awk '{ if ($1 == "http") ++n; if (NR % 100 == 0) { print n; n = 0 } }
  //           END { print n }'
  //    | paste -s -d , -
  auto is_http = [](auto x) {
    return caf::get<view<std::string>>(x) == "http";
  };
  std::vector<size_t> http_per_100_events{
    13, 16, 20, 22, 31, 11, 14, 28, 13, 42, 45, 52, 59, 54, 59, 59, 51,
    29, 21, 31, 20, 28, 9,  56, 48, 57, 32, 53, 25, 31, 25, 44, 38, 55,
    40, 23, 31, 27, 23, 59, 23, 2,  62, 29, 1,  5,  7,  0,  10, 5,  52,
    39, 2,  0,  9,  8,  0,  13, 4,  2,  13, 2,  36, 33, 17, 48, 50, 27,
    44, 9,  94, 63, 74, 66, 5,  54, 21, 7,  2,  3,  21, 7,  2,  14, 7,
  };
  auto& slices = zeek_conn_log_full;
  REQUIRE_EQUAL(slices.size(), http_per_100_events.size());
  REQUIRE(std::all_of(slices.begin(), prev(slices.end()),
                      [](auto& slice) { return slice->rows() == 100; }));
  std::vector<std::pair<value_index_ptr, ids>> slice_stats;
  slice_stats.reserve(slices.size());
  size_t row_id = 0;
  for (auto& slice : slices) {
    slice_stats.emplace_back(factory<value_index>::make(string_type{},
                                                        caf::settings{}),
                             ids(row_id, false));
    auto& [idx, expected] = slice_stats.back();
    for (size_t row = 0; row < slice->rows(); ++row) {
      // Column 7 is service.
      auto x = slice->at(row, 7);
      idx->append(x, row_id);
      expected.append_bit(is_http(x));
      ++row_id;
    }
  }
  for (size_t i = 0; i < slice_stats.size(); ++i) {
    MESSAGE("verifying batch [" << (i * 100) << ',' << (i * 100) + 100 << ')');
    auto& [idx, expected] = slice_stats[i];
    auto result = unbox(idx->lookup(equal, make_data_view("http")));
    CHECK_EQUAL(rank(result), http_per_100_events[i]);
  }
}

TEST(regression - manual value index for zeek conn log service http) {
  // Setup string size bitmap index.
  using length_bitmap_index = bitmap_index<uint32_t,
                                           multi_level_coder<range_coder<ids>>>;
  auto length = length_bitmap_index{base::uniform(10, 3)};
  // Setup one bitmap index per character.
  using char_bitmap_index = bitmap_index<uint8_t, bitslice_coder<ewah_bitmap>>;
  std::vector<char_bitmap_index> chars;
  chars.resize(42, char_bitmap_index{8});
  // Manually build a failing slice: [8000,8100).
  ewah_bitmap none;
  ewah_bitmap mask;
  // Get the slice that contains the events for [8000,8100).
  auto slice = zeek_conn_log_full[80];
  for (size_t row = 0; row < slice->rows(); ++row) {
    auto i = 8000 + row;
    auto f = detail::overload(
      [&](caf::none_t) {
        none.append_bits(false, i - none.size());
        none.append_bit(true);
        mask.append_bits(false, i - mask.size());
        mask.append_bit(true);
      },
      [&](view<std::string> x) {
        if (x.size() >= chars.size())
          FAIL("insufficient character indexes");
        for (size_t j = 0; j < x.size(); ++j) {
          chars[j].skip(i - chars[j].size());
          chars[j].append(static_cast<uint8_t>(x[j]));
        }
        length.skip(i - length.size());
        length.append(x.size());
        mask.append_bits(false, i - mask.size());
        mask.append_bit(true);
      },
      [&](auto) { FAIL("unexpected service type"); });
    // Column 7 is service.
    caf::visit(f, slice->at(row, 7));
  }
  REQUIRE_EQUAL(rank(mask), 100u);
  // Perform a manual index lookup for "http".
  auto http = "http"s;
  auto data = length.lookup(less_equal, http.size());
  for (auto i = 0u; i < http.size(); ++i)
    data &= chars[i].lookup(equal, static_cast<uint8_t>(http[i]));
  // Generated via:
  // zeek-cut service < test/logs/zeek/conn.log
  //  | awk 'NR > 8000 && NR <= 8100 && $1 == "http" { print NR-1  }'
  //  | paste -s -d , -
  auto expected = make_ids(
    {
      8002, 8003, 8004, 8005, 8006, 8007, 8008, 8011, 8012, 8013, 8014,
      8015, 8016, 8019, 8039, 8041, 8042, 8044, 8047, 8051, 8061,
    },
    8100);
  // Manually subtract none values and mask the result to [8000, 8100).
  auto result = (data - none) & mask;
  CHECK_EQUAL(result, expected);
}

FIXTURE_SCOPE_END()
