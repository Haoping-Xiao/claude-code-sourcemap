// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dqa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dqa = Q(vPe => {
  Object.defineProperty(vPe, "__esModule", {
    value: !0
  });
  vPe.getOtlpGrpcDefaultConfiguration = vPe.mergeOtlpGrpcConfigurationWithDefaults = vPe.validateAndNormalizeUrl = void 0;
  var cqa = $de(),
    gqt = mqt(),
    Z5p = require("url"),
    aqa = qi();
  function uqa(e) {
    if (e = e.trim(), !e.match(/^([\w]{1,8}):\/\//)) e = `https://${e}`;
    let n = new Z5p.URL(e);
    if (n.protocol === "unix:") return e;
    if (n.pathname && n.pathname !== "/") aqa.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
    if (n.protocol !== "" && !n.protocol?.match(/^(http)s?:$/)) aqa.diag.warn("URL protocol should be http(s)://. Using http://.");
    return n.host;
  }
  vPe.validateAndNormalizeUrl = uqa;
  function lqa(e, t) {
    for (let [n, r] of Object.entries(t.getMap())) if (e.get(n).length < 1) e.set(n, r);
  }
  function eqp(e, t, n) {
    let r = e.url ?? t.url ?? n.url;
    return {
      ...(0, cqa.mergeOtlpSharedConfigurationWithDefaults)(e, t, n),
      metadata: () => {
        let o = n.metadata();
        return lqa(o, e.metadata?.().clone() ?? (0, gqt.createEmptyMetadata)()), lqa(o, t.metadata?.() ?? (0, gqt.createEmptyMetadata)()), o;
      },
      url: uqa(r),
      credentials: e.credentials ?? t.credentials?.(r) ?? n.credentials(r),
      userAgent: e.userAgent
    };
  }
  vPe.mergeOtlpGrpcConfigurationWithDefaults = eqp;
  function tqp() {
    return {
      ...(0, cqa.getSharedConfigurationDefaults)(),
      metadata: () => (0, gqt.createEmptyMetadata)(),
      url: "http://localhost:4317",
      credentials: e => {
        if (e.startsWith("http://")) return () => (0, gqt.createInsecureCredentials)();else return () => (0, gqt.createSslCredentials)();
      }
    };
  }
  vPe.getOtlpGrpcDefaultConfiguration = tqp;
});