// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hal
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hal = E(() => {
  Ye();
  n_t = R(rt(), 1);
});
function yal(e, t) {
  let n = ks(),
    [r, o] = r_t.useState(e),
    s = r_t.useRef(0);
  return r_t.useEffect(() => {
    let i = Date.now() - s.current;
    if (i >= t) {
      s.current = Date.now(), o(e);
      return;
    }
    return n.setTimeout(() => {
      s.current = Date.now(), o(e);
    }, t - i);
  }, [e, t, n]), r;
}
var r_t;