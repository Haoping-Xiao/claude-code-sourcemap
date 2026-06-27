// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ria
// matched 2.1.88 source: src/services/compact/autoCompact.ts
// class=new  jaccard=0.0337  score=0.2949  fileCov=0.0367
// note: nearest: src/services/compact/autoCompact.ts (0.0337); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function l1n() {
  return at("tengu_amber_redwood2", "") || at("tengu_amber_redwood3", "");
}
function pC() {
  if (Oe.DISABLE_COMPACT) return false;
  if (ut(process.env.DISABLE_AUTO_COMPACT)) return false;
  return wc("autoCompactEnabled", true).value;
}
function $X() {
  if (ut(process.env.CLAUDE_CODE_REMOTE)) {
    if (oia ??= at("tengu_reactive_compact_remote", false), !oia) return false;
  }
  return true;
}
function tLe(e) {
  return e !== void 0 && eap.has(e);
}
function Gct(e) {
  if (e === "compact") return true;
  return false;
}
var sia = "claude-opus-4-8",
  oia,
  eap;