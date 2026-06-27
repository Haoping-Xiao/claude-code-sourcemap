// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tic
// matched 2.1.88 source: src/utils/hooks.ts
// class=modified (alt of src/utils/hooks.ts)  jaccard=0.0216  score=0.3457  fileCov=0.0225
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function* processHookJSONOutput(e, t, n, r, o, s, i = lp, a) {
  let l = {
    ...Td(void 0, t),
    hook_event_name: "SessionStart",
    source: e,
    agent_type: r,
    model: o,
    session_title: n ?? Gg(t !== void 0 ? Fb(t) : Rt()),
  };
  yield* TC({
    hookInput: l,
    toolUseID: Dlr.randomUUID(),
    matchQuery: e,
    signal: s,
    timeoutMs: i,
    forceSyncExecution: a,
  });
}
async function* Vjt(e, t, n = lp, r) {
  let o = {
    ...Td(void 0),
    hook_event_name: "Setup",
    trigger: e,
  };
  yield* TC({
    hookInput: o,
    toolUseID: Dlr.randomUUID(),
    matchQuery: e,
    signal: t,
    timeoutMs: n,
    forceSyncExecution: r,
  });
}
async function* J8t(e, t, n, r = lp, o) {
  let s = {
    ...Td(void 0),
    hook_event_name: "SubagentStart",
    agent_id: e,
    agent_type: t,
  };
  yield* TC({
    hookInput: s,
    toolUseID: Dlr.randomUUID(),
    matchQuery: t,
    signal: n,
    timeoutMs: r,
    getAppState: o,
  });
}
async function executeSessionEndHooks(e, t) {
  let { getAppState: n, setAppState: r, signal: o } = t || {},
    s = {
      ...Td(void 0),
      hook_event_name: "SessionEnd",
      reason: e,
    },
    i = await Kk({
      getAppState: n,
      hookInput: s,
      matchQuery: e,
      signal: o,
      timeoutMs: Plr,
    });
  for (let a of i)
    if (!a.succeeded && a.output)
      process.stderr.write(`SessionEnd hook [${a.command}] failed: ${a.output}
`);
  if (r) {
    let a = Rt();
    wIo(r, a);
  }
}
var Dlr;
