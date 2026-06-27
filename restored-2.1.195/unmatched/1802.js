// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mvn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mvn = E(() => {
  oT();
  RGr(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
function Jhi(e) {
  let t = e.credentialType === Qb.REFRESH_TOKEN && e.familyId || e.clientId,
    n = e.tokenType && e.tokenType.toLowerCase() !== Rg.BEARER.toLowerCase() ? e.tokenType.toLowerCase() : "";
  return [e.homeAccountId, e.environment, e.credentialType, t, e.realm || "", e.target || "", e.requestedClaimsHash || "", n].join(FWr.KEY_SEPARATOR).toLowerCase();
}
function Qhi(e) {
  let t = e.homeAccountId.split(".")[1];
  return [e.homeAccountId, e.environment, t || e.tenantId || ""].join(FWr.KEY_SEPARATOR).toLowerCase();
}