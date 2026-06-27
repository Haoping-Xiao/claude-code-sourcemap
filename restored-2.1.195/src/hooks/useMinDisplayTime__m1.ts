// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hal
// matched 2.1.88 source: src/hooks/useMinDisplayTime.ts
// class=modified (alt of src/hooks/useMinDisplayTime.ts)  jaccard=0.3449  score=1  fileCov=0.3449
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hal] deps: Ye
n_t = R(rt(), 1);
function yal(e, t) {
  let n = ks(),
    [r, o] = r_t.useState(e),
    s = r_t.useRef(0);
  return (
    r_t.useEffect(() => {
      let i = Date.now() - s.current;
      if (i >= t) {
        ((s.current = Date.now()), o(e));
        return;
      }
      return n.setTimeout(() => {
        ((s.current = Date.now()), o(e));
      }, t - i);
    }, [e, t, n]),
    r
  );
}
var r_t;
