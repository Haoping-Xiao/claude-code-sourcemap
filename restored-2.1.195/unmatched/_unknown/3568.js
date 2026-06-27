// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $2a = Q(nGn => {
  Object.defineProperty(nGn, "__esModule", {
    value: true
  });
  nGn.JsonTraceSerializer = void 0;
  var K1p = f_o();
  nGn.JsonTraceSerializer = {
    serializeRequest: e => {
      let t = (0, K1p.createExportTraceServiceRequest)(e, {
        useHex: true,
        useLongBits: false
      });
      return new TextEncoder().encode(JSON.stringify(t));
    },
    deserializeResponse: e => {
      if (e.length === 0) return {};
      return JSON.parse(new TextDecoder().decode(e));
    }
  };
});