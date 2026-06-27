// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kui = E(() => {
  T4r = class T4r {
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