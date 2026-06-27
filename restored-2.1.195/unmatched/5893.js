// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Enn
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0244  score=0.0927  fileCov=0.0321
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0244); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Enn = E(() => {
  wm();
  ynn();
});
var zXo = (e, t) => {
  let n = (e.match(/.{1,64}/g) || []).join(`
`);
  return `-----BEGIN ${t}-----
${n}
-----END ${t}-----`;
};
function A2c(e) {
  let t = [],
    n = 0;
  while (n < e.length) {
    let r = I2c(e.subarray(n));
    t.push(r), n += r.byteLength;
  }
  return t;
}
function I2c(e) {
  let t = 0,
    n = e[0] & 31;
  if (t++, n === 31) {
    n = 0;
    while (e[t] >= 128) n = n * 128 + e[t] - 128, t++;
    n = n * 128 + e[t] - 128, t++;
  }
  let r = 0;
  if (e[t] < 128) r = e[t], t++;else if (r === 128) {
    r = 0;
    while (e[t + r] !== 0 || e[t + r + 1] !== 0) {
      if (r > e.byteLength) throw TypeError("invalid indefinite form length");
      r++;
    }
    let s = t + r + 2;
    return {
      byteLength: s,
      contents: e.subarray(t, t + r),
      raw: e.subarray(0, s)
    };
  } else {
    let s = e[t] & 127;
    t++, r = 0;
    for (let i = 0; i < s; i++) r = r * 256 + e[t], t++;
  }
  let o = t + r;
  return {
    byteLength: o,
    contents: e.subarray(t, o),
    raw: e.subarray(0, o)
  };
}
function gDm(e) {
  let t = A2c(A2c(I2c(e).contents)[0].contents);
  return Fmr(t[t[0].raw[0] === 160 ? 6 : 5].raw);
}
function hDm(e) {
  let t = e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ""),
    n = DXo(t);
  return zXo(gDm(n), "PUBLIC KEY");
}
var H2c = async (e, t, n) => {
    if (!OC(n)) throw TypeError(_w(n, ...Z_));
    if (!n.extractable) throw TypeError("CryptoKey is not extractable");
    if (n.type !== e) throw TypeError(`key is not a ${e} key`);
    return zXo(Fmr(new Uint8Array(await Ru.subtle.exportKey(t, n))), `${e.toUpperCase()} KEY`);
  },
  T2c = e => H2c("public", "spki", e),
  v2c = e => H2c("private", "pkcs8", e),
  KNe = (e, t, n = 0) => {
    if (n === 0) t.unshift(t.length), t.unshift(6);
    let r = e.indexOf(t[0], n);
    if (r === -1) return !1;
    let o = e.subarray(r, r + t.length);
    if (o.length !== t.length) return !1;
    return o.every((s, i) => s === t[i]) || KNe(e, t, r + 1);
  },
  E2c = e => {
    switch (!0) {
      case KNe(e, [42, 134, 72, 206, 61, 3, 1, 7]):
        return "P-256";
      case KNe(e, [43, 129, 4, 0, 34]):
        return "P-384";
      case KNe(e, [43, 129, 4, 0, 35]):
        return "P-521";
      case KNe(e, [43, 101, 110]):
        return "X25519";
      case KNe(e, [43, 101, 111]):
        return "X448";
      case KNe(e, [43, 101, 112]):
        return "Ed25519";
      case KNe(e, [43, 101, 113]):
        return "Ed448";
      default:
        throw new od("Invalid or unsupported EC Key Curve or OKP Key Sub Type");
    }
  },
  w2c = async (e, t, n, r, o) => {
    var s;
    let i,
      a,
      l = new Uint8Array(atob(n.replace(e, "")).split("").map(u => u.charCodeAt(0))),
      c = t === "spki";
    switch (r) {
      case "PS256":
      case "PS384":
      case "PS512":
        i = {
          name: "RSA-PSS",
          hash: `SHA-${r.slice(-3)}`
        }, a = c ? ["verify"] : ["sign"];
        break;
      case "RS256":
      case "RS384":
      case "RS512":
        i = {
          name: "RSASSA-PKCS1-v1_5",
          hash: `SHA-${r.slice(-3)}`
        }, a = c ? ["verify"] : ["sign"];
        break;
      case "RSA-OAEP":
      case "RSA-OAEP-256":
      case "RSA-OAEP-384":
      case "RSA-OAEP-512":
        i = {
          name: "RSA-OAEP",
          hash: `SHA-${parseInt(r.slice(-3), 10) || 1}`
        }, a = c ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
        break;
      case "ES256":
        i = {
          name: "ECDSA",
          namedCurve: "P-256"
        }, a = c ? ["verify"] : ["sign"];
        break;
      case "ES384":
        i = {
          name: "ECDSA",
          namedCurve: "P-384"
        }, a = c ? ["verify"] : ["sign"];
        break;
      case "ES512":
        i = {
          name: "ECDSA",
          namedCurve: "P-521"
        }, a = c ? ["verify"] : ["sign"];
        break;
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        {
          let u = E2c(l);
          i = u.startsWith("P-") ? {
            name: "ECDH",
            namedCurve: u
          } : {
            name: u
          }, a = c ? [] : ["deriveBits"];
          break;
        }
      case "EdDSA":
        i = {
          name: E2c(l)
        }, a = c ? ["verify"] : ["sign"];
        break;
      default:
        throw new od('Invalid or unsupported "alg" (Algorithm) value');
    }
    return Ru.subtle.importKey(t, l, i, (s = o === null || o === void 0 ? void 0 : o.extractable) !== null && s !== void 0 ? s : !1, a);
  },
  C2c = (e, t, n) => w2c(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, n),
  KXo = (e, t, n) => w2c(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, n),
  x2c = (e, t, n) => {
    let r;
    try {
      r = hDm(e);
    } catch (o) {
      throw TypeError("Failed to parse the X.509 certificate", {
        cause: o
      });
    }
    return KXo(r, t, n);
  };