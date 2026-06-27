// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hBs
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1659  score=1  fileCov=0.1659
// note: low-confidence suggestion: node_modules/long/umd/index.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var hBs = E(() => {
  gBs = R(ZH(), 1);
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
var I$r = e => {
  if (e == null) return {};
  if (Array.isArray(e)) return e.filter(t => t != null).map(I$r);
  if (typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e)) {
      if (e[n] == null) continue;
      t[n] = I$r(e[n]);
    }
    return t;
  }
  return e;
};
var rI = {};
_t(rI, {
  withBaseException: () => f9u,
  throwDefaultError: () => eBs,
  take: () => b9u,
  serializeFloat: () => serializeFloat,
  serializeDateTime: () => serializeDateTime,
  resolvedPath: () => gBs.resolvedPath,
  resolveDefaultRuntimeConfig: () => C$r,
  map: () => fBs,
  loadConfigsForDefaultMode: () => v$r,
  isSerializableHeaderValue: () => y9u,
  getValueFromTextNode: () => pBs,
  getDefaultExtensionConfiguration: () => $hn,
  getDefaultClientConfiguration: () => g9u,
  getArrayIfSingleItem: () => h9u,
  extendedEncodeURIComponent: () => rBs.extendedEncodeURIComponent,
  emitWarningIfUnsupportedVersion: () => w$r,
  decorateServiceException: () => H$r,
  createAggregatedClient: () => A$r,
  convertMap: () => _9u,
  collectBody: () => R1s.collectBody,
  _json: () => I$r,
  ServiceException: () => aIe,
  SENSITIVE_STRING: () => p9u,
  NoOpLogger: () => Ohn,
  Command: () => Zee,
  Client: () => Phn
});