// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yDt
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=new  jaccard=0.0511  score=1  fileCov=0.0511
// note: nearest: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js (0.0511); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yDt = E(() => {
  qjs();
});
var Vjs,
  zjs = e => Boolean(e) && typeof e === "object" && typeof e.web_identity_token_file === "string" && typeof e.role_arn === "string" && ["undefined", "string"].indexOf(typeof e.role_session_name) > -1,
  Kjs = async (e, t) => Promise.resolve().then(() => (yDt(), wOr)).then(({
    fromTokenFile: n
  }) => n({
    webIdentityTokenFile: e.web_identity_token_file,
    roleArn: e.role_arn,
    roleSessionName: e.role_session_name,
    roleAssumerWithWebIdentity: t.roleAssumerWithWebIdentity,
    logger: t.logger,
    parentClientConfig: t.parentClientConfig
  })().then(r => Vjs.setCredentialFeature(r, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));