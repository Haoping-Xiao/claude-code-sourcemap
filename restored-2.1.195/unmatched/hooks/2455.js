// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UJr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UJr = E(() => {
  fGe();
  j5i = R(rt(), 1), TW = UWd;
});
function vW(e, t) {
  let n = Ine.useContext(SW),
    r = Ine.useRef(e);
  r.current = e;
  let o = Ine.useRef(null),
    s = Ine.useCallback(a => () => o.current?.(), []);
  Ine.useSyncExternalStore(s, mLn);
  let i = n?.setTimeout ?? nat;
  return Ine.useMemo(() => {
    let a = (...l) => {
      o.current?.(), o.current = i(() => {
        o.current = null, r.current(...l);
      }, t);
    };
    return a.cancel = () => {
      o.current?.(), o.current = null;
    }, a;
  }, [i, t]);
}
var Ine;