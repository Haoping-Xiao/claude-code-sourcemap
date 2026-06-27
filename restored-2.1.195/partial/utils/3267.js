// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WSe
// matched 2.1.88 source: node_modules/lodash.includes/index.js
// class=partial  jaccard=0.1219  score=0.706  fileCov=0.1284
// note: low-confidence suggestion: node_modules/lodash.includes/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WSe = E(() => {
  ft();
  Un();
  Du();
  fn();
  Jt();
  aS();
  xxa = require("crypto");
  D3t = new Set(), tpo = new Map();
});
class Nxa {
  als = new Oxa.AsyncLocalStorage();
  active() {
    return this.als.getStore() ?? $xa.ROOT_CONTEXT;
  }
  with(e, t, n, ...r) {
    let o = n == null ? t : t.bind(n);
    return this.als.run(e, o, ...r);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, t) {
    if (typeof t === "function") {
      let n = (...r) => this.with(e, () => t(...r));
      return Object.defineProperty(n, "length", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: t.length
      }), n;
    }
    return t;
  }
  enable() {
    return this;
  }
  disable() {
    return this.als.disable(), this;
  }
}
var $xa, Oxa, qSe;