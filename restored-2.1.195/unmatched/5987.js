// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wQo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0345  score=0.1242  fileCov=0.0456
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0345); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wQo = E(() => {
  AR();
});
async function rge(e, t) {
  if (e instanceof Uint8Array) return e;
  if (cve(e)) return e;
  if (Gnn(e)) {
    if (e.type === "secret") return e.export();
    if ("toCryptoKey" in e && typeof e.toCryptoKey === "function") try {
      return ZMm(e, t);
    } catch (r) {
      if (r instanceof TypeError) throw r;
    }
    let n = e.export({
      format: "jwk"
    });
    return eGc(e, n, t);
  }
  if (Wnn(e)) {
    if (e.k) return ege(e.k);
    return eGc(e, e, t, !0);
  }
  throw Error("unreachable");
}
var ewt = "given KeyObject instance cannot be used for this algorithm",
  twt,
  eGc = async (e, t, n, r = !1) => {
    twt ||= new WeakMap();
    let o = twt.get(e);
    if (o?.[n]) return o[n];
    let s = await Zvt({
      ...t,
      alg: n
    });
    if (r) Object.freeze(e);
    if (!o) twt.set(e, {
      [n]: s
    });else o[n] = s;
    return s;
  },
  ZMm = (e, t) => {
    twt ||= new WeakMap();
    let n = twt.get(e);
    if (n?.[t]) return n[t];
    let r = e.type === "public",
      o = r ? !0 : !1,
      s;
    if (e.asymmetricKeyType === "x25519") {
      switch (t) {
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          break;
        default:
          throw TypeError(ewt);
      }
      s = e.toCryptoKey(e.asymmetricKeyType, o, r ? [] : ["deriveBits"]);
    }
    if (e.asymmetricKeyType === "ed25519") {
      if (t !== "EdDSA" && t !== "Ed25519") throw TypeError(ewt);
      s = e.toCryptoKey(e.asymmetricKeyType, o, [r ? "verify" : "sign"]);
    }
    switch (e.asymmetricKeyType) {
      case "ml-dsa-44":
      case "ml-dsa-65":
      case "ml-dsa-87":
        {
          if (t !== e.asymmetricKeyType.toUpperCase()) throw TypeError(ewt);
          s = e.toCryptoKey(e.asymmetricKeyType, o, [r ? "verify" : "sign"]);
        }
    }
    if (e.asymmetricKeyType === "rsa") {
      let i;
      switch (t) {
        case "RSA-OAEP":
          i = "SHA-1";
          break;
        case "RS256":
        case "PS256":
        case "RSA-OAEP-256":
          i = "SHA-256";
          break;
        case "RS384":
        case "PS384":
        case "RSA-OAEP-384":
          i = "SHA-384";
          break;
        case "RS512":
        case "PS512":
        case "RSA-OAEP-512":
          i = "SHA-512";
          break;
        default:
          throw TypeError(ewt);
      }
      if (t.startsWith("RSA-OAEP")) return e.toCryptoKey({
        name: "RSA-OAEP",
        hash: i
      }, o, r ? ["encrypt"] : ["decrypt"]);
      s = e.toCryptoKey({
        name: t.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
        hash: i
      }, o, [r ? "verify" : "sign"]);
    }
    if (e.asymmetricKeyType === "ec") {
      let a = new Map([["prime256v1", "P-256"], ["secp384r1", "P-384"], ["secp521r1", "P-521"]]).get(e.asymmetricKeyDetails?.namedCurve);
      if (!a) throw TypeError(ewt);
      let l = {
        ES256: "P-256",
        ES384: "P-384",
        ES512: "P-521"
      };
      if (l[t] && a === l[t]) s = e.toCryptoKey({
        name: "ECDSA",
        namedCurve: a
      }, o, [r ? "verify" : "sign"]);
      if (t.startsWith("ECDH-ES")) s = e.toCryptoKey({
        name: "ECDH",
        namedCurve: a
      }, o, r ? [] : ["deriveBits"]);
    }
    if (!s) throw TypeError(ewt);
    if (!n) twt.set(e, {
      [t]: s
    });else n[t] = s;
    return s;
  };