// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AR
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/util.mjs
// class=new  jaccard=0.0514  score=0.0952  fileCov=0.1006
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/util.mjs (0.0514); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AR = E(() => {
  nge = class nge extends Error {
    static code = "ERR_JOSE_GENERIC";
    code = "ERR_JOSE_GENERIC";
    constructor(e, t) {
      super(e, t);
      this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
    }
  };
  H2 = class H2 extends nge {
    static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    claim;
    reason;
    payload;
    constructor(e, t, n = "unspecified", r = "unspecified") {
      super(e, {
        cause: {
          claim: n,
          reason: r,
          payload: t
        }
      });
      this.claim = n, this.reason = r, this.payload = t;
    }
  };
  Pgr = class Pgr extends nge {
    static code = "ERR_JWT_EXPIRED";
    code = "ERR_JWT_EXPIRED";
    claim;
    reason;
    payload;
    constructor(e, t, n = "unspecified", r = "unspecified") {
      super(e, {
        cause: {
          claim: n,
          reason: r,
          payload: t
        }
      });
      this.claim = n, this.reason = r, this.payload = t;
    }
  };
  Xvt = class Xvt extends nge {
    static code = "ERR_JOSE_ALG_NOT_ALLOWED";
    code = "ERR_JOSE_ALG_NOT_ALLOWED";
  };
  nh = class nh extends nge {
    static code = "ERR_JOSE_NOT_SUPPORTED";
    code = "ERR_JOSE_NOT_SUPPORTED";
  };
  jnn = class jnn extends nge {
    static code = "ERR_JWE_DECRYPTION_FAILED";
    code = "ERR_JWE_DECRYPTION_FAILED";
    constructor(e = "decryption operation failed", t) {
      super(e, t);
    }
  };
  Ac = class Ac extends nge {
    static code = "ERR_JWE_INVALID";
    code = "ERR_JWE_INVALID";
  };
  jH = class jH extends nge {
    static code = "ERR_JWS_INVALID";
    code = "ERR_JWS_INVALID";
  };
  oXe = class oXe extends nge {
    static code = "ERR_JWT_INVALID";
    code = "ERR_JWT_INVALID";
  };
  SQo = class SQo extends nge {
    static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    constructor(e = "signature verification failed", t) {
      super(e, t);
    }
  };
});
function Jvt(e) {
  if (!cve(e)) throw Error("CryptoKey instance expected");
}
var cve = e => {
    if (e?.[Symbol.toStringTag] === "CryptoKey") return true;
    try {
      return e instanceof CryptoKey;
    } catch {
      return false;
    }
  },
  Gnn = e => e?.[Symbol.toStringTag] === "KeyObject",
  EQo = e => cve(e) || Gnn(e);
