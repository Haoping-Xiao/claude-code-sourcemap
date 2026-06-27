// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZFt
// matched 2.1.88 source: node_modules/yaml/dist/stringify/stringifyNumber.js
// class=partial  jaccard=0.1497  score=0.1781  fileCov=0.4841
// note: low-confidence suggestion: node_modules/yaml/dist/stringify/stringifyNumber.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZFt = E(() => {
  TWe();
  ERe();
  Qne();
  Vno();
  t2t();
  Kno = Symbol.for("@bufbuild/cel/map");
  Vea = class Vea {
    _map;
    [Kno] = {};
    constructor(e) {
      this._map = e;
    }
    get size() {
      return this._map.size;
    }
    get(e) {
      if ($1(e)) e = e.value;
      if (typeof e === "number") {
        if (!Number.isInteger(e)) return;
        e = BigInt(e);
      }
      let t = this._map.get(e);
      if (t !== void 0) return Zne(t);
      if (typeof e === "bigint") for (let n of this._map.keys()) {
        if (!$1(n)) continue;
        if (n.value === e) return Zne(this._map.get(n));
      }
      return;
    }
    has(e) {
      return this.get(e) != null;
    }
    forEach(e, t) {
      this._map.forEach((n, r, o) => e.call(t, Zne(n), r, this));
    }
    *entries() {
      for (let [e, t] of this._map.entries()) yield [e, Zne(t)];
    }
    keys() {
      return this._map.keys();
    }
    *values() {
      for (let e of this._map.values()) yield Zne(e);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  zea = class zea {
    _map;
    [Kno] = {};
    constructor(e) {
      this._map = e;
    }
    get size() {
      return this._map.size;
    }
    get(e) {
      let t = this._map.get(qea(this._map.field(), e));
      if (t === void 0) return;
      return N$n(this._map.field(), t);
    }
    has(e) {
      return this._map.has(qea(this._map.field(), e));
    }
    forEach(e, t) {
      this._map.forEach((n, r, o) => e.call(t, N$n(this._map.field(), n), zno(this._map.field(), r), this));
    }
    *entries() {
      for (let [e, t] of this._map.entries()) yield [zno(this._map.field(), e), N$n(this._map.field(), t)];
    }
    *keys() {
      for (let e of this._map.keys()) yield zno(this._map.field(), e);
    }
    *values() {
      for (let e of this._map.keys()) yield N$n(this._map.field(), e);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  kSy = QFt(new Map());
});
function n2t() {
  if (Yno.length === 0) throw Error("cannot use `getEvalContext` outside of an evaluation");
  return Yno[Yno.length - 1];
}
function r2t(e) {
  let t = n2t().registry.getMessage(e);
  if (!t) throw Error(`Message ${e} not found in registry`);
  return t;
}
var Yno;