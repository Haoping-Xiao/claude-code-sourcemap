// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EAe
// matched 2.1.88 source: src/components/permissions/PermissionRuleExplanation.tsx
// class=partial  jaccard=0.0619  score=0.172  fileCov=0.0882
// note: low-confidence suggestion: src/components/permissions/PermissionRuleExplanation.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EAe = E(() => {
  fp();
});
function Frl(e) {
  if (e.behavior === "ask") return "user-rejected";
  let t = e.decisionReason;
  if (t.type === "classifier" && t.classifier === "auto-mode") {
    if (t.reason === n2e) return "automode-unavailable";
    if (t.reason.startsWith(wwo)) return "automode-parsing-error";
    return "automode-blocked";
  }
  return "permission-rule";
}
function AAe() {
  return jrl().value;
}
function jrl() {
  return {
    value: !1,
    src: "default"
  };
}
var wwo = "Auto mode could not evaluate this action and is blocking it for safety";