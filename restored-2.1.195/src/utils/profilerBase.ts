// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module es
// matched 2.1.88 source: src/utils/profilerBase.ts
// class=modified  jaccard=0.3741  score=1  fileCov=0.3741
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function oG() {
  if (!dAr) dAr = require("perf_hooks").performance;
  return dAr;
}
function gee(e) {
  return e.toFixed(3);
}
function Xin(e, t, n, r, o, s, i = "") {
  let a = r ? ` | RSS: ${Ra(r.rss)}, Heap: ${Ra(r.heapUsed)}` : "";
  return `[+${gee(e).padStart(o)}ms] (+${gee(t).padStart(s)}ms) ${n}${i}${a}`;
}
var dAr = null;
