// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xbt
// matched 2.1.88 source: src/utils/teamMemoryOps.ts
// class=modified  jaccard=0.5751  score=1  fileCov=0.5751
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Xbt = E(() => {
  Uh();
  MM();
  M7();
  fn();
  sj();
  q$e = require("path");
});
function yvl(e) {
  let t = e;
  if (!t) return false;
  if (t.path && P7(t.path)) return true;
  return false;
}
function _vl(e, t) {
  if (e !== Wc && e !== ka) return false;
  let n = t,
    r = n?.file_path ?? n?.path;
  return r !== void 0 && P7(r);
}
function bvl(e, t, n) {
  let r = e.teamMemoryReadCount ?? 0,
    o = e.teamMemorySearchCount ?? 0,
    s = e.teamMemoryWriteCount ?? 0;
  if (r > 0) {
    let i = t
      ? n.length === 0
        ? "Recalling"
        : "recalling"
      : n.length === 0
        ? "Recalled"
        : "recalled";
    n.push(`${i} ${r} team ${r === 1 ? "memory" : "memories"}`);
  }
  if (o > 0) {
    let i = t
      ? n.length === 0
        ? "Searching"
        : "searching"
      : n.length === 0
        ? "Searched"
        : "searched";
    n.push(`${i} team memories`);
  }
  if (s > 0) {
    let i = t ? (n.length === 0 ? "Writing" : "writing") : n.length === 0 ? "Wrote" : "wrote";
    n.push(`${i} ${s} team ${s === 1 ? "memory" : "memories"}`);
  }
}
