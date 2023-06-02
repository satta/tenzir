//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/adaptive_table_slice_builder.hpp>
#include <vast/argument_parser.hpp>
#include <vast/arrow_table_slice.hpp>
#include <vast/concept/parseable/vast/data.hpp>
#include <vast/concept/printable/vast/json.hpp>
#include <vast/config_options.hpp>
#include <vast/defaults.hpp>
#include <vast/detail/assert.hpp>
#include <vast/detail/padded_buffer.hpp>
#include <vast/detail/string_literal.hpp>
#include <vast/diagnostics.hpp>
#include <vast/generator.hpp>
#include <vast/operator_control_plane.hpp>
#include <vast/plugin.hpp>
#include <vast/tql/parser.hpp>

#include <arrow/record_batch.h>
#include <fmt/format.h>

#include <simdjson.h>

namespace vast::plugins::json {

namespace {

// The simdjson suggests to initialize the padding part to either 0s or spaces.
using json_buffer = detail::padded_buffer<simdjson::SIMDJSON_PADDING, '\0'>;

enum class parser_action {
  skip_chunk = 0,
  yield = 1,
  pass = 2,
};

struct selector {
  std::string prefix;
  std::string selector_field;

  template <class Inspector>
  friend auto inspect(Inspector& f, selector& x) -> bool {
    return f.object(x)
      .pretty_name("selector")
      .fields(f.field("prefix", x.prefix),
              f.field("selector_field", x.selector_field));
  }
};

struct parser_state {
  // Cache of table slice builder for each schema. These objects can be reused
  // and there is no need to recreate them each time we parse an event.
  std::unordered_map<std::string_view, adaptive_table_slice_builder>
    builders_per_schema{};
  // Used to check if the parser must yield in case the parser was seeded with a
  // known schema. The parses must yield the table_slice of previously parsed
  // schema when it parses an event of a different one.
  adaptive_table_slice_builder* last_used_builder = nullptr;
  std::string last_used_schema_name{};
  // Table slice builder used when the schema is not known.
  adaptive_table_slice_builder unknown_schema_builder{};
  // A flag used to enable/disable type inference.
  bool infer_types = false;
  // Slice to yield from the parser on the next synchronization (yield) point.
  std::optional<table_slice> slice_to_yield{};
};

template <class FieldValidator>
class doc_parser {
public:
  doc_parser(const FieldValidator& field_validator,
             std::string_view parsed_document, operator_control_plane& ctrl)
    : field_validator_{field_validator},
      parsed_document_{parsed_document},
      ctrl_{ctrl} {
  }

  auto parse_object(simdjson::ondemand::value v, auto&& field_pusher,
                    size_t depth = 0u) -> void {
    auto obj = v.get_object().value_unsafe();
    for (auto pair : obj) {
      if (pair.error()) {
        report_parse_err(v, "key value pair");
        return;
      }
      auto maybe_key = pair.unescaped_key();
      if (maybe_key.error()) {
        report_parse_err(v, "key in an object");
        return;
      }
      auto key = maybe_key.value_unsafe();
      auto val = pair.value();
      if (val.error()) {
        report_parse_err(val, fmt::format("object value at key {}", key));
        return;
      }
      auto field = field_pusher.push_field(key);
      if (not field_validator_(field))
        continue;
      parse_impl(val.value_unsafe(), field, depth + 1);
    }
  }

private:
  auto report_parse_err(auto& v, std::string description) -> void {
    ctrl_.warn(caf::make_error(
      ec::parse_error,
      fmt::format("json parser failed to parse {} in line {} from '{}'",
                  std::move(description), parsed_document_,
                  v.current_location().value_unsafe())));
  }

  auto parse_number(simdjson::ondemand::value val, auto& pusher) -> void {
    switch (val.get_number_type().value_unsafe()) {
      case simdjson::ondemand::number_type::floating_point_number: {
        auto result = val.get_double();
        if (result.error()) {
          report_parse_err(val, "a number");
          return;
        }
        add_value(pusher, result.value_unsafe());
        return;
      }
      case simdjson::ondemand::number_type::signed_integer: {
        auto result = val.get_int64();
        if (result.error()) {
          report_parse_err(val, "a number");
          return;
        }
        add_value(pusher, result.value_unsafe());
        return;
      }
      case simdjson::ondemand::number_type::unsigned_integer: {
        auto result = val.get_uint64();
        if (result.error()) {
          report_parse_err(val, "a number");
          return;
        }
        add_value(pusher, result.value_unsafe());
        return;
      }
    }
  }

