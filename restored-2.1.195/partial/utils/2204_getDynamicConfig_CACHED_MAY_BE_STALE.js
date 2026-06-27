// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y1
// matched 2.1.88 source: src/services/analytics/growthbook.ts
// class=partial  jaccard=0.1015  score=0.4664  fileCov=0.1148
// note: low-confidence suggestion: src/services/analytics/growthbook.ts; dir inferred from dep-graph -> utils; 27 renamed
// ─────────────────────────────────────────────────────────────────────────
var y1 = E(() => {
  rzr();
  IB();
  er();
  je();
  fn();
  vn();
  Is();
  Jt();
  sG();
  Ote();
  aW();
  IOi();
  Un();
  Du();
  Pzr();
  xOi = R(Hst(), 1), hkn = R(Bte(), 1), Mzr = require("crypto");
  A7 = [];
});
var Kzr = {};
_t(Kzr, {
  stopPeriodicGrowthBookRefresh: () => stopPeriodicGrowthBookRefresh,
  setupPeriodicGrowthBookRefresh: () => setupPeriodicGrowthBookRefresh,
  setGrowthBookConfigOverride: () => setGrowthBookConfigOverride,
  resetGrowthBook: () => resetGrowthBook,
  refreshGrowthBookFeatures: () => refreshGrowthBookFeatures,
  refreshGrowthBookAfterAuthChange: () => refreshGrowthBookAfterAuthChange,
  onGrowthBookRefresh: () => onGrowthBookRefresh,
  isGrowthBookEnabled: () => isGrowthBookEnabled,
  isFeatureFromExperiment: () => isFeatureFromExperiment,
  initializeGrowthBook: () => initializeGrowthBook,
  hasGrowthBookEnvOverride: () => hasGrowthBookEnvOverride,
  hasFreshGrowthBookFeatures: () => hasFreshGrowthBookFeatures,
  getUserAttributes: () => getUserAttributes,
  getNonDefaultFeatureKeys: () => getNonDefaultFeatureKeys,
  getGrowthBookConfigOverrides: () => getGrowthBookConfigOverrides,
  getFeatureValue_DEPRECATED: () => getFeatureValue_DEPRECATED,
  getFeatureValue_CACHED_WITH_REFRESH: () => getFeatureValue_CACHED_WITH_REFRESH,
  getFeatureValue_CACHED_MAY_BE_STALE: () => getFeatureValue_CACHED_MAY_BE_STALE,
  getDynamicConfig_CACHED_MAY_BE_STALE: () => getDynamicConfig_CACHED_MAY_BE_STALE,
  getDynamicConfig_BLOCKS_ON_INIT: () => getDynamicConfig_BLOCKS_ON_INIT,
  getClientDataAtis: () => getClientDataAtis,
  getApiBaseUrlHost: () => getApiBaseUrlHost,
  getAllGrowthBookFeatures: () => getAllGrowthBookFeatures,
  clearGrowthBookConfigOverrides: () => clearGrowthBookConfigOverrides,
  checkSecurityRestrictionGate: () => checkSecurityRestrictionGate,
  checkGate_CACHED_OR_BLOCKING: () => checkGate_CACHED_OR_BLOCKING,
  ATIS_REQUEST_HEADER: () => ATIS_REQUEST_HEADER
});
function DOi(e) {
  try {
    Promise.resolve(e()).catch(t => {
      ke(t);
    });
  } catch (t) {
    ke(t);
  }
}
function onGrowthBookRefresh(e) {
  let t = !0,
    n = Pst.subscribe(() => DOi(e));
  if (e8.size > 0) queueMicrotask(() => {
    if (t && e8.size > 0) DOi(e);
  });
  return () => {
    t = !1, n();
  };
}
function cNt() {
  if (!Fzr) Fzr = !0;
  return POi;
}
function hasGrowthBookEnvOverride(e) {
  let t = cNt();
  return t !== null && e in t;
}
function isFeatureFromExperiment(e) {
  if (gke.has(e)) return !0;
  if (!isGrowthBookEnabled()) return !1;
  return (Dt().cachedExperimentFeatures ?? []).includes(e);
}
function uNt() {
  return;
}
function getAllGrowthBookFeatures() {
  if (e8.size > 0) return Object.fromEntries(e8);
  return Dt().cachedGrowthBookFeatures ?? {};
}
function hasFreshGrowthBookFeatures() {
  return e8.size > 0;
}
function getNonDefaultFeatureKeys() {
  return bkn;
}
function getGrowthBookConfigOverrides() {
  return uNt() ?? {};
}
function setGrowthBookConfigOverride(e, t) {
  return;
}
function clearGrowthBookConfigOverrides() {
  return;
}
function Skn(e) {
  if (Uzr.has(e)) return;
  let t = gke.get(e);
  if (t) Uzr.add(e), Nzr({
    experimentId: t.experimentId,
    variationId: t.variationId,
    userAttributes: getUserAttributes(),
    experimentMetadata: {
      feature_id: e
    }
  });
}
async function MOi(e) {
  let t = e.getPayload();
  if (!t?.features || Object.keys(t.features).length === 0) return !1;
  gke.clear(), bkn.clear();
  let n = {},
    r = [];
  for (let [o, s] of Object.entries(t.features)) {
    let i = s;
    if (i === null || typeof i !== "object") {
      r.push(`${o}:${i === null ? "null" : typeof i}`);
      continue;
    }
    if ("value" in i && !("defaultValue" in i)) n[o] = {
      ...i,
      defaultValue: i.value
    };else n[o] = i;
    if (i.source === "experiment" && i.experimentResult) {
      let {
        experimentResult: a,
        experiment: l
      } = i;
      if (l?.key && a.variationId !== void 0) gke.set(o, {
        experimentId: l.key,
        variationId: a.variationId
      });
    }
    if (i.source !== void 0 && i.source !== "defaultValue" && i.source !== "unknownFeature") bkn.add(o);
  }
  if (r.length > 0) {
    if (!Bzr) Bzr = !0, ke(Error(`processRemoteEvalPayload: skipped non-object features [${r.join(", ")}]`));
    if (Object.keys(n).length === 0) return !1;
  }
  await e.setPayload({
    ...t,
    features: n
  }), e8.clear();
  for (let [o, s] of Object.entries(n)) {
    let i = "value" in s ? s.value : s.defaultValue;
    if (i !== void 0) e8.set(o, i);
  }
  return !0;
}
function $Oi() {
  let e = Object.fromEntries(e8),
    t = Array.from(gke.keys()).sort();
  gn(n => ({
    ...n,
    cachedGrowthBookFeatures: e,
    cachedExperimentFeatures: t,
    cachedGrowthBookFeaturesAt: Date.now()
  }));
}
function isGrowthBookEnabled() {
  return !Oe.DISABLE_GROWTHBOOK && cW();
}
function getApiBaseUrlHost() {
  let e = process.env.ANTHROPIC_BASE_URL;
  if (!e) return;
  try {
    let t = new URL(e).host;
    if (t === "api.anthropic.com") return;
    return t;
  } catch {
    return;
  }
}
function getUserAttributes() {
  let e = ywi(),
    t = e.email,
    n = Dr()?.autoUpdatesChannel,
    r = void 0,
    o = getApiBaseUrlHost(),
    s = Q2(),
    i = void 0,
    a = e.accountUuid || process.env.CLAUDE_CODE_ACCOUNT_UUID || i?.accountUuid,
    l = e.organizationUuid || process.env.CLAUDE_CODE_ORGANIZATION_UUID || i?.organizationUuid || void 0;
  return {
    id: e.deviceId,
    sessionId: e.sessionId,
    deviceID: e.deviceId,
    platform: e.platform,
    ...(o && {
      apiBaseUrlHost: o
    }),
    ...(l && {
      organizationUUID: l
    }),
    ...(a && {
      accountUUID: a
    }),
    ...(e.userType && {
      userType: e.userType
    }),
    ...(e.subscriptionType && {
      subscriptionType: e.subscriptionType
    }),
    ...(e.rateLimitTier && {
      rateLimitTier: e.rateLimitTier
    }),
    ...(e.firstTokenTime && {
      firstTokenTime: e.firstTokenTime
    }),
    ...(t && {
      email: t
    }),
    ...(e.appVersion && {
      appVersion: e.appVersion
    }),
    ...(e.githubActionsMetadata && {
      githubActionsMetadata: e.githubActionsMetadata
    }),
    ...(r && {
      releaseChannel: r
    }),
    ...(s && {
      entrypoint: s
    }),
    ...(Lg().hasUsedRemoteSession && {
      hasUsedRemoteSession: !0
    }),
    ...(Dt().hasRemoteEnvironment && {
      hasRemoteEnvironment: !0
    })
  };
}
async function NOi(e, t, n) {
  let r = cNt();
  if (r && e in r) return r[e];
  let o = uNt();
  if (o && e in o) return o[e];
  if (!isGrowthBookEnabled()) return t;
  let s = await initializeGrowthBook();
  if (!s) return t;
  let i;
  if (e8.has(e)) i = e8.get(e);else i = s.getFeatureValue(e, t);
  if (n) Skn(e);
  return i;
}
async function getFeatureValue_DEPRECATED(e, t) {
  return NOi(e, t, !0);
}
function getFeatureValue_CACHED_MAY_BE_STALE(e, t) {
  let n = cNt();
  if (n && e in n) return n[e];
  let r = uNt();
  if (r && e in r) return r[e];
  if (!isGrowthBookEnabled()) return t;
  if (gke.has(e)) Skn(e);else aNt.add(e);
  if (e8.has(e)) return e8.get(e);
  try {
    let o = Dt().cachedGrowthBookFeatures?.[e];
    return o !== void 0 ? o : t;
  } catch {
    return t;
  }
}
function getFeatureValue_CACHED_WITH_REFRESH(e, t, n) {
  return getFeatureValue_CACHED_MAY_BE_STALE(e, t);
}
async function checkSecurityRestrictionGate(e) {
  let t = cNt();
  if (t && e in t) return Boolean(t[e]);
  let n = uNt();
  if (n && e in n) return Boolean(n[e]);
  if (!isGrowthBookEnabled()) return !1;
  if (lNt) await lNt;
  let r = Dt().cachedGrowthBookFeatures?.[e];
  if (r !== void 0) return Boolean(r);
  return !1;
}
async function checkGate_CACHED_OR_BLOCKING(e) {
  let t = cNt();
  if (t && e in t) return Boolean(t[e]);
  let n = uNt();
  if (n && e in n) return Boolean(n[e]);
  if (!isGrowthBookEnabled()) return !1;
  if (Dt().cachedGrowthBookFeatures?.[e] === !0) {
    if (gke.has(e)) Skn(e);else aNt.add(e);
    return !0;
  }
  return NOi(e, !1, !0);
}
function refreshGrowthBookAfterAuthChange() {
  if (!isGrowthBookEnabled()) return;
  try {
    resetGrowthBook(), Pst.emit(), lNt = initializeGrowthBook().catch(e => (ke(Zr(e)), null)).finally(() => {
      lNt = null;
    });
  } catch (e) {
    ke(Zr(e));
  }
}
function resetGrowthBook() {
  if (stopPeriodicGrowthBookRefresh(), sNt) process.off("beforeExit", sNt), sNt = null;
  if (iNt) process.off("exit", iNt), iNt = null;
  H_e?.destroy(), H_e = null, Gzr = !1, Bzr = !1, lNt = null, gke.clear(), bkn.clear(), aNt.clear(), Uzr.clear(), e8.clear(), jzr.cache?.clear?.(), initializeGrowthBook.cache?.clear?.(), POi = null, Fzr = !1;
}
function mOd() {
  return 21600000;
}
function getClientDataAtis() {
  let e = x0()?.atis;
  return typeof e === "string" && e.length > 0 ? e : void 0;
}
async function refreshGrowthBookFeatures() {
  if (!isGrowthBookEnabled()) return;
  try {
    let e = await initializeGrowthBook();
    if (!e) return;
    if (await e.refreshFeatures({
      skipCache: !0
    }), e !== H_e) return;
    let t = await MOi(e);
    if (e !== H_e) return;
    if (t) $Oi(), Pst.emit();
  } catch (e) {
    ke(Zr(e));
  }
}
function setupPeriodicGrowthBookRefresh() {
  if (!isGrowthBookEnabled()) return;
  if (A3e) clearInterval(A3e);
  if (A3e = setInterval(() => {
    refreshGrowthBookFeatures();
  }, mOd()), A3e.unref?.(), !Dst) Dst = () => {
    stopPeriodicGrowthBookRefresh();
  }, process.once("beforeExit", Dst);
}
function stopPeriodicGrowthBookRefresh() {
  if (A3e) clearInterval(A3e), A3e = null;
  if (Dst) process.removeListener("beforeExit", Dst), Dst = null;
}
async function getDynamicConfig_BLOCKS_ON_INIT(e, t) {
  return getFeatureValue_DEPRECATED(e, t);
}
function getDynamicConfig_CACHED_MAY_BE_STALE(e, t) {
  return getFeatureValue_CACHED_MAY_BE_STALE(e, t);
}
var H_e = null,
  Bzr = !1,
  sNt = null,
  iNt = null,
  Gzr = !1,
  gke,
  bkn,
  e8,
  aNt,
  Uzr,
  lNt = null,
  Pst,
  POi = null,
  Fzr = !1,
  jzr,
  initializeGrowthBook,
  ATIS_REQUEST_HEADER = "x-cc-atis",
  A3e = null,
  Dst = null;