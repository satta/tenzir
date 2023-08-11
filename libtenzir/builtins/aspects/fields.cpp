//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/actors.hpp>
#include <tenzir/adaptive_table_slice_builder.hpp>
#include <tenzir/argument_parser.hpp>
#include <tenzir/catalog.hpp>
#include <tenzir/node_control.hpp>
#include <tenzir/partition_synopsis.hpp>
#include <tenzir/plugin.hpp>

#include <caf/scoped_actor.hpp>

namespace tenzir::plugins::fields {

namespace {

auto field_type() -> type {
  return type{
    "tenzir.field",
    record_type{
      {"schema", string_type{}},
      {"schema_id", string_type{}},
      {"field", string_type{}},
      {"path", list_type{string_type{}}},
      {"index", list_type{uint64_type{}}},
      {"type",
       record_type{
         {"kind", string_type{}},
         {"category", string_type{}},
         {"lists", uint64_type()},
         {"name", string_type{}},
         {"attributes", list_type{record_type{
                          {"key", string_type{}},
                          {"value", string_type{}},
                        }}},
       }},
    },
  };
}

struct field_context {
  std::string name{};
  std::vector<std::string> path{};
  offset index{};
};

struct type_context {
  std::string kind{};
  std::string category;
  size_t lists{0};
  std::string name{};
  std::vector<std::pair<std::string, std::string>> attributes{};
};

struct schema_context {
  field_context field;
  type_context type;
};

/// Yields all fields from a record type, with listness being a separate
/// attribute.
auto traverse(type t) -> generator<schema_context> {
  schema_context result;
  // Unpack lists. Note that we lose type metadata of lists.
  while (const auto* list = caf::get_if<list_type>(&t)) {
    ++result.type.lists;
    t = list->value_type();
  }
  result.type.name = t.name();
  for (auto [key, value] : t.attributes())
    result.type.attributes.emplace_back(key, value);
  result.type.kind = fmt::to_string(t);
  const auto* alphabet = "abcdefghijklmnopqrstuvwxyz";
  auto i = result.type.kind.find_first_not_of(alphabet);
  if (i != std::string::npos)
    result.type.kind.resize(i);
  // TODO: This categorization is somewhat arbitrary, and we probably want to
  // think about this more.
  if (result.type.kind == "list" || result.type.kind == "record")
    result.type.category = "container";
  else
    result.type.category = "atomic";
  TENZIR_ASSERT_CHEAP(not caf::holds_alternative<list_type>(t));
  TENZIR_ASSERT_CHEAP(not caf::holds_alternative<map_type>(t));
  if (const auto* record = caf::get_if<record_type>(&t)) {
    auto i = size_t{0};
    for (const auto& field : record->fields()) {
      result.field.name = field.name;
      result.field.path.emplace_back(field.name);
      result.field.index.emplace_back(i);
      for (const auto& inner : traverse(field.type)) {
        result.type = inner.type;
        auto nested = not inner.field.name.empty();
        if (nested) {
          result.field.name = inner.field.name;
          for (const auto& p : inner.field.path)
            result.field.path.push_back(p);
          for (const auto& i : inner.field.index)
            result.field.index.push_back(i);
        }
        co_yield result;
        if (nested) {
          auto delta = inner.field.path.size();
          result.field.path.resize(result.field.path.size() - delta);
          delta = inner.field.index.size();
          result.field.index.resize(result.field.index.size() - delta);
        }
      }
      result.field.index.pop_back();
      result.field.path.pop_back();
      ++i;
    }
  } else {
    co_yield result;
  }
}

// TODO: this feels like it should be a generic function that works on any
// inspectable type.
/// Adds a schema (= named record type) to a builder, with one row per field.
auto add_field(auto& builder, const type& t) -> caf::error {
  for (const auto& ctx : traverse(t)) {
    auto row = builder.push_row();
    if (auto err = row.push_field("schema").add(t.name()))
      return err;
    if (auto err = row.push_field("schema_id").add(t.make_fingerprint()))
      return err;
    if (auto err = row.push_field("field").add(ctx.field.name))
      return err;
    auto path = row.push_field("path").push_list();
    for (const auto& p : ctx.field.path)
      if (auto err = path.add(p))
        return err;
    auto index = row.push_field("index").push_list();
    for (auto i : ctx.field.index)
      if (auto err = index.add(uint64_t{i}))
        return err;
    auto type = row.push_field("type").push_record();
    if (auto err = type.push_field("kind").add(ctx.type.kind))
      return err;
    if (auto err = type.push_field("category").add(ctx.type.category))
      return err;
    if (auto err = type.push_field("lists").add(ctx.type.lists))
      return err;
    if (auto err = type.push_field("name").add(ctx.type.name))
      return err;
    auto attrs = type.push_field("attributes").push_list();
    for (const auto& [key, value] : ctx.type.attributes) {
      auto attr = attrs.push_record();
      if (auto err = attr.push_field("key").add(key))
        return err;
      if (auto err = attr.push_field("value").add(value))
        return err;
    }
  }
  return {};
}

class plugin final : public virtual aspect_plugin {
public:
  auto name() const -> std::string override {
    return "fields";
  }

  auto location() const -> operator_location override {
    return operator_location::remote;
  }

  auto show(operator_control_plane& ctrl) const
    -> generator<table_slice> override {
    // TODO: Some of the the requests this operator makes are blocking, so
    // we have to create a scoped actor here; once the operator API uses
    // async we can offer a better mechanism here.
    auto blocking_self = caf::scoped_actor(ctrl.self().system());
    auto components
      = get_node_components<catalog_actor>(blocking_self, ctrl.node());
    if (!components) {
      ctrl.abort(std::move(components.error()));
      co_return;
    }
    co_yield {};
    auto [catalog] = std::move(*components);
    auto synopses = std::vector<partition_synopsis_pair>{};
    auto error = caf::error{};
    ctrl.self()
      .request(catalog, caf::infinite, atom::get_v)
      .await(
        [&synopses](std::vector<partition_synopsis_pair>& result) {
          synopses = std::move(result);
        },
        [&error](caf::error err) {
          error = std::move(err);
        });
    co_yield {};
    if (error) {
      ctrl.abort(std::move(error));
      co_return;
    }
    auto schemas = std::set<type>{};
    for (const auto& synopsis : synopses)
      schemas.insert(synopsis.synopsis->schema);
    auto builder = adaptive_table_slice_builder{field_type()};
    for (const auto& schema : schemas) {
      if (auto err = add_field(builder, schema))
        diagnostic::error("failed to add type to builder")
          .note("full type: {}", fmt::to_string(schema))
          .emit(ctrl.diagnostics());
    }
    co_yield builder.finish();
  }
};

} // namespace

} // namespace tenzir::plugins::fields

TENZIR_REGISTER_PLUGIN(tenzir::plugins::fields::plugin)
