// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var k2a = Q(X3n => {
  Object.defineProperty(X3n, "__esModule", {
    value: !0
  });
  X3n.ProtobufTraceSerializer = void 0;
  var x2a = F3n(),
    U1p = f_o(),
    F1p = x2a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
    j1p = x2a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
  X3n.ProtobufTraceSerializer = {
    serializeRequest: e => {
      let t = (0, U1p.createExportTraceServiceRequest)(e);
      return j1p.encode(t).finish();
    },
    deserializeResponse: e => F1p.decode(e)
  };
});