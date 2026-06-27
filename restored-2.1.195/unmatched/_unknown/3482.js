// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Syo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Syo = Q(o3n => {
  Object.defineProperty(o3n, "__esModule", {
    value: true
  });
  o3n.TemporalMetricProcessor = void 0;
  var S$p = D4n(),
    E$p = JWt();
  class QWt {
    _aggregator;
    _unreportedAccumulations = new Map();
    _reportHistory = new Map();
    constructor(e, t) {
      this._aggregator = e, t.forEach(n => {
        this._unreportedAccumulations.set(n, []);
      });
    }
    buildMetrics(e, t, n, r) {
      this._stashAccumulations(n);
      let o = this._getMergedUnreportedAccumulations(e),
        s = o,
        i;
      if (this._reportHistory.has(e)) {
        let l = this._reportHistory.get(e),
          c = l.collectionTime;
        if (i = l.aggregationTemporality, i === S$p.AggregationTemporality.CUMULATIVE) s = QWt.merge(l.accumulations, o, this._aggregator);else s = QWt.calibrateStartTime(l.accumulations, o, c);
      } else i = e.selectAggregationTemporality(t.type);
      this._reportHistory.set(e, {
        accumulations: s,
        collectionTime: r,
        aggregationTemporality: i
      });
      let a = A$p(s);
      if (a.length === 0) return;
      return this._aggregator.toMetricData(t, i, a, r);
    }
    _stashAccumulations(e) {
      let t = this._unreportedAccumulations.keys();
      for (let n of t) {
        let r = this._unreportedAccumulations.get(n);
        if (r === void 0) r = [], this._unreportedAccumulations.set(n, r);
        r.push(e);
      }
    }
    _getMergedUnreportedAccumulations(e) {
      let t = new E$p.AttributeHashMap(),
        n = this._unreportedAccumulations.get(e);
      if (this._unreportedAccumulations.set(e, []), n === void 0) return t;
      for (let r of n) t = QWt.merge(t, r, this._aggregator);
      return t;
    }
    static merge(e, t, n) {
      let r = e,
        o = t.entries(),
        s = o.next();
      while (s.done !== true) {
        let [i, a, l] = s.value;
        if (e.has(i, l)) {
          let c = e.get(i, l),
            u = n.merge(c, a);
          r.set(i, u, l);
        } else r.set(i, a, l);
        s = o.next();
      }
      return r;
    }
    static calibrateStartTime(e, t, n) {
      for (let [r, o] of e.keys()) t.get(r, o)?.setStartTime(n);
      return t;
    }
  }
  o3n.TemporalMetricProcessor = QWt;
  function A$p(e) {
    return Array.from(e.entries());
  }
});