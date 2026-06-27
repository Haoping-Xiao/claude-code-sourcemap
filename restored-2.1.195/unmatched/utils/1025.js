// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Myn
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/python.js
// class=new  jaccard=0.0172  score=0.462  fileCov=0.0176
// note: nearest: node_modules/highlight.js/lib/languages/python.js (0.0172); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Myn = E(() => {
  bDt = ["us", "eu", "apac", "jp", "au", "us-gov", "global"];
});
class SDt {
  config;
  middlewareStack = u4s.constructStack();
  initConfig;
  handlers;
  constructor(e) {
    this.config = e;
  }
  send(e, t, n) {
    let r = typeof t !== "function" ? t : void 0,
      o = typeof t === "function" ? t : n,
      s = r === void 0 && this.config.cacheMiddleware === !0,
      i;
    if (s) {
      if (!this.handlers) this.handlers = new WeakMap();
      let a = this.handlers;
      if (a.has(e.constructor)) i = a.get(e.constructor);else i = e.resolveMiddleware(this.middlewareStack, this.config, r), a.set(e.constructor, i);
    } else delete this.handlers, i = e.resolveMiddleware(this.middlewareStack, this.config, r);
    if (o) i(e).then(a => o(null, a.output), a => o(a)).catch(() => {});else return i(e).then(a => a.output);
  }
  destroy() {
    this.config?.requestHandler?.destroy?.(), delete this.handlers;
  }
}
var u4s;