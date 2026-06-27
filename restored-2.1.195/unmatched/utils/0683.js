// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aTs
// matched 2.1.88 source: src/bridge/sessionRunner.ts
// class=new  jaccard=0.0169  score=0.6211  fileCov=0.0171
// note: nearest: src/bridge/sessionRunner.ts (0.0169); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aTs = E(() => {
  oTs = require("buffer"), sTs = require("child_process"), o$u = /^[\w.-]+$/, i$u = / +/g;
});
var lTs,
  cTs,
  uTs,
  lfn = (e, t) => String(e).padStart(t, "0"),
  l$u = () => {
    let e = new Date();
    return `${lfn(e.getHours(), 2)}:${lfn(e.getMinutes(), 2)}:${lfn(e.getSeconds(), 2)}.${lfn(e.getMilliseconds(), 3)}`;
  },
  $0r = (e, {
    verbose: t
  }) => {
    if (!t) return;
    cTs.default.stderr.write(`[${l$u()}] ${e}
`);
  };