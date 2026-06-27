// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H$
// matched 2.1.88 source: node_modules/protobufjs/src/util.js
// class=partial  jaccard=0.2332  score=0.751  fileCov=0.2527
// note: low-confidence suggestion: node_modules/protobufjs/src/util.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H$ = Q((vS_, x3a) => {
  var Xv = x3a.exports = Ode(),
    C3a = o_o(),
    Tbo,
    vbo;
  Xv.codegen = Q4a();
  Xv.fetch = n3a();
  Xv.path = s3a();
  Xv.patterns = a3a();
  var I3a = Xv.patterns.reservedRe,
    V2p = Xv.patterns.unsafePropertyRe;
  Xv.fs = Xv.inquire("fs");
  Xv.checkDepth = function (t) {
    if (t === void 0) t = 0;
    if (t > Xv.recursionLimit) throw Error("max depth exceeded");
    return t;
  };
  Xv.toArray = function (t) {
    if (t) {
      var n = Object.keys(t),
        r = Array(n.length),
        o = 0;
      while (o < n.length) r[o] = t[n[o++]];
      return r;
    }
    return [];
  };
  Xv.toObject = function (t) {
    var n = {},
      r = 0;
    while (r < t.length) {
      var o = t[r++],
        s = t[r++];
      if (s !== void 0) n[o] = s;
    }
    return n;
  };
  Xv.isReserved = function (t) {
    return I3a.test(t);
  };
  Xv.safeProp = function (t) {
    if (!/^[$\w_]+$/.test(t) || I3a.test(t)) return "[" + JSON.stringify(t) + "]";
    return "." + t;
  };
  Xv.ucFirst = function (t) {
    return t.charAt(0).toUpperCase() + t.substring(1);
  };
  var z2p = /_([a-z])/g;
  Xv.camelCase = function (t) {
    return t.substring(0, 1) + t.substring(1).replace(z2p, function (n, r) {
      return r.toUpperCase();
    });
  };
  Xv.compareFieldsById = function (t, n) {
    return t.id - n.id;
  };
  Xv.decorateType = function (t, n) {
    if (t.$type) {
      if (n && t.$type.name !== n) Xv.decorateRoot.remove(t.$type), t.$type.name = n, Xv.decorateRoot.add(t.$type);
      return t.$type;
    }
    if (!Tbo) Tbo = aWn();
    var r = new Tbo(n || t.name);
    return Xv.decorateRoot.add(r), r.ctor = t, Object.defineProperty(t, "$type", {
      value: r,
      enumerable: !1
    }), Object.defineProperty(t.prototype, "$type", {
      value: r,
      enumerable: !1
    }), r;
  };
  var K2p = 0;
  Xv.decorateEnum = function (t) {
    if (t.$type) return t.$type;
    if (!vbo) vbo = Qre();
    var n = new vbo("Enum" + K2p++, t);
    return Xv.decorateRoot.add(n), Object.defineProperty(t, "$type", {
      value: n,
      enumerable: !1
    }), n;
  };
  Xv.setProperty = function (t, n, r, o) {
    function s(i, a, l) {
      var c = a.shift();
      if (V2p.test(c)) return i;
      if (a.length > 0) i[c] = s(i[c] || {}, a, l);else {
        var u = i[c];
        if (u && o) return i;
        if (u) l = [].concat(u).concat(l);
        i[c] = l;
      }
      return i;
    }
    if (typeof t !== "object") throw TypeError("dst must be an object");
    if (!n) throw TypeError("path must be specified");
    return n = n.split("."), s(t, n, r);
  };
  Object.defineProperty(Xv, "decorateRoot", {
    get: function () {
      return C3a.decorated || (C3a.decorated = new (dWn())());
    }
  });
});