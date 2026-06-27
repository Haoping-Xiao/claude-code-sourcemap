// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cbc
// matched 2.1.88 source: src/ink/components/TerminalSizeContext.tsx
// class=partial  jaccard=0.1959  score=0.1959  fileCov=1
// note: low-confidence suggestion: src/ink/components/TerminalSizeContext.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cbc] deps: @mixmark-io/domino/lib/Document.js, context/notifications.tsx, hooks/useIdeAtMentioned.ts, hooks/useIdeAtMentioned.ts, utils/debug.ts, context/notifications.tsx, tools/BashTool/UI.tsx, hooks/useExitOnCtrlCD.ts, utils/messageQueueManager.ts, services/analytics/index.ts, utils/fastMode.ts, EHe, EHe, commands/commit-push-pr.ts, commands/terminalSetup/terminalSetup.tsx, utils/sessionStorage.ts, components/CustomSelect/use-multi-select-state.ts, ink/render-node-to-output.ts, utils/Cursor.ts, hooks/useHistorySearch.ts, hooks/useTextInput.ts, hooks/useInputBuffer.ts, hooks/usePromptSuggestion.ts, utils/plugins/pluginPolicy.ts, utils/bash/shellCompletion.ts, components/design-system/Ratchet.tsx, Cyc, HI, ink/squash-text-nodes.ts, NBt, hooks/useTerminalSize.ts, components/PromptInput/PromptInput.tsx, keybindings/defaultBindings.ts, vendor/image-processor-src/index.ts, utils/suggestions/directoryCompletion.ts, nk, dom-mutator/dist/dom-mutator.cjs.production.min.js, dn, services/PromptSuggestion/promptSuggestion.ts, utils/task/framework.ts, utils/task/framework.ts, utils/mcpInstructionsDelta.ts, components/tasks/renderToolActivity.tsx, @aws-sdk/client-bedrock/dist-cjs/index.js, tools/AgentTool/agentColorManager.ts, tools/AgentTool/builtInAgents.ts, utils/permissions/getNextPermissionMode.ts, utils/effort.ts, services/PromptSuggestion/promptSuggestion.ts, @mixmark-io/domino/lib/htmlelts.js, vendor/modifiers-napi-src/index.ts, utils/concurrentSessions.ts, utils/config.ts, utils/debug.ts, utils/tempfile.ts, main.tsx, utils/errors.ts, commands/model/model.tsx, utils/modelCost.ts, main.tsx, utils/env.ts, hooks/useClipboardImageHint.ts, utils/processUserInput/processTextPrompt.ts, @xmldom/xmldom/lib/entities.js, utils/sequential.ts, utils/messages.ts, hooks/usePasteHandler.ts, utils/agentContext.ts, components/AutoModeOptInDialog.tsx, utils/markdownConfigLoader.ts, utils/platform.ts, commands/memory/memory.tsx, utils/settings/settings.ts, tools/AgentTool/AgentTool.tsx, q8t, hooks/unifiedSuggestions.ts, utils/swarm/spawnInProcess.ts, utils/concurrentSessions.ts, utils/teammate.ts, utils/teammateMailbox.ts, utils/thinking.ts, utils/tokenBudget.ts, uJt, yYt, components/BridgeDialog.tsx, utils/config.ts, components/tasks/BackgroundTasksDialog.tsx, context/modalContext.tsx, components/HistorySearchDialog.tsx, components/ModelPicker.tsx, commands/fast/fast.tsx, components/ThinkingToggle.tsx, components/messages/UserAgentNotificationMessage.tsx, components/ClaudeMdExternalIncludesDialog.tsx, components/ScrollKeybindingHandler.tsx, components/VimTextInput.tsx, components/tasks/BackgroundTasksDialog.tsx, components/tasks/AsyncAgentDetailDialog.tsx, components/tasks/BackgroundTasksDialog.tsx, components/PromptInput/PromptInput.tsx, utils/deepLink/banner.ts, components/ScrollKeybindingHandler.tsx, components/tasks/BackgroundTaskStatus.tsx, hooks/useArrowKeyHistory.tsx, ink/styles.ts, components/PromptInput/PromptInputQueuedCommands.tsx, components/PromptInput/PromptInput.tsx, jwa/index.js, bridge/bridgeStatusUtil.ts, screens/REPL.tsx, components/PromptInput/inputPaste.ts, utils/exampleCommands.ts, hooks/useTimeout.ts, components/PromptInput/PromptInput.tsx, components/PromptInput/useSwarmBanner.ts, components/PromptInput/PromptInput.tsx, utils/Cursor.ts
vbc = R(rt(), 1), Po = R(rt(), 1), Ud = R(se(), 1), Ymm = [];
wbc = vbc.memo(Jmm);
function xbc() {
  let e = Ibc.c(3),
    t = $dr(),
    {
      columns: n
    } = br();
  if (!t) return null;
  let r;
  if (e[0] !== t || e[1] !== n) r = kbc.jsx(Ben, {
    banner: t,
    columns: n,
    fastModeTag: void 0
  }), e[0] = t, e[1] = n, e[2] = r;else r = e[2];
  return r;
}
var Ibc, kbc;