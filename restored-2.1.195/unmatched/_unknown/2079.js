// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bCi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bCi = Q(UIn => {
  Object.defineProperty(UIn, "__esModule", {
    value: true
  });
  UIn.NoopTracerProvider = void 0;
  var ILd = r6r();
  class _Ci {
    getTracer(e, t, n) {
      return new ILd.NoopTracer();
    }
  }
  UIn.NoopTracerProvider = _Ci;
});