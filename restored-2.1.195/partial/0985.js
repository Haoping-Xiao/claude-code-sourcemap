// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nyn
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=partial  jaccard=0.1345  score=0.822  fileCov=0.1385
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nyn = E(() => {
  zUs();
  KUs();
  B$r();
});
var YUs,
  ryn,
  XUs = (e, t, n) => {
    let r = {
      EcsContainer: async o => {
        let {
            fromHttp: s
          } = await Promise.resolve().then(() => (Cgn(), aPr)),
          {
            fromContainerMetadata: i
          } = await Promise.resolve().then(() => (u2e(), vLt));
        return n?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => ryn.chain(s(o ?? {}), i(o))().then(j$r);
      },
      Ec2InstanceMetadata: async o => {
        n?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
        let {
          fromInstanceMetadata: s
        } = await Promise.resolve().then(() => (u2e(), vLt));
        return async () => s(o)().then(j$r);
      },
      Environment: async o => {
        n?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
        let {
          fromEnv: s
        } = await Promise.resolve().then(() => (Dmn(), aIs));
        return async () => s(o)().then(j$r);
      }
    };
    if (e in r) return r[e];else throw new ryn.CredentialsProviderError(`Unsupported credential source in profile ${t}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
      logger: n
    });
  },
  j$r = e => YUs.setCredentialFeature(e, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");