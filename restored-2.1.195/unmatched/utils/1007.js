// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bOr
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=new  jaccard=0.0277  score=1  fileCov=0.0277
// note: nearest: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js (0.0277); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bOr = E(() => {
  hjs();
  yjs();
});
var _js,
  bjs = e => Boolean(e && e.login_session),
  Sjs = async (e, t) => {
    let n = await wyn({
      ...t,
      profile: e
    })();
    return _js.setCredentialFeature(n, "CREDENTIALS_PROFILE_LOGIN", "AC");
  };