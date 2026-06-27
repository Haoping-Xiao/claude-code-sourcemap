// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EI
// matched 2.1.88 source: src/utils/filePersistence/outputsScanner.ts
// class=partial  jaccard=0.0627  score=0.6302  fileCov=0.0651
// note: low-confidence suggestion: src/utils/filePersistence/outputsScanner.ts; dir inferred from dep-graph -> tools; 0 renamed
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