// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F8s
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=partial  jaccard=0.064  score=1  fileCov=0.064
// note: low-confidence suggestion: node_modules/@smithy/eventstream-codec/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var F8s = E(() => {
  oBr = class oBr {
    options;
    constructor(e) {
      this.options = e;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let e of this.options.messageStream) yield this.options.encoder.encode(e);
      if (this.options.includeEndFrame) yield new Uint8Array(0);
    }
  };
});
var sBr;