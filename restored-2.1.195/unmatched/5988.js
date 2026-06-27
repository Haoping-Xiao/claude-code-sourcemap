// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nwt
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.024  score=0.0869  fileCov=0.0321
// note: nearest: node_modules/node-forge/lib/rsa.js (0.024); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nwt = E(() => {
  NZ();
  wQo();
});
function n$m(e) {
  Ynn(e, 48, "Invalid PKCS#8 structure"), Knn(e), Ynn(e, 2, "Expected version field");
  let t = Knn(e);
  e.pos += t, Ynn(e, 48, "Expected algorithm identifier");
  let n = Knn(e);
  return {
    algIdStart: e.pos,
    algIdLength: n
  };
}
var CQo = (e, t) => {
    if (e.byteLength !== t.length) return !1;
    for (let n = 0; n < e.byteLength; n++) if (e[n] !== t[n]) return !1;
    return !0;
  },
  e$m = e => ({
    data: e,
    pos: 0
  }),
  Knn = e => {
    let t = e.data[e.pos++];
    if (t & 128) {
      let n = t & 127,
        r = 0;
      for (let o = 0; o < n; o++) r = r << 8 | e.data[e.pos++];
      return r;
    }
    return t;
  },
  Ynn = (e, t, n) => {
    if (e.data[e.pos++] !== t) throw Error(n);
  },
  tGc = (e, t) => {
    let n = e.data.subarray(e.pos, e.pos + t);
    return e.pos += t, n;
  },
  t$m = e => {
    Ynn(e, 6, "Expected algorithm OID");
    let t = Knn(e);
    return tGc(e, t);
  },
  r$m = e => {
    let t = t$m(e);
    if (CQo(t, [43, 101, 110])) return "X25519";
    if (!CQo(t, [42, 134, 72, 206, 61, 2, 1])) throw Error("Unsupported key algorithm");
    Ynn(e, 6, "Expected curve OID");
    let n = Knn(e),
      r = tGc(e, n);
    for (let {
      name: o,
      oid: s
    } of [{
      name: "P-256",
      oid: [42, 134, 72, 206, 61, 3, 1, 7]
    }, {
      name: "P-384",
      oid: [43, 129, 4, 0, 34]
    }, {
      name: "P-521",
      oid: [43, 129, 4, 0, 35]
    }]) if (CQo(r, s)) return o;
    throw Error("Unsupported named curve");
  },
  o$m = async (e, t, n, r) => {
    let o,
      s,
      i = e === "spki",
      a = () => i ? ["verify"] : ["sign"],
      l = () => i ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
    switch (n) {
      case "PS256":
      case "PS384":
      case "PS512":
        o = {
          name: "RSA-PSS",
          hash: `SHA-${n.slice(-3)}`
        }, s = a();
        break;
      case "RS256":
      case "RS384":
      case "RS512":
        o = {
          name: "RSASSA-PKCS1-v1_5",
          hash: `SHA-${n.slice(-3)}`
        }, s = a();
        break;
      case "RSA-OAEP":
      case "RSA-OAEP-256":
      case "RSA-OAEP-384":
      case "RSA-OAEP-512":
        o = {
          name: "RSA-OAEP",
          hash: `SHA-${parseInt(n.slice(-3), 10) || 1}`
        }, s = l();
        break;
      case "ES256":
      case "ES384":
      case "ES512":
        {
          o = {
            name: "ECDSA",
            namedCurve: {
              ES256: "P-256",
              ES384: "P-384",
              ES512: "P-521"
            }[n]
          }, s = a();
          break;
        }
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        {
          try {
            let c = r.getNamedCurve(t);
            o = c === "X25519" ? {
              name: "X25519"
            } : {
              name: "ECDH",
              namedCurve: c
            };
          } catch (c) {
            throw new nh("Invalid or unsupported key format");
          }
          s = i ? [] : ["deriveBits"];
          break;
        }
      case "Ed25519":
      case "EdDSA":
        o = {
          name: "Ed25519"
        }, s = a();
        break;
      case "ML-DSA-44":
      case "ML-DSA-65":
      case "ML-DSA-87":
        o = {
          name: n
        }, s = a();
        break;
      default:
        throw new nh('Invalid or unsupported "alg" (Algorithm) value');
    }
    return crypto.subtle.importKey(e, t, o, r?.extractable ?? (i ? !0 : !1), s);
  },
  s$m = (e, t) => Lgr(e.replace(t, "")),
  nGc = (e, t, n) => {
    let r = s$m(e, /(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g),
      o = n;
    if (t?.startsWith?.("ECDH-ES")) o ||= {}, o.getNamedCurve = s => {
      let i = e$m(s);
      return n$m(i), r$m(i);
    };
    return o$m("pkcs8", r, t, o);
  };