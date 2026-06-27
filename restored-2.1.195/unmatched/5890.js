// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qXo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0111  score=0.1876  fileCov=0.0117
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0111); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qXo = E(() => {
  ynn();
  YP();
  sB();
  Xmr();
  m2c();
  rB();
  iie();
});
function Nvt(e) {
  switch (e) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new od(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}