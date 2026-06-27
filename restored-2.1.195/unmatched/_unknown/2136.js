// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HMi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HMi = Q(Axn => {
  Object.defineProperty(Axn, "__esModule", {
    value: true
  });
  Axn.Deferred = void 0;
  class AMi {
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
  Axn.Deferred = AMi;
});