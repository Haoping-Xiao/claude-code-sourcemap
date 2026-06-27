// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X4
// matched 2.1.88 source: src/utils/groupToolUses.ts
// class=partial  jaccard=0.2466  score=1  fileCov=0.2466
// note: low-confidence suggestion: src/utils/groupToolUses.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var X4 = E(() => {
  fn();
  ZVt = {}, YQa = {};
});
function pTo() {
  return new Set((process.env.CLAUDE_CODE_TERMINAL_MCP_TOOLS ?? "").split(",").map(e => e.trim()).filter(Boolean));
}
function mZa(e) {
  let t = pTo();
  if (t.size === 0) return !1;
  let n = new Set();
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "user") {
      if (o.isMeta) continue;
      let s = o.message.content;
      if (!Array.isArray(s)) return !1;
      let i = !1;
      for (let a of s) if (a.type === "tool_result") {
        if (i = !0, !a.is_error) n.add(a.tool_use_id);
      }
      if (!i) return !1;
    } else if (o.type === "assistant") {
      for (let s of o.message.content) if (s.type === "tool_use" && n.has(s.id) && t.has(s.name)) return !0;
    }
  }
  return !1;
}
async function nR(e, t) {
  try {
    let n = await g8n.lstat(e);
    if (!n.isFile() || n.size > t) return null;
    return await g8n.readFile(e, "utf8");
  } catch {
    return null;
  }
}
var g8n;