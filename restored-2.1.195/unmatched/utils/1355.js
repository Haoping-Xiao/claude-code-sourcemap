// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xZs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0209  score=0.7669  fileCov=0.021
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0209); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xZs = E(() => {
  CZs = R(by(), 1);
});
var kZs = () => {};
var RZs = () => {};
var LZs = () => {};
function wEn(e) {
  return Promise.all(Object.keys(e).reduce((t, n) => {
    let r = e[n];
    if (typeof r === "string") t.push([n, r]);else t.push(r().then(o => [n, o]));
    return t;
  }, [])).then(t => t.reduce((n, [r, o]) => (n[r] = o, n), {}));
}
class CEn {
  config;
  middlewareStack = DZs.constructStack();
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
var DZs;