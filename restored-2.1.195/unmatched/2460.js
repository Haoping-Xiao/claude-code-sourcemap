// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _at
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _at = E(() => {
  qNt();
  HI();
  AGe = R(rt(), 1);
});
function ULn(e, t) {
  let n = Sat.useContext(g8),
    r = Sat.useRef(null);
  Sat.useEffect(() => {
    if (e === null) {
      if (r.current !== null && n && eGe()) n(Qx(Y0n));
      r.current = null;
      return;
    }
    if (r.current = e, !n || !eGe()) return;
    let o = WWd[e],
      s = e === "idle" && t !== void 0 ? {
        ...o,
        status: t
      } : o;
    n(Qx(OUi(s)));
  }, [e, t, n]);
}
var Sat,
  bat = (e, t, n) => ({
    type: "rgb",
    r: e,
    g: t,
    b: n
  }),
  WWd;