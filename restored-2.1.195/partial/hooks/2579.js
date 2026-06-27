// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yzi
// matched 2.1.88 source: src/hooks/useExitOnCtrlCD.ts
// class=partial  jaccard=0.1031  score=0.3495  fileCov=0.1275
// note: low-confidence suggestion: src/hooks/useExitOnCtrlCD.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yzi] deps: react/cjs/react.production.js, nk, hooks/useExitOnCtrlCD.ts, hooks/useTextInput.ts
F0e = R(rt(), 1);
function ig(e, t, n) {
  return hzi(No, t, e, n);
}
function useExitOnCtrlCD(useKeybindingsHook, onInterrupt, n = true) {
  let {
    handleInterrupt: r,
    handleExit: o,
    exitState: s
  } = DZr(onInterrupt, useKeybindingsHook);
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