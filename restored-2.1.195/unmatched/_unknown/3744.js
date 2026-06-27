// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xVa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xVa = Q(z5n => {
  Object.defineProperty(z5n, "__esModule", {
    value: true
  });
  z5n.Deferred = void 0;
  class IVa {
    _promise;
    _resolve;
    _reject;
    constructor() {
      this._promise = new Promise((e, t) => {
        this._resolve = e, this._reject = t;
      });
    }
    get promise() {
      return this._promise;
    }
    resolve(e) {
      this._resolve(e);
    }
    reject(e) {
      this._reject(e);
    }
  }
  z5n.Deferred = IVa;
});