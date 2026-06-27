// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rzr
// matched 2.1.88 source: src/utils/managedEnv.ts
// class=new  jaccard=0.0324  score=0.2479  fileCov=0.0359
// note: nearest: src/utils/managedEnv.ts (0.0324); dir inferred from dep-graph -> cli; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function a$d() {
  if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return false;
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
  if (y_e()) return false;
  return She();
}