// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fIs
// matched 2.1.88 source: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
// class=new  jaccard=0.0417  score=1  fileCov=0.0417
// note: nearest: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js (0.0417); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fIs]
pIs = R(by(), 1);
Umn = class Umn extends pIs.CredentialsProviderError {
  tryNextLink;
  name = "InstanceMetadataV1FallbackError";
  constructor(e, t = true) {
    super(e, t);
    this.tryNextLink = t, Object.setPrototypeOf(this, Umn.prototype);
  }
};