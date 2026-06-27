// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xWn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xWn = Q(Cmt => {
  Object.defineProperty(Cmt, "__esModule", {
    value: true
  });
  Cmt.FilterStackFactory = Cmt.FilterStack = void 0;
  class Qbo {
    constructor(e) {
      this.filters = e;
    }
    sendMetadata(e) {
      let t = e;
      for (let n = 0; n < this.filters.length; n++) t = this.filters[n].sendMetadata(t);
      return t;
    }
    receiveMetadata(e) {
      let t = e;
      for (let n = this.filters.length - 1; n >= 0; n--) t = this.filters[n].receiveMetadata(t);
      return t;
    }
    sendMessage(e) {
      let t = e;
      for (let n = 0; n < this.filters.length; n++) t = this.filters[n].sendMessage(t);
      return t;
    }
    receiveMessage(e) {
      let t = e;
      for (let n = this.filters.length - 1; n >= 0; n--) t = this.filters[n].receiveMessage(t);
      return t;
    }
    receiveTrailers(e) {
      let t = e;
      for (let n = this.filters.length - 1; n >= 0; n--) t = this.filters[n].receiveTrailers(t);
      return t;
    }
    push(e) {
      this.filters.unshift(...e);
    }
    getFilters() {
      return this.filters;
    }
  }
  Cmt.FilterStack = Qbo;
  class Zbo {
    constructor(e) {
      this.factories = e;
    }
    push(e) {
      this.factories.unshift(...e);
    }
    clone() {
      return new Zbo([...this.factories]);
    }
    createFilter() {
      return new Qbo(this.factories.map(e => e.createFilter()));
    }
  }
  Cmt.FilterStackFactory = Zbo;
});