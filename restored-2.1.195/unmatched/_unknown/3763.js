// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a9a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var a9a = Q(tgt => {
  Object.defineProperty(tgt, "__esModule", {
    value: !0
  });
  tgt.LastValueAggregator = tgt.LastValueAccumulation = void 0;
  var N9p = Kmt(),
    Cqt = soe(),
    B9p = BEe();
  class Iqt {
    startTime;
    _current;
    sampleTime;
    constructor(e, t = 0, n = [0, 0]) {
      this.startTime = e, this._current = t, this.sampleTime = n;
    }
    record(e) {
      this._current = e, this.sampleTime = (0, Cqt.millisToHrTime)(Date.now());
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  tgt.LastValueAccumulation = Iqt;
  class i9a {
    kind = N9p.AggregatorKind.LAST_VALUE;
    createAccumulation(e) {
      return new Iqt(e);
    }
    merge(e, t) {
      let n = (0, Cqt.hrTimeToMicroseconds)(t.sampleTime) >= (0, Cqt.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
      return new Iqt(e.startTime, n.toPointValue(), n.sampleTime);
    }
    diff(e, t) {
      let n = (0, Cqt.hrTimeToMicroseconds)(t.sampleTime) >= (0, Cqt.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
      return new Iqt(t.startTime, n.toPointValue(), n.sampleTime);
    }
    toMetricData(e, t, n, r) {
      return {
        descriptor: e,
        aggregationTemporality: t,
        dataPointType: B9p.DataPointType.GAUGE,
        dataPoints: n.map(([o, s]) => ({
          attributes: o,
          startTime: s.startTime,
          endTime: r,
          value: s.toPointValue()
        }))
      };
    }
  }
  tgt.LastValueAggregator = i9a;
});