//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/transfer.hpp"

#include "tenzir/concept/printable/to_string.hpp"
#include "tenzir/config.hpp"

namespace tenzir {

transfer::transfer(transfer_options opts) : options{std::move(opts)} {
}

auto transfer::prepare(const http::request& req) -> caf::error {
  TENZIR_DEBUG("preparing HTTP request");
  if (auto err = reset()) {
    return err;
  }
  auto& easy = handle();
  // Enable all supported built-in compressions by setting the empty string.
  // This can always be overriden by manually setting the Accept-Encoding
  // header.
  if (auto err = to_error(easy.set(CURLOPT_ACCEPT_ENCODING, ""))) {
    return err;
  }
  // Ensure to follow HTTP redirects.
  if (auto err = to_error(easy.set(CURLOPT_FOLLOWLOCATION, 1))) {
    return err;
  }
  TENZIR_DEBUG("setting URL: {}", req.uri);
  if (auto err = to_error(easy.set(CURLOPT_URL, req.uri))) {
    return err;
  }
  // Set method.
  TENZIR_DEBUG("setting method: {}", req.method);
  if (req.method == "GET") {
    if (auto err = to_error(easy.set(CURLOPT_HTTPGET, 1))) {
      return err;
    }
  } else if (req.method == "HEAD") {
    if (auto err = to_error(easy.set(CURLOPT_NOBODY, 1))) {
      return err;
    }
  } else if (req.method == "POST") {
    if (auto err = to_error(easy.set(CURLOPT_POST, 1))) {
      return err;
    }
    auto size = detail::narrow_cast<long>(req.body.size());
    TENZIR_DEBUG("setting {}-byte POST body", size);
    if (auto err = to_error(easy.set_postfieldsize(size))) {
      return err;
    }
    if (not req.body.empty()) {
      // Setting body data via CURLOPT_[COPY]POSTFIELDS implicitly sets the
      // Content-Type header to 'application/x-www-form-urlencoded' unless we
      // provide a Content-Type header that overrides it.
      // TODO: Figure out a way to avoid the extra copy here, but this requires
      // moving the request in some fashion and tying it to the handle.
      if (auto err = to_error(easy.set(CURLOPT_COPYPOSTFIELDS, req.body))) {
        return err;
      }
    }
  } else if (req.method == "PUT") {
    if (auto err = to_error(easy.set(CURLOPT_UPLOAD, 1))) {
      return err;
    }
    // Using CURLOPT_UPLOAD expects that we go through the read callback, and we
    // must set CURLOPT_INFILESIZE(_LARGE).
    auto size = detail::narrow_cast<long>(req.body.size());
    if (auto err = to_error(easy.set_infilesize(size))) {
      return err;
    }
    auto on_read
      = [body = req.body](std::span<std::byte> buffer) mutable -> size_t {
      if (body.empty()) {
        return 0;
      }
      TENZIR_DEBUG("reading {}-byte request body into {}-byte buffer",
                   body.size(), buffer.size());
      if (buffer.size() >= body.size()) {
        // TODO: there's a *double* copy taking place: once the request body
        // into the lambda, and once from the lambda into the libcurl buffer. We
        // gotta figure out how to reduce this at some point, e.g., by capturing
        // the entire request by value in this function.
        std::memcpy(buffer.data(), body.data(), body.size());
        auto bytes_copied = body.size();
        body.clear();
        return bytes_copied;
      }
      std::memcpy(buffer.data(), body.data(), buffer.size());
      body.erase(0, buffer.size());
      return buffer.size();
    };
    auto code = handle().set(on_read);
    TENZIR_ASSERT(code == curl::easy::code::ok);
  } else if (not req.method.empty()) {
    const auto* method = req.method.c_str();
    if (auto err = to_error(easy.set(CURLOPT_CUSTOMREQUEST, method))) {
      return err;
    }
  }
  // Add headers
  auto set_header = [&](std::string_view name, std::string_view value) {
    TENZIR_DEBUG("setting HTTP header {}: {}", name, value);
    auto code = easy.set_http_header(name, value);
    TENZIR_ASSERT(code == curl::easy::code::ok);
  };
  // Add default headers.
  if (req.header("Accept") == nullptr) {
    set_header("Accept", "*/*");
  }
  if (req.header("User-Agent") == nullptr) {
    set_header("User-Agent", fmt::format("Tenzir/{}", version::version));
  }
  // Set user-provided headers.
  for (const auto& [name, value] : req.headers) {
    set_header(name, value);
  }
  return {};
}

auto transfer::prepare(std::string_view url) -> caf::error {
  TENZIR_DEBUG("setting URL: {}", url);
  return to_error(easy_.set(CURLOPT_URL, url));
}

auto transfer::prepare(chunk_ptr chunk) -> caf::error {
  TENZIR_ASSERT(chunk);
  // Set Content-Type header based on chunk content type.
  const auto& content_type = chunk->metadata().content_type;
  if (content_type) {
    TENZIR_DEBUG("found chunk content type: {}", *content_type);
    auto found = false;
    for (auto [name, value] : easy_.headers()) {
      if (name == "Content-Type") {
        if (value.empty()) {
          TENZIR_DEBUG("found deleted content type header");
        } else if (value != *content_type) {
          return caf::make_error(ec::unspecified,
                                 fmt::format("Content-Type mismatch: expected "
                                             "{}, got {}",
                                             value, *content_type));
        }
        found = true;
        TENZIR_DEBUG("found matching content type in header");
        break;
      }
    }
    if (not found) {
      easy_.set_http_header("Content-Type", *chunk->metadata().content_type);
    }
  }
  // Prepare request body.
  TENZIR_DEBUG("preparing transfer with {}-byte chunk", chunk->size());
  auto chunk_size = detail::narrow_cast<long>(chunk->size());
  if (auto err = to_error(easy_.set_infilesize(chunk_size))) {
    return err;
  }
  auto on_read =
    [chunk = std::move(chunk)](std::span<std::byte> buffer) mutable -> size_t {
    if (not chunk || chunk->size() == 0) {
      TENZIR_DEBUG("completing chunk reading");
      return 0;
    }
    TENZIR_DEBUG("reading {}-byte chunk into {}-byte buffer", chunk->size(),
                 buffer.size());
    if (buffer.size() >= chunk->size()) {
      std::memcpy(buffer.data(), chunk->data(), chunk->size());
      auto bytes_copied = chunk->size();
      chunk = {};
      return bytes_copied;
    }
    std::memcpy(buffer.data(), chunk->data(), buffer.size());
    chunk = chunk->slice(buffer.size());
    return buffer.size();
  };
  auto code = handle().set(on_read);
  TENZIR_ASSERT(code == curl::easy::code::ok);
  // Disable the default behavior of libcurl that prints the response to stdout.
  auto on_write = [](std::span<const std::byte> buffer) {
    TENZIR_DEBUG("got {}-byte response chunk", buffer.size());
  };
  code = easy_.set(on_write);
  TENZIR_ASSERT(code == curl::easy::code::ok);
  return {};
}

auto transfer::perform() -> caf::error {
  auto code = easy_.perform();
  if (code == curl::easy::code::ok) {
    return to_error(code);
  }
  return {};
}

auto transfer::download() -> caf::expected<chunk_ptr> {
  std::vector<std::byte> body;
  auto on_write = [&body](std::span<const std::byte> buffer) {
    body.insert(body.end(), buffer.begin(), buffer.end());
  };
  auto code = easy_.set(on_write);
  TENZIR_ASSERT(code == curl::easy::code::ok);
  code = easy_.perform();
  if (code != curl::easy::code::ok) {
    return to_error(code);
  }
  return chunk::make(std::move(body));
}

auto transfer::download_chunks() -> generator<caf::expected<chunk_ptr>> {
  std::vector<chunk_ptr> chunks;
  auto on_write = [&chunks](std::span<const std::byte> buffer) {
    chunks.emplace_back(chunk::copy(buffer));
  };
  auto code = easy_.set(on_write);
  TENZIR_ASSERT(code == curl::easy::code::ok);
  auto multi = curl::multi{};
  auto multi_code = multi.add(easy_);
  TENZIR_ASSERT(multi_code == curl::multi::code::ok);
  auto guard = caf::detail::make_scope_guard([&] {
    multi_code = multi.remove(easy_);
    TENZIR_ASSERT(multi_code == curl::multi::code::ok);
  });
  while (true) {
    if (auto still_running = multi.run(options.poll_timeout)) {
      if (chunks.empty()) {
        co_yield chunk_ptr{};
      }
      for (auto&& chunk : chunks) {
        co_yield chunk;
      }
      chunks.clear();
      if (*still_running == 0) {
        break;
      }
    } else {
      co_yield still_running.error();
      break;
    }
  }
  for (auto code : multi.info_read()) {
    if (code != curl::easy::code::ok) {
      co_yield to_error(code);
    }
  }
}

auto transfer::reset() -> caf::error {
  TENZIR_DEBUG("resetting transfer");
  easy_.reset();
  if (not options.default_protocol.empty()) {
    if (auto err = to_error(
          easy_.set(CURLOPT_DEFAULT_PROTOCOL, options.default_protocol))) {
      return err;
    }
  }
  if (options.verbose) {
    if (auto err = to_error(easy_.set(CURLOPT_VERBOSE, 1))) {
      return err;
    }
  }
  return {};
}

auto transfer::handle() -> curl::easy& {
  return easy_;
}

auto download(http::request req, transfer_options opts)
  -> caf::expected<chunk_ptr> {
  auto tx = transfer{std::move(opts)};
  if (auto err = tx.prepare(std::move(req))) {
    return err;
  }
  return tx.download();
}

} // namespace tenzir
