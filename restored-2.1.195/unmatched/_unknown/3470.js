// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pyo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pyo = Q(Uft => {
  Object.defineProperty(Uft, "__esModule", {
    value: true
  });
  Uft.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = Uft.DEFAULT_AGGREGATION_SELECTOR = void 0;
  var o$p = D4n(),
    s$p = YWt(),
    i$p = e => ({
      type: s$p.AggregationType.DEFAULT
    });
  Uft.DEFAULT_AGGREGATION_SELECTOR = i$p;
  var a$p = e => o$p.AggregationTemporality.CUMULATIVE;
  Uft.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = a$p;
});