// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fze
// matched 2.1.88 source: src/utils/api.ts
// class=modified (alt of src/utils/api.ts)  jaccard=0.0324  score=0.1911  fileCov=0.0375
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fze] deps: utils/api.ts, context.ts, types/generated/google/protobuf/timestamp.ts, services/analytics/growthbook.ts, utils/debug.ts, services/mcp/client.ts, tools/BashTool/BashTool.tsx, tools/FileEditTool/FileEditTool.ts, tools/FileEditTool/utils.ts, tools/FileWriteTool/FileWriteTool.ts, utils/sessionActivity.ts, services/teamMemorySync/secretScanner.ts, Tool.ts, U1, services/mockRateLimits.ts, commands/insights.ts, tools/GlobTool/prompt.ts, services/PromptSuggestion/promptSuggestion.ts, utils/betas.ts, utils/fsOperations.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/sequential.ts, utils/messages.ts, utils/model/configs.ts, k0, utils/agentContext.ts, utils/status.tsx, utils/task/diskOutput.ts, utils/permissions/filesystem.ts, utils/platform.ts, utils/ripgrep.ts, utils/fsOperations.ts, utils/auth.ts, utils/windowsPaths.ts, utils/toolSearch.ts
mac = require("crypto");
Ztm = {
  [jD]: ["launchSwarm", "teammateCount"],
  [ss]: ["name", "team_name", "mode"],
};
fac = new WeakMap();
function bac(e) {
  let { hasThinking: t = false } = e ?? {};
  if (t)
    return {
      edits: [
        {
          type: "clear_thinking_20251015",
          keep: "all",
        },
      ],
    };
  return;
}
function Sac(e, t) {
  let n = e === "document" ? "Document" : "Image",
    r = Ix(
      t
        .replace(/.*messages[.[]\d+[\].]+content[.[]\d+[\].]+\S*:?\s*/, "")
        .replace(/["}]+\s*$/, "")
        .replace(/\s+/g, " ")
        .trim(),
      200,
    ),
    o = r.length > 0 ? ` (${r})` : "";
  return `[${n} removed: the API could not process this ${e}${o}. The file may be unsupported or corrupt; do not retry reading it. If you need to inspect it, use a shell command instead.]`;
}
function Eac(e, t, n) {
  if (t(e)) return n;
  if (e.type === "tool_result" && "content" in e && Array.isArray(e.content) && e.content.some(t))
    return {
      ...e,
      content: e.content.map((r) => (t(r) ? n : r)),
    };
  return e;
}
function Aac(e, t, n) {
  let r = e[t.messageIdx];
  if (r?.type !== "user" || !Array.isArray(r.message.content)) return e;
  let o = r.message.content[t.contentIdx];
  if (!o) return e;
  let s = Eac(o, (a) => a.type === t.kind, {
    type: "text",
    text: Sac(t.kind, n),
  });
  if (s === o) return e;
  let i = {
    ...r,
    message: {
      ...r.message,
      content: r.message.content.map((a, l) => (l === t.contentIdx ? s : a)),
    },
  };
  return e.map((a, l) => (l === t.messageIdx ? i : a));
}
function snm(e, t) {
  if (e.type !== t || !("source" in e)) return false;
  let n = e.source;
  return typeof n === "object" && n !== null && "type" in n && n.type === "base64";
}
function inm(e, t, n) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return e;
  let r = false,
    o = e.message.content.map((s) => {
      let i = Eac(s, t, n);
      if (i !== s) r = true;
      return i;
    });
  return r
    ? {
        ...e,
        message: {
          ...e.message,
          content: o,
        },
      }
    : e;
}
function Hac(e, t, n) {
  let r = {
      type: "text",
      text: Sac(t, n),
    },
    o = (s) => snm(s, t);
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (!i) continue;
    let a = inm(i, o, r);
    if (a !== i)
      return {
        messages: e.map((l, c) => (c === s ? a : l)),
        carrierIdx: s,
      };
  }
  return;
}
