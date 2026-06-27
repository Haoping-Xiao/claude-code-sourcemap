// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ric
// matched 2.1.88 source: src/utils/hooks.ts
// class=modified (alt of src/utils/hooks.ts)  jaccard=0.0262  score=0.356  fileCov=0.0275
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ric] deps: utils/worktree.ts
Mlr = require("crypto");
async function* executePreToolHooks(
  toolName,
  toolUseID,
  toolInput,
  toolUseContext,
  permissionMode,
  signal,
  i = lp,
) {
  let a = toolUseContext.getAppState(),
    l = toolUseContext.agentId ?? Rt();
  if (!M$("PreToolUse", a, l)) return;
  T(`executePreToolHooks called for tool: ${toolName}`, {
    level: "verbose",
  });
  let c = {
    ...Td(permissionMode, void 0, toolUseContext),
    hook_event_name: "PreToolUse",
    tool_name: toolName,
    tool_input: toolInput,
    tool_use_id: toolUseID,
  };
  yield* TC({
    hookInput: c,
    toolUseID: toolUseID,
    matchQuery: toolName,
    signal: signal,
    timeoutMs: i,
    toolUseContext: toolUseContext,
  });
}
async function* Szt(e, t, n, r, o, s, i, a = lp, l) {
  let c = {
    ...Td(s, void 0, o),
    hook_event_name: "PostToolUse",
    tool_name: e,
    tool_input: n,
    tool_response: r,
    tool_use_id: t,
    duration_ms: l,
  };
  yield* TC({
    hookInput: c,
    toolUseID: t,
    matchQuery: e,
    signal: i,
    timeoutMs: a,
    toolUseContext: o,
  });
}
async function* processHookJSONOutput(e, t, n, r, o, s, i, a, l = lp, c) {
  let u = o.getAppState(),
    d = o.agentId ?? Rt();
  if (!M$("PostToolUseFailure", u, d)) return;
  let p = {
    ...Td(i, void 0, o),
    hook_event_name: "PostToolUseFailure",
    tool_name: e,
    tool_input: n,
    tool_use_id: t,
    error: r,
    is_interrupt: s,
    duration_ms: c,
  };
  yield* TC({
    hookInput: p,
    toolUseID: t,
    matchQuery: e,
    signal: a,
    timeoutMs: l,
    toolUseContext: o,
  });
}
async function* wSt(e, t, n, r, o, s = lp) {
  let i = n.getAppState(),
    a = n.agentId ?? Rt();
  if (!M$("PostToolBatch", i, a)) return;
  let l = {
    ...Td(r, void 0, n),
    hook_event_name: "PostToolBatch",
    tool_calls: e,
  };
  yield* TC({
    hookInput: l,
    toolUseID: t,
    signal: o,
    timeoutMs: s,
    toolUseContext: n,
  });
}
async function* tKt(e, t, n, r, o, s, i, a = lp) {
  let l = o.getAppState(),
    c = o.agentId ?? Rt();
  if (!M$("PermissionDenied", l, c)) return;
  let u = {
    ...Td(s, void 0, o),
    hook_event_name: "PermissionDenied",
    tool_name: e,
    tool_input: n,
    tool_use_id: t,
    reason: r,
  };
  yield* TC({
    hookInput: u,
    toolUseID: t,
    matchQuery: e,
    signal: i,
    timeoutMs: a,
    toolUseContext: o,
  });
}
async function* executePermissionRequestHooks(
  toolName,
  toolUseID,
  toolInput,
  toolUseContext,
  permissionMode,
  permissionSuggestions,
  signal,
  a = lp,
) {
  T(`executePermissionRequestHooks called for tool: ${toolName}`);
  let l = {
    ...Td(permissionMode, void 0, toolUseContext),
    hook_event_name: "PermissionRequest",
    tool_name: toolName,
    tool_input: toolInput,
    permission_suggestions: permissionSuggestions,
  };
  yield* TC({
    hookInput: l,
    toolUseID: toolUseID,
    matchQuery: toolName,
    signal: signal,
    timeoutMs: a,
    toolUseContext: toolUseContext,
  });
}
