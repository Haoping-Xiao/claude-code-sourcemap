// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i_s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var i_s = E(() => {
  s_s = vSu;
});
function wSu(e, t) {
  let n = 0,
    r = 1000 / t,
    o,
    s,
    i = (c, u = Date.now()) => {
      if (n = u, o = null, s) clearTimeout(s), s = null;
      e(...c);
    };
  return [(...c) => {
    let u = Date.now(),
      d = u - n;
    if (d >= r) i(c, u);else if (o = c, !s) s = setTimeout(() => {
      s = null, i(o);
    }, r - d);
  }, () => o && i(o)];
}
var a_s;