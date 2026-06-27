// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eja
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eja = Q(cGn => {
  Object.defineProperty(cGn, "__esModule", {
    value: !0
  });
  cGn.createOtlpHttpExportDelegate = void 0;
  var INp = Fyo(),
    xNp = X2a(),
    kNp = Uyo(),
    RNp = Z2a();
  function LNp(e, t) {
    return (0, INp.createOtlpExportDelegate)({
      transport: (0, RNp.createRetryingTransport)({
        transport: (0, xNp.createHttpExporterTransport)(e)
      }),
      serializer: t,
      promiseHandler: (0, kNp.createBoundedQueueExportPromiseHandler)(e)
    }, {
      timeout: e.timeoutMillis
    });
  }
  cGn.createOtlpHttpExportDelegate = LNp;
});