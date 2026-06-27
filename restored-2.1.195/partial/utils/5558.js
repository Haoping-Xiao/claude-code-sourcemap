// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gpr
// matched 2.1.88 source: src/hooks/useSettingsChange.ts
// class=partial  jaccard=0.1941  score=1  fileCov=0.1941
// note: low-confidence suggestion: src/hooks/useSettingsChange.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gpr = E(() => {
  Ece();
  ft();
  Zf();
  kt();
  rq();
  ty();
  Vv();
  fd();
  je();
  At();
  ys();
  sp();
  ih();
  yLe();
  zTt = R(require("path"));
  KTt = uym();
});
function pAc(e, t, n) {
  let r = x7e.useCallback(async () => {
    if (!e) return;
    try {
      W0();
      let s = await mA(e);
      if (t(s), n) {
        let i = await CP(e);
        n(i);
      }
    } catch (s) {
      if (s instanceof Error) ke(s);
    }
  }, [e, t, n]);
  x7e.useEffect(() => KTt.subscribe(r), [r]);
  let o = x7e.useCallback(async () => {
    if (!e) return;
    try {
      w5();
      let s = await mA(e);
      t(s);
    } catch (s) {
      if (s instanceof Error) ke(s);
    }
  }, [e, t]);
  x7e.useEffect(() => H7(o), [o]), x7e.useEffect(() => n$.subscribe(o), [o]);
}
var x7e;