  auto parse_string(simdjson::ondemand::value val, auto& pusher) -> void {
    auto maybe_str = val.get_string();
    if (maybe_str.error()) {
      report_parse_err(val, "a string");
      return;
    }
    auto str = val.get_string().value_unsafe();
    using namespace parser_literals;
    static constexpr auto parser
      = parsers::time | parsers::duration | parsers::net | parsers::ip;
    data result;
    if (parser(str, result)) {
      add_value(pusher, make_view(result));
      return;
    }
    // Take the input as-is if nothing worked.
    add_value(pusher, str);
  }

  auto parse_array(simdjson::ondemand::array arr, auto& pusher, size_t depth)
    -> void {
    auto list = pusher.push_list();
    for (auto element : arr) {
      if (element.error()) {
        report_parse_err(element, "an array element");
        continue;
      }
      parse_impl(element.value_unsafe(), list, depth + 1);
    }
  }

  auto parse_impl(simdjson::ondemand::value val, auto& pusher, size_t depth)
    -> void {
    if (depth > defaults::max_recursion)
      die("nesting too deep in json_parser parse");
    auto type = val.type();
    if (type.error())
      return;
    switch (val.type().value_unsafe()) {
      case simdjson::ondemand::json_type::null:
        return;
      case simdjson::ondemand::json_type::number:
        parse_number(val, pusher);
        return;
      case simdjson::ondemand::json_type::boolean: {
        auto result = val.get_bool();
        if (result.error()) {
          report_parse_err(val, "a boolean value");
          return;
        }
        add_value(pusher, result.value_unsafe());
        return;
      }
      case simdjson::ondemand::json_type::string:
        parse_string(val, pusher);
        return;
      case simdjson::ondemand::json_type::array:
        parse_array(val.get_array().value_unsafe(), pusher, depth + 1);
        return;
      case simdjson::ondemand::json_type::object:
        parse_object(val, pusher.push_record(), depth + 1);
        return;
    }
  }

  auto add_value(auto& guard, auto value) -> void {
    if (auto err = guard.add(value))
      ctrl_.warn(std::move(err));
  }

