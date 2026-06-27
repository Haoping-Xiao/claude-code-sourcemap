// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jun
// matched 2.1.88 source: node_modules/lodash-es/_baseUnset.js
// class=partial  jaccard=0.2366  score=0.7789  fileCov=0.2537
// note: low-confidence suggestion: node_modules/lodash-es/_baseUnset.js; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jun] deps: @modelcontextprotocol/sdk/dist/esm/server/stdio.js
gIr = R(require("process"));
function baseUnset(object, path, n, r) {
  if (!Bb(object)) return object;
  path = wK(path, object);
  var o = -1,
    s = path.length,
    i = s - 1,
    a = object;
  while (a != null && ++o < s) {
    var l = DV(path[o]),
      c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype") return object;
    if (o != i) {
      var u = a[l];
      if (c = r ? r(u, l, a) : void 0, c === void 0) c = Bb(u) ? u : Nve(path[o + 1]) ? [] : {};
    }
    pwe(a, l, c), a = a[l];
  }
  return object;
}
var Ifs;