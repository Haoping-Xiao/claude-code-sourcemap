// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RJs
// matched 2.1.88 source: node_modules/long/umd/index.js
// class=partial  jaccard=0.1659  score=1  fileCov=0.1659
// note: low-confidence suggestion: node_modules/long/umd/index.js; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var RJs = E(() => {
  kJs = R(ZH(), 1);
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
var $Ur = e => {
  if (e == null) return {};
  if (Array.isArray(e)) return e.filter(t => t != null).map($Ur);
  if (typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e)) {
      if (e[n] == null) continue;
      t[n] = $Ur(e[n]);
    }
    return t;
  }
  return e;
};
var dI = {};
_t(dI, {
  withBaseException: () => $ld,
  throwDefaultError: () => gJs,
  take: () => jld,
  serializeFloat: () => serializeFloat,
  serializeDateTime: () => serializeDateTime,
  resolvedPath: () => kJs.resolvedPath,
  resolveDefaultRuntimeConfig: () => MUr,
  map: () => IJs,
  loadConfigsForDefaultMode: () => DUr,
  isSerializableHeaderValue: () => Uld,
  getValueFromTextNode: () => CJs,
  getDefaultExtensionConfiguration: () => tEn,
  getDefaultClientConfiguration: () => Nld,
  getArrayIfSingleItem: () => Bld,
  extendedEncodeURIComponent: () => _Js.extendedEncodeURIComponent,
  emitWarningIfUnsupportedVersion: () => PUr,
  decorateServiceException: () => RUr,
  createAggregatedClient: () => kUr,
  convertMap: () => Fld,
  collectBody: () => V7s.collectBody,
  _json: () => $Ur,
  ServiceException: () => BIe,
  SENSITIVE_STRING: () => Mld,
  NoOpLogger: () => nEn,
  Command: () => tT,
  Client: () => aPt
});