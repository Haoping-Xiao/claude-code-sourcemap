// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hbc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hbc = E(() => {
  CTt();
  uo();
  er();
  ezo();
  bm();
  mbc = R(rt(), 1);
});
function _bc(e) {
  let [t, n] = Ddr.useState(false),
    r = ks();
  return Ddr.useEffect(() => {
    if (ybc || !e) return;
    ybc = true, n(true);
    let o = r.setTimeout(() => n(false), qmm);
    return () => {
      o(), n(false);
    };
  }, [e, r]), t;
}
var Ddr,
  qmm = 5000,
  ybc = false;