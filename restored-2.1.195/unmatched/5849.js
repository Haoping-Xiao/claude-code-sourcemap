// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fUc
// matched 2.1.88 source: node_modules/parse5/lib/common/html.js
// class=new  jaccard=0.0161  score=0.0965  fileCov=0.019
// note: nearest: node_modules/parse5/lib/common/html.js (0.0161); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fUc = E(() => {
  fd();
  je();
  Jt();
});
function mUc(e, t) {
  let n = t?.external?.pending_action,
    r = n?.request_id;
  if (!r) return;
  if ([...e.getPendingPermissionRequests(), ...e.getPendingUserDialogRequests()].some(s => s.request_id === r)) {
    T(`[resumeStalePromptCancel] pending_action ${r} is owned by this worker \u2014 redelivery handles it, skipping cancel`);
    return;
  }
  T(`[resumeStalePromptCancel] cancelling stale parked prompt ${r} from a prior worker`), e.write({
    type: "control_cancel_request",
    request_id: r
  }), G("tengu_resume_stale_prompt_cancel", {
    kind: $e(n.tool_name?.startsWith("dialog:") ? "dialog" : "permission")
  });
}