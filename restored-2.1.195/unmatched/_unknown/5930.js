// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ujc
// matched 2.1.88 source: node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js
// class=new  jaccard=0.0189  score=0.2489  fileCov=0.0201
// note: nearest: node_modules/@aws-sdk/core/dist-cjs/submodules/protocols/index.js (0.0189); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ujc = E(() => {
  Ann();
  wm();
});
function PDm(e) {
  switch (typeof e === "string" && e.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new od('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function mJo(e) {
  return e && typeof e === "object" && Array.isArray(e.keys) && e.keys.every(MDm);
}
function MDm(e) {
  return eb(e);
}
function $Dm(e) {
  if (typeof structuredClone === "function") return structuredClone(e);
  return JSON.parse(JSON.stringify(e));
}
class ugr {
  constructor(e) {
    if (this._cached = new WeakMap(), !mJo(e)) throw new K7e("JSON Web Key Set malformed");
    this._jwks = $Dm(e);
  }
  async getKey(e, t) {
    let {
        alg: n,
        kid: r
      } = {
        ...e,
        ...(t === null || t === void 0 ? void 0 : t.header)
      },
      o = PDm(n),
      s = this._jwks.keys.filter(l => {
        let c = o === l.kty;
        if (c && typeof r === "string") c = r === l.kid;
        if (c && typeof l.alg === "string") c = n === l.alg;
        if (c && typeof l.use === "string") c = l.use === "sig";
        if (c && Array.isArray(l.key_ops)) c = l.key_ops.includes("verify");
        if (c && n === "EdDSA") c = l.crv === "Ed25519" || l.crv === "Ed448";
        if (c) switch (n) {
          case "ES256":
            c = l.crv === "P-256";
            break;
          case "ES256K":
            c = l.crv === "secp256k1";
            break;
          case "ES384":
            c = l.crv === "P-384";
            break;
          case "ES512":
            c = l.crv === "P-521";
            break;
        }
        return c;
      }),
      {
        0: i,
        length: a
      } = s;
    if (a === 0) throw new Dvt();else if (a !== 1) {
      let l = new Gmr(),
        {
          _cached: c
        } = this;
      throw l[Symbol.asyncIterator] = async function* () {
        for (let u of s) try {
          yield await djc(c, u, n);
        } catch (d) {
          continue;
        }
      }, l;
    }
    return djc(this._cached, i, n);
  }
}
async function djc(e, t, n) {
  let r = e.get(t) || e.set(t, {}).get(t);
  if (r[n] === void 0) {
    let o = await YNe({
      ...t,
      ext: true
    }, n);
    if (o instanceof Uint8Array || o.type !== "public") throw new K7e("JSON Web Key Set members must be public keys");
    r[n] = o;
  }
  return r[n];
}
function pjc(e) {
  let t = new ugr(e);
  return async function (n, r) {
    return t.getKey(n, r);
  };
}