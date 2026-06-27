// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xba
// matched 2.1.88 source: src/components/StructuredDiff.tsx
// class=modified (alt of src/components/StructuredDiff.tsx)  jaccard=0.2605  score=1  fileCov=0.2605
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xba] deps: b5e, Tc, Ye
((Kba = R(lt(), 1)), (Z8 = R(se(), 1)));
function u_p(e) {
  return (
    Math.max(e.oldStart + e.oldLines - 1, e.newStart + e.newLines - 1, 1).toString().length + 3
  );
}
function d_p(e, t, n, r, o, s, i, a) {
  let l = qba();
  if (!l) return null;
  let c = a ? u_p(e) : 0,
    u = c > 0 && c < s ? c : 0,
    d = `${o}|${s}|${i ? 1 : 0}|${u}|${wt.level}|${t ?? ""}|${n}`,
    p = Jba.get(e),
    f = p?.get(d);
  if (f) return f;
  let m = new l(e, t, n, r).render(o, s, i);
  if (m === null) return null;
  let g = null,
    h = null;
  if (u > 0) {
    ((g = Array(m.length)), (h = Array(m.length)));
    for (let b = 0; b < m.length; b++) {
      let [_, S] = f3i(m[b] ?? "", u);
      ((g[b] = _), (h[b] = S));
    }
  }
  let y = {
    lines: m,
    gutterWidth: u,
    gutters: g,
    contents: h,
  };
  if (!p) ((p = new Map()), Jba.set(e, p));
  if (p.size >= 4) p.clear();
  return (p.set(d, y), y);
}
var Qba, Zba, Yue, Jba, Xue;
