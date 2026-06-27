// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IEo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IEo = Q(rgt => {
  Object.defineProperty(rgt, "__esModule", {
    value: true
  });
  rgt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = rgt.DEFAULT_AGGREGATION_SELECTOR = void 0;
  var q9p = Z5n(),
    V9p = kqt(),
    z9p = e => ({
      type: V9p.AggregationType.DEFAULT
    });
  rgt.DEFAULT_AGGREGATION_SELECTOR = z9p;
  var K9p = e => q9p.AggregationTemporality.CUMULATIVE;
  rgt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = K9p;
});