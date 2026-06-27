// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mua
// matched 2.1.88 source: src/constants/product.ts
// class=modified  jaccard=0.7334  score=0.8049  fileCov=0.8919
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Mua = E(() => {
  UIt();
  Dua();
  Pua = Pup;
});
var $ua = {};
_t($ua, {
  toInfraSessionId: () => toInfraSessionId,
  toCompatSessionId: () => toCompatSessionId,
  setCseShimGate: () => setCseShimGate,
  remoteRowId: () => remoteRowId,
});
function setCseShimGate(e) {
  hlo = e;
}
function toCompatSessionId(e) {
  if (!e.startsWith("cse_")) return e;
  if (hlo && !hlo()) return e;
  return "session_" + e.slice(4);
}
function remoteRowId(e) {
  return `remote-${e.slice(-8)}`;
}
function toInfraSessionId(e) {
  if (!e.startsWith("session_")) return e;
  return "cse_" + e.slice(8);
}
var hlo;
function Mup(e, t) {
  return e?.includes("_staging_") === !0 || t?.includes("staging") === !0;
}
function c4t(e, t) {
  return e?.includes("_local_") === !0 || t?.includes("localhost") === !0;
}
function u4t(e, t) {
  if (c4t(e, t)) return "http://localhost:4000";
  if (Mup(e, t)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}
function dS(e, t, n) {
  let { toCompatSessionId: r } = ro($ua),
    o = r(e),
    i = `${u4t(o, t)}/code/${o}`;
  return n ? `${i}?${new URLSearchParams(n)}` : i;
}
var L5e = "https://claude.com/claude-code";
var But;
