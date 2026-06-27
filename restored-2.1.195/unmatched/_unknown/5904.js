// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZXo
// matched 2.1.88 source: node_modules/node-forge/lib/pkcs7.js
// class=new  jaccard=0.008  score=0.1348  fileCov=0.0084
// note: nearest: node_modules/node-forge/lib/pkcs7.js (0.008); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function N2c(e, t, n) {
  if (!eb(e)) throw new Wa("General JWE must be an object");
  if (!Array.isArray(e.recipients) || !e.recipients.every(eb)) throw new Wa("JWE Recipients missing or incorrect type");
  if (!e.recipients.length) throw new Wa("JWE Recipients has no members");
  for (let r of e.recipients) try {
    return await Uvt({
      aad: e.aad,
      ciphertext: e.ciphertext,
      encrypted_key: r.encrypted_key,
      header: r.header,
      iv: e.iv,
      protected: e.protected,
      tag: e.tag,
      unprotected: e.unprotected
    }, t, n);
  } catch (o) {}
  throw new qNe();
}