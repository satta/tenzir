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

#include <caf/fwd.hpp>

#include <string>

/// Various POSIX-compliant helper tools.

namespace vast::detail {

enum class socket_type { datagram, stream, fd };

/// Constructs a UNIX domain socket.
/// @param path The file system path where to construct the socket.
/// @returns The descriptor of the domain socket on success or -1 on failure.
int uds_listen(const std::string& path);

/// Accepts a UNIX domain socket.
/// @param socket The file descriptor created with ::uds_listen.
/// @returns The accepted file descriptor or <0 on failure.
int uds_accept(int socket);

/// Connects to UNIX domain socket.
/// @param path The file system path where to the existing domain socket.
/// @param type The socket type.
/// @returns The descriptor of the domain socket on success or -1 on failure.
int uds_connect(const std::string& path, socket_type type);

/// Sends a file descriptor over a UNIX domain socket.
/// @param socket The domain socket descriptor.
/// @param fd The file descriptor to send.
/// @returns `true` on success.
bool uds_send_fd(int socket, int fd);

/// Receives a file descriptor from a UNIX domain socket.
/// @param socket The domain socket descriptor.
/// @returns A file descriptor or -1 on failure.
int uds_recv_fd(int socket);

/// An abstraction of a UNIX domain socket. This class facilitates sending and
/// receiving file descriptors.
class unix_domain_socket {
public:
  /// Creates a UNIX domain socket listening server at a given path.
  /// @param path The filesystem path where to construct the socket.
  /// @returns A file descriptor to the listening docket.
  static int listen(const std::string& path);

  /// Creates a UNIX domain socket server and blocks to accept a connection.
  /// @param path The filesystem path where to construct the socket.
  /// @returns A UNIX domain socket handle.
  static unix_domain_socket accept(const std::string& path);

  /// Creates a UNIX domain socket client by connecting to an existing server.
  /// @param path The filesystem path identifying the server socket.
  /// @param type The socket type.
  /// @returns A UNIX domain socket handle.
  static unix_domain_socket
  connect(const std::string& path, socket_type type = socket_type::stream);

  /// Constructs a UNIX domain socket.
  /// @param fd The file descriptor to the socket. Default to -1, an invalid
  ///           descriptor.
  explicit unix_domain_socket(int fd = -1);

  /// Checks whether the UNIX domain socket is in working state.
  /// @returns `true` if the UNIX domain socket is open and operable.
  explicit operator bool() const;

  /// Sends a file descriptor over the UNIX domain socket.
  /// @param fd The file descriptor to send.
  /// @pre `this == true` and *fd* must be open.
  bool send_fd(int fd);

  /// Receives a file descriptor from the UNIX domain socket.
  /// @returns The file descriptor from the other end.
  /// @pre `this == true`.
  int recv_fd();

  /// Retrieves the underlying file descriptor of this socket.
  /// @returns The file descriptor of this UNIX domain socket.
  int fd() const;

private:
  int fd_;
};

/// Puts a file descriptor into non-blocking mode.
/// @param fd The file descriptor to adjust.
/// @returns `true` on success.
bool make_nonblocking(int fd);

/// Puts a file descriptor into blocking mode.
/// @param fd The file descriptor to adjust.
/// @returns `true` on success.
bool make_blocking(int fd);

/// Polls a file descriptor for ready read events via `select(2)`.
/// @param fd The file descriptor to poll
/// @param usec The number of microseconds to wait.
/// @returns `true` if *fd* has ready events for reading.
bool poll(int fd, int usec = 100000);

/// Wraps `close(2)`.
/// @param fd The file descriptor to close.
/// @returns `true` on successful close.
bool close(int fd);

/// Wraps `read(2)`.
/// @param fd The file descriptor to read from.
/// @param buffer The buffer to write into.
/// @param bytes The number of bytes to read from *fd* and write into *buffer*.
/// @param got If not-nullptr, receives the number of bytes actually read.
/// @returns `true` on successful read.
bool read(int fd, void* buffer, size_t bytes, size_t* got = nullptr);

/// Wraps `write(2)`.
/// @param fd The file descriptor to write to.
/// @param buffer The buffer to read from.
/// @param bytes The number of bytes to write into *fd* from *buffer*.
/// @param put If not-nullptr, receives the number of bytes actually read.
/// @returns `caf::none` on successful write.
[[nodiscard]] caf::error
write(int fd, const void* buffer, size_t bytes, size_t* put = nullptr);

/// Wraps `seek(2)`.
/// @param fd A seekable file descriptor.
/// @param bytes The number of bytes that should be skipped.
/// @returns `true` on successful seek.
bool seek(int fd, size_t bytes);

} // namespace vast::detail
