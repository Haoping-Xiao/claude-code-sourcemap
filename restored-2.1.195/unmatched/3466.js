// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VNa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VNa = Q(Bft => {
  Object.defineProperty(Bft, "__esModule", {
    value: !0
  });
  Bft.SumAggregator = Bft.SumAccumulation = void 0;
  var ZMp = Rft(),
    e$p = oPe();
  class HVe {
    startTime;
    monotonic;
    _current;
    reset;
    constructor(e, t, n = 0, r = !1) {
      this.startTime = e, this.monotonic = t, this._current = n, this.reset = r;
    }
    record(e) {
      if (this.monotonic && e < 0) return;
      this._current += e;
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  Bft.SumAccumulation = HVe;
  class qNa {
    monotonic;
    kind = ZMp.AggregatorKind.SUM;
    constructor(e) {
      this.monotonic = e;
    }
    createAccumulation(e) {
      return new HVe(e, this.monotonic);
    }
    merge(e, t) {
      let n = e.toPointValue(),
        r = t.toPointValue();
      if (t.reset) return new HVe(t.startTime, this.monotonic, r, t.reset);
      return new HVe(e.startTime, this.monotonic, n + r);
    }
    diff(e, t) {
      let n = e.toPointValue(),
        r = t.toPointValue();
      if (this.monotonic && n > r) return new HVe(t.startTime, this.monotonic, r, !0);
      return new HVe(t.startTime, this.monotonic, r - n);
    }
    toMetricData(e, t, n, r) {
      return {
        descriptor: e,
        aggregationTemporality: t,
        dataPointType: e$p.DataPointType.SUM,
        dataPoints: n.map(([o, s]) => ({
          attributes: o,
          startTime: s.startTime,
          endTime: r,
          value: s.toPointValue()
        })),
        isMonotonic: this.monotonic
      };
    }
  }
  Bft.SumAggregator = qNa;
});