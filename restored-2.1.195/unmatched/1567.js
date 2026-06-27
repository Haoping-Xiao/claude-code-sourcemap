// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iui = E(() => {
  A4r = class A4r {
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
var H4r;