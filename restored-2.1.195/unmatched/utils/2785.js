// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nue
// matched 2.1.88 source: src/tools/AgentTool/builtInAgents.ts
// class=new  jaccard=0.0317  score=0.5545  fileCov=0.0325
// note: nearest: src/tools/AgentTool/builtInAgents.ts (0.0317); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nue = E(() => {
  Un();
  jc();
  oo();
  Lx();
  RE();
  fn();
  Ls();
  qd();
  Sx();
});
function Gv() {
  if (!ut(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return false;
  if (Ax() && !da() && !ut(process.env.CLAUDE_CODE_REMOTE)) return false;
  return true;
}