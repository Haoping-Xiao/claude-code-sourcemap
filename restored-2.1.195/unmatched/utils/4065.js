// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EAe
// matched 2.1.88 source: src/hooks/useCanUseTool.tsx
// class=new  jaccard=0.046  score=0.3374  fileCov=0.0505
// note: nearest: src/hooks/useCanUseTool.tsx (0.046); dir inferred from dep-graph -> utils; 0 renamed
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
    value: false,
    src: "default"
  };
}
var wwo = "Auto mode could not evaluate this action and is blocking it for safety";