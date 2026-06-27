// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FK
// matched 2.1.88 source: src/utils/process.ts
// class=modified  jaccard=0.3148  score=0.4236  fileCov=0.5508
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: writeToStdout, writeToStderr, registerProcessIOErrorHandlers, peekForStdinData, iterateStreamUntilClose, handleStreamGoneErrors, exitWithError
// [unwrapped __esm module FK]
((tae = require("fs")), (UEr = require("path")));
function handleStreamGoneErrors(e, t) {
  e.on("error", (n) => {
    if (n.code !== void 0 && h7c.has(n.code)) {
      try {
        e.destroy?.();
      } catch {}
      t?.(n.code);
    }
  });
}
function registerProcessIOErrorHandlers(e) {
  (handleStreamGoneErrors(process.stdin, (t) => e("stdin", t)),
    handleStreamGoneErrors(process.stdout, (t) => e("stdout", t)),
    handleStreamGoneErrors(process.stderr));
}
function iis(e, t) {
  if (e.destroyed) return;
  e.write(t);
}
function writeToStdout(e) {
  iis(process.stdout, e);
}
function writeToStderr(e) {
  iis(process.stderr, e);
}
function exitWithError(e) {
  (console.error(e), sv("exit_with_error"), process.exit(1));
}
function peekForStdinData(e, t) {
  let n = e;
  if (n.readableEnded || n.destroyed) return Promise.resolve(false);
  return new Promise((r) => {
    let o = (l) => {
        (clearTimeout(a), e.off("end", s), e.off("close", s), e.off("data", i), r(l));
      },
      s = () => o(false),
      i = () => {
        if ((clearTimeout(a), n.readableEnded || n.destroyed)) o(false);
      },
      a = setTimeout(o, t, true);
    (e.once("end", s), e.once("close", s), e.once("data", i));
  });
}
async function* iterateStreamUntilClose(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"),
    n = false,
    r = null,
    o = () => {
      ((n = true), r?.());
    };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!n) {
      let i = s.next();
      i.catch(() => {});
      let a = new Promise((c) => {
          r = () => c(t);
        }),
        l = await Promise.race([i, a]);
      if (((r = null), l === t || l.done)) return;
      yield String(l.value);
    }
  } finally {
    (e.off("close", o), s.return?.().catch(() => {}));
  }
}
var h7c;
