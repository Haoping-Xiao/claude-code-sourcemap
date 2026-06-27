// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZXo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZXo = E(() => {
  egr();
  wm();
  YP();
});
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