// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mnn
// matched 2.1.88 source: node_modules/google-auth-library/build/src/crypto/node/crypto.js
// class=partial  jaccard=0.1369  score=0.4354  fileCov=0.1665
// note: low-confidence suggestion: node_modules/google-auth-library/build/src/crypto/node/crypto.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mnn = Q((fzH, t4c) => {
  var {
      createHash: oPm,
      randomBytes: sPm
    } = require("crypto"),
    e4c = Lnn(),
    _gr = (e = 32) => e4c.encode(sPm(e));
  t4c.exports = {
    random: _gr,
    state: _gr,
    nonce: _gr,
    codeVerifier: _gr,
    codeChallenge: e => e4c.encode(oPm("sha256").update(e).digest())
  };
});