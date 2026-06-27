// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mgr
// matched 2.1.88 source: node_modules/follow-redirects/index.js
// class=new  jaccard=0.009  score=0.0957  fileCov=0.0098
// note: nearest: node_modules/follow-redirects/index.js (0.009); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mgr = Q((lzH, Vjc) => {
  function JDm(e, t, n) {
    if (!t[`${e}_endpoint`]) return;
    let r = `${e}_endpoint_auth_method`,
      o = `${e}_endpoint_auth_signing_alg`,
      s = `${e}_endpoint_auth_signing_alg_values_supported`;
    if (n[r] && n[r].endsWith("_jwt") && !n[o] && !t[s]) throw TypeError(`${s} must be configured on the issuer if ${o} is not defined on a client`);
  }
  function QDm(e, t) {
    if (!e[t]) throw TypeError(`${t} must be configured on the issuer`);
  }
  Vjc.exports = {
    assertSigningAlgValuesSupport: JDm,
    assertIssuerConfiguration: QDm
  };
});