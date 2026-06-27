// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xur
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs
// class=new  jaccard=0.021  score=0.0656  fileCov=0.03
// note: nearest: node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs (0.021); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xur = E(() => {
  np();
  kt();
  je();
  Lx();
  Gcm = new Set(["ios", "android", "web_claude_ai", "desktop_app"]), Wcm = new Set(["scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward"]), qcm = new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
  Vcm = new Set(["claude-in-slack", "claude_in_slack"]), Kcm = new Set(["trigger_fire", "plugin_fire"]);
});
function kur(e) {
  if (typeof e === "string") return e.trim().startsWith("/");
  for (let t of e) if (t.type === "text") return t.text.trim().startsWith("/");
  return false;
}
function aen(e, t, n) {
  if (kur(t)) return "later";
  if (e === "now") return "now";
  if (n) return "later";
  if (e !== void 0) return e;
  return at("tengu_pencil_farmer", false) ? "next" : "later";
}
function lgc(e) {
  return e.verifiedSlackHumanTurn === true && e.priority === "later";
}
function len() {
  return J8(lgc) !== void 0 || Gao(lgc);
}
function cen() {
  return J8(wur) !== void 0 || Gao(wur);
}
function x8o(e) {
  let t = J8(e);
  if (!t || t.priority === "now") return t;
  return J8(n => e(n) && wur(n)) ?? t;
}
function cgc(e) {
  let t = x8o(e);
  if (t === void 0) return;
  return I5e(n => n === t);
}