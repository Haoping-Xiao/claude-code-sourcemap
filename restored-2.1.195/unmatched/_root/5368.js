// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dpc
// matched 2.1.88 source: src/commands/remote-env/index.ts
// class=new  jaccard=0.058  score=0.1639  fileCov=0.0823
// note: nearest: src/commands/remote-env/index.ts (0.058); dir inferred from dep-graph -> _root; 0 renamed
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