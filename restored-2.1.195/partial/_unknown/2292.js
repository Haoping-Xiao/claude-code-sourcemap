// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oFi
// matched 2.1.88 source: node_modules/lodash-es/toNumber.js
// class=partial  jaccard=0.2246  score=1  fileCov=0.2246
// note: low-confidence suggestion: node_modules/lodash-es/toNumber.js; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oFi] deps: nFi
sUd = /^\s+/;
rFi = iUd;
function toNumber(e) {
  if (typeof e == "number") return e;
  if (Uve(e)) return sFi;
  if (Bb(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Bb(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = rFi(e);
  var n = lUd.test(e);
  return n || cUd.test(e) ? uUd(e.slice(2), n ? 2 : 8) : aUd.test(e) ? sFi : +e;
}
var sFi = NaN,
  aUd,
  lUd,
  cUd,
  uUd,
  YYr;