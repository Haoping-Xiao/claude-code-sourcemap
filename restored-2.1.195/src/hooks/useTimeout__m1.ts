// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W0c
// matched 2.1.88 source: src/hooks/useTimeout.ts
// class=modified (alt of src/hooks/useTimeout.ts)  jaccard=0.3714  score=1  fileCov=0.3714
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module W0c] deps: services/analytics/growthbook.ts
nfr = R(rt(), 1);
function q0c(e, t = $vm) {
  let n = ks(),
    [r, o] = rfr.useState(!e);
  return (
    rfr.useEffect(() => {
      if (e) {
        o(false);
        return;
      }
      let s = n.setTimeout(() => o(true), t);
      return () => s();
    }, [e, n, t]),
    r
  );
}
var rfr,
  $vm = 2000;
