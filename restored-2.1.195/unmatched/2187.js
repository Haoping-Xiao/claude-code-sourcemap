// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rzr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rzr = E(() => {
  R$i();
  L$i();
  O$i();
});
function a$d() {
  if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return !1;
  return !Jl();
}
function N$i() {
  return process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !ut(process.env.CLAUDE_CODE_BYOC_ENABLE_DATADOG);
}
function Rj() {
  return a$d() || km() !== null || She();
}
function y_e() {
  return ut(process.env.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL);
}
function Fte() {
  if (y_e()) return !1;
  return She();
}