// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yZr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yZr = E(() => {
  dn();
  vn();
  iJr();
  Ye();
  je();
  DGe();
  I1();
  Ao();
  Is();
  y6i = require("path"), kW = R(rt(), 1);
});
function RW({
  line: e,
  column: t,
  active: n,
  visible: r = false
}) {
  let o = dbe.useContext(gLn),
    s = dbe.useRef(null),
    i = dbe.useCallback(a => {
      s.current = a;
    }, []);
  return dbe.useLayoutEffect(() => {
    let a = s.current;
    if (n && a) o({
      relativeX: t,
      relativeY: e,
      node: a,
      visible: r
    });else o(null, a);
  }), dbe.useLayoutEffect(() => () => {
    o(null, s.current);
  }, [o]), i;
}
var dbe;