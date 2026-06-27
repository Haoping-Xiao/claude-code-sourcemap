// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eUs
// matched 2.1.88 source: src/utils/hash.ts
// class=modified (alt of src/utils/hash.ts)  jaccard=0.4188  score=1  fileCov=0.4188
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var eUs = E(() => {
  LY();
  LBs();
  x$r();
  KBs();
  ((YBs = R(eT(), 1)),
    (XBs = R(rye(), 1)),
    (JBs = R(yd(), 1)),
    (QBs = R(TY(), 1)),
    (Uhn = R(PE(), 1)));
});
var Fhn,
  jhn,
  uIe,
  tUs,
  Ghn,
  cIe,
  Whn,
  nUs,
  rUs,
  oUs,
  sUs = (e) => {
    w$r(process.version);
    let t = oUs.resolveDefaultsModeConfig(e),
      n = () => t().then(v$r),
      r = ZBs(e);
    Fhn.emitWarningIfUnsupportedVersion(process.version);
    let o = {
      profile: e?.profile,
      logger: r.logger,
    };
    return {
      ...r,
      ...e,
      runtime: "node",
      defaultsMode: t,
      authSchemePreference:
        e?.authSchemePreference ?? cIe.loadConfig(Fhn.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
      bodyLengthChecker: e?.bodyLengthChecker ?? nUs.calculateBodyLength,
      defaultUserAgentProvider:
        e?.defaultUserAgentProvider ??
        jhn.createDefaultUserAgentProvider({
          serviceId: r.serviceId,
          clientVersion: HBs.version,
        }),
      maxAttempts: e?.maxAttempts ?? cIe.loadConfig(Ghn.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region:
        e?.region ??
        cIe.loadConfig(uIe.NODE_REGION_CONFIG_OPTIONS, {
          ...uIe.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...o,
        }),
      requestHandler: Whn.NodeHttpHandler.create(e?.requestHandler ?? n),
      retryMode:
        e?.retryMode ??
        cIe.loadConfig(
          {
            ...Ghn.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await n()).retryMode || rUs.DEFAULT_RETRY_MODE,
          },
          e,
        ),
      sha256: e?.sha256 ?? tUs.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? Whn.streamCollector,
      useDualstackEndpoint:
        e?.useDualstackEndpoint ??
        cIe.loadConfig(uIe.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
      useFipsEndpoint:
        e?.useFipsEndpoint ?? cIe.loadConfig(uIe.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
      userAgentAppId: e?.userAgentAppId ?? cIe.loadConfig(jhn.NODE_APP_ID_CONFIG_OPTIONS, o),
    };
  };
