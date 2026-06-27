// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CZe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var CZe = E(() => {
  cEu = /(^|\.)(anthropic\.com|claude\.ai|claude\.com)$/i, uEu = /(^|\.)downloads\.claude\.ai$/i;
});
var X_s = {};
_t(X_s, {
  isCancel: () => dM,
  isAxiosError: () => ab,
  externalHttp: () => externalHttp
});
function IZe(e, t) {
  for (let n of [e, t?.baseURL]) if (n && epn(n)) throw Error(`externalHttp: ${n} is Anthropic-operated. Use firstPartyApi from ` + "src/services/http/firstParty \u2014 it enforces the 3P data-residency gate.");
}
var externalHttp;