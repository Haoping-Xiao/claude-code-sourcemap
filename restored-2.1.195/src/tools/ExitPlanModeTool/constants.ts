// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EI
// matched 2.1.88 source: src/tools/ExitPlanModeTool/constants.ts
// class=modified  jaccard=0.5452  score=0.5452  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var EI = E(() => {
  k0();
});
var Xx = "ExitPlanMode",
  jD = "ExitPlanMode";
function H0n() {
  let e = process.env.CLAUDE_CODE_ENVIRONMENT_KIND;
  if (e === "byoc" || e === "anthropic_cloud") return e;
  return null;
}
