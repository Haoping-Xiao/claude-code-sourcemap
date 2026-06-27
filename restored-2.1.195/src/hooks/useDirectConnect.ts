// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dzo
// matched 2.1.88 source: src/hooks/useDirectConnect.ts
// class=modified  jaccard=0.1  score=0.5426  fileCov=0.1093
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dzo] deps: remote/sdkMessageAdapter.ts, assistant/sessionHistory.ts, context/notifications.tsx, utils/debug.ts, utils/messages.ts, hooks/useReplBridge.tsx
mw = R(rt(), 1);
function useDirectConnect({
  config: e,
  setMessages: t,
  setIsLoading: n,
  requestDialog: r,
  toolPermissionContext: o,
  tools: s,
  permissionMode: i,
}) {
  let a = rSc.useMemo(() => {
    if (!e) return;
    return {
      label: "directConnect",
      createManager: (l) => new uzo(e, l),
      onDisconnected: (l) => {
        (process.stderr.write(
          l
            ? `
Server disconnected.
`
            : `
Failed to connect to server at ${e.wsUrl}
`,
        ),
          ki(1));
      },
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
var rSc;
