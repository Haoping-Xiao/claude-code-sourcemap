// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vf
// matched 2.1.88 source: src/tools/AgentTool/agentDisplay.ts
// class=partial  jaccard=0.2009  score=1  fileCov=0.2009
// note: low-confidence suggestion: src/tools/AgentTool/agentDisplay.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vf = E(() => {
  ft();
  fv = ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
  OO = ["userSettings", "projectSettings", "localSettings"], DRt = ["localSettings", "projectSettings", "userSettings"];
});
function wRr(e) {
  wfn.set(e, Date.now());
}
function hvs(e, t) {
  let n = wfn.get(e);
  if (n !== void 0 && Date.now() - n < t) return wfn.delete(e), true;
  return false;
}
function yvs() {
  wfn.clear();
}
var wfn;