// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DCi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DCi = Q(mst => {
  Object.defineProperty(mst, "__esModule", {
    value: true
  });
  mst.NOOP_METER_PROVIDER = mst.NoopMeterProvider = void 0;
  var zLd = V8r();
  class l6r {
    getMeter(e, t, n) {
      return zLd.NOOP_METER;
    }
  }
  mst.NoopMeterProvider = l6r;
  mst.NOOP_METER_PROVIDER = new l6r();
});