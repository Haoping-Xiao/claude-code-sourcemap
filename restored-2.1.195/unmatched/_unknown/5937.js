// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ajc
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0249  score=0.0771  fileCov=0.0355
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0249); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ajc = E(() => {
  dgr();
  YP();
  wm();
});
async function Hjc(e, t) {
  var n;
  let r, o, s;
  switch (e) {
    case "HS256":
    case "HS384":
    case "HS512":
      r = parseInt(e.slice(-3), 10), o = {
        name: "HMAC",
        hash: `SHA-${r}`,
        length: r
      }, s = ["sign", "verify"];
      break;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return r = parseInt(e.slice(-3), 10), VNe(new Uint8Array(r >> 3));
    case "A128KW":
    case "A192KW":
    case "A256KW":
      r = parseInt(e.slice(1, 4), 10), o = {
        name: "AES-KW",
        length: r
      }, s = ["wrapKey", "unwrapKey"];
      break;
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      r = parseInt(e.slice(1, 4), 10), o = {
        name: "AES-GCM",
        length: r
      }, s = ["encrypt", "decrypt"];
      break;
    default:
      throw new od('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return Ru.subtle.generateKey(o, (n = t === null || t === void 0 ? void 0 : t.extractable) !== null && n !== void 0 ? n : false, s);
}
function _Jo(e) {
  var t;
  let n = (t = e === null || e === void 0 ? void 0 : e.modulusLength) !== null && t !== void 0 ? t : 2048;
  if (typeof n !== "number" || n < 2048) throw new od("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
  return n;
}
async function Tjc(e, t) {
  var n, r, o;
  let s, i;
  switch (e) {
    case "PS256":
    case "PS384":
    case "PS512":
      s = {
        name: "RSA-PSS",
        hash: `SHA-${e.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: _Jo(t)
      }, i = ["sign", "verify"];
      break;
    case "RS256":
    case "RS384":
    case "RS512":
      s = {
        name: "RSASSA-PKCS1-v1_5",
        hash: `SHA-${e.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: _Jo(t)
      }, i = ["sign", "verify"];
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      s = {
        name: "RSA-OAEP",
        hash: `SHA-${parseInt(e.slice(-3), 10) || 1}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: _Jo(t)
      }, i = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
      break;
    case "ES256":
      s = {
        name: "ECDSA",
        namedCurve: "P-256"
      }, i = ["sign", "verify"];
      break;
    case "ES384":
      s = {
        name: "ECDSA",
        namedCurve: "P-384"
      }, i = ["sign", "verify"];
      break;
    case "ES512":
      s = {
        name: "ECDSA",
        namedCurve: "P-521"
      }, i = ["sign", "verify"];
      break;
    case "EdDSA":
      i = ["sign", "verify"];
      let a = (n = t === null || t === void 0 ? void 0 : t.crv) !== null && n !== void 0 ? n : "Ed25519";
      switch (a) {
        case "Ed25519":
        case "Ed448":
          s = {
            name: a
          };
          break;
        default:
          throw new od("Invalid or unsupported crv option provided");
      }
      break;
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW":
      {
        i = ["deriveKey", "deriveBits"];
        let l = (r = t === null || t === void 0 ? void 0 : t.crv) !== null && r !== void 0 ? r : "P-256";
        switch (l) {
          case "P-256":
          case "P-384":
          case "P-521":
            {
              s = {
                name: "ECDH",
                namedCurve: l
              };
              break;
            }
          case "X25519":
          case "X448":
            s = {
              name: l
            };
            break;
          default:
            throw new od("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448");
        }
        break;
      }
    default:
      throw new od('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return Ru.subtle.generateKey(s, (o = t === null || t === void 0 ? void 0 : t.extractable) !== null && o !== void 0 ? o : false, i);
}