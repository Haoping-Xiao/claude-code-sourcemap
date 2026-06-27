// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YRs
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1659  score=1  fileCov=0.1659
// note: low-confidence suggestion: node_modules/long/umd/index.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var YRs = E(() => {
  KRs = R(ZH(), 1);
});
var serializeFloat = e => {
    if (e !== e) return "NaN";
    switch (e) {
      case 1 / 0:
        return "Infinity";
      case -1 / 0:
        return "-Infinity";
      default:
        return e;
    }
  },
  serializeDateTime = e => e.toISOString().replace(".000Z", "Z");
var sPr = e => {
  if (e == null) return {};
  if (Array.isArray(e)) return e.filter(t => t != null).map(sPr);
  if (typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e)) {
      if (e[n] == null) continue;
      t[n] = sPr(e[n]);
    }
    return t;
  }
  return e;
};
var hv = {};
_t(hv, {
  withBaseException: () => p2u,
  throwDefaultError: () => RRs,
  take: () => E2u,
  serializeFloat: () => serializeFloat,
  serializeDateTime: () => serializeDateTime,
  resolvedPath: () => KRs.resolvedPath,
  resolveDefaultRuntimeConfig: () => y2u,
  map: () => VRs,
  loadConfigsForDefaultMode: () => m2u,
  isSerializableHeaderValue: () => b2u,
  getValueFromTextNode: () => WRs,
  getDefaultExtensionConfiguration: () => FRs,
  getDefaultClientConfiguration: () => h2u,
  getArrayIfSingleItem: () => _2u,
  extendedEncodeURIComponent: () => PRs.extendedEncodeURIComponent,
  emitWarningIfUnsupportedVersion: () => g2u,
  decorateServiceException: () => rPr,
  createAggregatedClient: () => d2u,
  convertMap: () => S2u,
  collectBody: () => TRs.collectBody,
  _json: () => sPr,
  ServiceException: () => itt,
  SENSITIVE_STRING: () => u2u,
  NoOpLogger: () => qRs,
  Command: () => nPr,
  Client: () => sks
});