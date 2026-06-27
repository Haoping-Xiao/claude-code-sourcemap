// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yzi
// matched 2.1.88 source: src/hooks/useExitOnCtrlCD.ts
// class=partial  jaccard=0.1031  score=0.3495  fileCov=0.1275
// note: low-confidence suggestion: src/hooks/useExitOnCtrlCD.ts; dir inferred from dep-graph -> hooks; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yzi] deps: UJr, nk, rlt, Jat
F0e = R(rt(), 1);
function ig(e, t, n) {
  return hzi(No, t, e, n);
}
function useExitOnCtrlCD(e, t, n = true) {
  let {
    handleInterrupt: r,
    handleExit: o,
    exitState: s
  } = DZr(t, e);
  return {
    entries: _zi.useMemo(() => n ? [{
      action: "app:interrupt",
      run: r
    }, {
      action: "app:exit",
      run: o
    }] : [], [n, r, o]),
    exitState: s
  };
}
var _zi;