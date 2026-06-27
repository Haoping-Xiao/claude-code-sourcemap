// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mua
// matched 2.1.88 source: src/constants/product.ts
// class=modified  jaccard=0.4499  score=0.6299  fileCov=0.6115
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: toInfraSessionId, toCompatSessionId, setCseShimGate, remoteRowId
// [unwrapped __esm module Mua] deps: UIt, Dua
Pua = Pup;
var $ua = {};
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
function isRemoteSessionStaging(sessionId, ingressUrl) {
  return sessionId?.includes("_staging_") === true || ingressUrl?.includes("staging") === true;
}
function isRemoteSessionLocal(sessionId, ingressUrl) {
  return sessionId?.includes("_local_") === true || ingressUrl?.includes("localhost") === true;
}
function CLAUDE_AI_BASE_URL(e, t) {
  if (isRemoteSessionLocal(e, t)) return "http://localhost:4000";
  if (isRemoteSessionStaging(e, t)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}
function getRemoteSessionUrl(sessionId, ingressUrl, n) {
  let { toCompatSessionId: r } = ro($ua),
    o = r(sessionId),
    i = `${CLAUDE_AI_BASE_URL(o, ingressUrl)}/code/${o}`;
  return n ? `${i}?${new URLSearchParams(n)}` : i;
}
var PRODUCT_URL = "https://claude.com/claude-code";
var But;
