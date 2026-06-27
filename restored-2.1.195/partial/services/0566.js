// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F_s
// matched 2.1.88 source: node_modules/axios/lib/core/Axios.js
// class=partial  jaccard=0.1805  score=0.7319  fileCov=0.1933
// note: low-confidence suggestion: node_modules/axios/lib/core/Axios.js; dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var F_s = E(() => {
  XH();
  Ddn();
  sys();
  N_s();
  Kdn();
  Ndn();
  U_s();
  Tae();
  x0t();
  rY = U0t.validators;
  or.forEach(["delete", "get", "head", "options"], function (t) {
    F0t.prototype[t] = function (n, r) {
      return this.request(Mee(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      }));
    };
  });
  or.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
      return function (s, i, a) {
        return this.request(Mee(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: i
        }));
      };
    }
    F0t.prototype[t] = n(), F0t.prototype[t + "Form"] = n(true);
  });
  j0t = F0t;
});
class nkr {
  constructor(e) {
    if (typeof e !== "function") throw TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (o) {
      t = o;
    });
    let n = this;
    this.promise.then(r => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      while (o-- > 0) n._listeners[o](r);
      n._listeners = null;
    }), this.promise.then = r => {
      let o,
        s = new Promise(i => {
          n.subscribe(i), o = i;
        }).then(r);
      return s.cancel = function () {
        n.unsubscribe(o);
      }, s;
    }, e(function (o, s, i) {
      if (n.reason) return;
      n.reason = new YV(o, s, i), t(n.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    if (this._listeners) this._listeners.push(e);else this._listeners = [e];
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    if (t !== -1) this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController(),
      t = n => {
        e.abort(n);
      };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  static source() {
    let e;
    return {
      token: new nkr(function (r) {
        e = r;
      }),
      cancel: e
    };
  }
}
var j_s;