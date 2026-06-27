// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mLe
// matched 2.1.88 source: src/services/compact/microCompact.ts
// class=modified  jaccard=0.1771  score=0.426  fileCov=0.2326
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mLe = E(() => {
  ft();
  je();
  wr();
  vn();
  Yf();
  Jt();
  zb();
  kt();
  Du();
  ((Zla = require("fs")), (sNn = require("fs/promises")), (eca = require("path")));
  V8 = new Map();
  lcp = ve(() =>
    dt.record(
      dt.string(),
      dt.object({
        systemHash: dt.number(),
        toolsHash: dt.number(),
        cacheControlHash: dt.number(),
        toolNames: dt.array(dt.string()),
        perToolHashes: dt.record(dt.string(), dt.number()),
        perBlockHashes: dt.array(dt.number()),
        perBlockLengths: dt.array(dt.number()),
        systemCharCount: dt.number(),
        model: dt.string(),
        fastMode: dt.boolean(),
        globalCacheStrategy: dt.string(),
        betas: dt.array(dt.string()),
        autoModeActive: dt.boolean(),
        isUsingOverage: dt.boolean(),
        is1hCacheTTL: dt.boolean().default(!1),
        queryDepth: dt.number().optional(),
        cacheDiagnosis: dt.boolean().default(!1),
        effortValue: dt.string(),
        extraBodyHash: dt.number(),
        callCount: dt.number(),
        prevCacheReadTokens: dt.number().nullable(),
        cacheDeletionsPending: dt.boolean(),
        messageHashes: dt.array(dt.number()),
      }),
    ),
  );
  Xla = Promise.resolve();
  dcp = ["repl_main_thread", "sdk", "agent:custom", "agent:default", "agent:builtin"];
  hcp = new Set([
    "type",
    "text",
    "thinking",
    "id",
    "tool_use_id",
    "name",
    "input",
    "source",
    "content",
    "cache_control",
  ]);
});
function Tcp(e) {
  if (!e.content) return 0;
  if (typeof e.content === "string") return If(e.content);
  return e.content.reduce((t, n) => {
    if (n.type === "text") return t + If(n.text);
    else if (n.type === "image" || n.type === "document") return t + Acp;
    return t;
  }, 0);
}
function vcp(e) {
  let t = [];
  for (let n of e)
    if (n.type === "assistant" && Array.isArray(n.message.content)) {
      for (let r of n.message.content) if (r.type === "tool_use" && Hcp.has(r.name)) t.push(r.id);
    }
  return t;
}
function uca(e, t) {
  let n = [];
  for (let r of e) {
    if (r.type !== "assistant" || !Array.isArray(r.message.content)) continue;
    for (let o of r.message.content)
      if (o.type === "tool_use" && o.name === Ds && t.has(o.id)) {
        let s = o.input.file_path;
        if (typeof s === "string") n.push(s);
      }
  }
  return n;
}
function wcp(e) {
  return typeof e === "string" && (e === aNn || e.startsWith(Ecp));
}
function hao(e, t) {
  let n = vcp(e),
    r = Math.max(1, t),
    o = new Set(n.slice(-r)),
    s = new Set(n.filter((l) => !o.has(l))),
    i = 0,
    a = [];
  if (s.size > 0)
    for (let l of e) {
      if (l.type !== "user" || !Array.isArray(l.message.content)) continue;
      for (let c of l.message.content)
        if (c.type === "tool_result" && s.has(c.tool_use_id) && !wcp(c.content))
          ((i += Tcp(c)), a.push(c));
    }
  return {
    clearSet: s,
    keepSet: o,
    tokensSaved: i,
    candidates: a,
  };
}
function Ujt(e, t, n) {
  if (t.size === 0) return [...e];
  return e.map((r) => {
    if (r.type !== "user" || !Array.isArray(r.message.content)) return r;
    let o = !1,
      s = r.message.content.map((i) => {
        if (i.type !== "tool_result" || !t.has(i.tool_use_id)) return i;
        let l =
          Array.isArray(i.content) &&
          i.content.some((c) => c.type === "image" || c.type === "document")
            ? aNn
            : (n?.get(i.tool_use_id) ?? aNn);
        if (i.content === l) return i;
        return (
          (o = !0),
          {
            ...i,
            content: l,
          }
        );
      });
    return o
      ? {
          ...r,
          message: {
            ...r.message,
            content: s,
          },
        }
      : r;
  });
}
async function dca(e, t, n) {
  let { keepSet: r, tokensSaved: o, candidates: s } = hao(e, n.keepRecent);
  if (o < gao) return null;
  let i = new Set(s.map((c) => c.tool_use_id)),
    a = new Map();
  for (let c of s) {
    let u = c.content ? await n.persist?.(c.content, c.tool_use_id) : null;
    a.set(c.tool_use_id, u ?? aNn);
  }
  let l = Ujt(e, i, a);
  if (
    (G("tengu_time_based_microcompact", {
      toolsCleared: i.size,
      toolsKept: r.size,
      keepRecent: n.keepRecent,
      tokensSaved: o,
      trigger: We("context_hint"),
    }),
    xe("compact_micro_keep_recent"),
    T(
      `[KEEP-RECENT MC] context_hint trigger, cleared ${i.size} tool results (~${o} tokens), kept last ${r.size}`,
    ),
    gut(),
    WX() && t)
  )
    aca(t);
  return {
    messages: l,
    tokensSaved: o,
    clearedIds: i,
    clearedContent: a,
  };
}
var aNn = "[Old tool result content cleared]",
  Ecp = "<persisted-output>",
  gao = 20000,
  Acp = 2000,
  Hcp;
