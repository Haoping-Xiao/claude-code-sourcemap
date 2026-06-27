// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _at
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0174  score=1  fileCov=0.0174
// note: nearest: node_modules/react/cjs/react.production.js (0.0174); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _at] deps: ink/components/StdinContext.ts, HI
AGe = R(rt(), 1);
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