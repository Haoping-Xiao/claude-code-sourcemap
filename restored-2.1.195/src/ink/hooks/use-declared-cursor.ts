// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yZr
// matched 2.1.88 source: src/ink/hooks/use-declared-cursor.ts
// class=modified  jaccard=0.5129  score=0.8161  fileCov=0.5799
// note: deminified; 0 identifiers renamed from _t exports
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
  ((y6i = require("path")), (kW = R(rt(), 1)));
});
function RW({ line: e, column: t, active: n, visible: r = false }) {
  let o = dbe.useContext(gLn),
    s = dbe.useRef(null),
    i = dbe.useCallback((a) => {
      s.current = a;
    }, []);
  return (
    dbe.useLayoutEffect(() => {
      let a = s.current;
      if (n && a)
        o({
          relativeX: t,
          relativeY: e,
          node: a,
          visible: r,
        });
      else o(null, a);
    }),
    dbe.useLayoutEffect(
      () => () => {
        o(null, s.current);
      },
      [o],
    ),
    i
  );
}
var dbe;
