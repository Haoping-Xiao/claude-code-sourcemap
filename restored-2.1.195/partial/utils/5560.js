// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mAc
// matched 2.1.88 source: src/utils/intl.ts
// class=partial  jaccard=0.2197  score=0.4272  fileCov=0.3114
// note: low-confidence suggestion: src/utils/intl.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mAc = E(() => {
  ft();
  dn();
  Z6();
  yyt();
  wX();
  gb();
  je();
  PM();
  sp();
  _$();
  _m();
  i5();
  pym = new Set();
});
function hAc({
  enabled: e
}) {
  let t = Dc(),
    n = Ho(),
    r = $T(),
    o = Ht(s => s.plugins.enabled);
  gAc.useEffect(() => {
    if (!e) return;
    let s = () => ({
      abortController: new AbortController(),
      taskRegistry: r
    });
    return Wzo(o, i => i.when === "always", s()), pwo.subscribe(i => {
      Wzo(t.getState().plugins.enabled, a => a.when === `on-skill-invoke:${i}`, s());
    });
  }, [e, o, t, n, r]);
}
var gAc;