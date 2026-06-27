// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ria
// matched 2.1.88 source: src/utils/config.ts
// class=new  jaccard=0.0076  score=0.1564  fileCov=0.0079
// note: nearest: src/utils/config.ts (0.0076); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ria = E(() => {
  eLe();
});
function l1n() {
  return at("tengu_amber_redwood2", "") || at("tengu_amber_redwood3", "");
}
function pC() {
  if (Oe.DISABLE_COMPACT) return !1;
  if (ut(process.env.DISABLE_AUTO_COMPACT)) return !1;
  return wc("autoCompactEnabled", !0).value;
}
function $X() {
  if (ut(process.env.CLAUDE_CODE_REMOTE)) {
    if (oia ??= at("tengu_reactive_compact_remote", !1), !oia) return !1;
  }
  return !0;
}
function tLe(e) {
  return e !== void 0 && eap.has(e);
}
function Gct(e) {
  if (e === "compact") return !0;
  return !1;
}
var sia = "claude-opus-4-8",
  oia,
  eap;