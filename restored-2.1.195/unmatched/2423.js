// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Wi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Wi = E(() => {
  aGe();
});
function OWi(e, t) {
  let n = t.toLowerCase();
  if (!n) return [];
  let r = n.length,
    o = e.width,
    s = e.height,
    i = e.noSelect,
    a = [],
    l = performance.now();
  for (let c = 0; c < s; c++) {
    let u = c * o,
      d = "",
      p = [],
      f = [];
    for (let g = 0; g < o; g++) {
      let h = u + g,
        y = X7(e, h);
      if (y.width === 2 || y.width === 3 || i[h] === 1) continue;
      let b = y.char.toLowerCase(),
        _ = p.length;
      for (let S = 0; S < b.length; S++) f.push(_);
      d += b, p.push(g);
    }
    let m = d.indexOf(n);
    while (m >= 0) {
      let g = f[m],
        h = f[m + r - 1],
        y = p[g],
        b = p[h] + 1;
      a.push({
        row: c,
        col: y,
        len: b - y
      }), m = d.indexOf(n, m + r);
    }
  }
  return aWd.scan += performance.now() - l, a;
}
function NWi(e, t, n, r, o) {
  if (o < 0 || o >= n.length) return !1;
  let s = n[o],
    i = s.row + r;
  if (i < 0 || i >= e.height) return !1;
  let a = c => t.withCurrentMatch(c),
    l = i * e.width;
  for (let c = s.col; c < s.col + s.len; c++) {
    if (c < 0 || c >= e.width) continue;
    let u = X7(e, l + c);
    Qit(e, c, i, a(u.styleId));
  }
  return !0;
}
var iWd, aWd;