  const FieldValidator& field_validator_;
  std::string_view parsed_document_;
  operator_control_plane& ctrl_;
};

auto create_field_validator(bool has_selector, bool infer_types)
  -> std::function<bool(const detail::field_guard&)> {
  if (has_selector and not infer_types) {
    return [](const detail::field_guard& guard) {
      return guard.field_exists();
    };
  }
  return [](const detail::field_guard&) {
    return true;
  };
}

auto handle_empty_chunk(parser_state& state, bool has_selector) -> table_slice {
  if (has_selector) {
    if (state.last_used_builder)
      return state.last_used_builder->finish(state.last_used_schema_name);
    return table_slice{};
  }
  return std::exchange(state.unknown_schema_builder, {}).finish();
}

auto get_schema_name(simdjson::ondemand::document_reference doc,
                     const selector& selector) -> caf::expected<std::string> {
  auto type = doc[selector.selector_field];
  doc.rewind();
  if (auto err = type.error()) {
    if (err != simdjson::error_code::NO_SUCH_FIELD)
      return caf::make_error(ec::parse_error, error_message(err));
    return "";
  }
  auto maybe_schema_name = type.value_unsafe().get_string();
  if (auto err = maybe_schema_name.error()) {
    return caf::make_error(ec::parse_error, error_message(err));
  }
  if (selector.prefix.empty()) {
    return std::string{maybe_schema_name.value_unsafe()};
  }
  return fmt::format("{}.{}", selector.prefix,
                     maybe_schema_name.value_unsafe());
}

auto handle_builder_change(adaptive_table_slice_builder& builder_to_use,
                           parser_state& state) -> std::optional<table_slice> {
  if (not state.last_used_builder)
    return {};
  if (state.last_used_builder != std::addressof(builder_to_use)) {
    if (auto slice
        = state.last_used_builder->finish(state.last_used_schema_name);
        slice.rows() > 0) {
      if (state.last_used_builder
          == std::addressof(state.unknown_schema_builder))
        state.unknown_schema_builder = {};
      return slice;
    }
  }
  return {};
}

auto handle_no_matching_schema_found(parser_state& state,
                                     std::string_view schema_name,
                                     std::string_view parsed_doc)
  -> caf::expected<std::optional<table_slice>> {
  if (not state.infer_types) {
    return caf::make_error(ec::parse_error,
                           fmt::format("json parser failed to find schema for "
                                       "'{}' and skips the "
                                       "JSON object '{}'",
                                       schema_name, parsed_doc));
  }
  auto maybe_slice_to_yield
    = handle_builder_change(state.unknown_schema_builder, state);
  state.last_used_builder = std::addressof(state.unknown_schema_builder);
  state.last_used_schema_name = std::string{schema_name};
  return {std::move(maybe_slice_to_yield)};
}

auto handle_schema_found(parser_state& state, const type& schema)
  -> std::optional<table_slice> {
  if (not state.builders_per_schema.contains(schema.name())) {
    state.builders_per_schema[schema.name()]
      = adaptive_table_slice_builder{schema, state.infer_types};
  }
  auto& current_builder = state.builders_per_schema[schema.name()];
  auto maybe_slice_to_yield = handle_builder_change(current_builder, state);
  state.last_used_builder = std::addressof(current_builder);
  state.last_used_schema_name = std::string{schema.name()};
  return maybe_slice_to_yield;
}
auto finalize(adaptive_table_slice_builder* last_used_builder,
              const std::string& last_used_schema_name)
  -> std::optional<table_slice> {
  if (not last_used_builder)
    return {};
  if (auto slice = last_used_builder->finish(last_used_schema_name);
      slice.rows() > 0u)
    return std::move(slice);
  return {};
}

auto handle_schema_name_found(const std::vector<type>& schemas,
                              std::string_view schema_name, parser_state& state,
                              std::string_view parsed_doc)
  -> caf::expected<std::optional<table_slice>> {
  auto schema_it
    = std::find_if(schemas.begin(), schemas.end(), [&](const auto& schema) {
        return schema.name() == schema_name;
      });
  if (schema_it == schemas.end()) {
    return handle_no_matching_schema_found(state, schema_name, parsed_doc);
  }
  return {handle_schema_found(state, *schema_it)};
}

auto handle_truncated_bytes(size_t truncated_bytes, json_buffer& buffer,
                            operator_control_plane& ctrl) {
  if (truncated_bytes == 0) {
    buffer.reset();
    return;
  }
  // trunc > view.size() branch can ocurr when we have malformed JSON that
  // triggers some UB in the simdjson parser. The simdjson parser is supposed
  // to be used with well formed JSON or truncated JSON. In this case we don't
  // know how to recover. It might be possible to use different parser or our
  // custom logic to try recover as much data as possible.
  if (truncated_bytes > buffer.view().size()) {
    ctrl.abort(caf::make_error(ec::parse_error,
                               fmt::format("detected malformed JSON and "
                                           "aborts parsing: '{}'",
                                           buffer.view())));
    return;
  }
  buffer.truncate(truncated_bytes);
}

auto handle_known_schema(simdjson::ondemand::document_stream::iterator doc_it,
                         selector& selector, parser_state& state,
                         const std::vector<type>& schemas,
                         operator_control_plane& ctrl) -> parser_action {
  auto maybe_schema_name = get_schema_name(*doc_it, selector);
  if (not maybe_schema_name) {
    ctrl.warn(std::move(maybe_schema_name.error()));
    if (not state.infer_types)
      return parser_action::skip_chunk;
    auto maybe_slice_to_yield
      = handle_builder_change(state.unknown_schema_builder, state);
    state.last_used_builder = std::addressof(state.unknown_schema_builder);
    state.last_used_schema_name.clear();
    if (maybe_slice_to_yield) {
      state.slice_to_yield = std::move(maybe_slice_to_yield);
      return parser_action::yield;
    }
    return parser_action::pass;
  }
  auto maybe_slice_to_yield = handle_schema_name_found(
    schemas, *maybe_schema_name, state, doc_it.source());
  if (maybe_slice_to_yield) {
    if (auto slice = *maybe_slice_to_yield) {
      state.slice_to_yield = std::move(slice);
      return parser_action::yield;
    }
    return parser_action::pass;
  }
  ctrl.warn(std::move(maybe_slice_to_yield.error()));
  return parser_action::skip_chunk;
}

std::vector<type> get_schemas(bool schema_is_known,
                              operator_control_plane& ctrl, bool unflatten) {
  if (not schema_is_known)
    return {};
  if (not unflatten)
    return ctrl.schemas();
  auto schemas = ctrl.schemas();
  std::vector<type> ret;
  std::transform(schemas.begin(), schemas.end(), std::back_inserter(ret),
                 [](const auto& schema) {
                   return flatten(schema);
                 });
  return ret;
}

auto unflatten_if_needed(std::string_view separator, table_slice slice) {
  if (separator.empty())
    return slice;
  return unflatten(slice, separator);
}

auto make_parser_impl(generator<chunk_ptr> json_chunk_generator,
                      operator_control_plane& ctrl,
                      std::optional<selector> selector, bool infer_types,
                      std::string separator) -> generator<table_slice> {
  const auto schema_is_known = selector.has_value();
  const auto schemas
    = get_schemas(schema_is_known, ctrl, not separator.empty());
  auto state = parser_state{.infer_types = infer_types};
  if (not schema_is_known)
    state.last_used_builder = std::addressof(state.unknown_schema_builder);
  auto field_validator = create_field_validator(schema_is_known, infer_types);
  // TODO: change max table slice size to be fetched from options.
  constexpr auto max_table_slice_rows = defaults::import::table_slice_size;
  auto parser = simdjson::ondemand::parser{};
  auto stream = simdjson::ondemand::document_stream{};
  auto json_to_parse_buffer = json_buffer{};
  for (auto chnk : json_chunk_generator) {
    if (not chnk or chnk->size() == 0u) {
      co_yield unflatten_if_needed(separator,
                                   handle_empty_chunk(state, schema_is_known));
      continue;
    }
    json_to_parse_buffer.append(
      {reinterpret_cast<const char*>(chnk->data()), chnk->size()});
    auto view = json_to_parse_buffer.view();
    auto err = parser
                 .iterate_many(view.data(), view.length(),
                               simdjson::ondemand::DEFAULT_BATCH_SIZE)
                 .get(stream);
    if (err) {
      // For the simdjson 3.1 it seems impossible to have an error
      // returned here so it is hard to understand if we can recover from
      // it somehow.
      json_to_parse_buffer.reset();
      ctrl.warn(caf::make_error(ec::parse_error, error_message(err)));
      continue;
    }
    for (auto doc_it = stream.begin(); doc_it != stream.end(); ++doc_it) {
      // doc.error() will inherit all errors from *doc_it and get_value.
      // No need to check after each operation.
      auto doc = (*doc_it).get_value();
      if (auto err = doc.error()) {
        ctrl.warn(caf::make_error(ec::parse_error,
                                  fmt::format("skips invalid JSON '{}' : {}",
                                              view, error_message(err))));
        continue;
      }
      if (schema_is_known) {
        switch (handle_known_schema(doc_it, *selector, state, schemas, ctrl)) {
          case parser_action::pass:
            break;
          case parser_action::skip_chunk:
            continue;
          case parser_action::yield:
            VAST_ASSERT(state.slice_to_yield);
            co_yield unflatten_if_needed(
              separator, *std::exchange(state.slice_to_yield, {}));
        }
      }
      auto row = state.last_used_builder->push_row();
      doc_parser{field_validator, doc_it.source(), ctrl}.parse_object(
        doc.value_unsafe(), row);
      if (state.last_used_builder->rows() == max_table_slice_rows) {
        co_yield unflatten_if_needed(separator, state.last_used_builder->finish(
                                                  state.last_used_schema_name));
        if (not schema_is_known)
          state.unknown_schema_builder = {};
      }
    }
    handle_truncated_bytes(stream.truncated_bytes(), json_to_parse_buffer,
                           ctrl);
  }
  if (auto slice
      = finalize(state.last_used_builder, state.last_used_schema_name))
    co_yield unflatten_if_needed(separator, std::move(*slice));
}

auto parse_selector(std::string_view x, location source) -> selector {
  auto split = detail::split(x, ":");
  VAST_ASSERT(!x.empty());
  if (split.size() > 2 or split[0].empty()) {
    diagnostic::error("invalid selector `{}`: must contain at most "
                      "one `:` and field name must "
                      "not be empty",
                      x)
      .primary(source)
      .throw_();
  }
  auto prefix = split.size() == 2 ? std::string{split[1]} : "";
  return selector{std::move(prefix), std::string{split[0]}};
}

struct config {
  std::optional<struct selector> selector;
  std::string unnest_separator;
  bool no_infer = false;

