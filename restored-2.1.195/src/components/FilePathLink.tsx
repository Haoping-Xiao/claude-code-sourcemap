// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fvo
// matched 2.1.88 source: src/components/FilePathLink.tsx
// class=modified  jaccard=0.285  score=0.7112  fileCov=0.3223
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fvo] deps: _i, Lo, Ye, zX, AMe, ql, T4t
((_tl = R(lt(), 1)), (btl = require("path")), (tq = R(se(), 1)));
function SN(e) {
  let t = Stl.c(5),
    { filePath: n, children: r } = e,
    o;
  if (t[0] !== n) ((o = Etl.pathToFileURL(n)), (t[0] = n), (t[1] = o));
  else o = t[1];
  let s = r ?? n,
    i;
  if (t[2] !== o.href || t[3] !== s)
    ((i = Atl.jsx(xs, {
      url: o.href,
      children: s,
    })),
      (t[2] = o.href),
      (t[3] = s),
      (t[4] = i));
  else i = t[4];
  return i;
}
var Stl, Etl, Atl;
