// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bqa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bqa = Q(E5n => {
  Object.defineProperty(E5n, "__esModule", {
    value: true
  });
  E5n.createOtlpGrpcExportDelegate = void 0;
  var yqp = $de(),
    _qp = mqt();
  function bqp(e, t, n, r) {
    return (0, yqp.createOtlpNetworkExportDelegate)(e, t, (0, _qp.createOtlpGrpcExporterTransport)({
      address: e.url,
      compression: e.compression,
      credentials: e.credentials,
      metadata: e.metadata,
      userAgent: e.userAgent,
      grpcName: n,
      grpcPath: r
    }));
  }
  E5n.createOtlpGrpcExportDelegate = bqp;
});