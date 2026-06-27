// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module og
// matched 2.1.88 source: src/utils/teammateContext.ts
// class=partial  jaccard=0.2219  score=0.507  fileCov=0.2829
// note: low-confidence suggestion: src/utils/teammateContext.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module og] deps: ft
qoi = require("async_hooks"), WPt = new qoi.AsyncLocalStorage();
function pte(e, t) {
  return `${e}@${t}`;
}
function q2r(e) {
  return e.replace(/%|[^\x20-\x7e]/gu, t => encodeURIComponent(t));
}
function qPt(e) {
  let t = e.indexOf("@");
  if (t === -1) return null;
  return {
    agentName: e.slice(0, t),
    teamName: e.slice(t + 1)
  };
}
function nrt(e, t) {
  let n = Date.now();
  return `${e}-${n}@${t}`;
}
function wAn() {
  return zoi.getStore()?.workload;
}
function CAn(e, t) {
  return zoi.run({
    workload: e
  }, t);
}
var Voi,
  rrt = "cron",
  zoi;