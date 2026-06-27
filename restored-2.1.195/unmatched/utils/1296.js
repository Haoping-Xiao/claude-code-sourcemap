// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rnt
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0186  score=0.7456  fileCov=0.0187
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0186); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rnt = E(() => {
  S9();
  OB();
});
class aPt {
  config;
  middlewareStack = W7s.constructStack();
  initConfig;
  handlers;
  constructor(e) {
    this.config = e;
  }
  send(e, t, n) {
    let r = typeof t !== "function" ? t : void 0,
      o = typeof t === "function" ? t : n,
      s = r === void 0 && this.config.cacheMiddleware === true,
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
var W7s;