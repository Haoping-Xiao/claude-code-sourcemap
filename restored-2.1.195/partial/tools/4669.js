// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y1l
// matched 2.1.88 source: src/components/design-system/LoadingState.tsx
// class=partial  jaccard=0.1558  score=0.2339  fileCov=0.3182
// note: low-confidence suggestion: src/components/design-system/LoadingState.tsx; dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y1l = E(() => {
  lf();
  lC();
  TX();
  wr();
  oc();
  es();
});
function b1l(e) {
  let t = _1l.c(5),
    {
      suggestions: n
    } = e;
  if (n.length === 0) return null;
  let r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = fse.jsx(w, {
    bold: true,
    children: "Suggestions"
  }), t[0] = r;else r = t[0];
  let o;
  if (t[1] !== n) o = n.map(qPf), t[1] = n, t[2] = o;else o = t[2];
  let s;
  if (t[3] !== o) s = fse.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [r, o]
  }), t[3] = o, t[4] = s;else s = t[4];
  return s;
}
function qPf(e, t) {
  return fse.jsxs(U, {
    flexDirection: "column",
    marginTop: t === 0 ? 0 : 1,
    children: [fse.jsxs(U, {
      children: [fse.jsx(Hs, {
        status: e.severity,
        withSpace: true
      }), fse.jsx(w, {
        bold: true,
        children: e.title
      }), e.savingsTokens ? fse.jsxs(w, {
        dimColor: true,
        children: [" ", nt.arrowRight, " save ~", gl(e.savingsTokens)]
      }) : null]
    }), fse.jsx(U, {
      marginLeft: 2,
      children: fse.jsx(w, {
        dimColor: true,
        children: e.detail
      })
    })]
  }, t);
}
var _1l, fse;