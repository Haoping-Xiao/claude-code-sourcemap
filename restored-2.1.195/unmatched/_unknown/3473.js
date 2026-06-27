// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aBa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aBa = Q(J4n => {
  Object.defineProperty(J4n, "__esModule", {
    value: !0
  });
  J4n.InMemoryMetricExporter = void 0;
  var sBa = Nh();
  class iBa {
    _shutdown = !1;
    _aggregationTemporality;
    _metrics = [];
    constructor(e) {
      this._aggregationTemporality = e;
    }
    export(e, t) {
      if (this._shutdown) {
        setTimeout(() => t({
          code: sBa.ExportResultCode.FAILED
        }), 0);
        return;
      }
      this._metrics.push(e), setTimeout(() => t({
        code: sBa.ExportResultCode.SUCCESS
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
  J4n.InMemoryMetricExporter = iBa;
});