// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B0r
// matched 2.1.88 source: src/utils/ripgrep.ts
// class=modified (alt of src/utils/ripgrep.ts)  jaccard=0.0608  score=0.4001  fileCov=0.0669
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING, execFileNoThrowWithCwd, execFileNoThrow
var ETs = {};
function execFileNoThrow(
  e,
  t,
  n = {
    timeout: 10 * F0r * U0r,
    preserveOutputOnError: true,
    useCwd: true,
  },
) {
  return execFileNoThrowWithCwd(e, t, {
    abortSignal: n.abortSignal,
    timeout: n.timeout,
    preserveOutputOnError: n.preserveOutputOnError,
    cwd: n.useCwd ? $t() : void 0,
    env: n.env,
    stdin: n.stdin,
    input: n.input,
  });
}
function f$u(e) {
  return on(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === true;
}
function m$u(e, t) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(t);
}
function execFileNoThrowWithCwd(
  e,
  t,
  {
    abortSignal: n,
    timeout: r = 10 * F0r * U0r,
    preserveOutputOnError: o = true,
    cwd: s,
    env: i,
    maxBuffer: a,
    shell: l,
    stdin: c,
    input: u,
  } = {
    timeout: 10 * F0r * U0r,
    preserveOutputOnError: true,
    maxBuffer: 1000000 /* 1e6 */,
  },
) {
  let d = e;
  return new Promise((p) => {
    GFe(d, t, {
      maxBuffer: a,
      signal: n,
      timeout: r,
      cwd: s,
      env: i,
      shell: l,
      stdin: c,
      input: u,
      reject: false,
    })
      .then((f) => {
        if (f.failed) {
          if (o) {
            let m = f.exitCode ?? 1;
            p({
              stdout: f.stdout || "",
              stderr: f.stderr || "",
              code: m,
              error: m$u(f, m),
            });
          } else
            p({
              stdout: "",
              stderr: "",
              code: f.exitCode ?? 1,
            });
        } else
          p({
            stdout: f.stdout,
            stderr: f.stderr,
            code: 0,
          });
      })
      .catch((f) => {
        let m = f.message;
        if (gd(f))
          T(`execFileNoThrow spawn failed: ${on(f)} ${m}`, {
            level: "error",
          });
        else if (f$u(f))
          T(`execFileNoThrow maxBuffer exceeded: ${m}`, {
            level: "error",
          });
        else ke(f);
        p({
          stdout: "",
          stderr: "",
          code: 1,
        });
      });
  });
}
var U0r = 1000,
  F0r = 60;
