// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hEs
// matched 2.1.88 source: node_modules/lodash-es/_createBaseFor.js
// class=partial  jaccard=0.2233  score=1  fileCov=0.2233
// note: low-confidence suggestion: node_modules/lodash-es/_createBaseFor.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hEs = E(() => {
  gEs = VDu;
});
function zDu(e, t, n) {
  return t = yEs(t === void 0 ? e.length - 1 : t, 0), function () {
    var r = arguments,
      o = -1,
      s = yEs(r.length - t, 0),
      i = Array(s);
    while (++o < s) i[o] = r[t + o];
    o = -1;
    var a = Array(t + 1);
    while (++o < t) a[o] = r[o];
    return a[t] = n(i), gEs(e, this, a);
  };
}
var yEs, Cpn;