// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cBa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cBa = Q(Q4n => {
  Object.defineProperty(Q4n, "__esModule", {
    value: true
  });
  Q4n.ConsoleMetricExporter = void 0;
  var lBa = Nh(),
    c$p = pyo();
  class gyo {
    _shutdown = false;
    _temporalitySelector;
    constructor(e) {
      this._temporalitySelector = e?.temporalitySelector ?? c$p.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
    }
    export(e, t) {
      if (this._shutdown) {
        setImmediate(t, {
          code: lBa.ExportResultCode.FAILED
        });
        return;
      }
      return gyo._sendMetrics(e, t);
    }
    forceFlush() {
      return Promise.resolve();
    }
    selectAggregationTemporality(e) {
      return this._temporalitySelector(e);
    }
    shutdown() {
      return this._shutdown = true, Promise.resolve();
    }
    static _sendMetrics(e, t) {
      for (let n of e.scopeMetrics) for (let r of n.metrics) console.dir({
        descriptor: r.descriptor,
        dataPointType: r.dataPointType,
        dataPoints: r.dataPoints
      }, {
        depth: null
      });
      t({
        code: lBa.ExportResultCode.SUCCESS
      });
    }
  }
  Q4n.ConsoleMetricExporter = gyo;
});