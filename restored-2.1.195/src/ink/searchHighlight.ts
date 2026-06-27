// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IJr
// matched 2.1.88 source: src/ink/searchHighlight.ts
// class=modified  jaccard=0.3458  score=1  fileCov=0.3458
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IJr] deps: je, At, ZS, one, OM, q7, jh
vne = require("fs");
function FWi(e, t, n) {
  if (!t) return false;
  let r = t.toLowerCase(),
    o = r.length,
    s = e.width,
    i = e.noSelect,
    a = e.height,
    l = false;
  for (let c = 0; c < a; c++) {
    let u = c * s,
      d = "",
      p = [],
      f = [];
    for (let g = 0; g < s; g++) {
      let h = u + g,
        y = X7(e, h);
      if (y.width === 2 || y.width === 3 || i[h] === 1) continue;
      let b = y.char.toLowerCase(),
        _ = p.length;
      for (let S = 0; S < b.length; S++) f.push(_);
      ((d += b), p.push(g));
    }
    let m = d.indexOf(r);
    while (m >= 0) {
      l = true;
      let g = f[m],
        h = f[m + o - 1];
      for (let y = g; y <= h; y++) {
        let b = p[y],
          _ = X7(e, u + b);
        Qit(e, b, c, n.withInverse(_.styleId));
      }
      m = d.indexOf(r, m + o);
    }
  }
  return l;
}
