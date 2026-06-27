// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G8s
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=new  jaccard=0.0389  score=1  fileCov=0.0389
// note: nearest: node_modules/@smithy/eventstream-codec/dist-cjs/index.js (0.0389); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var G8s = E(() => {
  iBr = class iBr {
    options;
    constructor(e) {
      this.options = e;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let e of this.options.inputStream) yield this.options.serializer(e);
    }
  };
});