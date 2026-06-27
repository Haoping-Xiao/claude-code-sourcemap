// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s9a
// matched 2.1.88 source: node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/ExponentialHistogram.js
// class=partial  jaccard=0.2359  score=0.6723  fileCov=0.2665
// note: low-confidence suggestion: node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/ExponentialHistogram.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s9a = Q(egt => {
  Object.defineProperty(egt, "__esModule", {
    value: !0
  });
  egt.ExponentialHistogramAggregator = egt.ExponentialHistogramAccumulation = void 0;
  var D9p = Kmt(),
    wqt = BEe(),
    P9p = qi(),
    n9a = WVa(),
    r9a = t9a(),
    M9p = rqn();
  class Zmt {
    static combine(e, t) {
      return new Zmt(Math.min(e.low, t.low), Math.max(e.high, t.high));
    }
    low;
    high;
    constructor(e, t) {
      this.low = e, this.high = t;
    }
  }
  var $9p = 20,
    O9p = 160,
    TEo = 2;
  class cqn {
    startTime;
    _maxSize;
    _recordMinMax;
    _sum;
    _count;
    _zeroCount;
    _min;
    _max;
    _positive;
    _negative;
    _mapping;
    constructor(e, t = O9p, n = !0, r = 0, o = 0, s = 0, i = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, l = new n9a.Buckets(), c = new n9a.Buckets(), u = (0, r9a.getMapping)($9p)) {
      if (this.startTime = e, this._maxSize = t, this._recordMinMax = n, this._sum = r, this._count = o, this._zeroCount = s, this._min = i, this._max = a, this._positive = l, this._negative = c, this._mapping = u, this._maxSize < TEo) P9p.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${TEo}`), this._maxSize = TEo;
    }
    record(e) {
      this.updateByIncrement(e, 1);
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return {
        hasMinMax: this._recordMinMax,
        min: this.min,
        max: this.max,
        sum: this.sum,
        positive: {
          offset: this.positive.offset,
          bucketCounts: this.positive.counts()
        },
        negative: {
          offset: this.negative.offset,
          bucketCounts: this.negative.counts()
        },
        count: this.count,
        scale: this.scale,
        zeroCount: this.zeroCount
      };
    }
    get sum() {
      return this._sum;
    }
    get min() {
      return this._min;
    }
    get max() {
      return this._max;
    }
    get count() {
      return this._count;
    }
    get zeroCount() {
      return this._zeroCount;
    }
    get scale() {
      if (this._count === this._zeroCount) return 0;
      return this._mapping.scale;
    }
    get positive() {
      return this._positive;
    }
    get negative() {
      return this._negative;
    }
    updateByIncrement(e, t) {
      if (Number.isNaN(e)) return;
      if (e > this._max) this._max = e;
      if (e < this._min) this._min = e;
      if (this._count += t, e === 0) {
        this._zeroCount += t;
        return;
      }
      if (this._sum += e * t, e > 0) this._updateBuckets(this._positive, e, t);else this._updateBuckets(this._negative, -e, t);
    }
    merge(e) {
      if (this._count === 0) this._min = e.min, this._max = e.max;else if (e.count !== 0) {
        if (e.min < this.min) this._min = e.min;
        if (e.max > this.max) this._max = e.max;
      }
      this.startTime = e.startTime, this._sum += e.sum, this._count += e.count, this._zeroCount += e.zeroCount;
      let t = this._minScale(e);
      this._downscale(this.scale - t), this._mergeBuckets(this.positive, e, e.positive, t), this._mergeBuckets(this.negative, e, e.negative, t);
    }
    diff(e) {
      this._min = 1 / 0, this._max = -1 / 0, this._sum -= e.sum, this._count -= e.count, this._zeroCount -= e.zeroCount;
      let t = this._minScale(e);
      this._downscale(this.scale - t), this._diffBuckets(this.positive, e, e.positive, t), this._diffBuckets(this.negative, e, e.negative, t);
    }
    clone() {
      return new cqn(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
    }
    _updateBuckets(e, t, n) {
      let r = this._mapping.mapToIndex(t),
        o = !1,
        s = 0,
        i = 0;
      if (e.length === 0) e.indexStart = r, e.indexEnd = e.indexStart, e.indexBase = e.indexStart;else if (r < e.indexStart && e.indexEnd - r >= this._maxSize) o = !0, i = r, s = e.indexEnd;else if (r > e.indexEnd && r - e.indexStart >= this._maxSize) o = !0, i = e.indexStart, s = r;
      if (o) {
        let a = this._changeScale(s, i);
        this._downscale(a), r = this._mapping.mapToIndex(t);
      }
      this._incrementIndexBy(e, r, n);
    }
    _incrementIndexBy(e, t, n) {
      if (n === 0) return;
      if (e.length === 0) e.indexStart = e.indexEnd = e.indexBase = t;
      if (t < e.indexStart) {
        let o = e.indexEnd - t;
        if (o >= e.backing.length) this._grow(e, o + 1);
        e.indexStart = t;
      } else if (t > e.indexEnd) {
        let o = t - e.indexStart;
        if (o >= e.backing.length) this._grow(e, o + 1);
        e.indexEnd = t;
      }
      let r = t - e.indexBase;
      if (r < 0) r += e.backing.length;
      e.incrementBucket(r, n);
    }
    _grow(e, t) {
      let n = e.backing.length,
        r = e.indexBase - e.indexStart,
        o = n - r,
        s = (0, M9p.nextGreaterSquare)(t);
      if (s > this._maxSize) s = this._maxSize;
      let i = s - r;
      e.backing.growTo(s, o, i);
    }
    _changeScale(e, t) {
      let n = 0;
      while (e - t >= this._maxSize) e >>= 1, t >>= 1, n++;
      return n;
    }
    _downscale(e) {
      if (e === 0) return;
      if (e < 0) throw Error(`impossible change of scale: ${this.scale}`);
      let t = this._mapping.scale - e;
      this._positive.downscale(e), this._negative.downscale(e), this._mapping = (0, r9a.getMapping)(t);
    }
    _minScale(e) {
      let t = Math.min(this.scale, e.scale),
        n = Zmt.combine(this._highLowAtScale(this.positive, this.scale, t), this._highLowAtScale(e.positive, e.scale, t)),
        r = Zmt.combine(this._highLowAtScale(this.negative, this.scale, t), this._highLowAtScale(e.negative, e.scale, t));
      return Math.min(t - this._changeScale(n.high, n.low), t - this._changeScale(r.high, r.low));
    }
    _highLowAtScale(e, t, n) {
      if (e.length === 0) return new Zmt(0, -1);
      let r = t - n;
      return new Zmt(e.indexStart >> r, e.indexEnd >> r);
    }
    _mergeBuckets(e, t, n, r) {
      let o = n.offset,
        s = t.scale - r;
      for (let i = 0; i < n.length; i++) this._incrementIndexBy(e, o + i >> s, n.at(i));
    }
    _diffBuckets(e, t, n, r) {
      let o = n.offset,
        s = t.scale - r;
      for (let i = 0; i < n.length; i++) {
        let l = (o + i >> s) - e.indexBase;
        if (l < 0) l += e.backing.length;
        e.decrementBucket(l, n.at(i));
      }
      e.trim();
    }
  }
  egt.ExponentialHistogramAccumulation = cqn;
  class o9a {
    kind = D9p.AggregatorKind.EXPONENTIAL_HISTOGRAM;
    _maxSize;
    _recordMinMax;
    constructor(e, t) {
      this._maxSize = e, this._recordMinMax = t;
    }
    createAccumulation(e) {
      return new cqn(e, this._maxSize, this._recordMinMax);
    }
    merge(e, t) {
      let n = t.clone();
      return n.merge(e), n;
    }
    diff(e, t) {
      let n = t.clone();
      return n.diff(e), n;
    }
    toMetricData(e, t, n, r) {
      return {
        descriptor: e,
        aggregationTemporality: t,
        dataPointType: wqt.DataPointType.EXPONENTIAL_HISTOGRAM,
        dataPoints: n.map(([o, s]) => {
          let i = s.toPointValue(),
            a = e.type === wqt.InstrumentType.GAUGE || e.type === wqt.InstrumentType.UP_DOWN_COUNTER || e.type === wqt.InstrumentType.OBSERVABLE_GAUGE || e.type === wqt.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: o,
            startTime: s.startTime,
            endTime: r,
            value: {
              min: i.hasMinMax ? i.min : void 0,
              max: i.hasMinMax ? i.max : void 0,
              sum: !a ? i.sum : void 0,
              positive: {
                offset: i.positive.offset,
                bucketCounts: i.positive.bucketCounts
              },
              negative: {
                offset: i.negative.offset,
                bucketCounts: i.negative.bucketCounts
              },
              count: i.count,
              scale: i.scale,
              zeroCount: i.zeroCount
            }
          };
        })
      };
    }
  }
  egt.ExponentialHistogramAggregator = o9a;
});