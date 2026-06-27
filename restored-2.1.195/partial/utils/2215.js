// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jc
// matched 2.1.88 source: src/utils/semver.ts
// class=partial  jaccard=0.0997  score=0.1303  fileCov=0.2981
// note: low-confidence suggestion: src/utils/semver.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jc = E(() => {
  Rc();
  oo();
  Vw();
  fn();
  Rd();
  Ls();
  qd();
  aW();
  GY();
  oKr();
  l1i = require("fs"), c1i = require("path");
  xOd = [["hipaa", "allow_web_fetch"], ["hipaa", "allow_memory_sync"], ["zdr", "allow_memory_sync"], ["hipaa", "allow_settings_sync"], ["hipaa", "allow_voice_mode"], ["hipaa", "allow_design_sync"], ["hipaa", "allow_projects_tool"], ["hipaa", "allow_remote_sessions"], ["hipaa", "allow_cobalt_plinth"], ["zdr", "allow_cobalt_plinth"], ["hipaa", "allow_team_onboarding"], ["hipaa", "allow_team_discovery"], ["hipaa", "allow_error_reporting"], ["zdr", "allow_error_reporting"], ["hipaa", "allow_context_tips"], ["hipaa", "allow_desktop_handoff"]], kOd = new Set(["allow_product_feedback", "allow_remote_sessions", "allow_cobalt_plinth", "allow_error_reporting", "allow_desktop_handoff"]), ROd = new Set(["allow_product_feedback"]);
});
function cH(e, t) {
  return Bun.semver.order(e, t) === 1;
}
function aL(e, t) {
  return Bun.semver.order(e, t) >= 0;
}
function qte(e, t) {
  return Bun.semver.order(e, t) === -1;
}
function jst(e, t) {
  return Bun.semver.order(e, t) <= 0;
}
function lKr(e, t) {
  return Bun.semver.satisfies(e, t);
}
function Dkn(e, t, n = {}) {
  let r = setInterval(e, t);
  if (n.unref) r.unref?.();
  return {
    [Symbol.dispose]: () => clearInterval(r)
  };
}
function LOd(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var EU;