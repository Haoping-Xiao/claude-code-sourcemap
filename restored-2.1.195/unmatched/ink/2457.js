// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Ln
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Ln = E(() => {
  fGe();
  hat = R(rt(), 1);
});
function NLn(e) {
  let {
    focusManager: t
  } = OLn.useContext(J7);
  return OLn.useSyncExternalStore(t?.subscribe ?? FWd, () => {
    let n = e.current,
      r = t?.activeElement;
    if (!n || !r) return !1;
    return _ne(r, n);
  }, () => !1);
}
var OLn,
  FWd = () => () => {};