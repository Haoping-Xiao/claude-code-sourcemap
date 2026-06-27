// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gjc
// matched 2.1.88 source: node_modules/jws/lib/verify-stream.js
// class=partial  jaccard=0.115  score=0.4623  fileCov=0.1327
// note: low-confidence suggestion: node_modules/jws/lib/verify-stream.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module Gjc] (exports=ozH, module=jjc)
var ozH = {};
var jjc = {
  exports: ozH
};
var Fjc = Lnn();
jjc.exports = e => {
  if (typeof e !== "string" || !e) throw TypeError("JWT must be a string");
  let {
    0: t,
    1: n,
    2: r,
    length: o
  } = e.split(".");
  if (o === 5) throw TypeError("encrypted JWTs cannot be decoded");
  if (o !== 3) throw Error("JWTs must have three components");
  try {
    return {
      header: JSON.parse(Fjc.decode(t)),
      payload: JSON.parse(Fjc.decode(n)),
      signature: r
    };
  } catch (s) {
    throw Error("JWT is malformed");
  }
};