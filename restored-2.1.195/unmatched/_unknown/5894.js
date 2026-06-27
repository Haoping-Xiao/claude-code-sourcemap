// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zmr
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0167  score=0.0901  fileCov=0.0202
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0167); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zmr = E(() => {
  rB();
  sB();
  wm();
  iie();
});
function yDm(e) {
  let t, n;
  switch (e.kty) {
    case "oct":
      {
        switch (e.alg) {
          case "HS256":
          case "HS384":
          case "HS512":
            t = {
              name: "HMAC",
              hash: `SHA-${e.alg.slice(-3)}`
            }, n = ["sign", "verify"];
            break;
          case "A128CBC-HS256":
          case "A192CBC-HS384":
          case "A256CBC-HS512":
            throw new od(`${e.alg} keys cannot be imported as CryptoKey instances`);
          case "A128GCM":
          case "A192GCM":
          case "A256GCM":
          case "A128GCMKW":
          case "A192GCMKW":
          case "A256GCMKW":
            t = {
              name: "AES-GCM"
            }, n = ["encrypt", "decrypt"];
            break;
          case "A128KW":
          case "A192KW":
          case "A256KW":
            t = {
              name: "AES-KW"
            }, n = ["wrapKey", "unwrapKey"];
            break;
          case "PBES2-HS256+A128KW":
          case "PBES2-HS384+A192KW":
          case "PBES2-HS512+A256KW":
            t = {
              name: "PBKDF2"
            }, n = ["deriveBits"];
            break;
          default:
            throw new od('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
    case "RSA":
      {
        switch (e.alg) {
          case "PS256":
          case "PS384":
          case "PS512":
            t = {
              name: "RSA-PSS",
              hash: `SHA-${e.alg.slice(-3)}`
            }, n = e.d ? ["sign"] : ["verify"];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            t = {
              name: "RSASSA-PKCS1-v1_5",
              hash: `SHA-${e.alg.slice(-3)}`
            }, n = e.d ? ["sign"] : ["verify"];
            break;
          case "RSA-OAEP":
          case "RSA-OAEP-256":
          case "RSA-OAEP-384":
          case "RSA-OAEP-512":
            t = {
              name: "RSA-OAEP",
              hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`
            }, n = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
            break;
          default:
            throw new od('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
    case "EC":
      {
        switch (e.alg) {
          case "ES256":
            t = {
              name: "ECDSA",
              namedCurve: "P-256"
            }, n = e.d ? ["sign"] : ["verify"];
            break;
          case "ES384":
            t = {
              name: "ECDSA",
              namedCurve: "P-384"
            }, n = e.d ? ["sign"] : ["verify"];
            break;
          case "ES512":
            t = {
              name: "ECDSA",
              namedCurve: "P-521"
            }, n = e.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            t = {
              name: "ECDH",
              namedCurve: e.crv
            }, n = e.d ? ["deriveBits"] : [];
            break;
          default:
            throw new od('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
    case "OKP":
      {
        switch (e.alg) {
          case "EdDSA":
            t = {
              name: e.crv
            }, n = e.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            t = {
              name: e.crv
            }, n = e.d ? ["deriveBits"] : [];
            break;
          default:
            throw new od('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
    default:
      throw new od('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return {
    algorithm: t,
    keyUsages: n
  };
}
var _Dm = async e => {
    var t, n;
    if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
    let {
        algorithm: r,
        keyUsages: o
      } = yDm(e),
      s = [r, (t = e.ext) !== null && t !== void 0 ? t : false, (n = e.key_ops) !== null && n !== void 0 ? n : o];
    if (r.name === "PBKDF2") return Ru.subtle.importKey("raw", VT(e.k), ...s);
    let i = {
      ...e
    };
    return delete i.alg, delete i.use, Ru.subtle.importKey("jwk", i, ...s);
  },
  YXo;