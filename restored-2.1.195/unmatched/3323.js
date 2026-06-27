// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h2n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var h2n = Q(Apt => {
  Object.defineProperty(Apt, "__esModule", {
    value: !0
  });
  Apt.CancellationTokenSource = Apt.CancellationToken = void 0;
  var tkp = TDe(),
    nkp = bpt(),
    zfo = Ept(),
    g2n;
  (function (e) {
    e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: zfo.Event.None
    }), e.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: zfo.Event.None
    });
    function t(n) {
      let r = n;
      return r && (r === e.None || r === e.Cancelled || nkp.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
    }
    e.is = t;
  })(g2n || (Apt.CancellationToken = g2n = {}));
  var rkp = Object.freeze(function (e, t) {
    let n = (0, tkp.default)().timer.setTimeout(e.bind(t), 0);
    return {
      dispose() {
        n.dispose();
      }
    };
  });
  class Kfo {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      if (!this._isCancelled) {
        if (this._isCancelled = !0, this._emitter) this._emitter.fire(void 0), this.dispose();
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) return rkp;
      if (!this._emitter) this._emitter = new zfo.Emitter();
      return this._emitter.event;
    }
    dispose() {
      if (this._emitter) this._emitter.dispose(), this._emitter = void 0;
    }
  }
  class GLa {
    get token() {
      if (!this._token) this._token = new Kfo();
      return this._token;
    }
    cancel() {
      if (!this._token) this._token = g2n.Cancelled;else this._token.cancel();
    }
    dispose() {
      if (!this._token) this._token = g2n.None;else if (this._token instanceof Kfo) this._token.dispose();
    }
  }
  Apt.CancellationTokenSource = GLa;
});