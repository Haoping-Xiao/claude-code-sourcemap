// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VIa
// matched 2.1.88 source: node_modules/lodash-es/_createCaseFirst.js
// class=partial  jaccard=0.1234  score=1  fileCov=0.1234
// note: low-confidence suggestion: node_modules/lodash-es/_createCaseFirst.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VIa] deps: lodash-es/_unicodeToArray.js, lodash-es/_asciiToArray.js, WIa
qIa = rwp;
function owp(e) {
  return function (t) {
    t = Bie(t);
    var n = oFn(t) ? qIa(t) : void 0,
      r = n ? n[0] : t.charAt(0),
      o = n ? DIa(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var zIa;