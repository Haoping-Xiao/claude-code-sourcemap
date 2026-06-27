// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P6r = Q(gxn => {
  Object.defineProperty(gxn, "__esModule", {
    value: !0
  });
  gxn.TraceState = void 0;
  var tMi = eMi(),
    nMi = 32,
    yPd = 512,
    rMi = ",",
    oMi = "=";
  class D6r {
    _internalState = new Map();
    constructor(e) {
      if (e) this._parse(e);
    }
    set(e, t) {
      let n = this._clone();
      if (n._internalState.has(e)) n._internalState.delete(e);
      return n._internalState.set(e, t), n;
    }
    unset(e) {
      let t = this._clone();
      return t._internalState.delete(e), t;
    }
    get(e) {
      return this._internalState.get(e);
    }
    serialize() {
      return this._keys().reduce((e, t) => (e.push(t + oMi + this.get(t)), e), []).join(rMi);
    }
    _parse(e) {
      if (e.length > yPd) return;
      if (this._internalState = e.split(rMi).reverse().reduce((t, n) => {
        let r = n.trim(),
          o = r.indexOf(oMi);
        if (o !== -1) {
          let s = r.slice(0, o),
            i = r.slice(o + 1, n.length);
          if ((0, tMi.validateKey)(s) && (0, tMi.validateValue)(i)) t.set(s, i);
        }
        return t;
      }, new Map()), this._internalState.size > nMi) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, nMi));
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let e = new D6r();
      return e._internalState = new Map(this._internalState), e;
    }
  }
  gxn.TraceState = D6r;
});