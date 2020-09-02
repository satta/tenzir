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

#include "vast/test/data.hpp"
#include "vast/test/fixtures/actor_system_and_events.hpp"

#include "vast/detail/spawn_container_source.hpp"
#include "vast/query_options.hpp"
#include "vast/system/node.hpp"
#include "vast/table_slice.hpp"
#include "vast/uuid.hpp"

#include <string>

namespace fixtures {

struct node : deterministic_actor_system_and_events {
  node();

  ~node() override;

  template <class... Ts>
  caf::actor spawn_component(std::string component, Ts&&... args) {
    using namespace caf;
    using namespace std::string_literals;
    actor result;
    invocation inv;
    inv.full_name = "spawn "s + component;
    inv.options = {};
    inv.arguments = {std::forward<Ts>(args)...};
    auto rh = self->request(test_node, infinite, std::move(inv));
    run();
    rh.receive([&](const actor& a) { result = a; },
               [&](const error& e) {
                 FAIL("failed to spawn " << component << ": " << sys.render(e));
               });
    return result;
  }

  // Ingests a specific type of logs.
  void ingest(const std::string& type);

  // Performs a historical query and returns the resulting events.
  std::vector<table_slice_ptr> query(std::string expr);

  caf::actor test_node;
};

} // namespace fixtures

