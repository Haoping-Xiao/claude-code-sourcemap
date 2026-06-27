// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mnn
// matched 2.1.88 source: src/utils/hash.ts
// class=modified  jaccard=0.7231  score=1  fileCov=0.7231
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Mnn = Q((fzH, t4c) => {
  var { createHash: oPm, randomBytes: sPm } = require("crypto"),
    e4c = Lnn(),
    _gr = (e = 32) => e4c.encode(sPm(e));
  t4c.exports = {
    random: _gr,
    state: _gr,
    nonce: _gr,
    codeVerifier: _gr,
    codeChallenge: (e) => e4c.encode(oPm("sha256").update(e).digest()),
  };
});
