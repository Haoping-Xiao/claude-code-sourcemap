// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WNa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WNa = Q(Nft => {
  Object.defineProperty(Nft, "__esModule", {
    value: true
  });
  Nft.LastValueAggregator = Nft.LastValueAccumulation = void 0;
  var JMp = Rft(),
    VWt = Nh(),
    QMp = oPe();
  class zWt {
    startTime;
    _current;
    sampleTime;
    constructor(e, t = 0, n = [0, 0]) {
      this.startTime = e, this._current = t, this.sampleTime = n;
    }
    record(e) {
      this._current = e, this.sampleTime = (0, VWt.millisToHrTime)(Date.now());
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  Nft.LastValueAccumulation = zWt;
  class GNa {
    kind = JMp.AggregatorKind.LAST_VALUE;
    createAccumulation(e) {
      return new zWt(e);
    }
    merge(e, t) {
      let n = (0, VWt.hrTimeToMicroseconds)(t.sampleTime) >= (0, VWt.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
      return new zWt(e.startTime, n.toPointValue(), n.sampleTime);
    }
    diff(e, t) {
      let n = (0, VWt.hrTimeToMicroseconds)(t.sampleTime) >= (0, VWt.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
      return new zWt(t.startTime, n.toPointValue(), n.sampleTime);
    }
    toMetricData(e, t, n, r) {
      return {
        descriptor: e,
        aggregationTemporality: t,
        dataPointType: QMp.DataPointType.GAUGE,
        dataPoints: n.map(([o, s]) => ({
          attributes: o,
          startTime: s.startTime,
          endTime: r,
          value: s.toPointValue()
        }))
      };
    }
  }
  Nft.LastValueAggregator = GNa;
});