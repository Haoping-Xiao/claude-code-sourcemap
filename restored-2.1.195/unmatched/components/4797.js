// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nUo
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0173  score=1  fileCov=0.0173
// note: nearest: node_modules/react/cjs/react.production.js (0.0173); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nUo] deps: Xa, Kce, Ye, Xce, _rr
ijl = R(lt(), 1), bz = R(rt(), 1), Uq = R(se(), 1), ajl = bz.createContext(false);
JEt = Object.assign(WNf, {
  Item: qNf
});
function zNf(e) {
  return typeof e === "string" && VNf.has(e);
}
function cjl() {
  let [e, t] = brr.useState(null);
  return brr.useEffect(() => {
    let n = false;
    return KNf().then(r => {
      if (!n && r) t(r);
    }), () => {
      n = true;
    };
  }, []), e;
}
var brr, VNf, KNf;