// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oKr
// matched 2.1.88 source: src/services/policyLimits/index.ts
// class=modified (alt of src/services/policyLimits/index.ts)  jaccard=0.0944  score=0.3022  fileCov=0.1207
// note: deminified; 12 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: setSessionCache, policyDenyKind, policyDeniedReason, loadCachedResponse, isPolicyLimitsEligible, isPolicyEnforced, isPolicyAllowed, getSessionCache, getResponseFromCache, getPolicyLimitsIneligibleReason, getPolicyDefault, getCachePath
// [unwrapped __esm module oKr] deps: Xr
((Lkn = ve(() =>
  H.object({
    restrictions: H.record(
      H.string(),
      H.object({
        allowed: H.boolean(),
      }),
    ),
    compliance_taints: H.array(H.string()).default([]),
    defaults: H.record(H.string(), H.unknown()).default({}).catch({}),
  }),
)),
  (rKr = {
    restrictions: {},
    compliance_taints: [],
    defaults: {},
  }));
function setSessionCache(e) {
  let t = hNt?.compliance_taints ?? [],
    n = e?.compliance_taints ?? [];
  if (((hNt = e), poi(n), t.length !== n.length || n.some((r) => !t.includes(r)))) $te();
}
function getSessionCache() {
  return hNt;
}
function getCachePath() {
  return c1i.join(tr(), IOd);
}
function isPolicyLimitsEligible() {
  return getPolicyLimitsIneligibleReason() === void 0;
}
function getPolicyLimitsIneligibleReason(e = {}) {
  if (fr() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !_u()) return "custom_base_url";
  try {
    let { key: n } = Ty({
      skipRetrievingKeyFromApiKeyHelper: true,
    });
    if (n) return;
  } catch {}
  if (iH()) return;
  let t = Ws();
  if (!t?.accessToken) return "no_auth";
  if (!t.scopes?.includes(xB)) return "oauth_no_inference_scope";
  if (t.subscriptionType == null) return;
  if (t.subscriptionType !== "enterprise" && t.subscriptionType !== "team") return "prosumer_oauth";
  return;
}
function loadCachedResponse() {
  try {
    let e = l1i.readFileSync(getCachePath(), "utf-8"),
      t = Ia(e, false),
      n = Lkn().safeParse(t);
    if (!n.success) return null;
    return n.data;
  } catch {
    return null;
  }
}
function isPolicyAllowed(e) {
  let t = u1i();
  if (!t) {
    if (kOd.has(e)) {
      if (isPolicyLimitsEligible()) return false;
      if (ROd.has(e) && Vi() && !(e === "allow_product_feedback" && y_e())) return false;
    }
    return true;
  }
  let n = t[e];
  if (n) return n.allowed;
  let r = getResponseFromCache()?.compliance_taints ?? [];
  for (let [o, s] of xOd) if (s === e && r.includes(o)) return false;
  return true;
}
function policyDeniedReason(e, t, n) {
  if (isPolicyAllowed(e)) return null;
  if (getResponseFromCache() === null)
    return `Couldn't verify your organization's policy for ${t.charAt(0).toLowerCase() + t.slice(1)}. Check your network connection and try again.`;
  return `${t} ${n} disabled by your organization's policy. Contact your organization admin to enable ${n === "are" ? "them" : "it"}.`;
}
function policyDenyKind(e) {
  if (isPolicyAllowed(e)) return null;
  return getResponseFromCache() === null ? "cache_miss" : "org_denied";
}
function isPolicyEnforced(e) {
  return u1i()?.[e]?.allowed === true;
}
function getPolicyDefault(e) {
  let t = getResponseFromCache()?.defaults[e];
  return typeof t === "boolean" ? t : void 0;
}
function getResponseFromCache() {
  if (!isPolicyLimitsEligible()) return null;
  if (hNt) return hNt;
  let e = loadCachedResponse();
  if (e) return (setSessionCache(e), e);
  return null;
}
function u1i() {
  return getResponseFromCache()?.restrictions ?? null;
}
var l1i,
  c1i,
  IOd = "policy-limits.json",
  hNt = null,
  xOd,
  kOd,
  ROd;
