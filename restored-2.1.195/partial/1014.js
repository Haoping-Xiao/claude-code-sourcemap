// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ojs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=partial  jaccard=0.0788  score=1  fileCov=0.0788
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ojs = E(() => {
  AOr = R(UR(), 1);
});
var Njs,
  HOr = e => Boolean(e) && typeof e === "object" && typeof e.aws_access_key_id === "string" && typeof e.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof e.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof e.aws_account_id) > -1,
  TOr = async (e, t) => {
    t?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
    let n = {
      accessKeyId: e.aws_access_key_id,
      secretAccessKey: e.aws_secret_access_key,
      sessionToken: e.aws_session_token,
      ...(e.aws_credential_scope && {
        credentialScope: e.aws_credential_scope
      }),
      ...(e.aws_account_id && {
        accountId: e.aws_account_id
      })
    };
    return Njs.setCredentialFeature(n, "CREDENTIALS_PROFILE", "n");
  };