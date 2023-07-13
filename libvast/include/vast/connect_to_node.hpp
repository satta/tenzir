//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/actors.hpp"
#include "vast/connect_request.hpp"
#include "vast/connector.hpp"
#include "vast/endpoint.hpp"
#include "vast/node_control.hpp"

#include <caf/event_based_actor.hpp>

namespace vast {

namespace details {

auto get_node_endpoint(const caf::settings& opts) -> caf::expected<endpoint>;

auto get_retry_delay(const caf::settings& settings)
  -> std::optional<caf::timespan>;

auto get_deadline(caf::timespan timeout)
  -> std::optional<std::chrono::steady_clock::time_point>;

[[nodiscard]] auto check_version(const record& remote_version) -> bool;

} // namespace details

/// Connects to a remote Tenzir server.
auto connect_to_node(caf::scoped_actor& self, const caf::settings& opts)
  -> caf::expected<node_actor>;

template <class... Sigs>
void connect_to_node(caf::typed_event_based_actor<Sigs...>* self,
                     const caf::settings& opts,
                     std::function<void(caf::expected<node_actor>)> callback) {
  // Fetch values from config.
  auto node_endpoint = details::get_node_endpoint(opts);
  if (!node_endpoint)
    return callback(std::move(node_endpoint.error()));
  auto timeout = node_connection_timeout(opts);
  auto connector = self->spawn(vast::connector, details::get_retry_delay(opts),
                               details::get_deadline(timeout));
  self
    ->request(connector, caf::infinite, atom::connect_v,
              connect_request{node_endpoint->port->number(),
                              node_endpoint->host})
    .then(
      [=](node_actor& node) {
        // We must keep the connector alive until after this request is completed.
        (void)connector;
        self->request(node, timeout, atom::get_v, atom::version_v)
          .then(
            [callback, node = std::move(node)](record& remote_version) mutable {
              // TODO: Refactor this (also in .cpp).
              (void)details::check_version(remote_version);
              callback(std::move(node));
            },
            [=](caf::error& error) {
              callback(
                caf::make_error(ec::version_error,
                                fmt::format("failed to receive remote version "
                                            "within specified "
                                            "connection-timeout of {}: {}",
                                            timeout, std::move(error))));
            });
      },
      [=](caf::error& err) {
        callback(std::move(err));
      });
}

} // namespace vast
