// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GVa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GVa = Q(Ymt => {
  Object.defineProperty(Ymt, "__esModule", {
    value: true
  });
  Ymt.HistogramAggregator = Ymt.HistogramAccumulation = void 0;
  var _9p = Kmt(),
    Tqt = BEe(),
    b9p = ipe();
  function S9p(e) {
    let t = e.map(() => 0);
    return t.push(0), {
      buckets: {
        boundaries: e,
        counts: t
      },
      sum: 0,
      count: 0,
      hasMinMax: false,
      min: 1 / 0,
      max: -1 / 0
    };
  }
  class vqt {
    startTime;
    _boundaries;
    _recordMinMax;
    _current;
    constructor(e, t, n = true, r = S9p(t)) {
      this.startTime = e, this._boundaries = t, this._recordMinMax = n, this._current = r;
    }
    record(e) {
      if (Number.isNaN(e)) return;
      if (this._current.count += 1, this._current.sum += e, this._recordMinMax) this._current.min = Math.min(e, this._current.min), this._current.max = Math.max(e, this._current.max), this._current.hasMinMax = true;
      let t = (0, b9p.binarySearchUB)(this._boundaries, e);
      this._current.buckets.counts[t] += 1;
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  Ymt.HistogramAccumulation = vqt;
  class jVa {
    kind = _9p.AggregatorKind.HISTOGRAM;
    _boundaries;
    _recordMinMax;
    constructor(e, t) {
      this._boundaries = e, this._recordMinMax = t;
    }
    createAccumulation(e) {
      return new vqt(e, this._boundaries, this._recordMinMax);
    }
    merge(e, t) {
      let n = e.toPointValue(),
        r = t.toPointValue(),
        o = n.buckets.counts,
        s = r.buckets.counts,
        i = Array(o.length);
      for (let c = 0; c < o.length; c++) i[c] = o[c] + s[c];
      let a = 1 / 0,
        l = -1 / 0;
      if (this._recordMinMax) {
        if (n.hasMinMax && r.hasMinMax) a = Math.min(n.min, r.min), l = Math.max(n.max, r.max);else if (n.hasMinMax) a = n.min, l = n.max;else if (r.hasMinMax) a = r.min, l = r.max;
      }
      return new vqt(e.startTime, n.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: n.buckets.boundaries,
          counts: i
        },
        count: n.count + r.count,
        sum: n.sum + r.sum,
        hasMinMax: this._recordMinMax && (n.hasMinMax || r.hasMinMax),
        min: a,
        max: l
      });
    }
    diff(e, t) {
      let n = e.toPointValue(),
        r = t.toPointValue(),
        o = n.buckets.counts,
        s = r.buckets.counts,
        i = Array(o.length);
      for (let a = 0; a < o.length; a++) i[a] = s[a] - o[a];
      return new vqt(t.startTime, n.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: n.buckets.boundaries,
          counts: i
        },
        count: r.count - n.count,
        sum: r.sum - n.sum,
        hasMinMax: false,
        min: 1 / 0,
        max: -1 / 0
      });
    }
    toMetricData(e, t, n, r) {
      return {
        descriptor: e,
        aggregationTemporality: t,
        dataPointType: Tqt.DataPointType.HISTOGRAM,
        dataPoints: n.map(([o, s]) => {
          let i = s.toPointValue(),
            a = e.type === Tqt.InstrumentType.GAUGE || e.type === Tqt.InstrumentType.UP_DOWN_COUNTER || e.type === Tqt.InstrumentType.OBSERVABLE_GAUGE || e.type === Tqt.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: o,
            startTime: s.startTime,
            endTime: r,
            value: {
              min: i.hasMinMax ? i.min : void 0,
              max: i.hasMinMax ? i.max : void 0,
              sum: !a ? i.sum : void 0,
              buckets: i.buckets,
              count: i.count
            }
          };
        })
      };
    }
  }
  Ymt.HistogramAggregator = jVa;
});