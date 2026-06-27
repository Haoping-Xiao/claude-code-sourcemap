// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tYo
// matched 2.1.88 source: src/commands/review.ts
// class=modified (alt of src/commands/review.ts)  jaccard=0.0226  score=0.0299  fileCov=0.0848
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: mountFleetViewWithComposerBack
// [unwrapped __esm module tYo] deps: @mixmark-io/domino/lib/Document.js, @xmldom/xmldom/lib/entities.js, signal-exit/dist/mjs/index.js, services/analytics/index.ts, lH, bridge/bridgeMessaging.ts, N4o, utils/sessionStorage.ts, components/PromptInput/Notifications.tsx, commands/ide/ide.tsx, hooks/useMemoryUsage.ts, components/CustomSelect/select.tsx, react/cjs/react.production.js, components/IdeOnboardingDialog.tsx, components/ConfigurableShortcutHint.tsx, hooks/useMainLoopModel.ts, components/LogoV2/AnimatedClawd.tsx, components/messages/teamMemCollapsed.tsx, components/permissions/rules/AddWorkspaceDirectory.tsx, utils/shell/readOnlyCommandValidation.ts, components/Settings/Config.tsx, @xmldom/xmldom/lib/entities.js, components/tasks/ShellDetailDialog.tsx, @xmldom/xmldom/lib/entities.js, context/notifications.tsx, state/AppState.tsx, undici/lib/web/fileapi/util.js, utils/Cursor.ts, react/cjs/react.production.js, hooks/useTextInput.ts, hooks/useIdeAtMentioned.ts, ink/hooks/use-declared-cursor.ts, hooks/useSearchInput.ts, services/voiceKeyterms.ts, components/design-system/Ratchet.tsx, hooks/renderPlaceholder.ts, services/compact/compactWarningHook.ts, utils/sessionState.ts, utils/sideQuestion.ts, ink/events/focus-event.ts, ink/hooks/use-stdin.ts, components/Settings/Config.tsx, react/cjs/react.production.js, react/cjs/react.production.js, HI, m8, marked/lib/marked.esm.js, ink/terminal.ts, Y3e, utils/env.ts, hooks/useTerminalSize.ts, entrypoints/sdk/coreSchemas.ts, components/mcp/ElicitationDialog.tsx, utils/cleanup.ts, skills/bundled/verifyContent.ts, main.tsx, utils/claudeInChrome/common.ts, utils/mailbox.ts, undici/lib/core/symbols.js, highlight.js/lib/languages/sql.js, dn, services/analytics/growthbook.ts, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, bridge/bridgeEnabled.ts, utils/semver.ts, utils/shell/readOnlyCommandValidation.ts, utils/renderOptions.ts, context/notifications.tsx, tools/AgentTool/agentColorManager.ts, @xmldom/xmldom/lib/entities.js, services/PromptSuggestion/promptSuggestion.ts, @mixmark-io/domino/lib/htmlelts.js, utils/debugFilter.ts, utils/concurrentSessions.ts, utils/config.ts, utils/fsOperations.ts, utils/debug.ts, main.tsx, utils/errors.ts, utils/profilerBase.ts, utils/fsOperations.ts, main.tsx, tools/shared/gitOperationTracking.ts, utils/git.ts, hooks/useClipboardImageHint.ts, ink/line-width-cache.ts, utils/sequential.ts, components/LogoV2/feedConfigs.tsx, hooks/usePasteHandler.ts, utils/agentContext.ts, query.ts, utils/file.ts, utils/plugins/pluginDirectories.ts, utils/platform.ts, commands/memory/memory.tsx, services/teamMemorySync/secretScanner.ts, components/TextInput.tsx, main.tsx, services/remoteManagedSettings/securityCheck.tsx, tools/SkillTool/prompt.ts, utils/plugins/loadPluginAgents.ts, utils/path.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, utils/agentSwarmsEnabled.ts, utils/format.ts, utils/conversationRecovery.ts, tools/AgentTool/loadAgentsDir.ts, ink/styles.ts, ink/components/AlternateScreen.tsx, utils/sessionStorage.ts, components/Feedback.tsx
((D7e = R(lt(), 1)),
  (Dkc = require("crypto")),
  (Pkc = require("fs/promises")),
  (Gme = require("path")),
  (zKo = R(rt(), 1)),
  (jr = R(rt(), 1)),
  (Mkc = require("url")),
  (ur = R(se(), 1)));
IKo = /[\x00-\x08\x0E-\x1F\x7F-\x9F]/g;
((LKo = ["review", "blocked", "working", "done"]),
  (Hkc = {
    review: "Ready for review",
    blocked: "Needs input",
    working: "Working",
    done: "Completed",
  }),
  (HTm = {
    review: "",
    blocked: "Sessions that have a question or need your decision land here",
    working:
      "Sessions Claude is actively working on \u2014 they keep running even if you close the terminal",
    done: "Finished sessions wait here for you to review",
  }));
kTm = new Set(["EPIPE", "ECONNRESET", "ECONNREFUSED", "ENOTCONN"]);
Kpr = class Kpr extends Error {
  constructor(e) {
    super(e);
    this.name = "FleetActionUnconfirmedError";
  }
};
OKo = new Map();
NKo = new Map();
((Jpr = new Map()),
  (FKo = []),
  (qpr = new Map()),
  (jKo = new Map()),
  (GKo = new Map()),
  (qkc = new Map()));
vkc = {
  error: 2,
  warning: 1,
};
NTm = {
  error: 3,
  warning: 2,
  success: 1,
};
UTm = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/;
((KTm = {
  agent: "background",
  repo: "repo",
  skill: "skill",
  command: "command",
  workflow: "workflow",
  routine: "routine",
  model: "model",
}),
  (xkc = {
    agent: "@",
    repo: "@",
    routine: "@",
    skill: "/",
    command: "/",
    workflow: "/",
    model: "/",
  }),
  (YTm = {
    kind: "model",
    name: "model",
    description: "Set model for this FleetView session (not persisted)",
  }));
((kkc = []), (Rkc = []));
async function mountFleetViewWithComposerBack(e, t) {
  await eYo(e, t);
}
