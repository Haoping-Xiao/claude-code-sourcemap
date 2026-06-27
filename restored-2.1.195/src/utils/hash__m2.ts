// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oni
// matched 2.1.88 source: src/utils/hash.ts
// class=modified (alt of src/utils/hash.ts)  jaccard=0.4188  score=1  fileCov=0.4188
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var oni = E(() => {
  pb();
  $ti();
  uFr();
  Qti();
  ((Zti = R(eT(), 1)),
    (eni = R(rye(), 1)),
    (tni = R(yd(), 1)),
    (nni = R(TY(), 1)),
    (DEn = R(PE(), 1)));
});
var PEn,
  MEn,
  WIe,
  sni,
  $En,
  GIe,
  OEn,
  ini,
  ani,
  lni,
  cni = (e) => {
    aFr(process.version);
    let t = lni.resolveDefaultsModeConfig(e),
      n = () => t().then(iFr),
      r = rni(e);
    PEn.emitWarningIfUnsupportedVersion(process.version);
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
        e?.authSchemePreference ?? GIe.loadConfig(PEn.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
      bodyLengthChecker: e?.bodyLengthChecker ?? ini.calculateBodyLength,
      credentialDefaultProvider: e?.credentialDefaultProvider ?? MY,
      defaultUserAgentProvider:
        e?.defaultUserAgentProvider ??
        MEn.createDefaultUserAgentProvider({
          serviceId: r.serviceId,
          clientVersion: Cti.version,
        }),
      maxAttempts: e?.maxAttempts ?? GIe.loadConfig($En.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region:
        e?.region ??
        GIe.loadConfig(WIe.NODE_REGION_CONFIG_OPTIONS, {
          ...WIe.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...o,
        }),
      requestHandler: OEn.NodeHttpHandler.create(e?.requestHandler ?? n),
      retryMode:
        e?.retryMode ??
        GIe.loadConfig(
          {
            ...$En.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await n()).retryMode || ani.DEFAULT_RETRY_MODE,
          },
          e,
        ),
      sha256: e?.sha256 ?? sni.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? OEn.streamCollector,
      useDualstackEndpoint:
        e?.useDualstackEndpoint ??
        GIe.loadConfig(WIe.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
      useFipsEndpoint:
        e?.useFipsEndpoint ?? GIe.loadConfig(WIe.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
      userAgentAppId: e?.userAgentAppId ?? GIe.loadConfig(MEn.NODE_APP_ID_CONFIG_OPTIONS, o),
    };
  };
