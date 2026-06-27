// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c9a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c9a = Q(ngt => {
  Object.defineProperty(ngt, "__esModule", {
    value: !0
  });
  ngt.SumAggregator = ngt.SumAccumulation = void 0;
  var U9p = Kmt(),
    F9p = BEe();
  class l9e {
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
  ngt.SumAccumulation = l9e;
  class l9a {
    kind = U9p.AggregatorKind.SUM;
    monotonic;
    constructor(e) {
      this.monotonic = e;
    }
    createAccumulation(e) {
      return new l9e(e, this.monotonic);
    }
    merge(e, t) {
      let n = e.toPointValue(),
        r = t.toPointValue();
      if (t.reset) return new l9e(t.startTime, this.monotonic, r, t.reset);
      return new l9e(e.startTime, this.monotonic, n + r);
    }
    diff(e, t) {
      let n = e.toPointValue(),
        r = t.toPointValue();
      if (this.monotonic && n > r) return new l9e(t.startTime, this.monotonic, r, !0);
      return new l9e(t.startTime, this.monotonic, r - n);
    }
    toMetricData(e, t, n, r) {
      return {
        descriptor: e,
        aggregationTemporality: t,
        dataPointType: F9p.DataPointType.SUM,
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
  ngt.SumAggregator = l9a;
});