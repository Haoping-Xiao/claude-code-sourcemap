// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CFs
// matched 2.1.88 source: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.js
// class=partial  jaccard=0.1714  score=1  fileCov=0.1714
// note: low-confidence suggestion: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/runtimeConfig.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CFs = Q(lyn => {
  Object.defineProperty(lyn, "__esModule", {
    value: true
  });
  lyn.getRuntimeConfig = void 0;
  var S8u = ttt(),
    E8u = S8u.__importDefault(yhn()),
    J$r = eT(),
    TFs = Zhe(),
    ayn = Dx(),
    A8u = yd(),
    H8u = eye(),
    vFs = zO(),
    S2e = RB(),
    wFs = PG(),
    T8u = tye(),
    v8u = Kae(),
    w8u = HFs(),
    C8u = fj(),
    I8u = sye(),
    x8u = fj(),
    k8u = e => {
      (0, x8u.emitWarningIfUnsupportedVersion)(process.version);
      let t = (0, I8u.resolveDefaultsModeConfig)(e),
        n = () => t().then(C8u.loadConfigsForDefaultMode),
        r = (0, w8u.getRuntimeConfig)(e);
      (0, J$r.emitWarningIfUnsupportedVersion)(process.version);
      let o = {
        profile: e?.profile,
        logger: r.logger
      };
      return {
        ...r,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? (0, S2e.loadConfig)(J$r.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
        bodyLengthChecker: e?.bodyLengthChecker ?? T8u.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? (0, TFs.createDefaultUserAgentProvider)({
          serviceId: r.serviceId,
          clientVersion: E8u.default.version
        }),
        httpAuthSchemes: e?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: s => s.getIdentityProvider("aws.auth#sigv4") || (async i => await e.credentialDefaultProvider(i?.__config || {})()),
          signer: new J$r.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: s => s.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new A8u.NoAuthSigner()
        }],
        maxAttempts: e?.maxAttempts ?? (0, S2e.loadConfig)(vFs.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? (0, S2e.loadConfig)(ayn.NODE_REGION_CONFIG_OPTIONS, {
          ...ayn.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...o
        }),
        requestHandler: wFs.NodeHttpHandler.create(e?.requestHandler ?? n),
        retryMode: e?.retryMode ?? (0, S2e.loadConfig)({
          ...vFs.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await n()).retryMode || v8u.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? H8u.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? wFs.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? (0, S2e.loadConfig)(ayn.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint: e?.useFipsEndpoint ?? (0, S2e.loadConfig)(ayn.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId: e?.userAgentAppId ?? (0, S2e.loadConfig)(TFs.NODE_APP_ID_CONFIG_OPTIONS, o)
      };
    };
  lyn.getRuntimeConfig = k8u;
});