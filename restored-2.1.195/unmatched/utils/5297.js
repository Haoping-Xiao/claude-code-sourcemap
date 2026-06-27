// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tac
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/core/error.mjs
// class=new  jaccard=0.0528  score=0.1228  fileCov=0.0847
// note: nearest: node_modules/@anthropic-ai/sdk/core/error.mjs (0.0528); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tac = E(() => {
  sr();
});
function vac() {
  return at("tengu_hazel_osprey", false);
}
function wac() {
  return at("tengu_hazel_osprey_floor", anm);
}
function Cac(e) {
  return e instanceof Fo && (e.status === 422 || e.status === 424);
}
function Iac(e) {
  if (!(e instanceof Fo)) return false;
  if (e.status !== void 0) return false;
  return e.error?.error?.type === "invalid_request_error";
}
function xac(e) {
  return e instanceof Fo && e.status === 409;
}
function kac(e) {
  if (!(e instanceof Fo)) return false;
  if (e.status !== 400) return false;
  let t = e.message ?? "";
  return t.includes("Unexpected value") && t.includes("anthropic-beta");
}
function Rac(e) {
  if (e instanceof Fo) return e.requestID ?? void 0;
  return;
}
function Lac(e) {
  G("tengu_context_hint_reject", {
    requestId: Hr(e.requestId),
    preCompactTokenEstimate: e.preCompactTokenEstimate,
    postCompactTokenEstimate: e.postCompactTokenEstimate,
    tokensSaved: e.tokensSaved,
    mcApplied: e.mcApplied,
    mcTokensSaved: e.mcTokensSaved
  });
}
function Jlr(e, t) {
  G("tengu_context_hint_busy_fallback", {
    requestId: Hr(e),
    status: t
  });
}
var anm = 75000;