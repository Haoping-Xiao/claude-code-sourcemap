// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ddn
// matched 2.1.88 source: node_modules/axios/lib/core/Axios.js
// class=partial  jaccard=0.079  score=0.8567  fileCov=0.0801
// note: low-confidence suggestion: node_modules/axios/lib/core/Axios.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
class oys {
  constructor() {
    this.handlers = [];
  }
  use(e, t, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: n ? n.synchronous : false,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(e) {
    if (this.handlers[e]) this.handlers[e] = null;
  }
  clear() {
    if (this.handlers) this.handlers = [];
  }
  forEach(e) {
    or.forEach(this.handlers, function (n) {
      if (n !== null) e(n);
    });
  }
}
var fxr;