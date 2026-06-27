// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xjs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js
// class=partial  jaccard=0.1246  score=1  fileCov=0.1246
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xjs = E(() => {
  Tjs();
  Cyn = R(by(), 1), vjs = R(ej(), 1), wjs = require("child_process"), Cjs = require("util");
});
var Iyn,
  SOr = (e = {}) => async ({
    callerClientConfig: t
  } = {}) => {
    e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
    let n = await Iyn.parseKnownFiles(e);
    return Ijs(Iyn.getProfileName({
      profile: e.profile ?? t?.profile
    }), n, e.logger);
  };