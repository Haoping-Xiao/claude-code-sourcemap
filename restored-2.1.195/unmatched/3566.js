// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P2a = Q(eGn => {
  Object.defineProperty(eGn, "__esModule", {
    value: !0
  });
  eGn.JsonMetricsSerializer = void 0;
  var V1p = p_o();
  eGn.JsonMetricsSerializer = {
    serializeRequest: e => {
      let t = (0, V1p.createExportMetricsServiceRequest)([e], {
        useLongBits: !1
      });
      return new TextEncoder().encode(JSON.stringify(t));
    },
    deserializeResponse: e => {
      if (e.length === 0) return {};
      return JSON.parse(new TextDecoder().decode(e));
    }
  };
});