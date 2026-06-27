// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u$
// matched 2.1.88 source: src/utils/model/check1mAccess.ts
// class=modified  jaccard=0.6604  score=0.8976  fileCov=0.7142
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var u$ = E(() => {
  q8();
  co();
  Jt();
});
function wia() {
  let e = Dt().cachedExtraUsageDisabledReason;
  if (e === void 0) return !1;
  if (e === null) return !0;
  switch (e) {
    case "out_of_credits":
      return !0;
    case "overage_not_provisioned":
    case "org_level_disabled":
    case "org_level_disabled_until":
    case "seat_tier_level_disabled":
    case "member_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "group_zero_credit_limit":
    case "member_zero_credit_limit":
    case "org_service_level_disabled":
    case "no_limits_configured":
    case "fetch_error":
    case "unknown":
      return !1;
    default:
      return !1;
  }
}
function ure() {
  if (Sye()) return !1;
  if (bo()) return wia();
  return !0;
}
function uSe() {
  if (Sye()) return !1;
  if (bo()) return wia();
  return !0;
}
