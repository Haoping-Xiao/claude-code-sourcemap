// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SVi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SVi = Q(($oy, bVi) => {
  class _Vi {
    constructor() {
      this.max = 1000, this.map = new Map();
    }
    get(e) {
      let t = this.map.get(e);
      if (t === void 0) return;else return this.map.delete(e), this.map.set(e, t), t;
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, t) {
      if (!this.delete(e) && t !== void 0) {
        if (this.map.size >= this.max) {
          let r = this.map.keys().next().value;
          this.delete(r);
        }
        this.map.set(e, t);
      }
      return this;
    }
  }
  bVi.exports = _Vi;
});