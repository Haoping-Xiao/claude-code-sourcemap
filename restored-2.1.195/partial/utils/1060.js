// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PGs
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/runtimeConfig.js
// class=partial  jaccard=0.1803  score=1  fileCov=0.1803
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/runtimeConfig.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PGs = E(() => {
  Zs();
  fGs();
  YOr();
  IGs();
  xGs = R(eT(), 1), kGs = R(rye(), 1), RGs = R(yd(), 1), LGs = R(TY(), 1), Uyn = R(PE(), 1);
});
var Vtt,
  Fyn,
  HIe,
  MGs,
  $Gs,
  jyn,
  AIe,
  Gyn,
  OGs,
  NGs,
  BGs,
  UGs = e => {
    VOr(process.version);
    let t = BGs.resolveDefaultsModeConfig(e),
      n = () => t().then(qOr),
      r = DGs(e);
    Vtt.emitWarningIfUnsupportedVersion(process.version);
    let o = {
      profile: e?.profile,
      logger: r.logger,
      signingName: "bedrock"
    };
    return {
      ...r,
      ...e,
      runtime: "node",
      defaultsMode: t,
      authSchemePreference: e?.authSchemePreference ?? AIe.loadConfig(Vtt.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
      bodyLengthChecker: e?.bodyLengthChecker ?? OGs.calculateBodyLength,
      credentialDefaultProvider: e?.credentialDefaultProvider ?? MY,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? Fyn.createDefaultUserAgentProvider({
        serviceId: r.serviceId,
        clientVersion: oGs.version
      }),
      httpAuthSchemes: e?.httpAuthSchemes ?? [{
        schemeId: "aws.auth#sigv4",
        identityProvider: s => s.getIdentityProvider("aws.auth#sigv4"),
        signer: new Vtt.AwsSdkSigV4Signer()
      }, {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: s => s.getIdentityProvider("smithy.api#httpBearerAuth") || (async i => {
          try {
            return await Ugn({
              signingName: "bedrock"
            })();
          } catch (a) {
            return await Lhn(i)(i);
          }
        }),
        signer: new MGs.HttpBearerAuthSigner()
      }],
      maxAttempts: e?.maxAttempts ?? AIe.loadConfig(jyn.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? AIe.loadConfig(HIe.NODE_REGION_CONFIG_OPTIONS, {
        ...HIe.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...o
      }),
      requestHandler: Gyn.NodeHttpHandler.create(e?.requestHandler ?? n),
      retryMode: e?.retryMode ?? AIe.loadConfig({
        ...jyn.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await n()).retryMode || NGs.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? $Gs.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? Gyn.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? AIe.loadConfig(HIe.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
      useFipsEndpoint: e?.useFipsEndpoint ?? AIe.loadConfig(HIe.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
      userAgentAppId: e?.userAgentAppId ?? AIe.loadConfig(Fyn.NODE_APP_ID_CONFIG_OPTIONS, o)
    };
  };