// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sti
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1659  score=1  fileCov=0.1659
// note: low-confidence suggestion: node_modules/long/umd/index.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var Sti = E(() => {
  bti = R(ZH(), 1);
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
var cFr = e => {
  if (e == null) return {};
  if (Array.isArray(e)) return e.filter(t => t != null).map(cFr);
  if (typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e)) {
      if (e[n] == null) continue;
      t[n] = cFr(e[n]);
    }
    return t;
  }
  return e;
};
var pI = {};
_t(pI, {
  withBaseException: () => Kcd,
  throwDefaultError: () => oti,
  take: () => eud,
  serializeFloat: () => serializeFloat,
  serializeDateTime: () => serializeDateTime,
  resolvedPath: () => bti.resolvedPath,
  resolveDefaultRuntimeConfig: () => lFr,
  map: () => yti,
  loadConfigsForDefaultMode: () => iFr,
  isSerializableHeaderValue: () => Qcd,
  getValueFromTextNode: () => hti,
  getDefaultExtensionConfiguration: () => xEn,
  getDefaultClientConfiguration: () => Xcd,
  getArrayIfSingleItem: () => Jcd,
  extendedEncodeURIComponent: () => ati.extendedEncodeURIComponent,
  emitWarningIfUnsupportedVersion: () => aFr,
  decorateServiceException: () => oFr,
  createAggregatedClient: () => rFr,
  convertMap: () => Zcd,
  collectBody: () => MZs.collectBody,
  _json: () => cFr,
  ServiceException: () => jIe,
  SENSITIVE_STRING: () => zcd,
  NoOpLogger: () => kEn,
  Command: () => Vd,
  Client: () => CEn
});