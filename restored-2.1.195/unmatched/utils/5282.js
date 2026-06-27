// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hic
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hic = E(() => {
  sp();
});
async function* JHt(e, t, n, r = lp) {
  let o = {
    ...Td(void 0),
    hook_event_name: "MessageDisplay",
    turn_id: e.turnId,
    message_id: e.messageId,
    index: e.index,
    final: e.final,
    delta: e.delta
  };
  yield* TC({
    hookInput: o,
    toolUseID: `${e.messageId}-${e.index}`,
    signal: n,
    timeoutMs: r,
    getAppState: t,
    forceSyncExecution: true,
    suppressPerInvocationTelemetry: true
  });
}