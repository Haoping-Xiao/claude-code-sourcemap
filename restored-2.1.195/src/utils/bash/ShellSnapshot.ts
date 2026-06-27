// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aEe
// matched 2.1.88 source: src/utils/bash/ShellSnapshot.ts
// class=modified  jaccard=0.5613  score=0.6443  fileCov=0.8133
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var aEe = E(() => {
  ((qPa = require("os")), (FGt = require("path")));
});
function Fmo(e, t, n = [], r = []) {
  let o = n.length > 0 ? `${n.join(" ")} \${1+"$@"}` : '${1+"$@"}',
    s = Vt() === "windows",
    i = jGt.join(Sde(), s ? "claude.exe" : "claude"),
    a = s ? TD(i) : i,
    l =
      r.length > 0
        ? [
            "  local _cc_a",
            '  for _cc_a in ${1+"$@"}; do',
            `    case "$_cc_a" in ${r.join("|")}) command ${e} \${1+"$@"}; return ;; esac`,
            "  done",
          ]
        : [];
  return [
    `function ${e} {`,
    ...l,
    `  local _cc_bin="\${${Gmo}:-}"`,
    `  [[ -x $_cc_bin ]] || _cc_bin=${ja([a])}`,
    `  if [[ ! -x $_cc_bin ]]; then command ${e} \${1+"$@"}; return; fi`,
    "  if [[ -n ${ZSH_VERSION:-} ]]; then",
    `    ARGV0=${t} "$_cc_bin" ${o}`,
    '  elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then',
    `    ARGV0=${t} "$_cc_bin" ${o}`,
    "  else",
    `    (exec -a ${t} "$_cc_bin" ${o})`,
    "  fi",
    "}",
  ].join(`
`);
}
function q0p() {
  let e = DWe();
  if (e.argv0)
    return {
      type: "function",
      snippet: Fmo("rg", e.argv0),
    };
  let t = ja([e.rgPath]),
    n = e.rgArgs.map((o) => ja([o]));
  return {
    type: "alias",
    snippet: e.rgArgs.length > 0 ? `${t} ${n.join(" ")}` : t,
  };
}
function z0p() {
  if (!hC()) return null;
  return [
    "unalias find 2>/dev/null || true",
    "unalias grep 2>/dev/null || true",
    Fmo("find", "bfs", ["-S", "dfs", "-regextype", "findutils-default"]),
    Fmo(
      "grep",
      "ugrep",
      ["-G", "--ignore-files", "--hidden", "-I", ...V0p.map((e) => `--exclude-dir=${e}`)],
      [
        "-*-filter*",
        "-*-pager*",
        "-*-view*",
        "-*-format-open*",
        "-*-config*",
        "---*",
        "-@*",
        "-*-save-config*",
        "-[Zz]*",
        "-[!-]*[Zz]*",
        "--null",
        "--null-data",
      ],
    ),
  ].join(`
`);
}
function K0p() {
  return null;
}
function jmo(e) {
  let t = e.includes("zsh") ? ".zshrc" : e.includes("bash") ? ".bashrc" : ".profile";
  return jGt.join(Q2n.homedir(), t);
}
function Y0p(e) {
  let t = e.endsWith(".zshrc"),
    n = "";
  if (t)
    n += `
      echo "# Functions" >> "$SNAPSHOT_FILE"

      # Force autoload all functions first
      typeset -f > /dev/null 2>&1

      # Now get user function names - filter completion functions (single underscore prefix)
      # but keep double-underscore helpers (e.g. __zsh_like_cd from mise, __pyenv_init)
      typeset +f | grep -vE '^_[^_]' | while read func; do
        typeset -f "$func" >> "$SNAPSHOT_FILE"
      done
    `;
  else
    n += `
      echo "# Functions" >> "$SNAPSHOT_FILE"

      # Force autoload all functions first
      declare -f > /dev/null 2>&1

      # Now get user function names - filter completion functions (single underscore prefix)
      # but keep double-underscore helpers (e.g. __zsh_like_cd from mise, __pyenv_init)
      declare -F | cut -d' ' -f3 | grep -vE '^_[^_]' | while read func; do
        # Encode the function to base64, preserving all special characters
        encoded_func=$(declare -f "$func" | base64 )
        # Write the function definition to the snapshot
        echo "eval ${Umo}"${Umo}$(echo '$encoded_func' | base64 -d)${Umo}" > /dev/null 2>&1" >> "$SNAPSHOT_FILE"
      done
    `;
  if (t)
    n += `
      echo "# Shell Options" >> "$SNAPSHOT_FILE"
      setopt | sed 's/^/setopt /' | head -n 1000 >> "$SNAPSHOT_FILE"
    `;
  else
    n += `
      echo "# Shell Options" >> "$SNAPSHOT_FILE"
      shopt -p | head -n 1000 >> "$SNAPSHOT_FILE"
      set -o | grep "on" | awk '{print "set -o " $1}' | head -n 1000 >> "$SNAPSHOT_FILE"
      echo "shopt -s expand_aliases" >> "$SNAPSHOT_FILE"
    `;
  return (
    (n += `
      echo "# Aliases" >> "$SNAPSHOT_FILE"
      # Filter out winpty aliases on Windows to avoid "stdin is not a tty" errors
      # Git Bash automatically creates aliases like "alias node='winpty node.exe'" for
      # programs that need Win32 Console in mintty, but winpty fails when there's no TTY
      if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        alias | grep -v "='winpty " | sed 's/^alias //g' | sed 's/^/alias -- /' | head -n 1000 >> "$SNAPSHOT_FILE"
      else
        alias | sed 's/^alias //g' | sed 's/^/alias -- /' | head -n 1000 >> "$SNAPSHOT_FILE"
      fi
  `),
    n
  );
}
async function X0p(e) {
  let t = process.env.PATH;
  if (Vt() === "windows") {
    let l = await pv(e, ["-lc", 'echo "$PATH"'], {
      reject: !1,
      timeout: X2n,
    });
    if (l.exitCode === 0 && l.stdout) t = l.stdout.trim();
  }
  let n = await Wmo();
  if (n.length > 0) {
    let l = Vt() === "windows" ? n.map(TD) : n;
    t = [t, ...l].filter(Boolean).join(":");
  }
  let r = q0p(),
    o = "";
  if (
    ((o += `
      # Check for rg availability
      echo "# Check for rg availability" >> "$SNAPSHOT_FILE"
      echo "if ! (unalias rg 2>/dev/null; command -v rg) >/dev/null 2>&1; then" >> "$SNAPSHOT_FILE"
  `),
    r.type === "function")
  )
    o += `
      cat >> "$SNAPSHOT_FILE" << 'RIPGREP_FUNC_END'
  ${r.snippet}
RIPGREP_FUNC_END
    `;
  else {
    let l = r.snippet.replaceAll("'", "'\\''");
    o += `
      echo '  alias rg='"'${l}'" >> "$SNAPSHOT_FILE"
    `;
  }
  o += `
      echo "fi" >> "$SNAPSHOT_FILE"
  `;
  let s = z0p();
  if (s !== null)
    o += `
      # Shadow find/grep with embedded bfs/ugrep (ant-native only)
      echo "# Shadow find/grep with embedded bfs/ugrep" >> "$SNAPSHOT_FILE"
      cat >> "$SNAPSHOT_FILE" << 'FIND_GREP_FUNC_END'
${s}
FIND_GREP_FUNC_END
    `;
  let i = K0p();
  if (i !== null)
    o += `
      echo "# Shadow bq to label query jobs with source=claude_code" >> "$SNAPSHOT_FILE"
      cat >> "$SNAPSHOT_FILE" << 'BQ_FUNC_END'
${i}
BQ_FUNC_END
    `;
  let a = `PATH_END_${Math.random().toString(36).substring(2, 18)}`;
  return (
    (o += `

      # Add PATH to the file
      cat >> "$SNAPSHOT_FILE" << '${a}'
export PATH=${ja([t || ""])}
${a}
  `),
    o
  );
}
async function J0p(e, t, n) {
  let r = jmo(e),
    o = r.endsWith(".zshrc"),
    s = n ? Y0p(r) : !o ? 'echo "shopt -s expand_aliases" >> "$SNAPSHOT_FILE"' : "",
    i = await X0p(e);
  return `SNAPSHOT_FILE=${ja([t])}
      ${n ? `source "${r}" < /dev/null` : "# No user config file to source"}

      # First, create/clear the snapshot file
      echo "# Snapshot file" >| "$SNAPSHOT_FILE"

      # When this file is sourced, we first unalias to avoid conflicts
      # This is necessary because aliases get "frozen" inside function definitions at definition time,
      # which can cause unexpected behavior when functions use commands that conflict with aliases
      echo "# Unset all aliases to avoid conflicts with functions" >> "$SNAPSHOT_FILE"
      echo "unalias -a 2>/dev/null || true" >> "$SNAPSHOT_FILE"

      ${s}

      ${i}

      # Exit silently on success, only report errors
      if [ ! -f "$SNAPSHOT_FILE" ]; then
        echo "Error: Snapshot file was not created at $SNAPSHOT_FILE" >&2
        exit 1
      fi
    `;
}
async function YPa(e) {
  try {
    let t = await pv(e, ["-c", "env"], {
      reject: !1,
      timeout: X2n,
      maxBuffer: 1048576,
      env: {
        ...(process.env.CLAUDE_CODE_DONT_INHERIT_ENV ? {} : DM()),
        SHELL: e,
        GIT_EDITOR: "true",
        CLAUDECODE: "1",
      },
    });
    if (t.exitCode !== 0 || !t.stdout) {
      (T(`Spawn-env probe failed: exit=${t.exitCode} stderr=${t.stderr?.slice(0, 200)}`),
        HNn(null));
      return;
    }
    let n = [];
    for (let r of t.stdout.split(`
`)) {
      let o = r.match(Q0p);
      if (o) n.push(o[1]);
    }
    (T(`Spawn-env probe captured ${n.length} keys`), HNn(n));
  } catch (t) {
    (T(`Spawn-env probe error: ${t}`), HNn(null));
  }
}
var zPa,
  J2n,
  Q2n,
  jGt,
  Umo = "\\",
  X2n = 1e4,
  Gmo = "CLAUDE_CODE_EXECPATH",
  W0p = "CLAUDE_CODE_INVOKED_SKILLS",
  V0p,
  KPa = async (e) => {
    let t = e.includes("zsh") ? "zsh" : e.includes("bash") ? "bash" : "sh";
    return (
      T(`Creating shell snapshot for ${t} (${e})`),
      new Promise(async (n) => {
        try {
          let r = jmo(e);
          T(`Looking for shell config file: ${r}`);
          let o = await ed(r);
          if (!o)
            T(
              `Shell config file not found: ${r}, creating snapshot with Claude Code defaults only`,
            );
          let s = Date.now(),
            i = Math.random().toString(36).substring(2, 8),
            a = jGt.join(tr(), "shell-snapshots");
          T(`Snapshots directory: ${a}`);
          let l = jGt.join(a, `snapshot-${t}-${s}-${i}.sh`);
          await J2n.mkdir(a, {
            recursive: !0,
          });
          let c = await J0p(e, l, o);
          (T(`Creating snapshot at: ${l}`),
            T(`Execution timeout: ${X2n}ms`),
            zPa.execFile(
              e,
              ["-c", "-l", c],
              {
                env: {
                  ...(process.env.CLAUDE_CODE_DONT_INHERIT_ENV ? {} : DM()),
                  SHELL: e,
                  GIT_EDITOR: "true",
                  CLAUDECODE: "1",
                },
                timeout: X2n,
                maxBuffer: 1048576,
                encoding: "utf8",
                windowsHide: !0,
              },
              async (u, d, p) => {
                if (u) {
                  let f = u;
                  if (
                    (T(`Shell snapshot creation failed: ${u.message}`),
                    T("Error details:"),
                    T(`  - Error code: ${f?.code}`),
                    T(`  - Error signal: ${f?.signal}`),
                    T(`  - Error killed: ${f?.killed}`),
                    T(`  - Shell path: ${e}`),
                    T(`  - Config file: ${jmo(e)}`),
                    T(`  - Config file exists: ${o}`),
                    T(`  - Working directory: ${$t()}`),
                    T(`  - Claude home: ${tr()}`),
                    T(`Full snapshot script:
${c}`),
                    d)
                  )
                    T(`stdout output (${d.length} chars):
${d}`);
                  else T("No stdout output captured");
                  if (p) T(`stderr output (${p.length} chars): ${p}`);
                  else T("No stderr output captured");
                  T(`Failed to create shell snapshot: ${u.message}`, {
                    level: "error",
                  });
                  let m = f?.signal ? Q2n.constants.signals[f.signal] : void 0;
                  (G("tengu_shell_snapshot_failed", {
                    stderr_length: p?.length || 0,
                    has_error_code: !!f?.code,
                    error_signal_number: m,
                    error_killed: f?.killed,
                  }),
                    n(void 0));
                } else {
                  let f;
                  try {
                    f = (await J2n.stat(l)).size;
                  } catch {}
                  if (f !== void 0)
                    (T(`Shell snapshot created successfully (${f} bytes)`),
                      Ci(async () => {
                        try {
                          (await qt().unlink(l), T(`Cleaned up session snapshot: ${l}`));
                        } catch (m) {
                          T(`Error cleaning up session snapshot: ${m}`);
                        }
                      }),
                      n(l));
                  else {
                    (T(`Shell snapshot file not found after creation: ${l}`),
                      T(`Checking if parent directory still exists: ${a}`));
                    try {
                      let m = await qt().readdir(a);
                      T(`Directory contains ${m.length} files`);
                    } catch {
                      T(`Parent directory does not exist or is not accessible: ${a}`);
                    }
                    (G("tengu_shell_unknown_error", {}), n(void 0));
                  }
                }
              },
            ));
        } catch (r) {
          if (
            (T(`Unexpected error during snapshot creation: ${r}`, {
              level: "error",
            }),
            r instanceof Error)
          )
            T(`Error stack trace: ${r.stack}`);
          (G("tengu_shell_snapshot_error", {}), n(void 0));
        }
      })
    );
  },
  Q0p;
