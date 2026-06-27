// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lja
// matched 2.1.88 source: node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/convert-legacy-node-http-options.js
// class=partial  jaccard=0.2489  score=1  fileCov=0.2489
// note: low-confidence suggestion: node_modules/@opentelemetry/otlp-exporter-base/build/src/configuration/convert-legacy-node-http-options.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lja = Q(mGn => {
  Object.defineProperty(mGn, "__esModule", {
    value: !0
  });
  mGn.convertLegacyHttpOptions = void 0;
  var QNp = qi(),
    aja = sGn(),
    ZNp = TEe(),
    eBp = sja(),
    tBp = ija();
  function nBp(e) {
    if (typeof e.httpAgentOptions === "function") return e.httpAgentOptions;
    let t = e.httpAgentOptions;
    if (e.keepAlive != null) t = {
      keepAlive: e.keepAlive,
      ...t
    };
    if (t != null) return (0, ZNp.httpAgentFactoryFromOptions)(t);else return;
  }
  function rBp(e, t, n, r) {
    if (e.metadata) QNp.diag.warn("Metadata cannot be set when using http");
    return (0, aja.mergeOtlpNodeHttpConfigurationWithDefaults)({
      url: e.url,
      headers: (0, tBp.convertLegacyHeaders)(e),
      concurrencyLimit: e.concurrencyLimit,
      timeoutMillis: e.timeoutMillis,
      compression: e.compression,
      agentFactory: nBp(e),
      userAgent: e.userAgent
    }, (0, eBp.getNodeHttpConfigurationFromEnvironment)(t, n), (0, aja.getNodeHttpConfigurationDefaults)(r, n));
  }
  mGn.convertLegacyHttpOptions = rBp;
});