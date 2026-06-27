// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xgi
// class=new  (no 2.1.88 match)
// note: 7 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xgi = E(() => {
  oT();
  Ete();
  Wye(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  P$t.IMDS_OPTIONS = {
    headers: {
      Metadata: "true"
    }
  };
});
var Av = {};
_t(Av, {
  wasClockTurnedBack: () => wasClockTurnedBack,
  toSecondsFromDate: () => toSecondsFromDate,
  toDateFromSeconds: () => toDateFromSeconds,
  nowSeconds: () => nowSeconds,
  isTokenExpired: () => isTokenExpired,
  isCacheExpired: () => isCacheExpired,
  delay: () => delay
});
function nowSeconds() {
  return Math.round(new Date().getTime() / 1000);
}
function toSecondsFromDate(e) {
  return e.getTime() / 1000;
}
function toDateFromSeconds(e) {
  if (e) return new Date(Number(e) * 1000);
  return new Date();
}
function isTokenExpired(e, t) {
  let n = Number(e) || 0;
  return nowSeconds() + t > n;
}
function isCacheExpired(e, t) {
  let n = Number(e) + t * 24 * 60 * 60 * 1000;
  return Date.now() > n;
}
function wasClockTurnedBack(e) {
  return Number(e) > nowSeconds();
}
function delay(e, t) {
  return new Promise(n => setTimeout(() => n(t), e));
}