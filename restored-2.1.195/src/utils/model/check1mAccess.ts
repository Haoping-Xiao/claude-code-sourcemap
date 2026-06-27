// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u$
// matched 2.1.88 source: src/utils/model/check1mAccess.ts
// class=modified  jaccard=0.5737  score=0.91  fileCov=0.6082
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function isExtraUsageEnabled() {
  let e = Dt().cachedExtraUsageDisabledReason;
  if (e === void 0) return false;
  if (e === null) return true;
  switch (e) {
    case "out_of_credits":
      return true;
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
      return false;
    default:
      return false;
  }
}
function ure() {
  if (Sye()) return false;
  if (bo()) return isExtraUsageEnabled();
  return true;
}
function uSe() {
  if (Sye()) return false;
  if (bo()) return isExtraUsageEnabled();
  return true;
}
