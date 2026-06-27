// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xui = E(() => {
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
});
var T4r;