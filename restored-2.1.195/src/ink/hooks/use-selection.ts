// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jJr
// matched 2.1.88 source: src/ink/hooks/use-selection.ts
// class=modified  jaccard=0.5081  score=0.9327  fileCov=0.5274
// note: deminified; 0 identifiers renamed from _t exports
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
    if (!e)
      return {
        copySelection: () => "",
        copySelectionNoClear: () => "",
        getSelectedText: () => "",
        clearSelection: () => {},
        hasSelection: () => false,
        getState: () => null,
        subscribe: () => () => {},
        moveFocus: () => {},
        setSelectionBgColor: () => {},
      };
    return {
      copySelection: () => e.copySelection(),
      copySelectionNoClear: () => e.copySelectionNoClear(),
      getSelectedText: () => e.getSelectedText(),
      clearSelection: () => e.clearTextSelection(),
      hasSelection: () => e.hasTextSelection(),
      getState: () => e.selection,
      subscribe: (t) => e.subscribeToSelectionChange(t),
      moveFocus: (t) => e.moveSelectionFocus(t),
      setSelectionBgColor: (t) => e.setSelectionBgColor(t),
    };
  }, [e]);
}
function q5i() {
  AGe.useContext(B_e);
  let e = Cu.get(process.stdout);
  return AGe.useSyncExternalStore(
    e ? e.subscribeToSelectionChange : jWd,
    e ? e.hasTextSelection : GWd,
  );
}
var AGe,
  jWd = () => () => {},
  GWd = () => false;
