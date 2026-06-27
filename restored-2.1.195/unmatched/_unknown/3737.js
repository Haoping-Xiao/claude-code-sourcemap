// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hEo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hEo = Q(U5n => {
  Object.defineProperty(U5n, "__esModule", {
    value: true
  });
  U5n.TraceState = void 0;
  var B5n = aVa(),
    gVp = 32,
    lVa = 512,
    cVa = ",",
    uVa = "=";
  class gEo {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
      this._rawTraceState = typeof e === "string" ? e : "", this._length = this._rawTraceState.length;
    }
    set(e, t) {
      if (!(0, B5n.validateKey)(e) || !(0, B5n.validateValue)(t)) return this;
      let n = this._getState(),
        r = n.get(e),
        o = this._length;
      if (typeof r === "string") o += t.length - r.length;else o += e.length + t.length + (n.size > 0 ? 2 : 1);
      if (o > lVa) return this;
      let s = new Map(n);
      return s.delete(e), s.set(e, t), this._fromState(s, o);
    }
    unset(e) {
      let t = this._getState(),
        n = t.get(e);
      if (typeof n !== "string") return this;
      let r = this._length - (e.length + n.length + 1);
      if (t.size > 1) r = r - 1;
      let o = new Map(t);
      return o.delete(e), this._fromState(o, r);
    }
    get(e) {
      return this._getState().get(e);
    }
    serialize() {
      let e = "",
        t = 0;
      for (let n of this._getState()) {
        if (t > 0) e = cVa + e;
        e = `${n[0]}${uVa}${n[1]}` + e, t++;
      }
      return e;
    }
    _getState() {
      if (this._internalState) return this._internalState;
      let e = this._rawTraceState.split(cVa),
        t = new Map(),
        n = 0;
      for (let r of e) {
        let o = r.trim(),
          s = o.indexOf(uVa);
        if (s === -1) continue;
        let i = o.slice(0, s),
          a = o.slice(s + 1);
        if (!(0, B5n.validateKey)(i) || !(0, B5n.validateValue)(a)) continue;
        let l = n + o.length + (t.size > 0 ? 1 : 0);
        if (l > lVa) continue;
        if (t.set(i, a), n = l, t.size >= gVp) break;
      }
      return this._length = n, this._internalState = new Map(Array.from(t.entries()).reverse()), this._internalState;
    }
    _fromState(e, t) {
      let n = Object.create(gEo.prototype);
      return n._internalState = e, n._length = t, n;
    }
  }
  U5n.TraceState = gEo;
});