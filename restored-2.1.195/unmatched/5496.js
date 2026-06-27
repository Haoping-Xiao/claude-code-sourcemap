// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hbc
// class=new  (no 2.1.88 match)
// note: 0 renamed
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
  let [t, n] = Ddr.useState(!1),
    r = ks();
  return Ddr.useEffect(() => {
    if (ybc || !e) return;
    ybc = !0, n(!0);
    let o = r.setTimeout(() => n(!1), qmm);
    return () => {
      o(), n(!1);
    };
  }, [e, r]), t;
}
var Ddr,
  qmm = 5000,
  ybc = !1;