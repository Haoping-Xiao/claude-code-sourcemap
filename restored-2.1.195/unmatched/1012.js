// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xyn
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
// class=new  jaccard=0.0408  score=1  fileCov=0.0408
// note: nearest: node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js (0.0408); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xyn = E(() => {
  kjs();
});
var Rjs,
  Ljs = e => Boolean(e) && typeof e === "object" && typeof e.credential_process === "string",
  Djs = async (e, t) => Promise.resolve().then(() => (xyn(), EOr)).then(({
    fromProcess: n
  }) => n({
    ...e,
    profile: t
  })().then(r => Rjs.setCredentialFeature(r, "CREDENTIALS_PROFILE_PROCESS", "v")));