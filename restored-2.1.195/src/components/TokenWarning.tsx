// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ahc
// matched 2.1.88 source: src/components/TokenWarning.tsx
// class=modified  jaccard=0.1897  score=0.575  fileCov=0.2207
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ahc = E(() => {
  Shc();
  Ye();
  es();
  Xur = R(se(), 1);
});
function Thc(e) {
  let t = Hhc.c(13),
    { tokenUsage: n, model: r } = e,
    o = Ht(ydm),
    s;
  if (t[0] !== o || t[1] !== r || t[2] !== n)
    ((s = rLe(n, r, o)), (t[0] = o), (t[1] = r), (t[2] = n), (t[3] = s));
  else s = t[3];
  let i = s,
    a = Wur();
  if (i.level === "ok" || a) return null;
  let l = i.pctLeft,
    c = pC(),
    u;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) ((u = J8e("warning")), (t[4] = u));
  else u = t[4];
  let d = u,
    p = l,
    f = !nLe(r, o),
    m = false;
  if (f || m) {
    let b = are(r, o),
      _;
    if (t[5] !== b || t[6] !== n)
      ((_ = Math.round(((b - n) / b) * 100)), (t[5] = b), (t[6] = n), (t[7] = _));
    else _ = t[7];
    p = Math.max(0, _);
  }
  let g = f ? `${100 - p}% context used` : `${p}% until auto-compact`;
  if (c) {
    let b = d ? `${g} \xB7 ${d}` : g,
      _;
    if (t[9] !== b)
      ((_ = r6o.jsx(w, {
        dimColor: true,
        wrap: "truncate",
        children: b,
      })),
        (t[9] = b),
        (t[10] = _));
    else _ = t[10];
    return _;
  }
  let h = d
      ? `Context low (${l}% remaining) \xB7 ${d}`
      : Oe.DISABLE_COMPACT
        ? `Context low (${l}% remaining)`
        : `Context low (${l}% remaining) \xB7 Run /compact to compact & continue`,
    y;
  if (t[11] !== h)
    ((y = r6o.jsx(w, {
      color: "error",
      wrap: "truncate",
      children: h,
    })),
      (t[11] = h),
      (t[12] = y));
  else y = t[12];
  return y;
}
function ydm(e) {
  return e.autoCompactWindow;
}
var Hhc, hdm, r6o;
