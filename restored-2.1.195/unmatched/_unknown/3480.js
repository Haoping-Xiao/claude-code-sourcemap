// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JWt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JWt = Q(Wft => {
  Object.defineProperty(Wft, "__esModule", {
    value: !0
  });
  Wft.AttributeHashMap = Wft.HashMap = void 0;
  var _$p = Wre();
  class yyo {
    _hash;
    _valueMap = new Map();
    _keyMap = new Map();
    constructor(e) {
      this._hash = e;
    }
    get(e, t) {
      return t ??= this._hash(e), this._valueMap.get(t);
    }
    getOrDefault(e, t) {
      let n = this._hash(e);
      if (this._valueMap.has(n)) return this._valueMap.get(n);
      let r = t();
      if (!this._keyMap.has(n)) this._keyMap.set(n, e);
      return this._valueMap.set(n, r), r;
    }
    set(e, t, n) {
      if (n ??= this._hash(e), !this._keyMap.has(n)) this._keyMap.set(n, e);
      this._valueMap.set(n, t);
    }
    has(e, t) {
      return t ??= this._hash(e), this._valueMap.has(t);
    }
    *keys() {
      let e = this._keyMap.entries(),
        t = e.next();
      while (t.done !== !0) yield [t.value[1], t.value[0]], t = e.next();
    }
    *entries() {
      let e = this._valueMap.entries(),
        t = e.next();
      while (t.done !== !0) yield [this._keyMap.get(t.value[0]), t.value[1], t.value[0]], t = e.next();
    }
    get size() {
      return this._valueMap.size;
    }
  }
  Wft.HashMap = yyo;
  class TBa extends yyo {
    constructor() {
      super(_$p.hashAttributes);
    }
  }
  Wft.AttributeHashMap = TBa;
});