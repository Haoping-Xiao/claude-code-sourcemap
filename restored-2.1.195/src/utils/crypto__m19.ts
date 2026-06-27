// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pjc
// matched 2.1.88 source: src/utils/crypto.ts
// class=modified (alt of src/utils/crypto.ts)  jaccard=0.274  score=0.274  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Pjc = Q((ezH, Djc) => {
  var UDm = require("crypto"),
    [Ljc, FDm] = process.version
      .substring(1)
      .split(".")
      .map((e) => parseInt(e, 10)),
    jDm = Ljc > 12 || (Ljc === 12 && FDm >= 8),
    GDm = jDm && UDm.getHashes().includes("shake256");
  Djc.exports = GDm;
});
