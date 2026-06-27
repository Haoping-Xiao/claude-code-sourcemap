// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fIs
// matched 2.1.88 source: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
// class=new  jaccard=0.021  score=1  fileCov=0.021
// note: nearest: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js (0.021); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fIs = E(() => {
  pIs = R(by(), 1);
  Umn = class Umn extends pIs.CredentialsProviderError {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e, t = !0) {
      super(e, t);
      this.tryNextLink = t, Object.setPrototypeOf(this, Umn.prototype);
    }
  };
});