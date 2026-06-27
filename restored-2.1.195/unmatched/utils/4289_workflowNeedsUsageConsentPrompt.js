// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J_t
// matched 2.1.88 source: src/tools/AgentTool/runAgent.ts
// class=new  jaccard=0.0151  score=0.3099  fileCov=0.0156
// note: nearest: src/tools/AgentTool/runAgent.ts (0.0151); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var J_t = E(() => {
  dn();
  je();
  vn();
  Jt();
  Mp();
  YI();
  hN();
  hP();
});
var c0o = {};
_t(c0o, {
  workflowNeedsUsageConsentPrompt: () => workflowNeedsUsageConsentPrompt,
  recordWorkflowUsageConsent: () => recordWorkflowUsageConsent
});
function workflowNeedsUsageConsentPrompt(e, t) {
  if (e !== uC) return false;
  if (t.options.isNonInteractiveSession) return false;
  if (Fr(t).shouldAvoidPermissionPrompts) return false;
  if (Js()) return false;
  if (X_t()) return false;
  if (Xte(t.options.mainLoopModel, gg(t), g7n(t))) return false;
  return !Hmn();
}
function recordWorkflowUsageConsent() {
  if (Hmn()) return;
  let {
    error: e
  } = io("userSettings", {
    skipWorkflowUsageWarning: true
  });
  if (e) {
    T(`Failed to persist skipWorkflowUsageWarning: ${e.message}`, {
      level: "error"
    });
    return;
  }
  G("tengu_workflow_usage_warning_accepted", {});
}