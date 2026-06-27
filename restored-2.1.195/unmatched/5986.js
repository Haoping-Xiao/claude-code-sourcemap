// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z3c
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0257  score=0.1143  fileCov=0.0321
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0257); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z3c = E(() => {
  Bgr();
  AR();
});
function QMm(e) {
  let t, n;
  switch (e.kty) {
    case "AKP":
      {
        switch (e.alg) {
          case "ML-DSA-44":
          case "ML-DSA-65":
          case "ML-DSA-87":
            t = {
              name: e.alg
            }, n = e.priv ? ["sign"] : ["verify"];
            break;
          default:
            throw new nh(Ugr);
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
            throw new nh(Ugr);
        }
        break;
      }
    case "EC":
      {
        switch (e.alg) {
          case "ES256":
          case "ES384":
          case "ES512":
            t = {
              name: "ECDSA",
              namedCurve: {
                ES256: "P-256",
                ES384: "P-384",
                ES512: "P-521"
              }[e.alg]
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
            throw new nh(Ugr);
        }
        break;
      }
    case "OKP":
      {
        switch (e.alg) {
          case "Ed25519":
          case "EdDSA":
            t = {
              name: "Ed25519"
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
            throw new nh(Ugr);
        }
        break;
      }
    default:
      throw new nh('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return {
    algorithm: t,
    keyUsages: n
  };
}
async function Zvt(e) {
  if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
  let {
      algorithm: t,
      keyUsages: n
    } = QMm(e),
    r = {
      ...e
    };
  if (r.kty !== "AKP") delete r.alg;
  return delete r.use, crypto.subtle.importKey("jwk", r, t, e.ext ?? (e.d || e.priv ? !1 : !0), e.key_ops ?? n);
}
var Ugr = 'Invalid or unsupported JWK "alg" (Algorithm) Parameter value';