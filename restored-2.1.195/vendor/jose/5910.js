// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q2c
// matched 2.1.88 source: node_modules/node-forge/lib/x509.js
// class=vendor  jaccard=0.0045  score=0.2881  fileCov=0.0045
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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