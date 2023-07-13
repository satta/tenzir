//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/aliases.hpp"
#include "vast/command.hpp"
#include "vast/expression.hpp"

#include <caf/deep_to_string.hpp>
#include <caf/fwd.hpp>
#include <fmt/format.h>

#include <filesystem>
#include <optional>
#include <string>

namespace vast {

/// Wraps arguments for spawn functions.
struct spawn_arguments {
  static inline constexpr bool use_deep_to_string_formatter = true;

  /// Current command executed by the node actor.
  const invocation& inv;

  /// Path to persistent node state.
  const std::filesystem::path& dir;

  /// Label for the new component.
  const std::string& label;

  /// Returns whether CLI arguments are empty.
  [[nodiscard]] bool empty() const noexcept {
    return inv.arguments.empty();
  }

  template <class Inspector>
    requires(Inspector::is_loading == false)
  friend auto inspect(Inspector& f, spawn_arguments& x) {
    auto inv = x.inv;
    auto dir = x.dir.string();
    auto label = x.label;
    return f.object(x)
      .pretty_name("vast.system.spawn_arguments")
      .fields(f.field("inv", inv), f.field("dir", dir),
              f.field("label", label));
  }
};

/// Attemps to read a module file and parse its content. Can either 1) return
/// nothing if the user didn't specifiy a module file in `args.options`, 2)
/// produce a valid module, or 3) run into an error.
caf::expected<std::optional<module>> read_module(const spawn_arguments& args);

/// Generates an error for unexpected CLI arguments in `args`.
caf::error unexpected_arguments(const spawn_arguments& args);

} // namespace vast
