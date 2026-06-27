// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PUt
// matched 2.1.88 source: src/components/design-system/StatusIcon.tsx
// class=modified  jaccard=0.1147  score=0.3395  fileCov=0.1477
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module PUt]
W6i = R(rt(), 1);
function Hs(e) {
  let t = q6i.c(8),
    { status: n, withSpace: r } = e,
    o = r === void 0 ? false : r,
    s = wZr[n],
    i = !s.color,
    a;
  if (t[0] !== s.ariaLabel || t[1] !== s.icon)
    ((a = SPn.jsx(w, {
      "aria-label": s.ariaLabel,
      children: s.icon,
    })),
      (t[0] = s.ariaLabel),
      (t[1] = s.icon),
      (t[2] = a));
  else a = t[2];
  let l = o && " ",
    c;
  if (t[3] !== s.color || t[4] !== i || t[5] !== a || t[6] !== l)
    ((c = SPn.jsxs(w, {
      color: s.color,
      dimColor: i,
      children: [a, l],
    })),
      (t[3] = s.color),
      (t[4] = i),
      (t[5] = a),
      (t[6] = l),
      (t[7] = c));
  else c = t[7];
  return c;
}
var q6i, SPn, wZr;
