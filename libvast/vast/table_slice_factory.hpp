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

#pragma once

#include <caf/atom.hpp>

#include "vast/factory.hpp"
#include "vast/table_slice.hpp"

namespace vast {

template <>
struct factory_traits<table_slice> {
  using result_type = table_slice_ptr;
  using key_type = caf::atom_value;
  using signature = result_type (*)(record_type, uint64_t, id);

  static void initialize();

  template <class T>
  static key_type key() {
    return T::class_id;
  }

  template <class T>
  static result_type make(record_type layout, uint64_t num_rows, id offset) {
    return T::make(std::move(layout), num_rows, offset);
  }

  /// Constructs a table slice from a chunk. The beginning of the chunk must
  /// hold the implementation ID of the concrete table slice. This function
  /// reads the ID, constructs a new table slice with the given ID, and then
  /// calls `table_slice::load` on the chunk.
  /// @returns a table slice loaded from *chunk* or `nullptr` on failure.
  static result_type make(chunk_ptr chunk);
};

} // namespace vast