function $gr(e) {
  switch (e) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new nh(`Unsupported JWE Algorithm: ${e}`);
  }
}
function Mgr(e, t) {
  let n = e.byteLength << 3;
  if (n !== t) throw new Ac(`Invalid Content Encryption Key length. Expected ${t} bits, got ${n} bits`);
}
function I3c(e) {
  switch (e) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new nh(`Unsupported JWE Algorithm: ${e}`);
  }
}
function x3c(e, t) {
  if (t.length << 3 !== I3c(e)) throw new Ac("Invalid Initialization Vector length");
}
async function k3c(e, t, n) {
  if (!(t instanceof Uint8Array)) throw TypeError(nBe(t, "Uint8Array"));
  let r = parseInt(e.slice(1, 4), 10),
    o = await crypto.subtle.importKey("raw", t.subarray(r >> 3), "AES-CBC", false, [n]),
    s = await crypto.subtle.importKey("raw", t.subarray(0, r >> 3), {
      hash: `SHA-${r << 1}`,
      name: "HMAC"
    }, false, ["sign"]);
  return {
    encKey: o,
    macKey: s,
    keySize: r
  };
}
async function R3c(e, t, n) {
  return new Uint8Array((await crypto.subtle.sign("HMAC", e, t)).slice(0, n >> 3));
}
async function NMm(e, t, n, r, o) {
  let {
      encKey: s,
      macKey: i,
      keySize: a
    } = await k3c(e, n, "encrypt"),
    l = new Uint8Array(await crypto.subtle.encrypt({
      iv: r,
      name: "AES-CBC"
    }, s, t)),
    c = iD(o, r, l, yQo(o.length << 3)),
    u = await R3c(i, c, a);
  return {
    ciphertext: l,
    tag: u,
    iv: r
  };
}
async function BMm(e, t) {
  if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
  if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
  let n = {
      name: "HMAC",
      hash: "SHA-256"
    },
    r = await crypto.subtle.generateKey(n, false, ["sign"]),
    o = new Uint8Array(await crypto.subtle.sign(n, r, e)),
    s = new Uint8Array(await crypto.subtle.sign(n, r, t)),
    i = 0,
    a = -1;
  while (++a < 32) i |= o[a] ^ s[a];
  return i === 0;
}
async function UMm(e, t, n, r, o, s) {
  let {
      encKey: i,
      macKey: a,
      keySize: l
    } = await k3c(e, t, "decrypt"),
    c = iD(s, r, n, yQo(s.length << 3)),
    u = await R3c(a, c, l),
    d;
  try {
    d = await BMm(o, u);
  } catch {}
  if (!d) throw new jnn();
  let p;
  try {
    p = new Uint8Array(await crypto.subtle.decrypt({
      iv: r,
      name: "AES-CBC"
    }, i, n));
  } catch {}
  if (!p) throw new jnn();
  return p;
}
async function FMm(e, t, n, r, o) {
  let s;
  if (n instanceof Uint8Array) s = await crypto.subtle.importKey("raw", n, "AES-GCM", false, ["encrypt"]);else iK(n, e, "encrypt"), s = n;
  let i = new Uint8Array(await crypto.subtle.encrypt({
      additionalData: o,
      iv: r,
      name: "AES-GCM",
      tagLength: 128
    }, s, t)),
    a = i.slice(-16);
  return {
    ciphertext: i.slice(0, -16),
    tag: a,
    iv: r
  };
}
async function jMm(e, t, n, r, o, s) {
  let i;
  if (t instanceof Uint8Array) i = await crypto.subtle.importKey("raw", t, "AES-GCM", false, ["decrypt"]);else iK(t, e, "decrypt"), i = t;
  try {
    return new Uint8Array(await crypto.subtle.decrypt({
      additionalData: s,
      iv: r,
      name: "AES-GCM",
      tagLength: 128
    }, i, iD(n, o)));
  } catch {
    throw new jnn();
  }
}
async function Ogr(e, t, n, r, o) {
  if (!cve(n) && !(n instanceof Uint8Array)) throw TypeError(nBe(n, "CryptoKey", "KeyObject", "Uint8Array", "JSON Web Key"));
  if (r) x3c(e, r);else r = OMm(e);
  switch (e) {
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      if (n instanceof Uint8Array) Mgr(n, parseInt(e.slice(-3), 10));
      return NMm(e, t, n, r, o);
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      if (n instanceof Uint8Array) Mgr(n, parseInt(e.slice(1, 4), 10));
      return FMm(e, t, n, r, o);
    default:
      throw new nh(L3c);
  }
}
async function Ngr(e, t, n, r, o, s) {
  if (!cve(t) && !(t instanceof Uint8Array)) throw TypeError(nBe(t, "CryptoKey", "KeyObject", "Uint8Array", "JSON Web Key"));
  if (!r) throw new Ac("JWE Initialization Vector missing");
  if (!o) throw new Ac("JWE Authentication Tag missing");
  switch (x3c(e, r), e) {
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      if (t instanceof Uint8Array) Mgr(t, parseInt(e.slice(-3), 10));
      return UMm(e, t, n, r, o, s);
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      if (t instanceof Uint8Array) Mgr(t, parseInt(e.slice(1, 4), 10));
      return jMm(e, t, n, r, o, s);
    default:
      throw new nh(L3c);
  }
}
var rBe = e => crypto.getRandomValues(new Uint8Array($gr(e) >> 3)),
  OMm = e => crypto.getRandomValues(new Uint8Array(I3c(e) >> 3)),
  L3c = "Unsupported JWE Content Encryption Algorithm";