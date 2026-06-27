// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f2a = Q(V3n => {
  Object.defineProperty(V3n, "__esModule", {
    value: !0
  });
  V3n.ProtobufLogsSerializer = void 0;
  var p2a = F3n(),
    b1p = d_o(),
    S1p = p2a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
    E1p = p2a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
  V3n.ProtobufLogsSerializer = {
    serializeRequest: e => {
      let t = (0, b1p.createExportLogsServiceRequest)(e);
      return E1p.encode(t).finish();
    },
    deserializeResponse: e => S1p.decode(e)
  };
});