// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aze
// matched 2.1.88 source: src/utils/queryHelpers.ts
// class=new  jaccard=0.0361  score=0.421  fileCov=0.0379
// note: nearest: src/utils/queryHelpers.ts (0.0361); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aze] deps: utils/debugFilter.ts, utils/git/gitConfigParser.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs
gLo = new Map();
function iHl(e) {
  return e?._meta?.["claude/endTurn"] === true;
}
function SLo(e) {
  if (e.type !== "user") return false;
  let t = e.toolEndsTurn ? "tool" : iHl(e.mcpMeta) ? "mcp_meta" : false;
  if (!t) return false;
  let n = e.message.content;
  if (Array.isArray(n) && n.some(r => r.type === "tool_result" && r.is_error === true)) return false;
  return t;
}
function ELo(e, t) {
  if (!e) return t;
  return iHl(t) ? s_f : void 0;
}
var s_f;