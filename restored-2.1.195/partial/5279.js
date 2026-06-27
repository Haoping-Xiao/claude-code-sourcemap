// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bic
// matched 2.1.88 source: src/entrypoints/sdk/coreTypes.ts
// class=partial  jaccard=0.0626  score=1  fileCov=0.0626
// note: low-confidence suggestion: src/entrypoints/sdk/coreTypes.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bic = E(() => {
  sp();
});
async function W3t({
  serverName: e,
  message: t,
  requestedSchema: n,
  permissionMode: r,
  signal: o,
  timeoutMs: s = lp,
  mode: i,
  url: a,
  elicitationId: l
}) {
  let c = {
      ...Td(r),
      hook_event_name: "Elicitation",
      mcp_server_name: e,
      message: t,
      mode: i,
      url: a,
      elicitation_id: l,
      requested_schema: n
    },
    u = await Kk({
      hookInput: c,
      matchQuery: e,
      signal: o,
      timeoutMs: s
    }),
    d,
    p;
  for (let f of u) {
    let m = Llr(f, "Elicitation");
    if (m.blockingError) p = m.blockingError;
    if (m.response) d = m.response;
  }
  return {
    elicitationResponse: d,
    blockingError: p
  };
}
async function q3t({
  serverName: e,
  action: t,
  content: n,
  permissionMode: r,
  signal: o,
  timeoutMs: s = lp,
  mode: i,
  elicitationId: a
}) {
  let l = {
      ...Td(r),
      hook_event_name: "ElicitationResult",
      mcp_server_name: e,
      elicitation_id: a,
      mode: i,
      action: t,
      content: n
    },
    c = await Kk({
      hookInput: l,
      matchQuery: e,
      signal: o,
      timeoutMs: s
    }),
    u,
    d;
  for (let p of c) {
    let f = Llr(p, "ElicitationResult");
    if (f.blockingError) d = f.blockingError;
    if (f.response) u = f.response;
  }
  return {
    elicitationResultResponse: u,
    blockingError: d
  };
}