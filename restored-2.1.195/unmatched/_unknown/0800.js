// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hDr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hDr = Q(Ymn => {
  Object.defineProperty(Ymn, "__esModule", {
    value: true
  });
  Ymn.ByteArrayCollector = void 0;
  class Hks {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(e) {
      this.allocByteArray = e;
    }
    push(e) {
      this.byteArrays.push(e), this.byteLength += e.byteLength;
    }
    flush() {
      if (this.byteArrays.length === 1) {
        let n = this.byteArrays[0];
        return this.reset(), n;
      }
      let e = this.allocByteArray(this.byteLength),
        t = 0;
      for (let n = 0; n < this.byteArrays.length; ++n) {
        let r = this.byteArrays[n];
        e.set(r, t), t += r.byteLength;
      }
      return this.reset(), e;
    }
    reset() {
      this.byteArrays = [], this.byteLength = 0;
    }
  }
  Ymn.ByteArrayCollector = Hks;
});