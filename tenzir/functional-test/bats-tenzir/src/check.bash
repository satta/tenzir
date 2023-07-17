# SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
# SPDX-License-Identifier: BSD-3-Clause

# TODO: Add documentation.
check() {
  local expect_error=0
  local args=()
  if [[ -v step_nr_ ]]; then
    step_nr_=$(( step_nr_ + 1 ))
  else
    step_nr_=0
  fi
  local step
  step="step_$(printf '%02d' "${step_nr_}")"
  export step
  
  while [[ $# -gt 0 ]]; do
    case $1 in
      '!')
        shift # past argument
        expect_error=1
        ;;
      --bg)
        shift # past argument
        local process_group="$1"
        shift # past value
        ;;
      -c|--cmd)
        shift # past argument
        args+=("bash")
        args+=("-c")
        args+=("$1")
        shift # past value
        ;;
      *)
        args+=("$1") # save positional arg
        shift # past argument
        ;;
    esac
  done
  if [ $expect_error = 1 ]; then
    run_flags="!"
  else
    run_flags="-0"
  fi
  compare_or_update() {
    local file_ref_dir ref_path
    file_ref_dir="$(realpath --relative-to="${BATS_SUITE_DIRNAME}" "${BATS_TEST_FILENAME%.bats}")"
    ref_path="$(dirname "${BATS_SUITE_DIRNAME}")/reference/${file_ref_dir}/${BATS_TEST_NAME}"
    if [[ -v UPDATE ]]; then
      if [[ "$step_nr_" -eq 0 ]]; then
        rm -rf "${ref_path}"
      fi
      if [[ -n "${output}" ]]; then
        mkdir -p "${ref_path}"
        local sorted
        sorted="$(printf '%s' "${output}" | LC_ALL=C sort)"
        if [[ -f "${ref_path}/${step}.ref" ]]; then
          local expected
          expected="$(<"${ref_path}/${step}.ref")"
          if [[ $sorted != "$expected" ]]; then
            debug 0 "updating ${ref_path}/${step}.ref"
            printf '%s' "${sorted}" > "${ref_path}/${step}.ref"
          else
            debug 1 "keeping ${ref_path}/${step}.ref"
          fi
        else
          debug 0 "creating ${ref_path}/${step}.ref"
          printf '%s' "${sorted}" > "${ref_path}/${step}.ref"
        fi
      fi
    else
      if [[ -f "${ref_path}/${step}.ref" ]]; then
        assert_sorted - < "${ref_path}/${step}.ref"
      else
        assert_output ""
      fi
    fi
  }
  debug 1 "running: ${args[*]}"
  if [ -n "${process_group}" ]; then
    {
      run "${run_flags}" --separate-stderr -- "${args[@]}" 3>&-
      compare_or_update
    } &
    eval "$process_group+=(\"$!\")"
  else
    run "${run_flags}" --separate-stderr -- "${args[@]}"
    compare_or_update
  fi
}

wait_all() {
  for pid in "$@"; do
    wait "$pid" || exit 1
  done
}
