// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tAc
// matched 2.1.88 source: src/tools/ConfigTool/UI.tsx
// class=partial  jaccard=0.0822  score=0.1601  fileCov=0.1446
// note: low-confidence suggestion: src/tools/ConfigTool/UI.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tAc = E(() => {
  Ye();
  uo();
  qzt();
  je();
  At();
  vn();
  bm();
  QEc();
  VTt = R(rt(), 1);
});
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