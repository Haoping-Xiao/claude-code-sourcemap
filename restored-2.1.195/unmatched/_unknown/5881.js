// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o2c
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0154  score=0.0813  fileCov=0.0187
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0154); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var o2c = E(() => {
  r2c = iDm;
});
function aB(e, t = "algorithm.name") {
  return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`);
}
function zNe(e, t) {
  return e.name === t;
}
function Kmr(e) {
  return parseInt(e.name.slice(4), 10);
}
function aDm(e) {
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
function s2c(e, t) {
  if (t.length && !t.some(n => e.usages.includes(n))) {
    let n = "CryptoKey does not support this operation, its usages must include ";
    if (t.length > 2) {
      let r = t.pop();
      n += `one of ${t.join(", ")}, or ${r}.`;
    } else if (t.length === 2) n += `one of ${t[0]} or ${t[1]}.`;else n += `${t[0]}.`;
    throw TypeError(n);
  }
}
function i2c(e, t, ...n) {
  switch (t) {
    case "HS256":
    case "HS384":
    case "HS512":
      {
        if (!zNe(e.algorithm, "HMAC")) throw aB("HMAC");
        let r = parseInt(t.slice(2), 10);
        if (Kmr(e.algorithm.hash) !== r) throw aB(`SHA-${r}`, "algorithm.hash");
        break;
      }
    case "RS256":
    case "RS384":
    case "RS512":
      {
        if (!zNe(e.algorithm, "RSASSA-PKCS1-v1_5")) throw aB("RSASSA-PKCS1-v1_5");
        let r = parseInt(t.slice(2), 10);
        if (Kmr(e.algorithm.hash) !== r) throw aB(`SHA-${r}`, "algorithm.hash");
        break;
      }
    case "PS256":
    case "PS384":
    case "PS512":
      {
        if (!zNe(e.algorithm, "RSA-PSS")) throw aB("RSA-PSS");
        let r = parseInt(t.slice(2), 10);
        if (Kmr(e.algorithm.hash) !== r) throw aB(`SHA-${r}`, "algorithm.hash");
        break;
      }
    case "EdDSA":
      {
        if (e.algorithm.name !== "Ed25519" && e.algorithm.name !== "Ed448") throw aB("Ed25519 or Ed448");
        break;
      }
    case "ES256":
    case "ES384":
    case "ES512":
      {
        if (!zNe(e.algorithm, "ECDSA")) throw aB("ECDSA");
        let r = aDm(t);
        if (e.algorithm.namedCurve !== r) throw aB(r, "algorithm.namedCurve");
        break;
      }
    default:
      throw TypeError("CryptoKey does not support this operation");
  }
  s2c(e, n);
}
function dV(e, t, ...n) {
  switch (t) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      {
        if (!zNe(e.algorithm, "AES-GCM")) throw aB("AES-GCM");
        let r = parseInt(t.slice(1, 4), 10);
        if (e.algorithm.length !== r) throw aB(r, "algorithm.length");
        break;
      }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      {
        if (!zNe(e.algorithm, "AES-KW")) throw aB("AES-KW");
        let r = parseInt(t.slice(1, 4), 10);
        if (e.algorithm.length !== r) throw aB(r, "algorithm.length");
        break;
      }
    case "ECDH":
      {
        switch (e.algorithm.name) {
          case "ECDH":
          case "X25519":
          case "X448":
            break;
          default:
            throw aB("ECDH, X25519, or X448");
        }
        break;
      }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!zNe(e.algorithm, "PBKDF2")) throw aB("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      {
        if (!zNe(e.algorithm, "RSA-OAEP")) throw aB("RSA-OAEP");
        let r = parseInt(t.slice(9), 10) || 1;
        if (Kmr(e.algorithm.hash) !== r) throw aB(`SHA-${r}`, "algorithm.hash");
        break;
      }
    default:
      throw TypeError("CryptoKey does not support this operation");
  }
  s2c(e, n);
}
function a2c(e, t, ...n) {
  if (n.length > 2) {
    let r = n.pop();
    e += `one of type ${n.join(", ")}, or ${r}.`;
  } else if (n.length === 2) e += `one of type ${n[0]} or ${n[1]}.`;else e += `of type ${n[0]}.`;
  if (t == null) e += ` Received ${t}`;else if (typeof t === "function" && t.name) e += ` Received function ${t.name}`;else if (typeof t === "object" && t != null) {
    if (t.constructor && t.constructor.name) e += ` Received an instance of ${t.constructor.name}`;
  }
  return e;
}
function NXo(e, t, ...n) {
  return a2c(`Key for the ${e} algorithm must be `, t, ...n);
}
var _w = (e, ...t) => a2c("Key must be ", e, ...t);
var BXo = e => OC(e),
  Z_;