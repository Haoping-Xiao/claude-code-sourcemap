// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nUo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nUo = E(() => {
  Xa();
  Kce();
  Ye();
  Xce();
  _rr();
  ijl = R(lt(), 1), bz = R(rt(), 1), Uq = R(se(), 1), ajl = bz.createContext(false);
  JEt = Object.assign(WNf, {
    Item: qNf
  });
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