// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VJt
// matched 2.1.88 source: src/utils/task/diskOutput.ts
// class=new  jaccard=0.039  score=0.4357  fileCov=0.0411
// note: nearest: src/utils/task/diskOutput.ts (0.039); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VJt] deps: Hp, ft, fho, Epn, fd, je, ys, vn, Jt, aS
qJt = require("path"), AZl = rEs(new Date());
WJt = new Map();
function TZl() {
  if (pHt) return pHt;
  if (!ut(process.env.DEBUG_CLAUDE_AGENT_SDK)) return TYe = null, pHt = Promise.resolve(), pHt;
  let e = I3o.join(tr(), "debug");
  return TYe = I3o.join(e, `sdk-${HZl.randomUUID()}.txt`), process.stderr.write(`SDK debug logs: ${TYe}
`), pHt = qs().mkdir(e).catch(() => {}), pHt;
}
function vZl() {
  return TZl(), TYe ?? null;
}
function Xq(e) {
  if (TYe === null) return;
  let n = `${new Date().toISOString()} ${e}
`;
  TZl().then(() => {
    if (TYe) qs().append(TYe, n).catch(() => {});
  });
}
var HZl,
  I3o,
  TYe,
  pHt = null;