// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q2c
// matched 2.1.88 source: node_modules/google-auth-library/build/src/crypto/browser/crypto.js
// class=partial  jaccard=0.1062  score=0.2975  fileCov=0.1417
// note: low-confidence suggestion: node_modules/google-auth-library/build/src/crypto/browser/crypto.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var q2c = E(() => {
  ogr();
  wm();
  Enn();
  $vt();
  tJo();
  sB();
  Bvt();
});
function wnn(e, t) {
  let n = `SHA-${e.slice(-3)}`;
  switch (e) {
    case "HS256":
    case "HS384":
    case "HS512":
      return {
        hash: n,
        name: "HMAC"
      };
    case "PS256":
    case "PS384":
    case "PS512":
      return {
        hash: n,
        name: "RSA-PSS",
        saltLength: e.slice(-3) >> 3
      };
    case "RS256":
    case "RS384":
    case "RS512":
      return {
        hash: n,
        name: "RSASSA-PKCS1-v1_5"
      };
    case "ES256":
    case "ES384":
    case "ES512":
      return {
        hash: n,
        name: "ECDSA",
        namedCurve: t.namedCurve
      };
    case "EdDSA":
      return {
        name: t.name
      };
    default:
      throw new od(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}