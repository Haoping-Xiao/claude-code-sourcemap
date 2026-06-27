// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yzi
// matched 2.1.88 source: src/hooks/useExitOnCtrlCD.ts
// class=partial  jaccard=0.2395  score=1  fileCov=0.2395
// note: low-confidence suggestion: src/hooks/useExitOnCtrlCD.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yzi = E(() => {
  UJr();
  nk();
  rlt();
  Jat();
  F0e = R(rt(), 1);
});
function ig(e, t, n) {
  return hzi(No, t, e, n);
}
function bzi(e, t, n = !0) {
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