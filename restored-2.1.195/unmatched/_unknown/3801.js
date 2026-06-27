// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nqt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nqt = Q(ugt => {
  Object.defineProperty(ugt, "__esModule", {
    value: !0
  });
  ugt.AttributeHashMap = ugt.HashMap = void 0;
  var Q8p = ipe();
  class FEo {
    _valueMap = new Map();
    _keyMap = new Map();
    _hash;
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
  ugt.HashMap = FEo;
  class b8a extends FEo {
    constructor() {
      super(Q8p.hashAttributes);
    }
  }
  ugt.AttributeHashMap = b8a;
});