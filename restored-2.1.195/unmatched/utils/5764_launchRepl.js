// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YYo
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0107  score=0.3784  fileCov=0.0109
// note: nearest: src/screens/REPL.tsx (0.0107); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: launchRepl
// [unwrapped __esm module YYo] deps: services/analytics/index.ts, utils/desktopDeepLink.ts, services/analytics/index.ts, hooks/notifs/useSettingsErrors.tsx, utils/tokenBudget.ts, utils/model/check1mAccess.ts, ink/hooks/use-search-highlight.ts, utils/hooks.ts, proxy-from-env/index.js, @xmldom/xmldom/lib/entities.js, components/Settings/Config.tsx, ink/render-node-to-output.ts, math-intrinsics/floor.js, hooks/useSearchInput.ts, components/design-system/Ratchet.tsx, commands/plugin/PluginOptionsDialog.tsx, commands/export/export.tsx, utils/editor.ts, hooks/useTerminalSize.ts, components/CostThresholdDialog.tsx, components/IdleReturnDialog.tsx, components/CustomSelect/select.tsx, services/preventSleep.ts, context/notifications.tsx, ink/styles.ts, utils/QueryGuard.ts, ink/ink.tsx, ink/terminal.ts, utils/claudemd.ts, services/analytics/index.ts, google-auth-library/build/src/crypto/node/crypto.js, utils/debug.ts, constants/keys.ts, screens/REPL.tsx, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/profilerBase.ts, Kke, utils/swarm/spawnInProcess.ts, tools/AgentTool/runAgent.ts, utils/swarm/inProcessRunner.ts, components/permissions/AskUserQuestionPermissionRequest/AskUserQuestionPermissionRequest.tsx, ink/components/Box.tsx, utils/concurrentSessions.ts, components/tasks/BackgroundTasksDialog.tsx, tasks/InProcessTeammateTask/InProcessTeammateTask.tsx, utils/ShellCommand.ts, screens/REPL.tsx, main.tsx, hooks/useLogMessages.ts, utils/toolSearch.ts, tasks/LocalShellTask/LocalShellTask.tsx, tools/BashTool/shouldUseSandbox.ts, @smithy/core/dist-cjs/submodules/cbor/index.js, screens/REPL.tsx, components/MessageSelector.tsx, utils/sessionStorage.ts, utils/http.ts, hooks/useIdeLogging.ts, hooks/useIdeLogging.ts, Nho, components/ConsoleOAuthFlow.tsx, hooks/useCommandQueue.ts, ink/components/TerminalSizeContext.tsx, commands/extra-usage/extra-usage-core.ts, cli/print.ts, components/PromptInput/PromptInput.tsx, screens/REPL.tsx, remote/sdkMessageAdapter.ts, server/directConnectManager.ts, hooks/useSSHSession.ts, screens/REPL.tsx, @anthropic-ai/bedrock-sdk/client.mjs, state/selectors.ts, utils/fileHistory.ts, entrypoints/sdk/coreSchemas.ts, jwa/index.js, utils/api.ts, l8e, context.ts, utils/claudemd.ts, hooks/usePasteHandler.ts, utils/agentContext.ts, screens/REPL.tsx, utils/diff.ts, screens/REPL.tsx, context/stats.tsx, react/cjs/react.production.js, hooks/useDynamicConfig.ts, hooks/useDeferredHookMessages.ts, hooks/useApiKeyVerification.ts, utils/Cursor.ts, utils/suggestions/slackChannelSuggestions.ts, eEc, hooks/useCommandKeybindings.tsx, hooks/useCancelRequest.ts, utils/mailbox.ts, nk, vendor/image-processor-src/index.ts, hooks/useBackgroundTaskNavigation.ts, utils/swarm/reconnection.ts, hooks/useTeammateViewAutoExit.ts, hooks/toolPermission/handlers/swarmWorkerHandler.ts, utils/errors.ts, services/api/claude.ts, utils/sequential.ts, components/permissions/PermissionRuleExplanation.tsx, services/mockRateLimits.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/permissions/shellRuleMatching.ts, types/permissions.ts, utils/permissions/PermissionMode.ts, utils/task/sdkProgress.ts, ink/terminal.ts, utils/markdownConfigLoader.ts, utils/task/diskOutput.ts, TX, tools/BashTool/bashPermissions.ts, utils/config.ts, components/Settings/Config.tsx, fast-xml-parser/lib/fxp.cjs, bridge/bridgeApi.ts, utils/debug.ts, tools/AgentTool/resumeAgent.ts, services/analytics/growthbook.ts, utils/asciicast.ts, dn, components/messages/AttachmentMessage.tsx, utils/messages.ts, components/tasks/RemoteSessionDetailDialog.tsx, utils/imageValidation.ts, utils/handlePromptSubmit.ts, utils/status.tsx, commands/rename/generateSessionName.ts, env-paths/index.js, fast-xml-parser/lib/fxp.cjs, utils/gracefulShutdown.ts, utils/queueProcessor.ts, utils/attachments.ts, screens/REPL.tsx, hooks/useMailboxBridge.ts, screens/REPL.tsx, cli/print.ts, @inquirer/core/dist/esm/lib/use-memo.mjs, utils/telemetry/betaSessionTracing.ts, context/fpsMetrics.tsx, utils/stream.ts, components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx, bridge/debugUtils.ts, tools/AgentTool/agentDisplay.ts, utils/toolPool.ts, utils/skills/skillChangeDetector.ts, screens/REPL.tsx, state/onChangeAppState.ts, components/messages/AttachmentMessage.tsx, components/Messages.tsx, hooks/useTasksV2.ts, hooks/useIdeSelection.ts, W9n, utils/appleTerminalBackup.ts, commands/add-dir/index.ts, utils/worktree.ts, hooks/useIdeSelection.ts, utils/sessionActivity.ts, tools/AgentTool/loadAgentsDir.ts, tools/AgentTool/built-in/exploreAgent.ts, cli/print.ts, highlight.js/lib/languages/reasonml.js, uTc, screens/REPL.tsx, components/permissions/ComputerUseApproval/ComputerUseApproval.tsx, components/permissions/PermissionRequest.tsx, tools/SendMessageTool/UI.tsx, tools/ScheduleCronTool/prompt.ts, utils/memoryFileDetection.ts, utils/plugins/pluginPolicy.ts, context/notifications.tsx, tools/AgentTool/runAgent.ts, utils/permissions/filesystem.ts, utils/plans.ts, services/api/filesApi.ts, DBo, services/PromptSuggestion/speculation.ts, utils/sessionEnvironment.ts, utils/toolSearch.ts, utils/mcpOutputStorage.ts, undici/lib/core/symbols.js, services/compact/autoCompact.ts, query.ts, services/toolUseSummary/toolUseSummaryGenerator.ts, utils/getWorktreePaths.ts, state/AppStateStore.ts, utils/processUserInput/processUserInput.ts, Il, cli/print.ts, utils/concurrentSessions.ts, main.tsx, utils/sessionStorage.ts, utils/bash/ast.ts, tasks/LocalShellTask/LocalShellTask.tsx, @aws-sdk/client-bedrock/dist-cjs/index.js, utils/crypto.ts, utils/sessionStorage.ts, Task.ts, tasks/RemoteAgentTask/RemoteAgentTask.tsx, tasks/RemoteAgentTask/RemoteAgentTask.tsx, hooks/useInboxPoller.ts, hooks/useIDEIntegration.tsx, services/PromptSuggestion/promptSuggestion.ts, utils/ide.ts, components/SessionBackgroundHint.tsx, nor, components/ExitFlow.tsx, Task.ts, services/teamMemorySync/secretScanner.ts, constants/prompts.ts, utils/messageQueueManager.ts, hooks/useIdeAtMentioned.ts, screens/REPL.tsx, hooks/useSessionBackgrounding.ts, components/GlobalSearchDialog.tsx, commands/ultraplan.tsx, tasks/LocalMainSessionTask.ts, commands/plugin/ManagePlugins.tsx, @opentelemetry/api/build/src/context-api.js, utils/task/framework.ts, utils/ide.ts, hooks/useDynamicConfig.ts, components/Settings/Config.tsx, cli/print.ts, screens/REPL.tsx, commands/mcp/mcp.tsx, components/FeedbackSurvey/useMemorySurvey.tsx, components/FeedbackSurvey/usePostCompactSurvey.tsx, utils/words.ts, ink/components/Box.tsx, components/DesktopUpsell/DesktopUpsellStartup.tsx, hooks/notifs/useInstallMessages.tsx, components/Settings/Config.tsx, hooks/useDynamicConfig.ts, utils/plugins/officialMarketplaceStartupCheck.ts, hooks/notifs/useStartupNotification.ts, screens/REPL.tsx, @smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js, gLc, hooks/usePromptsFromClaudeInChrome.tsx, screens/REPL.tsx, utils/autoUpdater.ts, screens/REPL.tsx, hooks/useMinDisplayTime.ts, cli/handlers/auth.ts, utils/bash/bashParser.ts, components/permissions/SandboxPermissionRequest.tsx, components/SandboxViolationExpandedView.tsx, hooks/notifs/useAutoModeUnavailableNotification.ts, utils/permissions/shadowedRuleDetection.ts, hooks/notifs/useLspInitializationNotification.tsx, utils/binaryCheck.ts, components/LspRecommendation/LspRecommendationMenu.tsx, hooks/useClaudeCodeHintRecommendation.tsx, components/ClaudeCodeHint/PluginHintMenu.tsx, components/CustomSelect/select.tsx, hooks/notifs/usePluginAutoupdateNotification.tsx, utils/plugins/reconciler.ts, components/PromptInput/PromptInput.tsx, components/messages/AttachmentMessage.tsx, components/wizard/WizardProvider.tsx, hooks/notifs/useRateLimitWarningNotification.tsx, hooks/useVoiceIntegration.tsx, components/PromptInput/PromptInput.tsx, screens/REPL.tsx, hooks/notifs/useIDEStatusIndicator.tsx, hooks/notifs/useTeammateShutdownNotification.ts, hooks/notifs/useFastModeNotification.tsx, hooks/notifs/useAutoModeUnavailableNotification.ts, hooks/notifs/useSettingsErrors.tsx, hooks/notifs/useSettingsErrors.tsx, utils/sessionStorage.ts, tools/AgentTool/builtInAgents.ts, screens/REPL.tsx, utils/iTermBackup.ts, axios/lib/adapters/http.js, ink/termio/osc.ts, cPc, utils/attachments.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/sessionStorage.ts, components/VirtualMessageList.tsx, components/PromptInput/PromptInputFooterLeftSide.tsx, components/TextInput.tsx, ink/render-node-to-output.ts, main.tsx, tools/PowerShellTool/readOnlyValidation.ts, components/design-system/LoadingState.tsx, services/PromptSuggestion/speculation.ts, tools/WebFetchTool/utils.ts, utils/teammateContext.ts, CAt, @smithy/eventstream-serde-config-resolver/dist-cjs/index.js, components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx, utils/hooks/registerSkillHooks.ts, components/PromptInput/PromptInput.tsx, ink/hooks/use-interval.ts, bridge/bridgeEnabled.ts, DHo, commands/sandbox-toggle/sandbox-toggle.tsx, commands/bridge/bridge.tsx, utils/semver.ts, services/api/errorUtils.ts, utils/plugins/loadPluginHooks.ts, constants/outputStyles.ts, utils/settings/settings.ts
Wtn = R(lt(), 1), Xfr = require("path"), Jfr = require("fs/promises"), KPc = R(rt(), 1), mn = R(rt(), 1), nve = require("crypto"), qo = R(se(), 1), uIm = ($pr(), ro(hKo)).useVoiceIntegration, dIm = ($pr(), ro(hKo)).useVoiceKeybindingHandler, mIm = (l$(), ro(qW)).getCoordinatorUserContext, gIm = (MPc(), ro(PPc)).useScheduledTasks, WPc = (BPc(), ro(NPc)).AutoDefaultNudgeDialog, zYo = [];
XPc = ["\u2802", "\u2810"];
async function launchRepl(e, t, n, r) {
  let {
      App: o
    } = await Promise.resolve().then(() => (b8o(), _8o)),
    {
      REPL: s
    } = await Promise.resolve().then(() => (YYo(), JPc));
  function i(a) {
    let l = Dc(),
      c = Vme.useRef(a.commands),
      u = Vme.useCallback(m => {
        c.current = m;
      }, []),
      d = Vme.useRef(() => {
        throw Error("shoji: queryParams called before REPL registered builder");
      }),
      p = Vme.useCallback(m => {
        d.current = m;
      }, []),
      [f] = Vme.useState(() => {
        if (Rme()) return Aur({
          run: CN,
          queryParams: async m => d.current(),
          commands: () => VQt(c.current),
          models: () => wjt(aLe()),
          unavailableModels: () => wjt(raa()),
          agents: () => GYt(l.getState().agentDefinitions.activeAgents),
          account: m1t(),
          outputStyle: Flc(),
          mcpServers: () => Cfc(l.getState().mcp.clients),
          ambient: mTt,
          initialModel: () => {
            let m = l.getState();
            return zo(m.mainLoopModelForSession ?? m.mainLoopModel ?? Uw());
          },
          initialPermissionMode: () => $x(l.getState().toolPermissionContext.mode),
          hostOwnsPermissionMode: true
        });
        return;
      });
    return Vme.useEffect(() => f ? () => f.close() : void 0, [f]), Qfr.jsx(s, {
      ...a,
      engine: f,
      onCommandsChange: u,
      onQueryParamsChange: p
    });
  }
  await r(e, Qfr.jsx(o, {
    ...t,
    children: Qfr.jsx(i, {
      ...n
    })
  }));
}
var Vme, Qfr;