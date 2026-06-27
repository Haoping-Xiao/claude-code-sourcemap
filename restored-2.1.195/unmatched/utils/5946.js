// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lnn
// matched 2.1.88 source: src/bridge/workSecret.ts
// class=new  jaccard=0.0517  score=1  fileCov=0.0517
// note: nearest: src/bridge/workSecret.ts (0.0517); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lnn = Q((rzH, HJo) => {
  var AJo;
  if (Buffer.isEncoding("base64url")) AJo = (e, t = "utf8") => Buffer.from(e, t).toString("base64url");else {
    let e = t => t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    AJo = (t, n = "utf8") => e(Buffer.from(t, n).toString("base64"));
  }
  var YDm = e => Buffer.from(e, "base64");
  HJo.exports.decode = YDm;
  HJo.exports.encode = AJo;
});