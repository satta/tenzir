//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/ids.hpp"
#include "vast/transform_step.hpp"
#include "vast/type.hpp"

#include <queue>

namespace vast {

class transform {
public:
  transform(std::string name, std::vector<std::string>&& event_types);

  ~transform() = default;

  transform(const transform&) = delete;
  transform(transform&&) = default;

  transform& operator=(const transform&) = delete;
  transform& operator=(transform&&) = default;

  void add_step(transform_step_ptr step);

  /// Adds the table to the internal queue of batches to be transformed.
  [[nodiscard]] caf::error add(table_slice&&);

  /// Applies transformations to the batches in the internal queue.
  /// @note The offsets of the slices may not be preserved.
  [[nodiscard]] caf::expected<std::vector<table_slice>> finish();

  [[nodiscard]] const std::vector<std::string>& event_types() const;

  [[nodiscard]] const std::string& name() const;

private:
  /// Add the batch to the internal queue of batches to be transformed.
  [[nodiscard]] caf::error
  add_batch(vast::type layout, std::shared_ptr<arrow::RecordBatch> batch);

  /// Applies transformations to the batches in the internal queue.
  /// @note The offsets of the slices may not be preserved.
  [[nodiscard]] caf::expected<batch_vector> finish_batch();

  /// Applies the transform step to every batch in the queue.
  caf::error process_queue(const transform_step_ptr& step);

  /// Grant access to the transformation engine so it can call
  /// add_batch/finsih_batch.
  friend class transformation_engine;

  /// Name assigned to this transformation.
  std::string name_;

  /// Sequence of transformation steps
  std::vector<transform_step_ptr> steps_;

  /// Triggers for this transform
  std::vector<std::string> event_types_;

  /// The slices being transformed.
  batch_queue to_transform_;
};

class transformation_engine {
public:
  // member functions

  /// Constructor.
  transformation_engine() = default;
  explicit transformation_engine(std::vector<transform>&&);

  /// Starts applying relevant transformations to the table.
  caf::error add(table_slice&&);

  /// Finishes applying transformations to the added tables.
  /// @note The offsets of the slices may not be preserved.
  caf::expected<std::vector<table_slice>> finish();

  /// Get a list of the transformations.
  const std::vector<transform>& transforms();

private:
  static caf::error process_queue(transform& transform, batch_queue& queue);

  /// Apply relevant transformations to the table slice.
  caf::expected<table_slice> transform_slice(table_slice&& x);

  /// The set of transforms.
  std::vector<transform> transforms_;

  /// Mapping from event type to applicable transforms.
  std::unordered_map<std::string, std::vector<size_t>> layout_mapping_;

  /// The slices being transformed.
  std::unordered_map<vast::type, slice_queue> to_transform_;
};

} // namespace vast
