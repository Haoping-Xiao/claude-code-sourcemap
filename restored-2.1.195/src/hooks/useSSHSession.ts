// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sSc
// matched 2.1.88 source: src/hooks/useSSHSession.ts
// class=modified  jaccard=0.1521  score=0.7387  fileCov=0.1607
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sSc] deps: tSc, Yp, dzo
rSc = R(rt(), 1);
function aSc({
  session: e,
  setMessages: t,
  setIsLoading: n,
  requestDialog: r,
  toolPermissionContext: o,
  tools: s,
  permissionMode: i,
}) {
  let a = iSc.useMemo(() => {
    if (!e) return;
    return {
      label: "ssh",
      createManager: (l) => e.createManager(l),
      onDisconnected: (l) => {
        let c = e.getStderrTail().trim(),
          u = e.proc.exitCode,
          d = l ? "Remote session ended." : "SSH session failed before connecting.";
        if (c && (!l || u !== 0))
          d += `
Remote stderr (exit ${u ?? "signal " + e.proc.signalCode}):
${c}`;
        ki(1, "other", {
          finalMessage: d,
        });
      },
      cleanup: () => e.proxy?.stop(),
    };
  }, [e]);
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
