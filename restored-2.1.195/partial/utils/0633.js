// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CEs
// matched 2.1.88 source: node_modules/lodash-es/_createAssigner.js
// class=partial  jaccard=0.0945  score=1  fileCov=0.0945
// note: low-confidence suggestion: node_modules/lodash-es/_createAssigner.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CEs] deps: lodash-es/_arrayPush.js, ZXe, lodash-es/isLength.js, lodash-es/isFunction.js
wEs = nPu;
function rPu(e) {
  return TEs(function (t, n) {
    var r = -1,
      o = n.length,
      s = o > 1 ? n[o - 1] : void 0,
      i = o > 2 ? n[2] : void 0;
    if (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, i && wEs(n[0], n[1], i)) s = o < 3 ? void 0 : s, o = 1;
    t = Object(t);
    while (++r < o) {
      var a = n[r];
      if (a) e(t, a, r, s);
    }
    return t;
  });
}
var IEs;