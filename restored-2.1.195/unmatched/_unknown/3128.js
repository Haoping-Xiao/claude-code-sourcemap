// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kBn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kBn = E(() => {
  B5e();
  eEa = R(HSa(), 1), tEa = R(ZSa(), 1);
});
function tbp(e, t) {
  return R4t(e, t).split(`
`);
}
function nbp(e, t) {
  let n = t.length,
    r = (e % n + n) % n;
  return [...t.slice(r), ...t.slice(0, r)];
}
function nEa({
  items: e,
  width: t,
  renderItem: n,
  active: r,
  position: o,
  pageSize: s
}) {
  let i = e.map((m, g) => ({
      item: m,
      index: g,
      isActive: g === r
    })),
    a = nbp(r - o, i).slice(0, s),
    l = m => a[m] == null ? [] : tbp(n(a[m]), t),
    c = Array.from({
      length: s
    }),
    u = l(o).slice(0, s),
    d = o + u.length <= s ? o : s - u.length;
  c.splice(d, u.length, ...u);
  let p = d + u.length,
    f = o + 1;
  while (p < s && f < a.length) {
    for (let m of l(f)) if (c[p++] = m, p >= s) break;
    f++;
  }
  p = d - 1, f = o - 1;
  while (p >= 0 && f >= 0) {
    for (let m of l(f).reverse()) if (c[p--] = m, p < 0) break;
    f--;
  }
  return c.filter(m => typeof m === "string");
}