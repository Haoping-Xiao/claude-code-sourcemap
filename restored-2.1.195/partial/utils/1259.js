// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YKs
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/runtimeConfig.js
// class=partial  jaccard=0.1803  score=1  fileCov=0.1803
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/runtimeConfig.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YKs = E(() => {
  HM();
  IKs();
  SBr();
  GKs();
  WKs = R(eT(), 1), qKs = R(rye(), 1), VKs = R(yd(), 1), zKs = R(TY(), 1), rSn = R(PE(), 1);
});
var _nt,
  oSn,
  LIe,
  XKs,
  JKs,
  sSn,
  RIe,
  iSn,
  QKs,
  ZKs,
  eYs,
  tYs = e => {
    yBr(process.version);
    let t = eYs.resolveDefaultsModeConfig(e),
      n = () => t().then(hBr),
      r = KKs(e);
    _nt.emitWarningIfUnsupportedVersion(process.version);
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
      authSchemePreference: e?.authSchemePreference ?? RIe.loadConfig(_nt.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
      bodyLengthChecker: e?.bodyLengthChecker ?? QKs.calculateBodyLength,
      credentialDefaultProvider: e?.credentialDefaultProvider ?? MY,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? oSn.createDefaultUserAgentProvider({
        serviceId: r.serviceId,
        clientVersion: oKs.version
      }),
      eventStreamPayloadHandlerProvider: e?.eventStreamPayloadHandlerProvider ?? HBr,
      eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? yKs,
      httpAuthSchemes: e?.httpAuthSchemes ?? [{
        schemeId: "aws.auth#sigv4",
        identityProvider: s => s.getIdentityProvider("aws.auth#sigv4"),
        signer: new _nt.AwsSdkSigV4Signer()
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
        signer: new XKs.HttpBearerAuthSigner()
      }],
      maxAttempts: e?.maxAttempts ?? RIe.loadConfig(sSn.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? RIe.loadConfig(LIe.NODE_REGION_CONFIG_OPTIONS, {
        ...LIe.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...o
      }),
      requestHandler: iSn.NodeHttp2Handler.create(e?.requestHandler ?? (async () => ({
        ...(await n()),
        disableConcurrentStreams: !0
      }))),
      retryMode: e?.retryMode ?? RIe.loadConfig({
        ...sSn.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await n()).retryMode || ZKs.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? JKs.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? iSn.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? RIe.loadConfig(LIe.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
      useFipsEndpoint: e?.useFipsEndpoint ?? RIe.loadConfig(LIe.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
      userAgentAppId: e?.userAgentAppId ?? RIe.loadConfig(oSn.NODE_APP_ID_CONFIG_OPTIONS, o)
    };
  };