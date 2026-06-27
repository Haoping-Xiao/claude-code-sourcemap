// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W0c
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var W0c = E(() => {
  Un();
  nfr = R(rt(), 1);
});
function q0c(e, t = $vm) {
  let n = ks(),
    [r, o] = rfr.useState(!e);
  return rfr.useEffect(() => {
    if (e) {
      o(false);
      return;
    }
    let s = n.setTimeout(() => o(true), t);
    return () => s();
  }, [e, n, t]), r;
}
var rfr,
  $vm = 2000;