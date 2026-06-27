// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bMt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bMt = E(() => {
  Hpi = class Hpi {
    constructor(e) {
      if (this._headersMap = new Map(), e) for (let t of Object.keys(e)) this.set(t, e[t]);
    }
    set(e, t) {
      this._headersMap.set(nTn(e), {
        name: e,
        value: String(t).trim()
      });
    }
    get(e) {
      var t;
      return (t = this._headersMap.get(nTn(e))) === null || t === void 0 ? void 0 : t.value;
    }
    has(e) {
      return this._headersMap.has(nTn(e));
    }
    delete(e) {
      this._headersMap.delete(nTn(e));
    }
    toJSON(e = {}) {
      let t = {};
      if (e.preserveCase) for (let n of this._headersMap.values()) t[n.name] = n.value;else for (let [n, r] of this._headersMap) t[n] = r.value;
      return t;
    }
    toString() {
      return JSON.stringify(this.toJSON({
        preserveCase: true
      }));
    }
    [Symbol.iterator]() {
      return Hgd(this._headersMap);
    }
  };
});
var Tpi = () => {};
var vpi = () => {};
function SMt() {
  return Tgd();
}
var wpi, p3r, Tgd;