  template <class Inspector>
  friend auto inspect(Inspector& f, config& x) -> bool {
    return f.object(x).pretty_name("config").fields(
      f.field("selector", x.selector),
      f.field("unnest_separator", x.unnest_separator),
      f.field("no_infer", x.no_infer));
  }
};

class json_parser final : public plugin_parser {
public:
  json_parser() = default;

  explicit json_parser(config cfg) : cfg_{std::move(cfg)} {
  }

  auto name() const -> std::string override {
    return "json";
  }

  auto
  instantiate(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> std::optional<generator<table_slice>> override {
    return make_parser_impl(std::move(input), ctrl, cfg_.selector,
                            !cfg_.no_infer, cfg_.unnest_separator);
  }

  friend auto inspect(auto& f, json_parser& x) -> bool {
    return f.apply(x.cfg_);
  }

private:
  config cfg_;
};

class json_printer final : public plugin_printer {
public:
  json_printer() = default;

  explicit json_printer(bool pretty) : pretty_{pretty} {
  }

  auto name() const -> std::string override {
    return "json";
  }

  auto instantiate(type, operator_control_plane&) const
    -> caf::expected<std::unique_ptr<printer_instance>> override {
    return printer_instance::make(
      [pretty = pretty_](table_slice slice) -> generator<chunk_ptr> {
        if (slice.rows() == 0) {
          co_yield {};
          co_return;
        }
        // JSON printer should output NDJSON, see:
        // https://github.com/ndjson/ndjson-spec
        auto printer = vast::json_printer{{.oneline = not pretty}};
        // TODO: Since this printer is per-schema we can write an optimized
        // version of it that gets the schema ahead of time and only expects
        // data corresponding to exactly that schema.
        auto buffer = std::vector<char>{};
        auto resolved_slice = resolve_enumerations(slice);
        auto array
          = to_record_batch(resolved_slice)->ToStructArray().ValueOrDie();
        auto out_iter = std::back_inserter(buffer);
        for (const auto& row :
             values(caf::get<record_type>(resolved_slice.schema()), *array)) {
          VAST_ASSERT_CHEAP(row);
          const auto ok = printer.print(out_iter, *row);
          VAST_ASSERT_CHEAP(ok);
          out_iter = fmt::format_to(out_iter, "\n");
        }
        auto chunk = chunk::make(std::move(buffer));
        co_yield std::move(chunk);
      });
  }

