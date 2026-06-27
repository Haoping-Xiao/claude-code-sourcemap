// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RGr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RGr = E(() => {
  Ete(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
function Fgi({
  authOptions: e,
  systemOptions: t,
  loggerOptions: n,
  cacheOptions: r,
  storageInterface: o,
  networkInterface: s,
  cryptoInterface: i,
  clientCredentials: a,
  libraryInfo: l,
  telemetry: c,
  serverTelemetryManager: u,
  persistencePlugin: d,
  serializableCache: p
}) {
  let f = {
    ...Ryd,
    ...n
  };
  return {
    authOptions: Nyd(e),
    systemOptions: {
      ...kyd,
      ...t
    },
    loggerOptions: f,
    cacheOptions: {
      ...Lyd,
      ...r
    },
    storageInterface: o || new GTn(e.clientId, jrt, new JG(f), new Yrt()),
    networkInterface: s || Dyd,
    cryptoInterface: i || jrt,
    clientCredentials: a || Myd,
    libraryInfo: {
      ...Pyd,
      ...l
    },
    telemetry: {
      ...Oyd,
      ...c
    },
    serverTelemetryManager: u || null,
    persistencePlugin: d || null,
    serializableCache: p || null
  };
}
function Nyd(e) {
  return {
    clientCapabilities: [],
    azureCloudOptions: $yd,
    skipAuthorityMetadataCache: false,
    instanceAware: false,
    encodeExtraQueryParams: false,
    ...e
  };
}
function WTn(e) {
  return e.authOptions.authority.options.protocolMode === aU.OIDC;
}
var kyd, Ryd, Lyd, Dyd, Pyd, Myd, $yd, Oyd;