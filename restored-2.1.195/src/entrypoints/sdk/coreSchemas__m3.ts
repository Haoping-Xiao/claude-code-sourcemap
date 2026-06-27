// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kic
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=modified (alt of src/entrypoints/sdk/coreSchemas.ts)  jaccard=0.0162  score=0.704  fileCov=0.0163
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kic = E(() => {
  ft();
  sp();
  co();
  y_();
  Iic();
  xic = require("crypto");
});
async function* oYt(e, t, n, r, o = lp, s) {
  let i = {
    ...Td(n),
    hook_event_name: "TeammateIdle",
    teammate_name: e,
    team_name: t,
  };
  yield* TC({
    hookInput: i,
    toolUseID: Mlr.randomUUID(),
    signal: r,
    timeoutMs: o,
    toolUseContext: s,
  });
}
async function* Rzt(e, t, n, r, o, s, i, a = lp, l) {
  let c = {
    ...Td(s),
    hook_event_name: "TaskCreated",
    task_id: e,
    task_subject: t,
    task_description: n,
    teammate_name: r,
    team_name: o,
  };
  yield* TC({
    hookInput: c,
    toolUseID: Mlr.randomUUID(),
    signal: i,
    timeoutMs: a,
    toolUseContext: l,
  });
}
async function* Z6e(e, t, n, r, o, s, i, a = lp, l) {
  let c = {
    ...Td(s),
    hook_event_name: "TaskCompleted",
    task_id: e,
    task_subject: t,
    task_description: n,
    teammate_name: r,
    team_name: o,
  };
  yield* TC({
    hookInput: c,
    toolUseID: Mlr.randomUUID(),
    signal: i,
    timeoutMs: a,
    toolUseContext: l,
  });
}
var Mlr;