  auto allows_joining() const -> bool override {
    return true;
  };

  friend auto inspect(auto& f, json_printer& x) -> bool {
    return f.apply(x.pretty_);
  }

private:
  bool pretty_;
};

class plugin final : public virtual parser_plugin<json_parser>,
                     public virtual printer_plugin<json_printer> {
public:
  auto name() const -> std::string override {
    return "json";
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto cfg = config{};
    auto selector = std::optional<located<std::string>>{};
    auto parser = argument_parser{"json", "https://vast.io/docs/next/"
                                          "formats/json"};
    parser.add("--selector", selector, "<selector>");
    parser.add("--unnest-separator", cfg.unnest_separator, "<separator>");
    parser.add("--no-infer", cfg.no_infer);
    parser.parse(p);
    if (selector) {
      cfg.selector = parse_selector(selector->inner, selector->source);
    }
    return std::make_unique<json_parser>(std::move(cfg));
  }

  auto parse_printer(parser_interface& p) const
    -> std::unique_ptr<plugin_printer> override {
    auto pretty = false;
    auto parser = argument_parser{"json", "https://vast.io/docs/next/"
                                          "formats/json"};
    parser.add("--pretty", pretty);
    parser.parse(p);
    return std::make_unique<json_printer>(pretty);
  }
};

template <detail::string_literal Name, detail::string_literal Selector,
          detail::string_literal Separator = "">
class selector_parser final : public virtual parser_parser_plugin {
public:
  auto name() const -> std::string override {
    return std::string{Name.str()};
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    argument_parser{name()}.parse(p);
    auto cfg = config{};
    cfg.selector = parse_selector(Selector.str(), location::unknown);
    cfg.unnest_separator = Separator.str();
    return std::make_unique<json_parser>(std::move(cfg));
  }
};

using suricata_parser = selector_parser<"suricata", "event_type:suricata">;
using zeek_parser = selector_parser<"zeek-json", "_path:zeek", ".">;

} // namespace

} // namespace vast::plugins::json

VAST_REGISTER_PLUGIN(vast::plugins::json::plugin)
VAST_REGISTER_PLUGIN(vast::plugins::json::suricata_parser)
VAST_REGISTER_PLUGIN(vast::plugins::json::zeek_parser)
