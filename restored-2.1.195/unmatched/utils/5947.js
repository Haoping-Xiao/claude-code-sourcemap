// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gjc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Gjc = Q((ozH, jjc) => {
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
});