// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tae
// matched 2.1.88 source: node_modules/axios/lib/utils.js
// class=partial  jaccard=0.0859  score=0.2519  fileCov=0.1154
// note: low-confidence suggestion: node_modules/axios/lib/utils.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tae] deps: axios/lib/utils.js, axios/lib/helpers/parseHeaders.js
_ys = Symbol("internals"), Ebu = /[^\x09\x20-\x7E\x80-\xFF]/g;
R0t = class R0t {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    let r = this;
    function o(i, a, l) {
      let c = k0t(a);
      if (!c) throw Error("header name must be a non-empty string");
      let u = or.findKey(r, c);
      if (!u || r[u] === void 0 || l === true || l === void 0 && r[u] !== false) r[u || a] = $dn(i);
    }
    let s = (i, a) => or.forEach(i, (l, c) => o(l, c, a));
    if (or.isPlainObject(e) || e instanceof this.constructor) s(e, t);else if (or.isString(e) && (e = e.trim()) && !vbu(e)) s(hys(e), t);else if (or.isObject(e) && or.isIterable(e)) {
      let i = {},
        a,
        l;
      for (let c of e) {
        if (!or.isArray(c)) throw TypeError("Object iterator must return a key-value pair");
        i[l = c[0]] = (a = i[l]) ? or.isArray(a) ? [...a, c[1]] : [a, c[1]] : c[1];
      }
      s(i, t);
    } else e != null && o(t, e, n);
    return this;
  }
  get(e, t) {
    if (e = k0t(e), e) {
      let n = or.findKey(this, e);
      if (n) {
        let r = this[n];
        if (!t) return r;
        if (t === true) return Tbu(r);
        if (or.isFunction(t)) return t.call(this, r, n);
        if (or.isRegExp(t)) return t.exec(r);
        throw TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = k0t(e), e) {
      let n = or.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || Exr(this, this[n], n, t)));
    }
    return false;
  }
  delete(e, t) {
    let n = this,
      r = false;
    function o(s) {
      if (s = k0t(s), s) {
        let i = or.findKey(n, s);
        if (i && (!t || Exr(n, n[i], i, t))) delete n[i], r = true;
      }
    }
    if (or.isArray(e)) e.forEach(o);else o(e);
    return r;
  }
  clear(e) {
    let t = Object.keys(this),
      n = t.length,
      r = false;
    while (n--) {
      let o = t[n];
      if (!e || Exr(this, this[o], o, e, true)) delete this[o], r = true;
    }
    return r;
  }
  normalize(e) {
    let t = this,
      n = {};
    return or.forEach(this, (r, o) => {
      let s = or.findKey(n, o);
      if (s) {
        t[s] = $dn(r), delete t[o];
        return;
      }
      let i = e ? wbu(o) : String(o).trim();
      if (i !== o) delete t[o];
      t[i] = $dn(r), n[i] = true;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return or.forEach(this, (n, r) => {
      n != null && n !== false && (t[r] = e && or.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let n = new this(e);
    return t.forEach(r => n.set(r)), n;
  }
  static accessor(e) {
    let n = (this[_ys] = this[_ys] = {
        accessors: {}
      }).accessors,
      r = this.prototype;
    function o(s) {
      let i = k0t(s);
      if (!n[i]) Cbu(r, s), n[i] = true;
    }
    return or.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
R0t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
or.reduceDescriptors(R0t.prototype, ({
  value: e
}, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
or.freezeMethods(R0t);
VC = R0t;
function L0t(e, t) {
  let n = this || SZe,
    r = t || n,
    o = VC.from(r.headers),
    s = r.data;
  return or.forEach(e, function (a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}