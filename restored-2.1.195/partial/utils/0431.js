// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jun
// matched 2.1.88 source: node_modules/lodash-es/_baseUnset.js
// class=partial  jaccard=0.2366  score=0.7789  fileCov=0.2537
// note: low-confidence suggestion: node_modules/lodash-es/_baseUnset.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jun] deps: Fun
gIr = R(require("process"));
function Eau(e, t, n, r) {
  if (!Bb(e)) return e;
  t = wK(t, e);
  var o = -1,
    s = t.length,
    i = s - 1,
    a = e;
  while (a != null && ++o < s) {
    var l = DV(t[o]),
      c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
    if (o != i) {
      var u = a[l];
      if (c = r ? r(u, l, a) : void 0, c === void 0) c = Bb(u) ? u : Nve(t[o + 1]) ? [] : {};
    }
    pwe(a, l, c), a = a[l];
  }
  return e;
}
var Ifs;