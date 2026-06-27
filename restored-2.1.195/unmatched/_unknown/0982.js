// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qUs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
// class=new  jaccard=0.0416  score=0.4801  fileCov=0.0436
// note: nearest: node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js (0.0416); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qUs = E(() => {
  Dhn();
  $$r = R(UR(), 1), Rtt = R(by(), 1), WUs = R(ej(), 1);
});
var VUs,
  N$r = (e, t) => {
    let {
      sso_start_url: n,
      sso_account_id: r,
      sso_region: o,
      sso_role_name: s
    } = e;
    if (!n || !r || !o || !s) throw new VUs.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
      tryNextLink: false,
      logger: t
    });
    return e;
  };