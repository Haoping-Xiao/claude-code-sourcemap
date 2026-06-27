// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B0r
// matched 2.1.88 source: src/utils/ripgrep.ts
// class=new  jaccard=0.0199  score=0.2964  fileCov=0.0208
// note: nearest: src/utils/ripgrep.ts (0.0199); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var B0r = E(() => {
  Lo();
  OB();
  Jt();
});
var ETs = {};
_t(ETs, {
  execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING: () => WFe,
  execFileNoThrowWithCwd: () => execFileNoThrowWithCwd,
  execFileNoThrow: () => execFileNoThrow
});
function execFileNoThrow(e, t, n = {
  timeout: 10 * F0r * U0r,
  preserveOutputOnError: !0,
  useCwd: !0
}) {
  return execFileNoThrowWithCwd(e, t, {
    abortSignal: n.abortSignal,
    timeout: n.timeout,
    preserveOutputOnError: n.preserveOutputOnError,
    cwd: n.useCwd ? $t() : void 0,
    env: n.env,
    stdin: n.stdin,
    input: n.input
  });
}
function f$u(e) {
  return on(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === !0;
}
function m$u(e, t) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(t);
}
function execFileNoThrowWithCwd(e, t, {
  abortSignal: n,
  timeout: r = 10 * F0r * U0r,
  preserveOutputOnError: o = !0,
  cwd: s,
  env: i,
  maxBuffer: a,
  shell: l,
  stdin: c,
  input: u
} = {
  timeout: 10 * F0r * U0r,
  preserveOutputOnError: !0,
  maxBuffer: 1e6
}) {
  let d = e;
  return new Promise(p => {
    GFe(d, t, {
      maxBuffer: a,
      signal: n,
      timeout: r,
      cwd: s,
      env: i,
      shell: l,
      stdin: c,
      input: u,
      reject: !1
    }).then(f => {
      if (f.failed) {
        if (o) {
          let m = f.exitCode ?? 1;
          p({
            stdout: f.stdout || "",
            stderr: f.stderr || "",
            code: m,
            error: m$u(f, m)
          });
        } else p({
          stdout: "",
          stderr: "",
          code: f.exitCode ?? 1
        });
      } else p({
        stdout: f.stdout,
        stderr: f.stderr,
        code: 0
      });
    }).catch(f => {
      let m = f.message;
      if (gd(f)) T(`execFileNoThrow spawn failed: ${on(f)} ${m}`, {
        level: "error"
      });else if (f$u(f)) T(`execFileNoThrow maxBuffer exceeded: ${m}`, {
        level: "error"
      });else ke(f);
      p({
        stdout: "",
        stderr: "",
        code: 1
      });
    });
  });
}
var U0r = 1000,
  F0r = 60;