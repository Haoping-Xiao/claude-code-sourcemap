// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sSc
// matched 2.1.88 source: src/hooks/useSSHSession.ts
// class=modified  jaccard=0.1521  score=0.7387  fileCov=0.1607
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sSc] deps: @grpc/grpc-js/build/src/transport.js, utils/gracefulShutdown.ts, hooks/useDirectConnect.ts
rSc = R(rt(), 1);
function useSSHSession({
  session: session,
  setMessages: t,
  setIsLoading: n,
  requestDialog: r,
  toolPermissionContext: o,
  tools: s,
  permissionMode: i,
}) {
  let a = iSc.useMemo(() => {
    if (!session) return;
    return {
      label: "ssh",
      createManager: (l) => session.createManager(l),
      onDisconnected: (l) => {
        let c = session.getStderrTail().trim(),
          u = session.proc.exitCode,
          d = l ? "Remote session ended." : "SSH session failed before connecting.";
        if (c && (!l || u !== 0))
          d += `
Remote stderr (exit ${u ?? "signal " + session.proc.signalCode}):
${c}`;
        ki(1, "other", {
          finalMessage: d,
        });
      },
      cleanup: () => session.proxy?.stop(),
    };
  }, [session]);
  return Ydr({
    adapter: a,
    setMessages: t,
    setIsLoading: n,
    requestDialog: r,
    toolPermissionContext: o,
    tools: s,
    permissionMode: i,
  });
}
var iSc;
