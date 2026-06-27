// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WMo
// matched 2.1.88 source: src/state/selectors.ts
// class=modified  jaccard=0.3962  score=1  fileCov=0.3962
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var WMo = E(() => {
  ft();
  S_();
  ((t0l = []), (n0l = new Set()));
});
function cOe(e) {
  return xZn(e.viewingAgentTaskId, e.tasks).teammate;
}
function gYt(e) {
  let { teammate: t, localAgent: n } = xZn(e.viewingAgentTaskId, e.tasks);
  if (t)
    return {
      type: "viewed",
      task: t,
    };
  if (n)
    return {
      type: "named_agent",
      task: n,
    };
  return {
    type: "leader",
  };
}
