// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pjs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=partial  jaccard=0.0612  score=1  fileCov=0.0612
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Pjs = E(() => {
  Rjs = R(UR(), 1);
});
var AOr,
  Mjs = async (e, t, n = {}) => {
    let {
      fromSSO: r
    } = await Promise.resolve().then(() => (nyn(), F$r));
    return r({
      profile: e,
      logger: n.logger,
      parentClientConfig: n.parentClientConfig,
      clientConfig: n.clientConfig
    })().then(o => {
      if (t.sso_session) return AOr.setCredentialFeature(o, "CREDENTIALS_PROFILE_SSO", "r");else return AOr.setCredentialFeature(o, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
    });
  },
  $js = e => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");