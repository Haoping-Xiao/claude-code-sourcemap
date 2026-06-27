// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bGr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bGr = E(() => {
  /*! @azure/msal-common v15.13.1 2025-10-29 */r7 = {
    Default: 0,
    Adfs: 1,
    Dsts: 2,
    Ciam: 3
  };
});
function BTn(e) {
  if (e) return e.tid || e.tfp || e.acr || null;
  return null;
}