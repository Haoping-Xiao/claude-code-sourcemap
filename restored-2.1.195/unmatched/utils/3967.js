// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X4
// matched 2.1.88 source: src/utils/attachments.ts
// class=new  jaccard=0.0092  score=0.6272  fileCov=0.0093
// note: nearest: src/utils/attachments.ts (0.0092); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module X4] deps: fn
ZVt = {}, YQa = {};
function pTo() {
  return new Set((process.env.CLAUDE_CODE_TERMINAL_MCP_TOOLS ?? "").split(",").map(e => e.trim()).filter(Boolean));
}
function mZa(e) {
  let t = pTo();
  if (t.size === 0) return false;
  let n = new Set();
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "user") {
      if (o.isMeta) continue;
      let s = o.message.content;
      if (!Array.isArray(s)) return false;
      let i = false;
      for (let a of s) if (a.type === "tool_result") {
        if (i = true, !a.is_error) n.add(a.tool_use_id);
      }
      if (!i) return false;
    } else if (o.type === "assistant") {
      for (let s of o.message.content) if (s.type === "tool_use" && n.has(s.id) && t.has(s.name)) return true;
    }
  }
  return false;
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