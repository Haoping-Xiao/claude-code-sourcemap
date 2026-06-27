// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xCi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xCi = Q(jIn => {
  Object.defineProperty(jIn, "__esModule", {
    value: true
  });
  jIn.TraceStateImpl = void 0;
  var vCi = TCi(),
    wCi = 32,
    jLd = 512,
    CCi = ",",
    ICi = "=";
  class a6r {
    constructor(e) {
      if (this._internalState = new Map(), e) this._parse(e);
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
      return this._keys().reduce((e, t) => (e.push(t + ICi + this.get(t)), e), []).join(CCi);
    }
    _parse(e) {
      if (e.length > jLd) return;
      if (this._internalState = e.split(CCi).reverse().reduce((t, n) => {
        let r = n.trim(),
          o = r.indexOf(ICi);
        if (o !== -1) {
          let s = r.slice(0, o),
            i = r.slice(o + 1, n.length);
          if ((0, vCi.validateKey)(s) && (0, vCi.validateValue)(i)) t.set(s, i);
        }
        return t;
      }, new Map()), this._internalState.size > wCi) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, wCi));
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let e = new a6r();
      return e._internalState = new Map(this._internalState), e;
    }
  }
  jIn.TraceStateImpl = a6r;
});