// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aze
// matched 2.1.88 source: src/utils/contentArray.ts
// class=partial  jaccard=0.1605  score=0.1768  fileCov=0.6365
// note: low-confidence suggestion: src/utils/contentArray.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aze = E(() => {
  fd();
  Mm();
  fn();
  gLo = new Map();
});
function iHl(e) {
  return e?._meta?.["claude/endTurn"] === !0;
}
function SLo(e) {
  if (e.type !== "user") return !1;
  let t = e.toolEndsTurn ? "tool" : iHl(e.mcpMeta) ? "mcp_meta" : !1;
  if (!t) return !1;
  let n = e.message.content;
  if (Array.isArray(n) && n.some(r => r.type === "tool_result" && r.is_error === !0)) return !1;
  return t;
}
function ELo(e, t) {
  if (!e) return t;
  return iHl(t) ? s_f : void 0;
}
var s_f;