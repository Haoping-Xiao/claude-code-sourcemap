// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O4c
// matched 2.1.88 source: node_modules/zod/v4/core/api.js
// class=new  jaccard=0.0387  score=0.1002  fileCov=0.0593
// note: nearest: node_modules/zod/v4/core/api.js (0.0387); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var O4c = Q((tXe, $4c) => {
  var FJo = require("crypto");
  tXe = $4c.exports = Bnn;
  function Bnn(e, t) {
    return t = P4c(e, t), MPm(e, t);
  }
  tXe.sha1 = function (e) {
    return Bnn(e);
  };
  tXe.keys = function (e) {
    return Bnn(e, {
      excludeValues: true,
      algorithm: "sha1",
      encoding: "hex"
    });
  };
  tXe.MD5 = function (e) {
    return Bnn(e, {
      algorithm: "md5",
      encoding: "hex"
    });
  };
  tXe.keysMD5 = function (e) {
    return Bnn(e, {
      algorithm: "md5",
      encoding: "hex",
      excludeValues: true
    });
  };
  var Kvt = FJo.getHashes ? FJo.getHashes().slice() : ["sha1", "md5"];
  Kvt.push("passthrough");
  var L4c = ["buffer", "hex", "binary", "base64"];
  function P4c(e, t) {
    t = t || {};
    var n = {};
    if (n.algorithm = t.algorithm || "sha1", n.encoding = t.encoding || "hex", n.excludeValues = t.excludeValues ? true : false, n.algorithm = n.algorithm.toLowerCase(), n.encoding = n.encoding.toLowerCase(), n.ignoreUnknown = t.ignoreUnknown !== true ? false : true, n.respectType = t.respectType === false ? false : true, n.respectFunctionNames = t.respectFunctionNames === false ? false : true, n.respectFunctionProperties = t.respectFunctionProperties === false ? false : true, n.unorderedArrays = t.unorderedArrays !== true ? false : true, n.unorderedSets = t.unorderedSets === false ? false : true, n.unorderedObjects = t.unorderedObjects === false ? false : true, n.replacer = t.replacer || void 0, n.excludeKeys = t.excludeKeys || void 0, typeof e === "undefined") throw Error("Object argument required.");
    for (var r = 0; r < Kvt.length; ++r) if (Kvt[r].toLowerCase() === n.algorithm.toLowerCase()) n.algorithm = Kvt[r];
    if (Kvt.indexOf(n.algorithm) === -1) throw Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + Kvt.join(", "));
    if (L4c.indexOf(n.encoding) === -1 && n.algorithm !== "passthrough") throw Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + L4c.join(", "));
    return n;
  }
  function D4c(e) {
    if (typeof e !== "function") return false;
    var t = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
    return t.exec(Function.prototype.toString.call(e)) != null;
  }
  function MPm(e, t) {
    var n;
    if (t.algorithm !== "passthrough") n = FJo.createHash(t.algorithm);else n = new M4c();
    if (typeof n.write === "undefined") n.write = n.update, n.end = n.update;
    var r = jJo(t, n);
    if (r.dispatch(e), !n.update) n.end("");
    if (n.digest) return n.digest(t.encoding === "buffer" ? void 0 : t.encoding);
    var o = n.read();
    if (t.encoding === "buffer") return o;
    return o.toString(t.encoding);
  }
  tXe.writeToStream = function (e, t, n) {
    if (typeof n === "undefined") n = t, t = {};
    return t = P4c(e, t), jJo(t, n).dispatch(e);
  };
  function jJo(e, t, n) {
    n = n || [];
    var r = function (o) {
      if (t.update) return t.update(o, "utf8");else return t.write(o, "utf8");
    };
    return {
      dispatch: function (o) {
        if (e.replacer) o = e.replacer(o);
        var s = typeof o;
        if (o === null) s = "null";
        return this["_" + s](o);
      },
      _object: function (o) {
        var s = /\[object (.*)\]/i,
          i = Object.prototype.toString.call(o),
          a = s.exec(i);
        if (!a) a = "unknown:[" + i + "]";else a = a[1];
        a = a.toLowerCase();
        var l = null;
        if ((l = n.indexOf(o)) >= 0) return this.dispatch("[CIRCULAR:" + l + "]");else n.push(o);
        if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(o)) return r("buffer:"), r(o);
        if (a !== "object" && a !== "function" && a !== "asyncfunction") {
          if (this["_" + a]) this["_" + a](o);else if (e.ignoreUnknown) return r("[" + a + "]");else throw Error('Unknown object type "' + a + '"');
        } else {
          var c = Object.keys(o);
          if (e.unorderedObjects) c = c.sort();
          if (e.respectType !== false && !D4c(o)) c.splice(0, 0, "prototype", "__proto__", "constructor");
          if (e.excludeKeys) c = c.filter(function (d) {
            return !e.excludeKeys(d);
          });
          r("object:" + c.length + ":");
          var u = this;
          return c.forEach(function (d) {
            if (u.dispatch(d), r(":"), !e.excludeValues) u.dispatch(o[d]);
            r(",");
          });
        }
      },
      _array: function (o, s) {
        s = typeof s !== "undefined" ? s : e.unorderedArrays !== false;
        var i = this;
        if (r("array:" + o.length + ":"), !s || o.length <= 1) return o.forEach(function (c) {
          return i.dispatch(c);
        });
        var a = [],
          l = o.map(function (c) {
            var u = new M4c(),
              d = n.slice(),
              p = jJo(e, u, d);
            return p.dispatch(c), a = a.concat(d.slice(n.length)), u.read().toString();
          });
        return n = n.concat(a), l.sort(), this._array(l, false);
      },
      _date: function (o) {
        return r("date:" + o.toJSON());
      },
      _symbol: function (o) {
        return r("symbol:" + o.toString());
      },
      _error: function (o) {
        return r("error:" + o.toString());
      },
      _boolean: function (o) {
        return r("bool:" + o.toString());
      },
      _string: function (o) {
        r("string:" + o.length + ":"), r(o.toString());
      },
      _function: function (o) {
        if (r("fn:"), D4c(o)) this.dispatch("[native]");else this.dispatch(o.toString());
        if (e.respectFunctionNames !== false) this.dispatch("function-name:" + String(o.name));
        if (e.respectFunctionProperties) this._object(o);
      },
      _number: function (o) {
        return r("number:" + o.toString());
      },
      _xml: function (o) {
        return r("xml:" + o.toString());
      },
      _null: function () {
        return r("Null");
      },
      _undefined: function () {
        return r("Undefined");
      },
      _regexp: function (o) {
        return r("regex:" + o.toString());
      },
      _uint8array: function (o) {
        return r("uint8array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _uint8clampedarray: function (o) {
        return r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _int8array: function (o) {
        return r("uint8array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _uint16array: function (o) {
        return r("uint16array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _int16array: function (o) {
        return r("uint16array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _uint32array: function (o) {
        return r("uint32array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _int32array: function (o) {
        return r("uint32array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _float32array: function (o) {
        return r("float32array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _float64array: function (o) {
        return r("float64array:"), this.dispatch(Array.prototype.slice.call(o));
      },
      _arraybuffer: function (o) {
        return r("arraybuffer:"), this.dispatch(new Uint8Array(o));
      },
      _url: function (o) {
        return r("url:" + o.toString(), "utf8");
      },
      _map: function (o) {
        r("map:");
        var s = Array.from(o);
        return this._array(s, e.unorderedSets !== false);
      },
      _set: function (o) {
        r("set:");
        var s = Array.from(o);
        return this._array(s, e.unorderedSets !== false);
      },
      _file: function (o) {
        return r("file:"), this.dispatch([o.name, o.size, o.type, o.lastModfied]);
      },
      _blob: function () {
        if (e.ignoreUnknown) return r("[blob]");
        throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
      },
      _domwindow: function () {
        return r("domwindow");
      },
      _bigint: function (o) {
        return r("bigint:" + o.toString());
      },
      _process: function () {
        return r("process");
      },
      _timer: function () {
        return r("timer");
      },
      _pipe: function () {
        return r("pipe");
      },
      _tcp: function () {
        return r("tcp");
      },
      _udp: function () {
        return r("udp");
      },
      _tty: function () {
        return r("tty");
      },
      _statwatcher: function () {
        return r("statwatcher");
      },
      _securecontext: function () {
        return r("securecontext");
      },
      _connection: function () {
        return r("connection");
      },
      _zlib: function () {
        return r("zlib");
      },
      _context: function () {
        return r("context");
      },
      _nodescript: function () {
        return r("nodescript");
      },
      _httpparser: function () {
        return r("httpparser");
      },
      _dataview: function () {
        return r("dataview");
      },
      _signal: function () {
        return r("signal");
      },
      _fsevent: function () {
        return r("fsevent");
      },
      _tlswrap: function () {
        return r("tlswrap");
      }
    };
  }
  function M4c() {
    return {
      buf: "",
      write: function (e) {
        this.buf += e;
      },
      end: function (e) {
        this.buf += e;
      },
      read: function () {
        return this.buf;
      }
    };
  }
});