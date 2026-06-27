// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C9a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var C9a = Q(_qn => {
  Object.defineProperty(_qn, "__esModule", {
    value: !0
  });
  _qn.ConsoleMetricExporter = void 0;
  var w9a = soe(),
    X9p = IEo();
  class kEo {
    _shutdown = !1;
    _temporalitySelector;
    constructor(e) {
      this._temporalitySelector = e?.temporalitySelector ?? X9p.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
    }
    export(e, t) {
      if (this._shutdown) {
        t({
          code: w9a.ExportResultCode.FAILED
        });
        return;
      }
      return kEo._sendMetrics(e, t);
    }
    forceFlush() {
      return Promise.resolve();
    }
    selectAggregationTemporality(e) {
      return this._temporalitySelector(e);
    }
    shutdown() {
      return this._shutdown = !0, Promise.resolve();
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
        code: w9a.ExportResultCode.SUCCESS
      });
    }
  }
  _qn.ConsoleMetricExporter = kEo;
});