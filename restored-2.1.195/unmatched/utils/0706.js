// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vf
// matched 2.1.88 source: src/utils/settings/changeDetector.ts
// class=new  jaccard=0.0467  score=1  fileCov=0.0467
// note: nearest: src/utils/settings/changeDetector.ts (0.0467); dir inferred from dep-graph -> utils; 0 renamed
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