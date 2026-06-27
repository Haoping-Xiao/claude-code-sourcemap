// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xol
// matched 2.1.88 source: src/components/ToolUseLoader.tsx
// class=partial  jaccard=0.1955  score=0.3229  fileCov=0.3314
// note: low-confidence suggestion: src/components/ToolUseLoader.tsx; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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