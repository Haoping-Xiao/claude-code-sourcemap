// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SQs
// matched 2.1.88 source: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.js
// class=partial  jaccard=0.1529  score=1  fileCov=0.1529
// note: low-confidence suggestion: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SQs = E(() => {
  kD();
  KJs();
  OUr();
  mQs();
  gQs = R(eT(), 1), hQs = R(rye(), 1), yQs = R(yd(), 1), _Qs = R(TY(), 1), oEn = R(PE(), 1);
});
var Pnt,
  sEn,
  FIe,
  EQs,
  AQs,
  iEn,
  UIe,
  aEn,
  HQs,
  TQs,
  vQs,
  wQs = e => {
    PUr(process.version);
    let t = vQs.resolveDefaultsModeConfig(e),
      n = () => t().then(DUr),
      r = bQs(e);
    Pnt.emitWarningIfUnsupportedVersion(process.version);
    let o = {
      profile: e?.profile,
      logger: r.logger
    };
    return {
      ...r,
      ...e,
      runtime: "node",
      defaultsMode: t,
      authSchemePreference: e?.authSchemePreference ?? UIe.loadConfig(Pnt.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
      bodyLengthChecker: e?.bodyLengthChecker ?? HQs.calculateBodyLength,
      credentialDefaultProvider: e?.credentialDefaultProvider ?? MY,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? sEn.createDefaultUserAgentProvider({
        serviceId: r.serviceId,
        clientVersion: BJs.version
      }),
      httpAuthSchemes: e?.httpAuthSchemes ?? [{
        schemeId: "aws.auth#sigv4",
        identityProvider: s => s.getIdentityProvider("aws.auth#sigv4") || (async i => await MY(i?.__config || {})()),
        signer: new Pnt.AwsSdkSigV4Signer()
      }, {
        schemeId: "smithy.api#noAuth",
        identityProvider: s => s.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new EQs.NoAuthSigner()
      }],
      maxAttempts: e?.maxAttempts ?? UIe.loadConfig(iEn.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? UIe.loadConfig(FIe.NODE_REGION_CONFIG_OPTIONS, {
        ...FIe.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...o
      }),
      requestHandler: aEn.NodeHttpHandler.create(e?.requestHandler ?? n),
      retryMode: e?.retryMode ?? UIe.loadConfig({
        ...iEn.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await n()).retryMode || TQs.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? AQs.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? aEn.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? UIe.loadConfig(FIe.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
      useFipsEndpoint: e?.useFipsEndpoint ?? UIe.loadConfig(FIe.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
      userAgentAppId: e?.userAgentAppId ?? UIe.loadConfig(sEn.NODE_APP_ID_CONFIG_OPTIONS, o)
    };
  };