// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G8s
// class=new  (no 2.1.88 match)
// note: 0 renamed
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