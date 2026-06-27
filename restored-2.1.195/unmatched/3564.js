// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var L2a = Q(Q3n => {
  Object.defineProperty(Q3n, "__esModule", {
    value: !0
  });
  Q3n.JsonLogsSerializer = void 0;
  var W1p = d_o();
  Q3n.JsonLogsSerializer = {
    serializeRequest: e => {
      let t = (0, W1p.createExportLogsServiceRequest)(e, {
        useHex: !0,
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