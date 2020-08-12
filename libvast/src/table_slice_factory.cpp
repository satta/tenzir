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

#include "vast/table_slice_factory.hpp"

#include "vast/aliases.hpp"
#include "vast/chunk.hpp"
#include "vast/config.hpp"
#include "vast/logger.hpp"
#include "vast/msgpack_table_slice.hpp"

#if VAST_HAVE_ARROW
#  include "vast/arrow_table_slice.hpp"
#endif

#include <caf/binary_deserializer.hpp>

namespace vast {

void factory_traits<table_slice>::initialize() {
  factory<table_slice>::add<msgpack_table_slice>();
#if VAST_HAVE_ARROW
  factory<table_slice>::add<arrow_table_slice>();
#endif
}

table_slice_ptr factory_traits<table_slice>::make(chunk_ptr chunk) {
  if (chunk == nullptr)
    return nullptr;
  // Setup a CAF deserializer.
  caf::binary_deserializer source{nullptr, chunk->data(), chunk->size()};
  // Deserialize the class ID and default-construct a table slice.
  caf::atom_value implementation_id;
  record_type layout;
  uint64_t num_rows;
  id offset;
  if (auto err = source(implementation_id, layout, num_rows, offset)) {
    VAST_ERROR_ANON(__func__, "failed to deserialize table slice meta data");
    return nullptr;
  }
  auto result = factory<table_slice>::make(implementation_id, std::move(layout),
                                           num_rows, offset);
  if (!result) {
    VAST_ERROR_ANON(__func__, "failed to make table slice for:",
                    to_string(implementation_id));
    return nullptr;
  }
  // Skip table slice data already processed.
  auto bytes_read = chunk->size() - source.remaining();
  if (auto err = result.unshared().load(chunk->slice(bytes_read))) {
    VAST_ERROR_ANON(__func__, "failed to load table slice from chunk");
    return nullptr;
  }
  return result;
}

} // namespace vast
