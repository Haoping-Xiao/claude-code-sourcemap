// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tvs
// matched 2.1.88 source: node_modules/lodash-es/_isFlattenable.js
// class=partial  jaccard=0.1726  score=0.7061  fileCov=0.186
// note: low-confidence suggestion: node_modules/lodash-es/_isFlattenable.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tvs] deps: lodash-es/_Symbol.js, lodash-es/isArguments.js, lodash-es/isArray.js
Avs = nM ? nM.isConcatSpreadable : void 0;
Hvs = aOu;
function vvs(e, t, n, r, o) {
  var s = -1,
    i = e.length;
  n || (n = Hvs), o || (o = []);
  while (++s < i) {
    var a = e[s];
    if (t > 0 && n(a)) {
      if (t > 1) vvs(a, t - 1, n, r, o);else zXe(o, a);
    } else if (!r) o[o.length] = a;
  }
  return o;
}
var wvs;