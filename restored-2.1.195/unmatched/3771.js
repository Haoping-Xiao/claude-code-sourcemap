// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v9a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var v9a = Q(yqn => {
  Object.defineProperty(yqn, "__esModule", {
    value: !0
  });
  yqn.InMemoryMetricExporter = void 0;
  var H9a = soe();
  class T9a {
    _shutdown = !1;
    _aggregationTemporality;
    _metrics = [];
    constructor(e) {
      this._aggregationTemporality = e;
    }
    export(e, t) {
      if (this._shutdown) {
        setTimeout(() => t({
          code: H9a.ExportResultCode.FAILED
        }), 0);
        return;
      }
      this._metrics.push(e), setTimeout(() => t({
        code: H9a.ExportResultCode.SUCCESS
      }), 0);
    }
    getMetrics() {
      return this._metrics;
    }
    forceFlush() {
      return Promise.resolve();
    }
    reset() {
      this._metrics = [];
    }
    selectAggregationTemporality(e) {
      return this._aggregationTemporality;
    }
    shutdown() {
      return this._shutdown = !0, Promise.resolve();
    }
  }
  yqn.InMemoryMetricExporter = T9a;
});