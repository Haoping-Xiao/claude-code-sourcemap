// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WMo
// matched 2.1.88 source: src/state/selectors.ts
// class=modified  jaccard=0.2185  score=0.4584  fileCov=0.2945
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WMo] deps: ft, S_
((t0l = []), (n0l = new Set()));
function cOe(e) {
  return xZn(e.viewingAgentTaskId, e.tasks).teammate;
}
function getActiveAgentForInput(appState) {
  let { teammate: t, localAgent: n } = xZn(appState.viewingAgentTaskId, appState.tasks);
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
