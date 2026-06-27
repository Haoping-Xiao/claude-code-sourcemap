// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uGc
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0128  score=0.0456  fileCov=0.0175
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0128); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uGc = E(() => {
  Qvt();
  NZ();
});
function Xnn(e) {
  if (e === void 0) throw new Ac("JWE Encrypted Key missing");
}
async function pGc(e, t, n, r, o) {
  switch (e) {
    case "dir":
      {
        if (n !== void 0) throw new Ac("Encountered unexpected JWE Encrypted Key");
        return t;
      }
    case "ECDH-ES":
      if (n !== void 0) throw new Ac("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW":
      {
        if (!B3(r.epk)) throw new Ac('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
        if (Jvt(t), !vQo(t)) throw new nh("ECDH with the provided key is not allowed or not supported by your javascript runtime");
        let s = await xQo(r.epk, e);
        Jvt(s);
        let i, a;
        if (r.apu !== void 0) {
          if (typeof r.apu !== "string") throw new Ac('JOSE Header "apu" (Agreement PartyUInfo) invalid');
          i = N3(r.apu, "apu", Ac);
        }
        if (r.apv !== void 0) {
          if (typeof r.apv !== "string") throw new Ac('JOSE Header "apv" (Agreement PartyVInfo) invalid');
          a = N3(r.apv, "apv", Ac);
        }
        let l = await TQo(s, t, e === "ECDH-ES" ? r.enc : e, e === "ECDH-ES" ? $gr(r.enc) : parseInt(e.slice(-5, -2), 10), i, a);
        if (e === "ECDH-ES") return l;
        return Xnn(n), Vnn(e.slice(-6), l, n);
      }
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return Xnn(n), Jvt(t), Q3c(e, t, n);
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      {
        if (Xnn(n), typeof r.p2c !== "number") throw new Ac('JOSE Header "p2c" (PBES2 Count) missing or invalid');
        let s = o?.maxPBES2Count || 1e4;
        if (r.p2c > s) throw new Ac('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
        if (typeof r.p2s !== "string") throw new Ac('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
        let i;
        return i = N3(r.p2s, "p2s", Ac), W3c(e, t, n, r.p2c, i);
      }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      return Xnn(n), Vnn(e, t, n);
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
      {
        if (Xnn(n), typeof r.iv !== "string") throw new Ac('JOSE Header "iv" (Initialization Vector) missing or invalid');
        if (typeof r.tag !== "string") throw new Ac('JOSE Header "tag" (Authentication Tag) missing or invalid');
        let s;
        s = N3(r.iv, "iv", Ac);
        let i;
        return i = N3(r.tag, "tag", Ac), cGc(e, t, n, s, i);
      }
    default:
      throw new nh(dGc);
  }
}
async function fGc(e, t, n, r, o = {}) {
  let s, i, a;
  switch (e) {
    case "dir":
      {
        a = n;
        break;
      }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW":
      {
        if (Jvt(n), !vQo(n)) throw new nh("ECDH with the provided key is not allowed or not supported by your javascript runtime");
        let {
            apu: l,
            apv: c
          } = o,
          u;
        if (o.epk) u = await rge(o.epk, e);else u = (await crypto.subtle.generateKey(n.algorithm, !0, ["deriveBits"])).privateKey;
        let {
            x: d,
            y: p,
            crv: f,
            kty: m
          } = await iGc(u),
          g = await TQo(n, u, e === "ECDH-ES" ? t : e, e === "ECDH-ES" ? $gr(t) : parseInt(e.slice(-5, -2), 10), l, c);
        if (i = {
          epk: {
            x: d,
            crv: f,
            kty: m
          }
        }, m === "EC") i.epk.y = p;
        if (l) i.apu = ER(l);
        if (c) i.apv = ER(c);
        if (e === "ECDH-ES") {
          a = g;
          break;
        }
        a = r || rBe(t);
        let h = e.slice(-6);
        s = await qnn(h, g, a);
        break;
      }
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      {
        a = r || rBe(t), Jvt(n), s = await J3c(e, n, a);
        break;
      }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      {
        a = r || rBe(t);
        let {
          p2c: l,
          p2s: c
        } = o;
        ({
          encryptedKey: s,
          ...i
        } = await G3c(e, n, a, l, c));
        break;
      }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      {
        a = r || rBe(t), s = await qnn(e, n, a);
        break;
      }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
      {
        a = r || rBe(t);
        let {
          iv: l
        } = o;
        ({
          encryptedKey: s,
          ...i
        } = await lGc(e, n, a, l));
        break;
      }
    default:
      throw new nh(dGc);
  }
  return {
    cek: a,
    encryptedKey: s,
    parameters: i
  };
}
var dGc = 'Invalid or unsupported "alg" (JWE Algorithm) header value';