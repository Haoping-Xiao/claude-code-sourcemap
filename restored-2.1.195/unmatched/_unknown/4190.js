// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S_t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var S_t = Q((idb, Ocl) => {
  Ocl.exports = _6e;
  _6e.CAPTURING_PHASE = 1;
  _6e.AT_TARGET = 2;
  _6e.BUBBLING_PHASE = 3;
  function _6e(e, t) {
    if (this.type = "", this.target = null, this.currentTarget = null, this.eventPhase = _6e.AT_TARGET, this.bubbles = false, this.cancelable = false, this.isTrusted = false, this.defaultPrevented = false, this.timeStamp = Date.now(), this._propagationStopped = false, this._immediatePropagationStopped = false, this._initialized = true, this._dispatching = false, e) this.type = e;
    if (t) for (var n in t) this[n] = t[n];
  }
  _6e.prototype = Object.create(Object.prototype, {
    constructor: {
      value: _6e
    },
    stopPropagation: {
      value: function () {
        this._propagationStopped = true;
      }
    },
    stopImmediatePropagation: {
      value: function () {
        this._propagationStopped = true, this._immediatePropagationStopped = true;
      }
    },
    preventDefault: {
      value: function () {
        if (this.cancelable) this.defaultPrevented = true;
      }
    },
    initEvent: {
      value: function (t, n, r) {
        if (this._initialized = true, this._dispatching) return;
        this._propagationStopped = false, this._immediatePropagationStopped = false, this.defaultPrevented = false, this.isTrusted = false, this.target = null, this.type = t, this.bubbles = n, this.cancelable = r;
      }
    }
  });
});