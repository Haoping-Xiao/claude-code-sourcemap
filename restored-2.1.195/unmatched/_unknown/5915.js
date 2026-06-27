// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iJo
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0314  score=0.3227  fileCov=0.0337
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0314); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iJo = E(() => {
  sgr();
  wm();
  YP();
});
async function K2c(e, t, n) {
  if (!eb(e)) throw new wh("General JWS must be an object");
  if (!Array.isArray(e.signatures) || !e.signatures.every(eb)) throw new wh("JWS Signatures missing or incorrect type");
  for (let r of e.signatures) try {
    return await Fvt({
      header: r.header,
      payload: e.payload,
      protected: r.protected,
      signature: r.signature
    }, t, n);
  } catch (o) {}
  throw new Pvt();
}