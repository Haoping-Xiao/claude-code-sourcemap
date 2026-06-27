// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V8r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var V8r = Q(op => {
  Object.defineProperty(op, "__esModule", {
    value: true
  });
  op.createNoopMeter = op.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = op.NOOP_OBSERVABLE_GAUGE_METRIC = op.NOOP_OBSERVABLE_COUNTER_METRIC = op.NOOP_UP_DOWN_COUNTER_METRIC = op.NOOP_HISTOGRAM_METRIC = op.NOOP_GAUGE_METRIC = op.NOOP_COUNTER_METRIC = op.NOOP_METER = op.NoopObservableUpDownCounterMetric = op.NoopObservableGaugeMetric = op.NoopObservableCounterMetric = op.NoopObservableMetric = op.NoopHistogramMetric = op.NoopGaugeMetric = op.NoopUpDownCounterMetric = op.NoopCounterMetric = op.NoopMetric = op.NoopMeter = void 0;
  class N8r {
    constructor() {}
    createGauge(e, t) {
      return op.NOOP_GAUGE_METRIC;
    }
    createHistogram(e, t) {
      return op.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(e, t) {
      return op.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(e, t) {
      return op.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(e, t) {
      return op.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(e, t) {
      return op.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(e, t) {
      return op.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(e, t) {}
    removeBatchObservableCallback(e) {}
  }
  op.NoopMeter = N8r;
  class dst {}
  op.NoopMetric = dst;
  class B8r extends dst {
    add(e, t) {}
  }
  op.NoopCounterMetric = B8r;
  class U8r extends dst {
    add(e, t) {}
  }
  op.NoopUpDownCounterMetric = U8r;
  class F8r extends dst {
    record(e, t) {}
  }
  op.NoopGaugeMetric = F8r;
  class j8r extends dst {
    record(e, t) {}
  }
  op.NoopHistogramMetric = j8r;
  class k1t {
    addCallback(e) {}
    removeCallback(e) {}
  }
  op.NoopObservableMetric = k1t;
  class G8r extends k1t {}
  op.NoopObservableCounterMetric = G8r;
  class W8r extends k1t {}
  op.NoopObservableGaugeMetric = W8r;
  class q8r extends k1t {}
  op.NoopObservableUpDownCounterMetric = q8r;
  op.NOOP_METER = new N8r();
  op.NOOP_COUNTER_METRIC = new B8r();
  op.NOOP_GAUGE_METRIC = new F8r();
  op.NOOP_HISTOGRAM_METRIC = new j8r();
  op.NOOP_UP_DOWN_COUNTER_METRIC = new U8r();
  op.NOOP_OBSERVABLE_COUNTER_METRIC = new G8r();
  op.NOOP_OBSERVABLE_GAUGE_METRIC = new W8r();
  op.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new q8r();
  function rLd() {
    return op.NOOP_METER;
  }
  op.createNoopMeter = rLd;
});