// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZHs
// matched 2.1.88 source: node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js
// class=partial  jaccard=0.2101  score=0.2101  fileCov=1
// note: low-confidence suggestion: node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZHs = E(() => {
  GHs();
  afn = require("fs"), VHs = require("timers/promises"), zHs = R(qHs(), 1);
});
var n$u,
  r$u,
  L0r = (e, t) => {
    for (let [n, r] of r$u) {
      let o = typeof t === "function" ? (...s) => Reflect.apply(r.value, t(), s) : r.value.bind(t);
      Reflect.defineProperty(e, n, {
        ...r,
        value: o
      });
    }
  },
  eTs = e => new Promise((t, n) => {
    if (e.on("exit", (r, o) => {
      t({
        exitCode: r,
        signal: o
      });
    }), e.on("error", r => {
      n(r);
    }), e.stdin) e.stdin.on("error", r => {
      n(r);
    });
  });