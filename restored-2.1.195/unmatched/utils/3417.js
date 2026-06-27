// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aho
// matched 2.1.88 source: src/services/policyLimits/index.ts
// class=new  jaccard=0.0213  score=0.0936  fileCov=0.0269
// note: nearest: src/services/policyLimits/index.ts (0.0213); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aho = E(() => {
  je();
  At();
  Jt();
  k7();
  Rx();
  jOa = require("crypto"), YDe = [];
});
function bPp() {
  try {
    return at(yPp, false);
  } catch {
    return false;
  }
}
function lho() {
  let e = pW();
  if (!Us("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === false ? "blocked_restriction" : "blocked_tainted";
  }
  if (e !== null) return "allowed_taints_clean";
  if (WE() && !z4e(xB)) return "blocked_scopeless_oauth";
  if (aI().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (rL()) return "blocked_api_key_helper";
  return "allowed_untaintable";
}
function qOa() {
  if (process.env.DISABLE_ERROR_REPORTING) return false;
  if (She()) return false;
  if (fr() !== "firstParty" || !_u()) return false;
  if (!r4n.gte(r4n.coerce({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION)?.version ?? {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION, _Pp)) return false;
  if (!lho().startsWith("allowed")) return false;
  return bPp();
}
var r4n,
  yPp = "tengu_orford_ness",
  _Pp = "2.1.193";