// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mIl
// matched 2.1.88 source: node_modules/dom-mutator/dist/dom-mutator.cjs.production.min.js
// class=partial  jaccard=0.0845  score=0.1707  fileCov=0.1433
// note: low-confidence suggestion: node_modules/dom-mutator/dist/dom-mutator.cjs.production.min.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mIl = E(() => {
  At();
  vn();
  TTf = [];
});
function UKt(e, t) {
  let n = e.discardAndAbortInFlight(Vct());
  if (G("tengu_fallback_sweep_tools", {
    lane: $e(t),
    aborted: n.aborted,
    completed_before_event: n.completedBeforeEvent,
    queued_never_started: n.queuedNeverStarted,
    compensated_removes: n.toolUseIds.length
  }), n.toolUseIds.length === 0) return;
  return {
    type: "set_in_progress_tool_use_ids",
    op: {
      action: "remove",
      ids: n.toolUseIds
    },
    reason: "fallback_sweep"
  };
}