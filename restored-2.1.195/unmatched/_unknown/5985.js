// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bgr
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0173  score=0.3585  fileCov=0.0179
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0173); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bgr = E(() => {
  AR();
});
async function J3c(e, t, n) {
  return iK(t, e, "encrypt"), znn(e, t), new Uint8Array(await crypto.subtle.encrypt(X3c(e), t, n));
}
async function Q3c(e, t, n) {
  return iK(t, e, "decrypt"), znn(e, t), new Uint8Array(await crypto.subtle.decrypt(X3c(e), t, n));
}
var X3c = e => {
  switch (e) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new nh(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
};