// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EEs
// matched 2.1.88 source: node_modules/mimic-fn/index.js
// class=partial  jaccard=0.1756  score=0.8417  fileCov=0.1816
// note: low-confidence suggestion: node_modules/mimic-fn/index.js; dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module EEs] deps: bEs, LEr, Gon
YDu = !UJe ? rJe : function (e, t) {
  return UJe(e, "toString", {
    configurable: true,
    enumerable: false,
    value: _Es(t),
    writable: true
  });
}, SEs = YDu;
function ZDu(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = QDu(),
      o = JDu - (r - n);
    if (n = r, o > 0) {
      if (++t >= XDu) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var XDu = 800,
  JDu = 16,
  QDu,
  AEs;