// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VWr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VWr = E(() => {
  Zb();
  whi();
  khi();
  V$t(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  V_d = {
    clientId: vo.EMPTY_STRING,
    authority: vo.DEFAULT_AUTHORITY,
    clientSecret: vo.EMPTY_STRING,
    clientAssertion: vo.EMPTY_STRING,
    clientCertificate: {
      thumbprint: vo.EMPTY_STRING,
      thumbprintSha256: vo.EMPTY_STRING,
      privateKey: vo.EMPTY_STRING,
      x5c: vo.EMPTY_STRING
    },
    knownAuthorities: [],
    cloudDiscoveryMetadata: vo.EMPTY_STRING,
    authorityMetadata: vo.EMPTY_STRING,
    clientCapabilities: [],
    protocolMode: aU.AAD,
    azureCloudOptions: {
      azureCloudInstance: Oye.None,
      tenant: vo.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1,
    encodeExtraQueryParams: !1
  }, z_d = {
    claimsBasedCachingEnabled: !1
  }, qWr = {
    loggerCallback: () => {},
    piiLoggingEnabled: !1,
    logLevel: gI.Info
  }, K_d = {
    loggerOptions: qWr,
    networkClient: new W$t(),
    proxyUrl: vo.EMPTY_STRING,
    customAgentOptions: {},
    disableInternalRetries: !1
  }, Y_d = {
    application: {
      appName: vo.EMPTY_STRING,
      appVersion: vo.EMPTY_STRING
    }
  };
});
var Dhi, zWr;