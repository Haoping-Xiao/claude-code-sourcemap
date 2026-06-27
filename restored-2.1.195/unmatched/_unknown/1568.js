// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xui
// matched 2.1.88 source: node_modules/@smithy/eventstream-codec/dist-cjs/index.js
// class=new  jaccard=0.0401  score=1  fileCov=0.0401
// note: nearest: node_modules/@smithy/eventstream-codec/dist-cjs/index.js (0.0401); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xui]
H4r = class H4r {
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (let e of this.options.messageStream) {
      let t = await this.options.deserializer(e);
      if (t === void 0) continue;
      yield t;
    }
  }
};
var T4r;