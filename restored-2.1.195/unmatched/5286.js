// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iic
// matched 2.1.88 source: src/utils/hooks.ts
// class=new  jaccard=0.0086  score=1  fileCov=0.0086
// note: nearest: src/utils/hooks.ts (0.0086); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iic = E(() => {
  ft();
  iKe();
  sr();
});
async function sOe(e, t, n = lp) {
  let r = t?.getAppState(),
    o = Rt();
  if (!M$("StopFailure", r, o)) return;
  let s = zl(e.message.content, `
`).trim() || void 0,
    i = e.error ?? "unknown",
    a = {
      ...Td(void 0, void 0, t),
      hook_event_name: "StopFailure",
      error: i,
      error_details: e.errorDetails,
      last_assistant_message: s
    };
  await Kk({
    getAppState: t?.getAppState,
    hookInput: a,
    timeoutMs: n,
    matchQuery: i
  });
}
async function* OAe(e, t, n = lp, r = !1, o, s, i, a) {
  let l = o ? "SubagentStop" : "Stop",
    c = s?.getAppState(),
    u = s?.agentId ?? Rt();
  if (!M$(l, c, u)) return;
  let d = i ? MI(i) : void 0,
    p = d ? zl(d.message.content, `
`).trim() || void 0 : void 0,
    f = s ? {
      background_tasks: wic(s.taskRegistry.all()),
      session_crons: Cic()
    } : void 0,
    m = o ? {
      ...Td(e, void 0, s),
      hook_event_name: "SubagentStop",
      stop_hook_active: r,
      agent_id: o,
      agent_transcript_path: uk(o),
      agent_type: a ?? "",
      last_assistant_message: p,
      ...f
    } : {
      ...Td(e, void 0, s),
      hook_event_name: "Stop",
      stop_hook_active: r,
      last_assistant_message: p,
      ...f
    },
    g;
  yield* TC({
    hookInput: m,
    extendedHookInput: g,
    toolUseID: xic.randomUUID(),
    signal: t,
    timeoutMs: n,
    toolUseContext: s,
    messages: i
  });
}
var xic;