// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fjs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js
// class=partial  jaccard=0.1042  score=0.9031  fileCov=0.1054
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fjs = E(() => {
  S2s();
  _Ie = R(by(), 1), djs = R(ej(), 1), bIe = require("crypto"), Hyn = require("fs"), pjs = require("os"), gDt = require("path");
});
var mjs,
  gjs,
  vyn,
  wyn = e => async ({
    callerClientConfig: t
  } = {}) => {
    e?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
    let n = await vyn.parseKnownFiles(e || {}),
      r = vyn.getProfileName({
        profile: e?.profile ?? t?.profile
      }),
      o = n[r];
    if (!o?.login_session) throw new gjs.CredentialsProviderError(`Profile ${r} does not contain login_session.`, {
      tryNextLink: !0,
      logger: e?.logger
    });
    let i = await new Tyn(o, e, t).loadCredentials();
    return mjs.setCredentialFeature(i, "CREDENTIALS_LOGIN", "AD");
  };