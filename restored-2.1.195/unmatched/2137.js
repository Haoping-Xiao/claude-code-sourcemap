// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vMi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vMi = Q(Hxn => {
  Object.defineProperty(Hxn, "__esModule", {
    value: !0
  });
  Hxn.BindOnceFuture = void 0;
  var zPd = HMi();
  class TMi {
    _callback;
    _that;
    _isCalled = !1;
    _deferred = new zPd.Deferred();
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
  Hxn.BindOnceFuture = TMi;
});