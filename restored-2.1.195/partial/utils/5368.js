// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dpc
// matched 2.1.88 source: src/commands/remote-env/index.ts
// class=partial  jaccard=0.0768  score=0.1637  fileCov=0.1263
// note: low-confidence suggestion: src/commands/remote-env/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dpc = E(() => {
  Bcr();
  G9o();
  W9o();
  JN();
  jcr();
});
function qZt() {
  let e = fr();
  if (e !== "firstParty") return `Cloud sessions aren't available with ${ote[e]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  return dW("allow_remote_sessions", "Cloud sessions", "are");
}