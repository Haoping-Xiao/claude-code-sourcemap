// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ljc
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0198  score=0.3875  fileCov=0.0204
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0198); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function cjc(e, t) {
  let n = {
    ...e,
    ...(t === null || t === void 0 ? void 0 : t.header)
  };
  if (!eb(n.jwk)) throw new wh('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
  let r = await YNe({
    ...n.jwk,
    ext: true
  }, n.alg, true);
  if (r instanceof Uint8Array || r.type !== "public") throw new wh('"jwk" (JSON Web Key) Header Parameter must be a public key');
  return r;
}