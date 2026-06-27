// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nhi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nhi = E(() => {
  d1 = [];
  for (let e = 0; e < 256; ++e) d1.push((e + 256).toString(16).slice(1));
});
function X_d(e, t, n) {
  if (zWr.randomUUID && !t && !e) return zWr.randomUUID();
  e = e || {};
  let r = e.random ?? e.rng?.() ?? KWr();
  if (r.length < 16) throw Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    if (n = n || 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let o = 0; o < 16; ++o) t[n + o] = r[o];
    return t;
  }
  return Ohi(r);
}
var YWr;