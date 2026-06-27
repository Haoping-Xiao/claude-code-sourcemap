// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oFi
// matched 2.1.88 source: node_modules/lodash-es/toNumber.js
// class=partial  jaccard=0.2246  score=1  fileCov=0.2246
// note: low-confidence suggestion: node_modules/lodash-es/toNumber.js; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oFi] deps: tools/BashTool/commentLabel.ts
sUd = /^\s+/;
rFi = iUd;
function toNumber(value) {
  if (typeof value == "number") return value;
  if (Uve(value)) return sFi;
  if (Bb(value)) {
    var t = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = Bb(t) ? t + "" : t;
  }
  if (typeof value != "string") return value === 0 ? value : +value;
  value = rFi(value);
  var n = lUd.test(value);
  return n || cUd.test(value) ? uUd(value.slice(2), n ? 2 : 8) : aUd.test(value) ? sFi : +value;
}
var sFi = NaN,
  aUd,
  lUd,
  cUd,
  uUd,
  YYr;