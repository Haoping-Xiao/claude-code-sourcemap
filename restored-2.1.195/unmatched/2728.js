// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nct
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nct = E(() => {
  TWe();
  Vno();
  t2t();
  U$n = Symbol.for("@bufbuild/cel/list");
  nta = class nta {
    _array;
    [U$n] = {};
    constructor(e) {
      this._array = e;
    }
    get size() {
      return this._array.length;
    }
    get(e) {
      if (e < 0 || e >= this.size) return;
      return Zne(this._array[e]);
    }
    *values() {
      for (let e of this._array.values()) yield Zne(e);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  };
  rta = class rta {
    _list;
    [U$n] = {};
    constructor(e) {
      this._list = e;
    }
    get size() {
      return this._list.size;
    }
    get(e) {
      let t = this._list.get(e);
      if (t === void 0) return;
      return eta(this._list.field(), t);
    }
    *values() {
      for (let e of this._list) yield eta(this._list.field(), e);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  };
  ota = class ota {
    _lists;
    [U$n] = {};
    _size;
    constructor(e) {
      this._lists = e;
      let t = 0;
      for (let n of e) t += n.size;
      this._size = t;
    }
    get size() {
      return this._size;
    }
    get(e) {
      if (e < 0 || e >= this.size) return;
      for (let t of this._lists) {
        if (e < t.size) return t.get(e);
        e = e - t.size;
      }
      return;
    }
    *values() {
      for (let e of this._lists) yield* e.values();
    }
    [Symbol.iterator]() {
      return this.values();
    }
  };
  JSy = CWe([]);
});
var EX = "_+_",
  F$n = "_/_",
  sta = "_==_",
  i4 = "_>_",
  a4 = "_>=_",
  IWe = "@in",
  l4 = "_<_",
  c4 = "_<=_",
  ita = "!_",
  Jno = "_%_",
  rct = "_*_",
  Qno = "-_",
  ata = "_!=_",
  Wbe = "_-_";
var j$n;