// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dzo
// matched 2.1.88 source: src/hooks/useDirectConnect.ts
// class=partial  jaccard=0.0903  score=0.6391  fileCov=0.0951
// note: low-confidence suggestion: src/hooks/useDirectConnect.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dzo = E(() => {
  Gen();
  Wen();
  uo();
  je();
  co();
  lzo();
  mw = R(rt(), 1);
});
function oSc({
  config: e,
  setMessages: t,
  setIsLoading: n,
  requestDialog: r,
  toolPermissionContext: o,
  tools: s,
  permissionMode: i
}) {
  let a = rSc.useMemo(() => {
    if (!e) return;
    return {
      label: "directConnect",
      createManager: l => new uzo(e, l),
      onDisconnected: l => {
        process.stderr.write(l ? `
Server disconnected.
` : `
Failed to connect to server at ${e.wsUrl}
`), ki(1);
      }
    };
  }, [e]);
  return Ydr({
    adapter: a,
    setMessages: t,
    setIsLoading: n,
    requestDialog: r,
    toolPermissionContext: o,
    tools: s,
    permissionMode: i
  });
}
var rSc;