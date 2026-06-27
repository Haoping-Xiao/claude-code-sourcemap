// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mIl
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=new  jaccard=0.0052  score=0.1341  fileCov=0.0053
// note: nearest: src/commands/plugin/ManagePlugins.tsx (0.0052); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mIl] deps: At, vn
TTf = [];
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