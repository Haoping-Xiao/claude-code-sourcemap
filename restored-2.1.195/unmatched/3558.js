// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p_o
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var p_o = Q(Bde => {
  Object.defineProperty(Bde, "__esModule", {
    value: !0
  });
  Bde.createExportMetricsServiceRequest = Bde.toMetric = Bde.toScopeMetrics = Bde.toResourceMetrics = void 0;
  var h2a = qi(),
    Zft = e5t(),
    y2a = g2a(),
    T1p = G3n(),
    d5t = W3n();
  function b2a(e, t) {
    let n = (0, T1p.getOtlpEncoder)(t),
      r = (0, d5t.createResource)(e.resource);
    return {
      resource: r,
      schemaUrl: r.schemaUrl,
      scopeMetrics: S2a(e.scopeMetrics, n)
    };
  }
  Bde.toResourceMetrics = b2a;
  function S2a(e, t) {
    return Array.from(e.map(n => ({
      scope: (0, d5t.createInstrumentationScope)(n.scope),
      metrics: n.metrics.map(r => E2a(r, t)),
      schemaUrl: n.scope.schemaUrl
    })));
  }
  Bde.toScopeMetrics = S2a;
  function E2a(e, t) {
    let n = {
        name: e.descriptor.name,
        description: e.descriptor.description,
        unit: e.descriptor.unit
      },
      r = I1p(e.aggregationTemporality);
    switch (e.dataPointType) {
      case Zft.DataPointType.SUM:
        n.sum = {
          aggregationTemporality: r,
          isMonotonic: e.isMonotonic,
          dataPoints: _2a(e, t)
        };
        break;
      case Zft.DataPointType.GAUGE:
        n.gauge = {
          dataPoints: _2a(e, t)
        };
        break;
      case Zft.DataPointType.HISTOGRAM:
        n.histogram = {
          aggregationTemporality: r,
          dataPoints: w1p(e, t)
        };
        break;
      case Zft.DataPointType.EXPONENTIAL_HISTOGRAM:
        n.exponentialHistogram = {
          aggregationTemporality: r,
          dataPoints: C1p(e, t)
        };
        break;
    }
    return n;
  }
  Bde.toMetric = E2a;
  function v1p(e, t, n) {
    let r = {
      attributes: (0, d5t.toAttributes)(e.attributes),
      startTimeUnixNano: n.encodeHrTime(e.startTime),
      timeUnixNano: n.encodeHrTime(e.endTime)
    };
    switch (t) {
      case h2a.ValueType.INT:
        r.asInt = e.value;
        break;
      case h2a.ValueType.DOUBLE:
        r.asDouble = e.value;
        break;
    }
    return r;
  }
  function _2a(e, t) {
    return e.dataPoints.map(n => v1p(n, e.descriptor.valueType, t));
  }
  function w1p(e, t) {
    return e.dataPoints.map(n => {
      let r = n.value;
      return {
        attributes: (0, d5t.toAttributes)(n.attributes),
        bucketCounts: r.buckets.counts,
        explicitBounds: r.buckets.boundaries,
        count: r.count,
        sum: r.sum,
        min: r.min,
        max: r.max,
        startTimeUnixNano: t.encodeHrTime(n.startTime),
        timeUnixNano: t.encodeHrTime(n.endTime)
      };
    });
  }
  function C1p(e, t) {
    return e.dataPoints.map(n => {
      let r = n.value;
      return {
        attributes: (0, d5t.toAttributes)(n.attributes),
        count: r.count,
        min: r.min,
        max: r.max,
        sum: r.sum,
        positive: {
          offset: r.positive.offset,
          bucketCounts: r.positive.bucketCounts
        },
        negative: {
          offset: r.negative.offset,
          bucketCounts: r.negative.bucketCounts
        },
        scale: r.scale,
        zeroCount: r.zeroCount,
        startTimeUnixNano: t.encodeHrTime(n.startTime),
        timeUnixNano: t.encodeHrTime(n.endTime)
      };
    });
  }
  function I1p(e) {
    switch (e) {
      case Zft.AggregationTemporality.DELTA:
        return y2a.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
      case Zft.AggregationTemporality.CUMULATIVE:
        return y2a.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
    }
  }
  function x1p(e, t) {
    return {
      resourceMetrics: e.map(n => b2a(n, t))
    };
  }
  Bde.createExportMetricsServiceRequest = x1p;
});