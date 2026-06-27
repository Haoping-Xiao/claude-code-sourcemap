// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J_t
// matched 2.1.88 source: src/migrations/migrateSonnet1mToSonnet45.ts
// class=partial  jaccard=0.0824  score=0.1837  fileCov=0.13
// note: low-confidence suggestion: src/migrations/migrateSonnet1mToSonnet45.ts; 2 renamed
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
  if (e !== uC) return !1;
  if (t.options.isNonInteractiveSession) return !1;
  if (Fr(t).shouldAvoidPermissionPrompts) return !1;
  if (Js()) return !1;
  if (X_t()) return !1;
  if (Xte(t.options.mainLoopModel, gg(t), g7n(t))) return !1;
  return !Hmn();
}
function recordWorkflowUsageConsent() {
  if (Hmn()) return;
  let {
    error: e
  } = io("userSettings", {
    skipWorkflowUsageWarning: !0
  });
  if (e) {
    T(`Failed to persist skipWorkflowUsageWarning: ${e.message}`, {
      level: "error"
    });
    return;
  }
  G("tengu_workflow_usage_warning_accepted", {});
}