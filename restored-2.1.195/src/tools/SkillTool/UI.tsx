// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SAe
// matched 2.1.88 source: src/tools/SkillTool/UI.tsx
// class=modified  jaccard=0.224  score=0.3602  fileCov=0.3719
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SAe] deps: services/mcp/auth.ts, utils/debug.ts, services/api/dumpPrompts.ts, utils/messages.ts, services/PromptSuggestion/speculation.ts, services/analytics/index.ts, utils/sessionStorage.ts, utils/api.ts, context.ts, coordinator/coordinatorMode.ts, utils/telemetry/betaSessionTracing.ts, services/analytics/growthbook.ts, services/compact/compact.ts, services/compact/microCompact.ts, tasks/LocalShellTask/killShellTasks.ts, services/mcp/client.ts, services/mcp/utils.ts, tools/FileWriteTool/prompt.ts, tasks/LocalShellTask/LocalShellTask.tsx, utils/agentId.ts, d8t, utils/hooks/registerFrontmatterHooks.ts, utils/teammateContext.ts, services/PromptSuggestion/speculation.ts, Il, utils/plugins/schemas.ts, main.tsx, tools/FileReadTool/FileReadTool.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/nativeInstaller/download.ts, utils/claudemd.ts, cli/print.ts, services/AgentSummary/agentSummary.ts, utils/worktree.ts, utils/messages.ts, utils/systemPrompt.ts, L3e, utils/permissions/PermissionMode.ts, utils/stats.ts, utils/plans.ts, utils/hooks/hooksConfigSnapshot.ts, services/teamMemorySync/secretScanner.ts, utils/telemetry/sessionTracing.ts, @smithy/core/dist-cjs/submodules/cbor/index.js, utils/sessionUrl.ts, tools/AgentTool/built-in/exploreAgent.ts, tools/AgentTool/built-in/exploreAgent.ts, tools/ToolSearchTool/prompt.ts, tools/AgentTool/loadAgentsDir.ts
((kIo = require("crypto")), (cq = require("path")));
function _cl(e, t) {
  if (!t) return e;
  return e.map((n) => {
    if (n.type === "user")
      return {
        ...n,
        sourceToolUseID: t,
      };
    return n;
  });
}
function bcl(e, t) {
  let n = e.message.content.find((r) => r.type === "tool_use" && r.name === t);
  return n && n.type === "tool_use" ? n.id : void 0;
}
function renderToolResultMessage(output) {
  if ("status" in output && output.status === "forked")
    return JI.jsx(qn, {
      height: 1,
      children: JI.jsx(w, {
        children: JI.jsx(Tn, {
          children: ["Done"],
        }),
      }),
    });
  let t = ["Successfully loaded skill"];
  if ("allowedTools" in output && output.allowedTools && output.allowedTools.length > 0) {
    let n = output.allowedTools.length;
    t.push(`${n} ${bn(n, "tool")} allowed`);
  }
  if ("model" in output && output.model) t.push(output.model);
  return JI.jsx(qn, {
    height: 1,
    children: JI.jsx(w, {
      children: JI.jsx(Tn, {
        children: t,
      }),
    }),
  });
}
function renderToolUseMessage({ skill: e }, { commands: t }) {
  if (!e) return null;
  let n = e.trim(),
    r = n.startsWith("/") ? n.substring(1) : n,
    o = t?.find((a) => a.name === r),
    s = o?.loadedFrom === "commands_DEPRECATED" ? `/${r}` : r,
    i = o8t(o?.type === "prompt" ? o.source : void 0, r);
  return i ? `${s} \xB7 by ${i}` : s;
}
function renderToolUseProgressMessage(progressMessages, { tools: t, verbose: n }) {
  if (!progressMessages.length)
    return JI.jsx(qn, {
      height: 1,
      children: JI.jsx(w, {
        dimColor: true,
        children: INITIALIZING_TEXT,
      }),
    });
  let r = n ? progressMessages : progressMessages.slice(-raf),
    o = progressMessages.length - r.length,
    { inProgressToolUseIDs: s } = j8t(progressMessages.map((i) => i.data));
  return JI.jsx(qn, {
    children: JI.jsxs(U, {
      flexDirection: "column",
      children: [
        JI.jsx(p4t, {
          children: r.map((i) =>
            JI.jsx(
              U,
              {
                height: 1,
                overflow: "hidden",
                children: JI.jsx(dQ, {
                  message: i.data.message,
                  lookups: LAe,
                  addMargin: false,
                  tools: t,
                  commands: [],
                  verbose: n,
                  inProgressToolUseIDs: s,
                  progressMessagesForMessage: [],
                  shouldAnimate: false,
                  shouldShowDot: false,
                  style: "condensed",
                  isTranscriptMode: false,
                  isStatic: true,
                }),
              },
              i.uuid,
            ),
          ),
        }),
        JI.jsx(d$, {
          count: o,
          unit: "tool use",
        }),
      ],
    }),
  });
}
function Acl(e, { progressMessagesForMessage: t, tools: n, verbose: r }) {
  return JI.jsxs(JI.Fragment, {
    children: [
      renderToolUseProgressMessage(t, {
        tools: n,
        verbose: r,
      }),
      JI.jsx(jpe, {}),
    ],
  });
}
function Hcl(e, { progressMessagesForMessage: t, tools: n, verbose: r }) {
  return JI.jsxs(JI.Fragment, {
    children: [
      renderToolUseProgressMessage(t, {
        tools: n,
        verbose: r,
      }),
      JI.jsx(AT, {
        result: e,
        verbose: r,
      }),
    ],
  });
}
var JI,
  raf = 3,
  INITIALIZING_TEXT = "Initializing\u2026";
