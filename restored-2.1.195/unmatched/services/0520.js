// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ddn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ddn = E(() => {
  XH();
  rys();
});
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