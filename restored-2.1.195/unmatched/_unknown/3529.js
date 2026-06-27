// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iFa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iFa = Q(P3n => {
  Object.defineProperty(P3n, "__esModule", {
    value: !0
  });
  P3n.createOtlpNetworkExportDelegate = void 0;
  var GOp = Uyo(),
    WOp = Fyo();
  function qOp(e, t, n) {
    return (0, WOp.createOtlpExportDelegate)({
      transport: n,
      serializer: t,
      promiseHandler: (0, GOp.createBoundedQueueExportPromiseHandler)(e)
    }, {
      timeout: e.timeoutMillis
    });
  }
  P3n.createOtlpNetworkExportDelegate = qOp;
});