// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OJo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0115  score=0.0602  fileCov=0.0141
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0115); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OJo = Q((AzH, T4c) => {
  var $Jo = (fgr(), ro(pgr)),
    APm = Nnn(),
    E4c = Dnn(),
    A4c = Symbol(),
    H4c = (e, {
      alg: t,
      use: n
    }) => {
      let r = 0;
      if (t && e.alg) r++;
      if (n && e.use) r++;
      return r;
    };
  function HPm(e) {
    switch (typeof e === "string" && e.slice(0, 2)) {
      case "RS":
      case "PS":
        return "RSA";
      case "ES":
        return "EC";
      case "Ed":
        return "OKP";
      default:
        return;
    }
  }
  function TPm(e, t, n, r) {
    if (t) return new Set([t]);
    switch (n) {
      case "EC":
        {
          let o = [];
          if (e === "enc" || e === void 0) o = o.concat(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
          if (e === "sig" || e === void 0) switch (r) {
            case "P-256":
            case "P-384":
              o = o.concat([`ES${r.slice(-3)}`]);
              break;
            case "P-521":
              o = o.concat(["ES512"]);
              break;
            case "secp256k1":
              if ($Jo.cryptoRuntime === "node:crypto") o = o.concat(["ES256K"]);
              break;
          }
          return new Set(o);
        }
      case "OKP":
        return new Set(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
      case "RSA":
        {
          let o = [];
          if (e === "enc" || e === void 0) {
            if (o = o.concat(["RSA-OAEP", "RSA-OAEP-256", "RSA-OAEP-384", "RSA-OAEP-512"]), $Jo.cryptoRuntime === "node:crypto") o = o.concat(["RSA1_5"]);
          }
          if (e === "sig" || e === void 0) o = o.concat(["PS256", "PS384", "PS512", "RS256", "RS384", "RS512"]);
          return new Set(o);
        }
      default:
        throw Error("unreachable");
    }
  }
  T4c.exports = class {
    #e;
    constructor(t, n) {
      if (t !== A4c) throw Error("invalid constructor call");
      this.#e = n;
    }
    toJWKS() {
      return {
        keys: this.map(({
          jwk: {
            d: t,
            p: n,
            q: r,
            dp: o,
            dq: s,
            qi: i,
            ...a
          }
        }) => a)
      };
    }
    all({
      alg: t,
      kid: n,
      use: r
    } = {}) {
      if (!r || !t) throw Error();
      let o = HPm(t),
        s = {
          alg: t,
          use: r
        };
      return this.filter(i => {
        let a = true;
        if (a && o !== void 0 && i.jwk.kty !== o) a = false;
        if (a && n !== void 0 && i.jwk.kid !== n) a = false;
        if (a && r !== void 0 && i.jwk.use !== void 0 && i.jwk.use !== r) a = false;
        if (a && i.jwk.alg && i.jwk.alg !== t) a = false;else if (!i.algorithms.has(t)) a = false;
        return a;
      }).sort((i, a) => H4c(a, s) - H4c(i, s));
    }
    get(...t) {
      return this.all(...t)[0];
    }
    static async fromJWKS(t, {
      onlyPublic: n = false,
      onlyPrivate: r = false
    } = {}) {
      if (!E4c(t) || !Array.isArray(t.keys) || t.keys.some(s => !E4c(s) || !("kty" in s))) throw TypeError("jwks must be a JSON Web Key Set formatted object");
      let o = [];
      for (let s of t.keys) {
        s = APm(s);
        let {
            kty: i,
            kid: a,
            crv: l
          } = s,
          {
            alg: c,
            use: u
          } = s;
        if (typeof i !== "string" || !i) continue;
        if (u !== void 0 && u !== "sig" && u !== "enc") continue;
        if (typeof c !== "string" && c !== void 0) continue;
        if (typeof a !== "string" && a !== void 0) continue;
        if (i === "EC" && u === "sig") switch (l) {
          case "P-256":
            c = "ES256";
            break;
          case "P-384":
            c = "ES384";
            break;
          case "P-521":
            c = "ES512";
            break;
          default:
            break;
        }
        if (l === "secp256k1") u = "sig", c = "ES256K";
        if (i === "OKP") switch (l) {
          case "Ed25519":
          case "Ed448":
            u = "sig", c = "EdDSA";
            break;
          case "X25519":
          case "X448":
            u = "enc";
            break;
          default:
            break;
        }
        if (c && !u) switch (true) {
          case c.startsWith("ECDH"):
            u = "enc";
            break;
          case c.startsWith("RSA"):
            u = "enc";
            break;
          default:
            break;
        }
        if (r && (s.kty === "oct" || !s.d)) throw Error("jwks must only contain private keys");
        if (n && (s.d || s.k)) continue;
        o.push({
          jwk: {
            ...s,
            alg: c,
            use: u
          },
          async keyObject(d) {
            if (this[d]) return this[d];
            let p = await $Jo.importJWK(this.jwk, d);
            return this[d] = p, p;
          },
          get algorithms() {
            return Object.defineProperty(this, "algorithms", {
              value: TPm(this.jwk.use, this.jwk.alg, this.jwk.kty, this.jwk.crv),
              enumerable: true,
              configurable: false
            }), this.algorithms;
          }
        });
      }
      return new this(A4c, o);
    }
    filter(...t) {
      return this.#e.filter(...t);
    }
    find(...t) {
      return this.#e.find(...t);
    }
    every(...t) {
      return this.#e.every(...t);
    }
    some(...t) {
      return this.#e.some(...t);
    }
    map(...t) {
      return this.#e.map(...t);
    }
    forEach(...t) {
      return this.#e.forEach(...t);
    }
    reduce(...t) {
      return this.#e.reduce(...t);
    }
    sort(...t) {
      return this.#e.sort(...t);
    }
    *[Symbol.iterator]() {
      for (let t of this.#e) yield t;
    }
  };
});