// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bRe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bRe = E(() => {
  M8();
  g$n();
  NFt();
  Vlt();
  HWe();
  _Re();
  Dbe();
  UFt();
  PQi = new WeakMap();
  OQi = class OQi {
    field() {
      return this._field;
    }
    get size() {
      return this._arr.length;
    }
    constructor(e, t, n) {
      this._field = e, this._arr = this[Kne] = t, this.check = n;
    }
    get(e) {
      let t = this._arr[e];
      return t === void 0 ? void 0 : _no(this._field, t, this.check);
    }
    set(e, t) {
      if (e < 0 || e >= this._arr.length) throw new D1(this._field, `list item #${e + 1}: out of range`);
      if (this.check) {
        let n = fno(this._field, e, t);
        if (n) throw n;
      }
      this._arr[e] = MQi(this._field, t);
    }
    add(e) {
      if (this.check) {
        let t = fno(this._field, this._arr.length, e);
        if (t) throw t;
      }
      this._arr.push(MQi(this._field, e));
      return;
    }
    clear() {
      this._arr.splice(0, this._arr.length);
    }
    [Symbol.iterator]() {
      return this.values();
    }
    keys() {
      return this._arr.keys();
    }
    *values() {
      for (let e of this._arr) yield _no(this._field, e, this.check);
    }
    *entries() {
      for (let e = 0; e < this._arr.length; e++) yield [e, _no(this._field, this._arr[e], this.check)];
    }
  };
  NQi = class NQi {
    constructor(e, t, n = true) {
      this.obj = this[Kne] = t !== null && t !== void 0 ? t : {}, this.check = n, this._field = e;
    }
    field() {
      return this._field;
    }
    set(e, t) {
      if (this.check) {
        let n = vQi(this._field, e, t);
        if (n) throw n;
      }
      return this.obj[b$n(e)] = CZd(this._field, t), this;
    }
    delete(e) {
      let t = b$n(e),
        n = Object.prototype.hasOwnProperty.call(this.obj, t);
      if (n) delete this.obj[t];
      return n;
    }
    clear() {
      for (let e of Object.keys(this.obj)) delete this.obj[e];
    }
    get(e) {
      let t = this.obj[b$n(e)];
      if (t !== void 0) t = bno(this._field, t, this.check);
      return t;
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.obj, b$n(e));
    }
    *keys() {
      for (let e of Object.keys(this.obj)) yield $Qi(e, this._field.mapKey);
    }
    *entries() {
      for (let e of Object.entries(this.obj)) yield [$Qi(e[0], this._field.mapKey), bno(this._field, e[1], this.check)];
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return Object.keys(this.obj).length;
    }
    *values() {
      for (let e of Object.values(this.obj)) yield bno(this._field, e, this.check);
    }
    forEach(e, t) {
      for (let n of this.entries()) e.call(t, n[1], n[0], this);
    }
  };
});
var GQi = () => {};
var WQi = () => {};