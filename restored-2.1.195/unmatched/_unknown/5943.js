// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pjc
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/util.js
// class=new  jaccard=0.0102  score=0.4324  fileCov=0.0103
// note: nearest: node_modules/undici/lib/web/fetch/util.js (0.0102); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Pjc = Q((ezH, Djc) => {
  var UDm = require("crypto"),
    [Ljc, FDm] = process.version.substring(1).split(".").map(e => parseInt(e, 10)),
    jDm = Ljc > 12 || Ljc === 12 && FDm >= 8,
    GDm = jDm && UDm.getHashes().includes("shake256");
  Djc.exports = GDm;
});