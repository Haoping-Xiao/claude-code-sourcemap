// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j7a
// matched 2.1.88 source: node_modules/xmlbuilder/lib/index.js
// class=partial  jaccard=0.1263  score=1  fileCov=0.1263
// note: low-confidence suggestion: node_modules/xmlbuilder/lib/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var j7a = Q((F7a, WPe) => {
  (function () {
    var e, t, n, r, o, s, i, a, l;
    ({
      assign: a,
      isFunction: l
    } = _pe()), n = rHo(), r = lHo(), o = O7a(), i = b9n(), s = U7a(), e = Z0(), t = AVt(), WPe.exports.create = function (c, u, d, p) {
      var f, m;
      if (c == null) throw Error("Root element needs a name.");
      if (p = a({}, u, d, p), f = new r(p), m = f.element(c), !p.headless) {
        if (f.declaration(p), p.pubID != null || p.sysID != null) f.dtd(p);
      }
      return m;
    }, WPe.exports.begin = function (c, u, d) {
      if (l(c)) [u, d] = [c, u], c = {};
      if (u) return new o(c, u, d);else return new r(c);
    }, WPe.exports.stringWriter = function (c) {
      return new i(c);
    }, WPe.exports.streamWriter = function (c, u) {
      return new s(c, u);
    }, WPe.exports.implementation = new n(), WPe.exports.nodeType = e, WPe.exports.writerState = t;
  }).call(F7a);
});