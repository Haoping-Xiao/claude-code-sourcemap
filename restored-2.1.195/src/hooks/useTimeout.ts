// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hbc
// matched 2.1.88 source: src/hooks/useTimeout.ts
// class=modified  jaccard=0.3714  score=1  fileCov=0.3714
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hbc] deps: CTt, uo, er, ezo, bm
mbc = R(rt(), 1);
function _bc(e) {
  let [t, n] = Ddr.useState(false),
    r = ks();
  return (
    Ddr.useEffect(() => {
      if (ybc || !e) return;
      ((ybc = true), n(true));
      let o = r.setTimeout(() => n(false), qmm);
      return () => {
        (o(), n(false));
      };
    }, [e, r]),
    t
  );
}
var Ddr,
  qmm = 5000,
  ybc = false;
