// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mLe
// matched 2.1.88 source: src/services/compact/microCompact.ts
// class=modified  jaccard=0.1011  score=0.251  fileCov=0.1448
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mLe] deps: services/analytics/index.ts, utils/debug.ts, main.tsx, utils/sequential.ts, utils/task/diskOutput.ts, utils/fsOperations.ts, zod/v4/classic/schemas.js, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts
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
      is1hCacheTTL: dt.boolean().default(false),
      queryDepth: dt.number().optional(),
      cacheDiagnosis: dt.boolean().default(false),
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
function calculateToolResultTokens(block) {
  if (!block.content) return 0;
  if (typeof block.content === "string") return If(block.content);
  return block.content.reduce((t, n) => {
    if (n.type === "text") return t + If(n.text);
    else if (n.type === "image" || n.type === "document") return t + Acp;
    return t;
  }, 0);
}
function estimateMessageTokens(messages) {
  let t = [];
  for (let n of messages)
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
  return typeof e === "string" && (e === TIME_BASED_MC_CLEARED_MESSAGE || e.startsWith(Ecp));
}
function hao(e, t) {
  let n = estimateMessageTokens(e),
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
          ((i += calculateToolResultTokens(c)), a.push(c));
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
    let o = false,
      s = r.message.content.map((i) => {
        if (i.type !== "tool_result" || !t.has(i.tool_use_id)) return i;
        let l =
          Array.isArray(i.content) &&
          i.content.some((c) => c.type === "image" || c.type === "document")
            ? TIME_BASED_MC_CLEARED_MESSAGE
            : (n?.get(i.tool_use_id) ?? TIME_BASED_MC_CLEARED_MESSAGE);
        if (i.content === l) return i;
        return (
          (o = true),
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
async function maybeTimeBasedMicrocompact(messages, querySource, n) {
  let { keepSet: r, tokensSaved: o, candidates: s } = hao(messages, n.keepRecent);
  if (o < gao) return null;
  let i = new Set(s.map((c) => c.tool_use_id)),
    a = new Map();
  for (let c of s) {
    let u = c.content ? await n.persist?.(c.content, c.tool_use_id) : null;
    a.set(c.tool_use_id, u ?? TIME_BASED_MC_CLEARED_MESSAGE);
  }
  let l = Ujt(messages, i, a);
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
    WX() && querySource)
  )
    aca(querySource);
  return {
    messages: l,
    tokensSaved: o,
    clearedIds: i,
    clearedContent: a,
  };
}
var TIME_BASED_MC_CLEARED_MESSAGE = "[Old tool result content cleared]",
  Ecp = "<persisted-output>",
  gao = 20000,
  Acp = 2000,
  Hcp;
