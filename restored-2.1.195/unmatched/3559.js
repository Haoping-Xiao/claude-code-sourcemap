// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H2a = Q(K3n => {
  Object.defineProperty(K3n, "__esModule", {
    value: !0
  });
  K3n.ProtobufMetricsSerializer = void 0;
  var A2a = F3n(),
    k1p = p_o(),
    R1p = A2a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
    L1p = A2a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
  K3n.ProtobufMetricsSerializer = {
    serializeRequest: e => {
      let t = (0, k1p.createExportMetricsServiceRequest)([e]);
      return L1p.encode(t).finish();
    },
    deserializeResponse: e => R1p.decode(e)
  };
});