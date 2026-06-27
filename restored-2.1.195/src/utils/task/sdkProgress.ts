// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hoe
// matched 2.1.88 source: src/utils/task/sdkProgress.ts
// class=modified  jaccard=0.3309  score=0.3588  fileCov=0.8095
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hoe] deps: utils/errors.ts, services/analytics/index.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, pke, utils/shell/prefix.ts, services/api/errors.ts, tools/AskUserQuestionTool/prompt.ts, tools/GlobTool/prompt.ts, tools/ExitPlanModeTool/constants.ts, tools/PowerShellTool/PowerShellTool.tsx, tools/ReadMcpResourceTool/UI.tsx, main.tsx, hooks/useCanUseTool.tsx, has-flag/index.js, utils/debug.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, services/api/claude.ts, utils/messages.ts, utils/model/modelOptions.ts, ink/styles.ts, utils/agentContext.ts, utils/status.tsx, utils/settings/settings.ts, utils/permissions/yoloClassifier.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, utils/thinking.ts, utils/model/check1mAccess.ts, utils/user.ts, utils/fingerprint.ts, dyt, utils/task/diskOutput.ts, p8t, tools/TaskStopTool/prompt.ts, Cwo
((rol = require("crypto")), (U8e = require("fs/promises")), (F8e = require("path")));
((Mwo = rnf(Wrl())), (snf = Iwo()));
((lnf = new Set([Co, Ss])),
  (cnf = {
    "user-rejected": "rejected-by-user",
    "permission-rule": "blocked-by-permissions",
    "automode-blocked": "automode-blocked",
    "automode-unavailable": "automode-unavailable",
    "automode-parsing-error": "automode-parsing-error",
  }));
((pnf =
  `

Prior tool calls may carry a harness-authored "outcome" annotation: ` +
  "'ok' (ran, no harness-level error), 'error' (a harness-level error \u2014 the " +
  "call may not have executed), 'interrupted' (a queued user message stopped a shell command mid-execution; it partially ran and side effects are " +
  "unknown \u2014 repeating it is not automatically a bypass), 'rejected-by-user' " +
  "(the user declined this " +
  "specific call \u2014 a retry of the same action without new explicit " +
  "authorization should be blocked), 'blocked-by-permissions' (denied by a permission rule before it ran), 'automode-blocked' (the auto-mode classifier actively denied it), 'automode-unavailable' (the classifier was unreachable and the call was " +
  "held back fail-closed \u2014 NOT a policy decision; retrying is appropriate), " +
  "or 'automode-parsing-error' (the classifier's response could not be parsed " +
  "and the call was held back fail-closed \u2014 also not a decision). A call with " +
  "no outcome has no recorded result; never treat absence as success or as a permission decision. A prior 'ok' is not precedent for allowing a similar " +
  "call now. 'ok' annotates the tool call itself \u2014 for a call that launches " +
  "background work (run_in_background, an async subagent), it means the launch succeeded, NOT that the background work completed."),
  (fnf = new Set([Ds, qc, wu, byt, _h, Kue, ide, aJ])));
((lol = /\r\n?|[\u2028\u2029\u0085\v\f]/g), (gnf = /[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu));
hnf = /[\u2028\u2029\u0085]/g;
Snf = /[^a-zA-Z0-9._-]/g;
function emitTaskProgress(params) {
  zv({
    type: "system",
    subtype: "task_progress",
    task_id: params.taskId,
    tool_use_id: params.toolUseId,
    description: params.description,
    subagent_type: params.subagentType,
    usage: {
      total_tokens: params.totalTokens,
      tool_uses: params.toolUses,
      duration_ms: Date.now() - params.startTime,
    },
    last_tool_name: params.lastToolName,
    summary: params.summary,
    workflow_progress: params.workflowProgress,
  });
}
