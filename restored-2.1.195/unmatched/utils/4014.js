// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vMe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vMe = E(() => {
  Mce();
  Stl = R(lt(), 1), Etl = require("url"), Atl = R(se(), 1);
});
function Eef(e, t, n = 1 / 0) {
  let r = t <= 0 || !Number.isFinite(t),
    o = 0,
    s = 0;
  while (s <= e.length) {
    let i = e.indexOf(`
`, s),
      a = i === -1 ? e.substring(s) : e.substring(s, i);
    if (r) o++;else {
      let l = Uit(a);
      o += l === 0 ? 1 : Math.ceil(l / t);
    }
    if (o > n) return o;
    if (i === -1) break;
    s = i + 1;
  }
  return o;
}
function Htl(e, t, n) {
  return Eef(e, t, n) > n;
}