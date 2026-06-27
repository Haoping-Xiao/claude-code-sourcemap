// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hoe
// matched 2.1.88 source: src/utils/task/sdkProgress.ts
// class=modified  jaccard=0.3309  score=0.3588  fileCov=0.8095
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hoe] deps: PR, ft, dn, Un, kt, pke, ZE, tP, G1, lf, EI, lC, dqe, Lx, EAe, BE, je, wr, fn, At, sF, co, DD, xUt, Ao, Ls, dr, Epe, Jt, sr, m1, u$, Ote, pht, dyt, Yf, p8t, QH, Cwo
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
function vyt(e) {
  zv({
    type: "system",
    subtype: "task_progress",
    task_id: e.taskId,
    tool_use_id: e.toolUseId,
    description: e.description,
    subagent_type: e.subagentType,
    usage: {
      total_tokens: e.totalTokens,
      tool_uses: e.toolUses,
      duration_ms: Date.now() - e.startTime,
    },
    last_tool_name: e.lastToolName,
    summary: e.summary,
    workflow_progress: e.workflowProgress,
  });
}
