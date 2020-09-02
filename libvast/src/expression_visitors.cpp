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

#include "vast/expression_visitors.hpp"

#include "vast/concept/parseable/to.hpp"
#include "vast/concept/parseable/vast/data.hpp"
#include "vast/concept/parseable/vast/type.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/data.hpp"
#include "vast/concept/printable/vast/operator.hpp"
#include "vast/concept/printable/vast/type.hpp"
#include "vast/data.hpp"
#include "vast/detail/assert.hpp"
#include "vast/die.hpp"
#include "vast/fwd.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/table_slice.hpp"
#include "vast/type.hpp"
#include "vast/view.hpp"

#include <algorithm>
#include <regex>

namespace vast {

expression hoister::operator()(caf::none_t) const {
  return expression{};
}

expression hoister::operator()(const conjunction& c) const {
  conjunction hoisted;
  for (auto& op : c)
    if (auto inner = caf::get_if<conjunction>(&op))
      for (auto& inner_op : *inner)
        hoisted.push_back(caf::visit(*this, inner_op));
    else
      hoisted.push_back(caf::visit(*this, op));
  return hoisted.size() == 1 ? hoisted[0] : hoisted;
}

expression hoister::operator()(const disjunction& d) const {
  disjunction hoisted;
  for (auto& op : d)
    if (auto inner = caf::get_if<disjunction>(&op))
      for (auto& inner_op : *inner)
        hoisted.push_back(caf::visit(*this, inner_op));
    else
      hoisted.push_back(caf::visit(*this, op));
  return hoisted.size() == 1 ? hoisted[0] : hoisted;
}

expression hoister::operator()(const negation& n) const {
  return {negation{caf::visit(*this, n.expr())}};
}

expression hoister::operator()(const predicate& p) const {
  return {p};
}


expression aligner::operator()(caf::none_t) const {
  return caf::none;
}

expression aligner::operator()(const conjunction& c) const {
  conjunction result;
  for (auto& op : c)
    result.push_back(caf::visit(*this, op));
  return result;
}

expression aligner::operator()(const disjunction& d) const {
  disjunction result;
  for (auto& op : d)
    result.push_back(caf::visit(*this, op));
  return result;
}

expression aligner::operator()(const negation& n) const {
  return {negation{caf::visit(*this, n.expr())}};
}

expression aligner::operator()(const predicate& p) const {
  auto is_extractor = [](auto& operand) {
    return !caf::holds_alternative<data>(operand);
  };
  // Already aligned if LHS is an extractor or no extractor present.
  if (is_extractor(p.lhs) || !is_extractor(p.rhs))
    return p;
  return predicate{p.rhs, flip(p.op), p.lhs};
}


denegator::denegator(bool negate) : negate_{negate} {
}

expression denegator::operator()(caf::none_t) const {
  return caf::none;
}

expression denegator::operator()(const conjunction& c) const {
  auto add = [&](auto x) -> expression {
    for (auto& op : c)
      x.push_back(caf::visit(*this, op));
    return x;
  };
  return negate_ ? add(disjunction{}) : add(conjunction{});
}

expression denegator::operator()(const disjunction& d) const {
  auto add = [&](auto x) -> expression {
    for (auto& op : d)
      x.push_back(caf::visit(*this, op));
    return x;
  };
  return negate_ ? add(conjunction{}) : add(disjunction{});
}

expression denegator::operator()(const negation& n) const {
  // Step through double negations.
  if (auto inner = caf::get_if<negation>(&n.expr()))
    return caf::visit(*this, inner->expr());
  // Apply De Morgan from here downward.
  return caf::visit(denegator{!negate_}, n.expr());
}

expression denegator::operator()(const predicate& p) const {
  return predicate{p.lhs, negate_ ? negate(p.op) : p.op, p.rhs};
}


expression deduplicator::operator()(caf::none_t) const {
  return caf::none;
}

expression deduplicator::operator()(const conjunction& c) const {
  conjunction result;
  for (auto& op : c) {
    auto p = caf::visit(*this, op);
    if (std::count(result.begin(), result.end(), p) == 0)
      result.push_back(p);
  }
  return result;
}

expression deduplicator::operator()(const disjunction& d) const {
  disjunction result;
  for (auto& op : d) {
    auto p = caf::visit(*this, op);
    if (std::count(result.begin(), result.end(), p) == 0)
      result.push_back(p);
  }
  return result;
}

expression deduplicator::operator()(const negation& n) const {
  return caf::visit(*this, n.expr());
}

expression deduplicator::operator()(const predicate& p) const {
  return p;
}


namespace {

template <class Ts, class Us>
auto inplace_union(Ts& xs, const Us& ys) {
  auto mid = xs.size();
  std::copy(ys.begin(), ys.end(), std::back_inserter(xs));
  std::inplace_merge(xs.begin(), xs.begin() + mid, xs.end());
  xs.erase(std::unique(xs.begin(), xs.end()), xs.end());
}

} // namespace <anonymous>

std::vector<predicate> predicatizer::operator()(caf::none_t) const {
  return {};
}

std::vector<predicate> predicatizer::operator()(const conjunction& con) const {
  std::vector<predicate> result;
  for (auto& op : con) {
    auto ps = caf::visit(*this, op);
    inplace_union(result, ps);
  }
  return result;
}

std::vector<predicate> predicatizer::operator()(const disjunction& dis) const {
  std::vector<predicate> result;
  for (auto& op : dis) {
    auto ps = caf::visit(*this, op);
    inplace_union(result, ps);
  }
  return result;
}

std::vector<predicate> predicatizer::operator()(const negation& n) const {
  return caf::visit(*this, n.expr());
}

std::vector<predicate> predicatizer::operator()(const predicate& pred) const {
  return {pred};
}

caf::expected<void> validator::operator()(caf::none_t) {
  return make_error(ec::syntax_error, "nil expression is invalid");
}

caf::expected<void> validator::operator()(const conjunction& c) {
  for (auto& op : c) {
    auto m = caf::visit(*this, op);
    if (!m)
      return m;
  }
  return caf::no_error;
}

caf::expected<void> validator::operator()(const disjunction& d) {
  for (auto& op : d) {
    auto m = caf::visit(*this, op);
    if (!m)
      return m;
  }
  return caf::no_error;
}

caf::expected<void> validator::operator()(const negation& n) {
  return caf::visit(*this, n.expr());
}

caf::expected<void> validator::operator()(const predicate& p) {
  op_ = p.op;
  // If rhs is a pattern, validate early that it is a valid regular expression.
  if (auto dat = caf::get_if<data>(&p.rhs))
    if (auto pat = caf::get_if<pattern>(dat))
      try {
        [[maybe_unused]] auto r = std::regex{pat->string()};
      } catch (const std::regex_error& err) {
        return make_error(ec::syntax_error,
                          "failed to create regular expression from pattern",
                          pat->string(), err.what());
      }
  return caf::visit(*this, p.lhs, p.rhs);
}

caf::expected<void> validator::
operator()(const attribute_extractor& ex, const data& d) {
  if (ex.attr == atom::type_v
      && !(caf::holds_alternative<std::string>(d)
           || caf::holds_alternative<pattern>(d)))
    return make_error(ec::syntax_error,
                      "type attribute extractor requires string or pattern "
                      "operand",
                      ex.attr, op_, d);
  else if (ex.attr == atom::timestamp_v && !caf::holds_alternative<time>(d))
    return make_error(ec::syntax_error,
                      "time attribute extractor requires timestamp operand",
                      ex.attr, op_, d);
  return caf::no_error;
}

caf::expected<void> validator::
operator()(const type_extractor& ex, const data& d) {
  if (!compatible(ex.type, op_, d))
    return make_error(ec::syntax_error, "type extractor type check failure",
                      ex.type, op_, d);
  return caf::no_error;
}

caf::expected<void> validator::operator()(const field_extractor&, const data&) {
  // Validity of a field extractor requires a specific schema, which we don't
  // have in this context.
  return caf::no_error;
}

type_resolver::type_resolver(const type& t) : type_{t} {
}

caf::expected<expression> type_resolver::operator()(caf::none_t) {
  return expression{};
}

caf::expected<expression> type_resolver::operator()(const conjunction& c) {
  conjunction result;
  for (auto& op : c) {
    auto r = caf::visit(*this, op);
    if (!r)
      return r;
    else if (caf::holds_alternative<caf::none_t>(*r))
      return expression{};
    else
      result.push_back(std::move(*r));
  }
  if (result.empty())
    return expression{};
  if (result.size() == 1)
    return {std::move(result[0])};
  else
    return {std::move(result)};
}

caf::expected<expression> type_resolver::operator()(const disjunction& d) {
  disjunction result;
  for (auto& op : d) {
    auto r = caf::visit(*this, op);
    if (!r)
      return r;
    else if (!caf::holds_alternative<caf::none_t>(*r))
      result.push_back(std::move(*r));
  }
  if (result.empty())
    return expression{};
  if (result.size() == 1)
    return {std::move(result[0])};
  else
    return {std::move(result)};
}

caf::expected<expression> type_resolver::operator()(const negation& n) {
  auto r = caf::visit(*this, n.expr());
  if (!r)
    return r;
  else if (!caf::holds_alternative<caf::none_t>(*r))
    return {negation{std::move(*r)}};
  else
    return expression{};
}

caf::expected<expression> type_resolver::operator()(const predicate& p) {
  op_ = p.op;
  return caf::visit(*this, p.lhs, p.rhs);
}

caf::expected<expression>
type_resolver::operator()(const attribute_extractor& ex, const data& d) {
  if (ex.attr == atom::timestamp_v) {
    // Perform a basic type check. We could make it a pre-condition that this
    // should have been tested earlier.
    if (!caf::holds_alternative<time>(d))
      return make_error(ec::type_clash, ex.attr, op_, d);
  } else {
    // We're leaving all other attributes alone, because they may operate at a
    // different granularity (e.g., #type).
    return predicate{ex, op_, d};
  }
  // Perform the attribute extraction for timestamps.
  // TODO: Generalize to all type attributes.
  auto has_timestamp_attribute
    = [&](const type& t) { return has_attribute(t, "timestamp"); };
  return resolve_extractor(has_timestamp_attribute, d);
}

caf::expected<expression>
type_resolver::operator()(const type_extractor& ex, const data& d) {
  auto is_congruent = [&](const type& t) { return congruent(t, ex.type); };
  return resolve_extractor(is_congruent, d);
}

caf::expected<expression> type_resolver::
operator()(const data& d, const type_extractor& ex) {
  return (*this)(ex, d);
}

caf::expected<expression>
type_resolver::operator()(const field_extractor& ex, const data& d) {
  std::vector<expression> connective;
  // First, interpret the field as a suffix of a record field name.
  if (auto r = caf::get_if<record_type>(&type_)) {
    auto suffixes = r->find_suffix(ex.field);
    // All suffixes must pass the type check, otherwise the RHS of a
    // predicate would be ambiguous.
    for (auto& offset : suffixes) {
      auto t = r->at(offset);
      VAST_ASSERT(t);
      if (!compatible(*t, op_, d))
        return make_error(ec::type_clash, *t, op_, d);
    }
    for (auto& offset : suffixes) {
      auto x = data_extractor{type_, std::move(offset)};
      connective.emplace_back(predicate{std::move(x), op_, d});
    }
    // Second, try to interpret the field as the name of a single type.
  } else if (ex.field == type_.name()) {
    if (!compatible(type_, op_, d))
      return make_error(ec::type_clash, type_, op_, d);
    auto x = data_extractor{type_, {}};
    connective.emplace_back(predicate{std::move(x), op_, d});
  }
  if (connective.empty())
    return expression{}; // did not resolve
  if (connective.size() == 1)
    return {std::move(connective[0])};
  if (op_ == not_equal || op_ == not_match || op_ == not_in || op_ == not_ni)
    return {conjunction{std::move(connective)}};
  else
    return {disjunction{std::move(connective)}};
}

caf::expected<expression>
type_resolver::operator()(const data& d, const field_extractor& ex) {
  return (*this)(ex, d);
}

type_pruner::type_pruner(const type& event_type) : type_{event_type} {
}

expression type_pruner::operator()(caf::none_t) {
  return {};
}

expression type_pruner::operator()(const conjunction& c) {
  conjunction result;
  for (auto& op : c) {
    auto e = caf::visit(*this, op);
    if (caf::holds_alternative<caf::none_t>(e))
      // If any operand of the conjunction is not a viable type resolver, the
      // entire conjunction is not viable. For example, if we have an event
      // consisting only of numeric types and the conjunction (int == +42 &&
      // string == "foo"), then the entire conjunction is not viable.
      return {};
    else
      result.push_back(std::move(e));
  }
  if (result.empty())
    return {};
  if (result.size() == 1)
    return result[0];
  return result;
}

expression type_pruner::operator()(const disjunction& d) {
  disjunction result;
  for (auto& op : d) {
    auto e = caf::visit(*this, op);
    if (!caf::holds_alternative<caf::none_t>(e))
      result.push_back(std::move(e));
  }
  if (result.empty())
    return {};
  if (result.size() == 1)
    return result[0];
  return result;
}

expression type_pruner::operator()(const negation& n) {
  auto e = caf::visit(*this, n.expr());
  if (caf::holds_alternative<caf::none_t>(e))
    return e;
  return negation{std::move(e)};
}

expression type_pruner::operator()(const predicate& p) {
  if (auto lhs = caf::get_if<type_extractor>(&p.lhs)) {
    if (auto r = caf::get_if<record_type>(&type_)) {
      disjunction result;
      for (auto& e : record_type::each{*r})
        if (congruent(e.trace.back()->type, lhs->type)) {
          auto de = data_extractor{type_, e.offset};
          result.emplace_back(predicate{std::move(de), p.op, p.rhs});
        }
      if (result.empty())
        return {};
      if (result.size() == 1)
        return result[0];
      return result;
    } else if (congruent(type_, lhs->type)) {
      return predicate{data_extractor{type_, {}}, p.op, p.rhs};
    }
  } else if (auto lhs = caf::get_if<data_extractor>(&p.lhs)) {
    if (lhs->type != type_)
      return {};
  }
  return p;
}

matcher::matcher(const type& t) : type_{t} {
  // nop
}

bool matcher::operator()(caf::none_t) {
  return false;
}

bool matcher::operator()(const conjunction& c) {
  for (auto& op : c)
    if (!caf::visit(*this, op))
      return false;
  return true;
}

bool matcher::operator()(const disjunction& d) {
  for (auto& op : d)
    if (caf::visit(*this, op))
      return true;
  return false;
}

bool matcher::operator()(const negation& n) {
  return caf::visit(*this, n.expr());
}

bool matcher::operator()(const predicate& p) {
  op_ = p.op;
  return caf::visit(*this, p.lhs, p.rhs);
}

bool matcher::operator()(const attribute_extractor& e, const data& d) {
  if (e.attr == atom::type_v) {
    VAST_ASSERT(caf::holds_alternative<std::string>(d));
    return evaluate(d, op_, type_.name());
  } else if (e.attr == atom::timestamp_v) {
    return true; // Every event has a timestamp.
  }
  return false;
}

bool matcher::operator()(const data_extractor&, const data&) {
  // If we encounter a data_extractor, it must have been created through a
  // previous invocation of a type_resolver visitation. The presence of
  // data_extractor indicates that the expression matches.
  return true;
}

} // namespace vast
