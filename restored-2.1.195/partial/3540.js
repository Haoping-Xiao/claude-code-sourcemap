// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ode
// matched 2.1.88 source: node_modules/protobufjs/src/util/minimal.js
// class=partial  jaccard=0.2436  score=0.8171  fileCov=0.2577
// note: low-confidence suggestion: node_modules/protobufjs/src/util/minimal.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ode = Q(zyo => {
  var Qc = zyo;
  Qc.asPromise = jyo();
  Qc.base64 = pFa();
  Qc.EventEmitter = mFa();
  Qc.float = EFa();
  Qc.inquire = HFa();
  Qc.utf8 = vFa();
  Qc.pool = CFa();
  Qc.LongBits = xFa();
  Qc.isNode = Boolean(typeof global < "u" && global && global.process && global.process.versions && global.process.versions.node);
  Qc.global = Qc.isNode && global || typeof window < "u" && window || typeof self < "u" && self || zyo;
  Qc.emptyArray = Object.freeze ? Object.freeze([]) : [];
  Qc.emptyObject = Object.freeze ? Object.freeze({}) : {};
  Qc.isInteger = Number.isInteger || function (t) {
    return typeof t === "number" && isFinite(t) && Math.floor(t) === t;
  };
  Qc.isString = function (t) {
    return typeof t === "string" || t instanceof String;
  };
  Qc.isObject = function (t) {
    return t && typeof t === "object";
  };
  Qc.isset = Qc.isSet = function (t, n) {
    var r = t[n];
    if (r != null && t.hasOwnProperty(n)) return typeof r !== "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0;
    return !1;
  };
  Qc.Buffer = function () {
    try {
      var e = Qc.inquire("buffer").Buffer;
      return e.prototype.utf8Write ? e : null;
    } catch (t) {
      return null;
    }
  }();
  Qc._Buffer_from = null;
  Qc._Buffer_allocUnsafe = null;
  Qc.newBuffer = function (t) {
    return typeof t === "number" ? Qc.Buffer ? Qc._Buffer_allocUnsafe(t) : new Qc.Array(t) : Qc.Buffer ? Qc._Buffer_from(t) : typeof Uint8Array > "u" ? t : new Uint8Array(t);
  };
  Qc.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
  Qc.Long = Qc.global.dcodeIO && Qc.global.dcodeIO.Long || Qc.global.Long || Qc.inquire("long");
  Qc.key2Re = /^true|false|0|1$/;
  Qc.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  Qc.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  Qc.longToHash = function (t) {
    return t ? Qc.LongBits.from(t).toHash() : Qc.LongBits.zeroHash;
  };
  Qc.longFromHash = function (t, n) {
    var r = Qc.LongBits.fromHash(t);
    if (Qc.Long) return Qc.Long.fromBits(r.lo, r.hi, n);
    return r.toNumber(Boolean(n));
  };
  function kFa(e, t, n) {
    for (var r = Object.keys(t), o = 0; o < r.length; ++o) if (e[r[o]] === void 0 || !n) {
      if (r[o] !== "__proto__") e[r[o]] = t[r[o]];
    }
    return e;
  }
  Qc.merge = kFa;
  Qc.recursionLimit = 100;
  Qc.makeProp = function (t, n) {
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  };
  Qc.lcFirst = function (t) {
    return t.charAt(0).toLowerCase() + t.substring(1);
  };
  function RFa(e) {
    function t(n, r) {
      if (!(this instanceof t)) return new t(n, r);
      if (Object.defineProperty(this, "message", {
        get: function () {
          return n;
        }
      }), Error.captureStackTrace) Error.captureStackTrace(this, t);else Object.defineProperty(this, "stack", {
        value: Error().stack || ""
      });
      if (r) kFa(this, r);
    }
    return t.prototype = Object.create(Error.prototype, {
      constructor: {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0
      },
      name: {
        get: function () {
          return e;
        },
        set: void 0,
        enumerable: !1,
        configurable: !0
      },
      toString: {
        value: function () {
          return this.name + ": " + this.message;
        },
        writable: !0,
        enumerable: !1,
        configurable: !0
      }
    }), t;
  }
  Qc.newError = RFa;
  Qc.ProtocolError = RFa("ProtocolError");
  Qc.oneOfGetter = function (t) {
    var n = {};
    for (var r = 0; r < t.length; ++r) n[t[r]] = 1;
    return function () {
      for (var o = Object.keys(this), s = o.length - 1; s > -1; --s) if (n[o[s]] === 1 && this[o[s]] !== void 0 && this[o[s]] !== null) return o[s];
    };
  };
  Qc.oneOfSetter = function (t) {
    return function (n) {
      for (var r = 0; r < t.length; ++r) if (t[r] !== n) delete this[t[r]];
    };
  };
  Qc.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: !0
  };
  Qc._configure = function () {
    var e = Qc.Buffer;
    if (!e) {
      Qc._Buffer_from = Qc._Buffer_allocUnsafe = null;
      return;
    }
    Qc._Buffer_from = e.from !== Uint8Array.from && e.from || function (n, r) {
      return new e(n, r);
    }, Qc._Buffer_allocUnsafe = e.allocUnsafe || function (n) {
      return new e(n);
    };
  };
});