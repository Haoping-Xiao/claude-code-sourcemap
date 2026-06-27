// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RVa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RVa = Q(K5n => {
  Object.defineProperty(K5n, "__esModule", {
    value: !0
  });
  K5n.BindOnceFuture = void 0;
  var qVp = xVa();
  class kVa {
    _isCalled = !1;
    _deferred = new qVp.Deferred();
    _callback;
    _that;
    constructor(e, t) {
      this._callback = e, this._that = t;
    }
    get isCalled() {
      return this._isCalled;
    }
    get promise() {
      return this._deferred.promise;
    }
    call(...e) {
      if (!this._isCalled) {
        this._isCalled = !0;
        try {
          Promise.resolve(this._callback.call(this._that, ...e)).then(t => this._deferred.resolve(t), t => this._deferred.reject(t));
        } catch (t) {
          this._deferred.reject(t);
        }
      }
      return this._deferred.promise;
    }
  }
  K5n.BindOnceFuture = kVa;
});