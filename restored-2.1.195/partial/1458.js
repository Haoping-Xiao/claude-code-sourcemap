// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ao
// matched 2.1.88 source: src/utils/model/model.ts
// class=partial  jaccard=0.2033  score=0.7563  fileCov=0.2175
// note: low-confidence suggestion: src/utils/model/model.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ao = E(() => {
  ft();
  oo();
  BE();
  RE();
  fn();
  ste();
  jG();
  dr();
  Ls();
  NE();
  Xa();
  QO();
  gAn();
  vM();
  vM();
  DD();
  je();
  Myn();
  i1 = new Set();
  gpd = new RegExp(`^((${bDt.join("|")})\\.)?(anthropic\\.|claude-)`);
  hpd = /^[a-z]+-\d/;
  ypd = new Set(["claude-3-opus", "claude-3-sonnet", "claude-3-haiku", "claude-3-5-sonnet", "claude-3-5-haiku", "claude-3-7-sonnet", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-haiku-4-5"]);
  _pd = ["claude-opus-4-20250514", "claude-opus-4-1-20250805", "claude-opus-4-0", "claude-opus-4-1"];
});
function x9(e, t) {
  return WPt.run(e, t);
}
function of() {
  return {
    agentType: "main",
    agentId: Rt()
  };
}
function YY(e) {
  return e.agentType === "main";
}
function qG(e) {
  if (e.agentType === "main") return 0;
  return e.depth ?? 0;
}
function ZIe(e) {
  return e.agentType === "subagent";
}
function G2r(e) {
  if (!ZIe(e) || !e.subagentName) return;
  return e.isBuiltIn ? e.subagentName : "user-defined";
}
function rje(e) {
  try {
    if (!ZIe(e)) return {};
    let t = G2r(e);
    if (t === void 0) return {};
    return {
      subagent_type: t,
      is_built_in_agent: e.isBuiltIn ?? !1
    };
  } catch {
    return {};
  }
}
function W2r(e) {
  if (e.agentType === "main" || !e.invokingRequestId || e.invocationEmitted) return;
  return e.invocationEmitted = !0, {
    invokingRequestId: e.invokingRequestId,
    invocationKind: e.invocationKind
  };
}
var qoi, WPt;