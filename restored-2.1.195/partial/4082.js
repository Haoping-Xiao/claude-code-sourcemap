// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xol
// matched 2.1.88 source: src/commands/install-github-app/SuccessStep.tsx
// class=partial  jaccard=0.0863  score=0.1628  fileCov=0.1552
// note: low-confidence suggestion: src/commands/install-github-app/SuccessStep.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xol = E(() => {
  Ye();
});
function koe({
  isError: e,
  isUnresolved: t,
  shouldAnimate: n
}) {
  let r = Sd(),
    [o, s] = Yol(n && !r),
    i = Dyt(),
    a = czn.useRef(null);
  return czn.useEffect(() => {
    if (t) a.current ??= Date.now();else if (a.current !== null) {
      if (Date.now() - a.current > Kol) i();
      a.current = null;
    }
  }, [t, i]), eCo.jsx(U, {
    ref: o,
    minWidth: 2,
    children: eCo.jsx(w, {
      "aria-label": e ? "tool error:" : "tool:",
      color: t ? void 0 : e ? "error" : "success",
      dimColor: t,
      children: !n || s || e || !t ? gc : " "
    })
  });
}
var czn, eCo;