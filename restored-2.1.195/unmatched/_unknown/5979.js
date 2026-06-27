// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NZ
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0153  score=0.0789  fileCov=0.0187
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0153); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function MMm(e) {
  return parseInt(e.name.slice(4), 10);
}
function Dgr(e, t) {
  if (MMm(e.hash) !== t) throw $3(`SHA-${t}`, "algorithm.hash");
}
function $Mm(e) {
  switch (e) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw Error("unreachable");
  }
}
function v3c(e, t) {
  if (t && !e.usages.includes(t)) throw TypeError(`CryptoKey does not support this operation, its usages must include ${t}.`);
}
function w3c(e, t, n) {
  switch (t) {
    case "HS256":
    case "HS384":
    case "HS512":
      {
        if (!tge(e.algorithm, "HMAC")) throw $3("HMAC");
        Dgr(e.algorithm, parseInt(t.slice(2), 10));
        break;
      }
    case "RS256":
    case "RS384":
    case "RS512":
      {
        if (!tge(e.algorithm, "RSASSA-PKCS1-v1_5")) throw $3("RSASSA-PKCS1-v1_5");
        Dgr(e.algorithm, parseInt(t.slice(2), 10));
        break;
      }
    case "PS256":
    case "PS384":
    case "PS512":
      {
        if (!tge(e.algorithm, "RSA-PSS")) throw $3("RSA-PSS");
        Dgr(e.algorithm, parseInt(t.slice(2), 10));
        break;
      }
    case "Ed25519":
    case "EdDSA":
      {
        if (!tge(e.algorithm, "Ed25519")) throw $3("Ed25519");
        break;
      }
    case "ML-DSA-44":
    case "ML-DSA-65":
    case "ML-DSA-87":
      {
        if (!tge(e.algorithm, t)) throw $3(t);
        break;
      }
    case "ES256":
    case "ES384":
    case "ES512":
      {
        if (!tge(e.algorithm, "ECDSA")) throw $3("ECDSA");
        let r = $Mm(t);
        if (e.algorithm.namedCurve !== r) throw $3(r, "algorithm.namedCurve");
        break;
      }
    default:
      throw TypeError("CryptoKey does not support this operation");
  }
  v3c(e, n);
}
function iK(e, t, n) {
  switch (t) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      {
        if (!tge(e.algorithm, "AES-GCM")) throw $3("AES-GCM");
        let r = parseInt(t.slice(1, 4), 10);
        if (e.algorithm.length !== r) throw $3(r, "algorithm.length");
        break;
      }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      {
        if (!tge(e.algorithm, "AES-KW")) throw $3("AES-KW");
        let r = parseInt(t.slice(1, 4), 10);
        if (e.algorithm.length !== r) throw $3(r, "algorithm.length");
        break;
      }
    case "ECDH":
      {
        switch (e.algorithm.name) {
          case "ECDH":
          case "X25519":
            break;
          default:
            throw $3("ECDH or X25519");
        }
        break;
      }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!tge(e.algorithm, "PBKDF2")) throw $3("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      {
        if (!tge(e.algorithm, "RSA-OAEP")) throw $3("RSA-OAEP");
        Dgr(e.algorithm, parseInt(t.slice(9), 10) || 1);
        break;
      }
    default:
      throw TypeError("CryptoKey does not support this operation");
  }
  v3c(e, n);
}
var $3 = (e, t = "algorithm.name") => TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`),
  tge = (e, t) => e.name === t;
function C3c(e, t, ...n) {
  if (n = n.filter(Boolean), n.length > 2) {
    let r = n.pop();
    e += `one of type ${n.join(", ")}, or ${r}.`;
  } else if (n.length === 2) e += `one of type ${n[0]} or ${n[1]}.`;else e += `of type ${n[0]}.`;
  if (t == null) e += ` Received ${t}`;else if (typeof t === "function" && t.name) e += ` Received function ${t.name}`;else if (typeof t === "object" && t != null) {
    if (t.constructor?.name) e += ` Received an instance of ${t.constructor.name}`;
  }
  return e;
}
var nBe = (e, ...t) => C3c("Key must be ", e, ...t),
  bQo = (e, t, ...n) => C3c(`Key for the ${e} algorithm must be `, t, ...n);
var nge, H2, Pgr, Xvt, nh, jnn, Ac, jH, oXe, SQo;