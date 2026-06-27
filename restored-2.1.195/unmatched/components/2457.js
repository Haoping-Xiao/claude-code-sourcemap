// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Ln
// matched 2.1.88 source: src/components/VirtualMessageList.tsx
// class=new  jaccard=0.0179  score=0.5524  fileCov=0.0182
// note: nearest: src/components/VirtualMessageList.tsx (0.0179); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $Ln] deps: fGe
hat = R(rt(), 1);
function NLn(e) {
  let {
    focusManager: t
  } = OLn.useContext(J7);
  return OLn.useSyncExternalStore(t?.subscribe ?? FWd, () => {
    let n = e.current,
      r = t?.activeElement;
    if (!n || !r) return false;
    return _ne(r, n);
  }, () => false);
}
var OLn,
  FWd = () => () => {};