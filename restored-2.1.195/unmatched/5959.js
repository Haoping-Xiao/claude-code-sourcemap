// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sgr
// matched 2.1.88 source: node_modules/undici/lib/web/cookies/index.js
// class=new  jaccard=0.0446  score=0.1075  fileCov=0.0709
// note: nearest: node_modules/undici/lib/web/cookies/index.js (0.0446); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Sgr = Q((hzH, d4c) => {
  var cPm = s4c(),
    Z7e = Symbol("max"),
    lve = Symbol("length"),
    qvt = Symbol("lengthCalculator"),
    Onn = Symbol("allowStale"),
    eXe = Symbol("maxAge"),
    ave = Symbol("dispose"),
    i4c = Symbol("noDisposeOnSet"),
    dO = Symbol("lruList"),
    aie = Symbol("cache"),
    l4c = Symbol("updateAgeOnGet"),
    RJo = () => 1;
  class c4c {
    constructor(e) {
      if (typeof e === "number") e = {
        max: e
      };
      if (!e) e = {};
      if (e.max && (typeof e.max !== "number" || e.max < 0)) throw TypeError("max must be a non-negative number");
      let t = this[Z7e] = e.max || 1 / 0,
        n = e.length || RJo;
      if (this[qvt] = typeof n !== "function" ? RJo : n, this[Onn] = e.stale || !1, e.maxAge && typeof e.maxAge !== "number") throw TypeError("maxAge must be a number");
      this[eXe] = e.maxAge || 0, this[ave] = e.dispose, this[i4c] = e.noDisposeOnSet || !1, this[l4c] = e.updateAgeOnGet || !1, this.reset();
    }
    set max(e) {
      if (typeof e !== "number" || e < 0) throw TypeError("max must be a non-negative number");
      this[Z7e] = e || 1 / 0, $nn(this);
    }
    get max() {
      return this[Z7e];
    }
    set allowStale(e) {
      this[Onn] = !!e;
    }
    get allowStale() {
      return this[Onn];
    }
    set maxAge(e) {
      if (typeof e !== "number") throw TypeError("maxAge must be a non-negative number");
      this[eXe] = e, $nn(this);
    }
    get maxAge() {
      return this[eXe];
    }
    set lengthCalculator(e) {
      if (typeof e !== "function") e = RJo;
      if (e !== this[qvt]) this[qvt] = e, this[lve] = 0, this[dO].forEach(t => {
        t.length = this[qvt](t.value, t.key), this[lve] += t.length;
      });
      $nn(this);
    }
    get lengthCalculator() {
      return this[qvt];
    }
    get length() {
      return this[lve];
    }
    get itemCount() {
      return this[dO].length;
    }
    rforEach(e, t) {
      t = t || this;
      for (let n = this[dO].tail; n !== null;) {
        let r = n.prev;
        a4c(this, e, n, t), n = r;
      }
    }
    forEach(e, t) {
      t = t || this;
      for (let n = this[dO].head; n !== null;) {
        let r = n.next;
        a4c(this, e, n, t), n = r;
      }
    }
    keys() {
      return this[dO].toArray().map(e => e.key);
    }
    values() {
      return this[dO].toArray().map(e => e.value);
    }
    reset() {
      if (this[ave] && this[dO] && this[dO].length) this[dO].forEach(e => this[ave](e.key, e.value));
      this[aie] = new Map(), this[dO] = new cPm(), this[lve] = 0;
    }
    dump() {
      return this[dO].map(e => bgr(this, e) ? !1 : {
        k: e.key,
        v: e.value,
        e: e.now + (e.maxAge || 0)
      }).toArray().filter(e => e);
    }
    dumpLru() {
      return this[dO];
    }
    set(e, t, n) {
      if (n = n || this[eXe], n && typeof n !== "number") throw TypeError("maxAge must be a number");
      let r = n ? Date.now() : 0,
        o = this[qvt](t, e);
      if (this[aie].has(e)) {
        if (o > this[Z7e]) return Vvt(this, this[aie].get(e)), !1;
        let a = this[aie].get(e).value;
        if (this[ave]) {
          if (!this[i4c]) this[ave](e, a.value);
        }
        return a.now = r, a.maxAge = n, a.value = t, this[lve] += o - a.length, a.length = o, this.get(e), $nn(this), !0;
      }
      let s = new u4c(e, t, o, r, n);
      if (s.length > this[Z7e]) {
        if (this[ave]) this[ave](e, t);
        return !1;
      }
      return this[lve] += s.length, this[dO].unshift(s), this[aie].set(e, this[dO].head), $nn(this), !0;
    }
    has(e) {
      if (!this[aie].has(e)) return !1;
      let t = this[aie].get(e).value;
      return !bgr(this, t);
    }
    get(e) {
      return LJo(this, e, !0);
    }
    peek(e) {
      return LJo(this, e, !1);
    }
    pop() {
      let e = this[dO].tail;
      if (!e) return null;
      return Vvt(this, e), e.value;
    }
    del(e) {
      Vvt(this, this[aie].get(e));
    }
    load(e) {
      this.reset();
      let t = Date.now();
      for (let n = e.length - 1; n >= 0; n--) {
        let r = e[n],
          o = r.e || 0;
        if (o === 0) this.set(r.k, r.v);else {
          let s = o - t;
          if (s > 0) this.set(r.k, r.v, s);
        }
      }
    }
    prune() {
      this[aie].forEach((e, t) => LJo(this, t, !1));
    }
  }
  var LJo = (e, t, n) => {
      let r = e[aie].get(t);
      if (r) {
        let o = r.value;
        if (bgr(e, o)) {
          if (Vvt(e, r), !e[Onn]) return;
        } else if (n) {
          if (e[l4c]) r.value.now = Date.now();
          e[dO].unshiftNode(r);
        }
        return o.value;
      }
    },
    bgr = (e, t) => {
      if (!t || !t.maxAge && !e[eXe]) return !1;
      let n = Date.now() - t.now;
      return t.maxAge ? n > t.maxAge : e[eXe] && n > e[eXe];
    },
    $nn = e => {
      if (e[lve] > e[Z7e]) for (let t = e[dO].tail; e[lve] > e[Z7e] && t !== null;) {
        let n = t.prev;
        Vvt(e, t), t = n;
      }
    },
    Vvt = (e, t) => {
      if (t) {
        let n = t.value;
        if (e[ave]) e[ave](n.key, n.value);
        e[lve] -= n.length, e[aie].delete(n.key), e[dO].removeNode(t);
      }
    };
  class u4c {
    constructor(e, t, n, r, o) {
      this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = o || 0;
    }
  }
  var a4c = (e, t, n, r) => {
    let o = n.value;
    if (bgr(e, o)) {
      if (Vvt(e, n), !e[Onn]) o = void 0;
    }
    if (o) t.call(r, o.value, o.key, e);
  };
  d4c.exports = c4c;
});