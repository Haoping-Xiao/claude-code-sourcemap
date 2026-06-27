// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J3s
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1659  score=1  fileCov=0.1659
// note: low-confidence suggestion: node_modules/long/umd/index.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var J3s = E(() => {
  X3s = R(ZH(), 1);
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
var KOr = e => {
  if (e == null) return {};
  if (Array.isArray(e)) return e.filter(t => t != null).map(KOr);
  if (typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e)) {
      if (e[n] == null) continue;
      t[n] = KOr(e[n]);
    }
    return t;
  }
  return e;
};
var oI = {};
_t(oI, {
  withBaseException: () => xKu,
  throwDefaultError: () => M3s,
  take: () => MKu,
  serializeFloat: () => serializeFloat,
  serializeDateTime: () => serializeDateTime,
  resolvedPath: () => X3s.resolvedPath,
  resolveDefaultRuntimeConfig: () => zOr,
  map: () => K3s,
  loadConfigsForDefaultMode: () => qOr,
  isSerializableHeaderValue: () => DKu,
  getValueFromTextNode: () => z3s,
  getDefaultExtensionConfiguration: () => Oyn,
  getDefaultClientConfiguration: () => RKu,
  getArrayIfSingleItem: () => LKu,
  extendedEncodeURIComponent: () => N3s.extendedEncodeURIComponent,
  emitWarningIfUnsupportedVersion: () => VOr,
  decorateServiceException: () => GOr,
  createAggregatedClient: () => jOr,
  convertMap: () => PKu,
  collectBody: () => p4s.collectBody,
  _json: () => KOr,
  ServiceException: () => EIe,
  SENSITIVE_STRING: () => IKu,
  NoOpLogger: () => Nyn,
  Command: () => xr,
  Client: () => SDt
});