// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jzs
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1659  score=1  fileCov=0.1659
// note: low-confidence suggestion: node_modules/long/umd/index.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var Jzs = E(() => {
  Xzs = R(ZH(), 1);
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
var bBr = e => {
  if (e == null) return {};
  if (Array.isArray(e)) return e.filter(t => t != null).map(bBr);
  if (typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e)) {
      if (e[n] == null) continue;
      t[n] = bBr(e[n]);
    }
    return t;
  }
  return e;
};
var sI = {};
_t(sI, {
  withBaseException: () => _od,
  throwDefaultError: () => Mzs,
  take: () => Tod,
  serializeFloat: () => serializeFloat,
  serializeDateTime: () => serializeDateTime,
  resolvedPath: () => Xzs.resolvedPath,
  resolveDefaultRuntimeConfig: () => _Br,
  map: () => Kzs,
  loadConfigsForDefaultMode: () => hBr,
  isSerializableHeaderValue: () => Aod,
  getValueFromTextNode: () => zzs,
  getDefaultExtensionConfiguration: () => eSn,
  getDefaultClientConfiguration: () => Sod,
  getArrayIfSingleItem: () => Eod,
  extendedEncodeURIComponent: () => Nzs.extendedEncodeURIComponent,
  emitWarningIfUnsupportedVersion: () => yBr,
  decorateServiceException: () => mBr,
  createAggregatedClient: () => fBr,
  convertMap: () => Hod,
  collectBody: () => p6s.collectBody,
  _json: () => bBr,
  ServiceException: () => kIe,
  SENSITIVE_STRING: () => yod,
  NoOpLogger: () => tSn,
  Command: () => Nw,
  Client: () => UDt
});