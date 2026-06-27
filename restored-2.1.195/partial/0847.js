// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cgn
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js
// class=partial  jaccard=0.176  score=1  fileCov=0.176
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cgn = E(() => {
  sLs();
});
var Ign,
  iLs = "AWS_EC2_METADATA_DISABLED",
  aLs = async e => {
    let {
      ENV_CMDS_FULL_URI: t,
      ENV_CMDS_RELATIVE_URI: n,
      fromContainerMetadata: r,
      fromInstanceMetadata: o
    } = await Promise.resolve().then(() => (u2e(), vLt));
    if (process.env[n] || process.env[t]) {
      e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
      let {
        fromHttp: s
      } = await Promise.resolve().then(() => (Cgn(), aPr));
      return Ign.chain(s(e), r(e));
    }
    if (process.env[iLs] && process.env[iLs] !== "false") return async () => {
      throw new Ign.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
        logger: e.logger
      });
    };
    return e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), o(e);
  };