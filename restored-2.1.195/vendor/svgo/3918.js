// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dht
// matched 2.1.88 source: src/commands/insights.ts
// class=vendor  jaccard=0.0129  score=0.6456  fileCov=0.013
// note: identified by fingerprint: svgo; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function XPe(e, ...t) {
  let n = new Set(t);
  return e.messages.some(r => r.type === "assistant" && Array.isArray(r.message.content) && r.message.content.some(o => o.type === "tool_use" && n.has(o.name)));
}
function vHo(e) {
  return XPe(e, ka, Wc, RI);
}
function K7p(e) {
  return e.messages.some(t => t.type === "user" && !t.isMeta && Array.isArray(t.message.content) && t.message.content.some(n => n.type === "image"));
}
function P9n(e) {
  return On(e.messages, ESe);
}
function PXa(e) {
  let t = e.findLast(i => i.type === "assistant");
  if (t?.type !== "assistant") return {
    thinking: 0,
    output: 0
  };
  let n = t.message.id,
    r = 0;
  for (let i of e) {
    if (i.type !== "assistant" || i.message.id !== n) continue;
    for (let a of i.message.content) if (a.type === "text") r += a.text.length;else if (a.type === "tool_use") r += De(a.input).length;
  }
  let o = Math.round(r / 4),
    s = t.message.usage?.output_tokens ?? 0;
  return {
    thinking: Math.max(0, s - o),
    output: o
  };
}
function MXa(e, t) {
  if (t.size === 0) return 0;
  let n = new Set(),
    r = 0;
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (!i) continue;
    if (ESe(i)) {
      if (++r >= Y7p) break;
    } else if (i.type === "assistant" && Array.isArray(i.message.content)) for (let a of i.message.content) {
      if (a.type !== "tool_use") continue;
      if (!a.input || typeof a.input !== "object") continue;
      if (!("file_path" in a.input)) continue;
      let l = a.input.file_path;
      if (typeof l === "string") n.add(DXa.normalize(l));
    }
  }
  let o = 0;
  for (let [s, i] of t.entries()) if (!n.has(s)) o += i.contentLength ?? i.content.length;
  return Math.round(o / 4);
}
function $Xa(e) {
  let t;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r && ESe(r)) if (t === void 0) t = r.timestamp;else return (Date.parse(t) - Date.parse(r.timestamp)) / 60000;
  }
  return 0;
}
function OXa(e, t) {
  return M9n.filter(n => !t.has(n.id) && (n.when?.(e) ?? true));
}
var DXa,
  Y7p = 10,
  D9n = 50,
  M9n;