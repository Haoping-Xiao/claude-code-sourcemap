// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tAc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0061  score=0.5003  fileCov=0.0062
// note: nearest: src/screens/REPL.tsx (0.0061); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tAc] deps: hooks/useTerminalSize.ts, context/notifications.tsx, tools/SendMessageTool/UI.tsx, utils/debug.ts, utils/errors.ts, utils/sequential.ts, utils/messageQueueManager.ts, axios/lib/adapters/http.js
VTt = R(rt(), 1);
function nAc({
  taskRegistry: e,
  getToolUseContext: t,
  canUseTool: n,
  addNotification: r
}) {
  let o = fpr.useCallback(async s => {
    let i = CJn(s, e);
    if (i.length === 0) return;
    let [a, ...l] = i;
    for (let c of l) oze(s, c.text, e, {
      origin: c.origin,
      isMeta: c.isMeta
    });
    try {
      await eHe({
        agentId: s,
        prompt: a.text,
        promptOrigin: a.origin,
        promptIsMeta: a.isMeta,
        toolUseContext: t(),
        canUseTool: n
      });
    } catch (c) {
      throw oze(s, a.text, e, {
        origin: a.origin,
        isMeta: a.isMeta
      }), c;
    }
  }, [e, t, n]);
  fpr.useEffect(() => wJn.subscribe(s => {
    o(s).catch(i => {
      if (i instanceof qF) return;
      ke(i), r({
        key: `stranded-resume-failed-${s}`,
        kind: "warning",
        text: `Failed to deliver queued message to agent: ${be(i)}`,
        color: "error",
        priority: "low"
      });
    });
  }), [o, r]);
}
var fpr;