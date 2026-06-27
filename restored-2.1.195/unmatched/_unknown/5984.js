// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q3c
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0211  score=0.1587  fileCov=0.0238
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0211); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var q3c = E(() => {
  NZ();
  AQo();
  sK();
  AR();
});
function znn(e, t) {
  if (e.startsWith("RS") || e.startsWith("PS")) {
    let {
      modulusLength: n
    } = t.algorithm;
    if (typeof n !== "number" || n < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
  }
}
function V3c(e, t) {
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
        saltLength: parseInt(e.slice(-3), 10) >> 3
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
    case "Ed25519":
    case "EdDSA":
      return {
        name: "Ed25519"
      };
    case "ML-DSA-44":
    case "ML-DSA-65":
    case "ML-DSA-87":
      return {
        name: e
      };
    default:
      throw new nh(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}
async function z3c(e, t, n) {
  if (t instanceof Uint8Array) {
    if (!e.startsWith("HS")) throw TypeError(nBe(t, "CryptoKey", "KeyObject", "JSON Web Key"));
    return crypto.subtle.importKey("raw", t, {
      hash: `SHA-${e.slice(-3)}`,
      name: "HMAC"
    }, false, [n]);
  }
  return w3c(t, e, n), t;
}
async function K3c(e, t, n) {
  let r = await z3c(e, t, "sign");
  znn(e, r);
  let o = await crypto.subtle.sign(V3c(e, r.algorithm), r, n);
  return new Uint8Array(o);
}
async function Y3c(e, t, n, r) {
  let o = await z3c(e, t, "verify");
  znn(e, o);
  let s = V3c(e, o.algorithm);
  try {
    return await crypto.subtle.verify(s, o, n, r);
  } catch {
    return false;
  }
}