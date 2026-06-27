// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cui
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=new  jaccard=0.0456  score=1  fileCov=0.0456
// note: nearest: node_modules/@smithy/eventstream-codec/dist-cjs/index.js (0.0456); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cui = E(() => {
  E4r = class E4r {
    constructor(e) {
      this.options = e;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let e of this.options.inputStream) yield this.options.decoder.decode(e);
    }
  };
});
var A4r;