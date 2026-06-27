// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zRn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zRn = E(() => {
  Tc();
  VRn = new Map();
});
function N4d(e, t) {
  if (e.length === 0) return {
    width: 0,
    height: 0
  };
  let n = t <= 0 || !Number.isFinite(t),
    r = 0,
    o = 0,
    s = 0;
  while (s <= e.length) {
    let i = e.indexOf(`
`, s),
      a = i === -1 ? e.substring(s) : e.substring(s, i),
      l = Uit(a);
    if (o = Math.max(o, l), n) r++;else r += l === 0 ? 1 : Math.ceil(l / t);
    if (i === -1) break;
    s = i + 1;
  }
  return {
    width: o,
    height: r
  };
}
var lGe;