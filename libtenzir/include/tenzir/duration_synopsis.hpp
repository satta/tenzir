//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/min_max_synopsis.hpp"
#include "tenzir/synopsis.hpp"

namespace tenzir {

class duration_synopsis final : public min_max_synopsis<duration> {
public:
  duration_synopsis(tenzir::type x);

  duration_synopsis(duration start, duration end);

  [[nodiscard]] synopsis_ptr clone() const override;

  [[nodiscard]] bool equals(const synopsis& other) const noexcept override;
};

} // namespace tenzir
