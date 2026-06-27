// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B8a
// matched 2.1.88 source: node_modules/@opentelemetry/sdk-metrics/build/src/state/ObservableRegistry.js
// class=partial  jaccard=0.2348  score=0.6684  fileCov=0.2657
// note: low-confidence suggestion: node_modules/@opentelemetry/sdk-metrics/build/src/state/ObservableRegistry.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var B8a = Q(Vqn => {
  Object.defineProperty(Vqn, "__esModule", {
    value: !0
  });
  Vqn.ObservableRegistry = void 0;
  var d6p = qi(),
    $8a = Oqn(),
    O8a = M8a(),
    VEo = ipe();
  class N8a {
    _callbacks = [];
    _batchCallbacks = [];
    addCallback(e, t) {
      if (this._findCallback(e, t) >= 0) return;
      this._callbacks.push({
        callback: e,
        instrument: t
      });
    }
    removeCallback(e, t) {
      let n = this._findCallback(e, t);
      if (n < 0) return;
      this._callbacks.splice(n, 1);
    }
    addBatchCallback(e, t) {
      let n = new Set(t.filter($8a.isObservableInstrument));
      if (n.size === 0) {
        d6p.diag.error("BatchObservableCallback is not associated with valid instruments", t);
        return;
      }
      if (this._findBatchCallback(e, n) >= 0) return;
      this._batchCallbacks.push({
        callback: e,
        instruments: n
      });
    }
    removeBatchCallback(e, t) {
      let n = new Set(t.filter($8a.isObservableInstrument)),
        r = this._findBatchCallback(e, n);
      if (r < 0) return;
      this._batchCallbacks.splice(r, 1);
    }
    async observe(e, t) {
      let n = this._observeCallbacks(e, t),
        r = this._observeBatchCallbacks(e, t);
      return (await Promise.allSettled([...n, ...r])).filter(i => i.status === "rejected").map(i => i.reason);
    }
    _observeCallbacks(e, t) {
      return this._callbacks.map(async ({
        callback: n,
        instrument: r
      }) => {
        let o = new O8a.ObservableResultImpl(r._descriptor.name, r._descriptor.valueType),
          s = Promise.resolve(n(o));
        if (t != null) s = (0, VEo.callWithTimeout)(s, t);
        await s, r._metricStorages.forEach(i => {
          i.record(o._buffer, e);
        });
      });
    }
    _observeBatchCallbacks(e, t) {
      return this._batchCallbacks.map(async ({
        callback: n,
        instruments: r
      }) => {
        let o = new O8a.BatchObservableResultImpl(),
          s = Promise.resolve(n(o));
        if (t != null) s = (0, VEo.callWithTimeout)(s, t);
        await s, r.forEach(i => {
          let a = o._buffer.get(i);
          if (a == null) return;
          i._metricStorages.forEach(l => {
            l.record(a, e);
          });
        });
      });
    }
    _findCallback(e, t) {
      return this._callbacks.findIndex(n => n.callback === e && n.instrument === t);
    }
    _findBatchCallback(e, t) {
      return this._batchCallbacks.findIndex(n => n.callback === e && (0, VEo.setEquals)(n.instruments, t));
    }
  }
  Vqn.ObservableRegistry = N8a;
});