// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jJr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jJr = E(() => {
  l0e();
  tUt();
  _8 = R(rt(), 1);
});
function Z_e() {
  AGe.useContext(B_e);
  let e = Cu.get(process.stdout);
  return AGe.useMemo(() => {
    if (!e) return {
      copySelection: () => "",
      copySelectionNoClear: () => "",
      getSelectedText: () => "",
      clearSelection: () => {},
      hasSelection: () => false,
      getState: () => null,
      subscribe: () => () => {},
      moveFocus: () => {},
      setSelectionBgColor: () => {}
    };
    return {
      copySelection: () => e.copySelection(),
      copySelectionNoClear: () => e.copySelectionNoClear(),
      getSelectedText: () => e.getSelectedText(),
      clearSelection: () => e.clearTextSelection(),
      hasSelection: () => e.hasTextSelection(),
      getState: () => e.selection,
      subscribe: t => e.subscribeToSelectionChange(t),
      moveFocus: t => e.moveSelectionFocus(t),
      setSelectionBgColor: t => e.setSelectionBgColor(t)
    };
  }, [e]);
}
function q5i() {
  AGe.useContext(B_e);
  let e = Cu.get(process.stdout);
  return AGe.useSyncExternalStore(e ? e.subscribeToSelectionChange : jWd, e ? e.hasTextSelection : GWd);
}
var AGe,
  jWd = () => () => {},
  GWd = () => false;