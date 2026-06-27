// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nCi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nCi = Q(IIn => {
  Object.defineProperty(IIn, "__esModule", {
    value: !0
  });
  IIn.BaggageImpl = void 0;
  class lst {
    constructor(e) {
      this._entries = e ? new Map(e) : new Map();
    }
    getEntry(e) {
      let t = this._entries.get(e);
      if (!t) return;
      return Object.assign({}, t);
    }
    getAllEntries() {
      return Array.from(this._entries.entries()).map(([e, t]) => [e, t]);
    }
    setEntry(e, t) {
      let n = new lst(this._entries);
      return n._entries.set(e, t), n;
    }
    removeEntry(e) {
      let t = new lst(this._entries);
      return t._entries.delete(e), t;
    }
    removeEntries(...e) {
      let t = new lst(this._entries);
      for (let n of e) t._entries.delete(n);
      return t;
    }
    clear() {
      return new lst();
    }
  }
  IIn.BaggageImpl = lst;
});