// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JXo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0061  score=0.0369  fileCov=0.0072
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0061); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function vDm(e, t, n, r, o) {
  switch (XNe(e, t, "decrypt"), e) {
    case "dir":
      {
        if (n !== void 0) throw new Wa("Encountered unexpected JWE Encrypted Key");
        return t;
      }
    case "ECDH-ES":
      if (n !== void 0) throw new Wa("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW":
      {
        if (!eb(r.epk)) throw new Wa('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
        if (!Qmr(t)) throw new od("ECDH with the provided key is not allowed or not supported by your javascript runtime");
        let s = await YNe(r.epk, e),
          i,
          a;
        if (r.apu !== void 0) {
          if (typeof r.apu !== "string") throw new Wa('JOSE Header "apu" (Agreement PartyUInfo) invalid');
          try {
            i = VT(r.apu);
          } catch (c) {
            throw new Wa("Failed to base64url decode the apu");
          }
        }
        if (r.apv !== void 0) {
          if (typeof r.apv !== "string") throw new Wa('JOSE Header "apv" (Agreement PartyVInfo) invalid');
          try {
            a = VT(r.apv);
          } catch (c) {
            throw new Wa("Failed to base64url decode the apv");
          }
        }
        let l = await Jmr(s, t, e === "ECDH-ES" ? r.enc : e, e === "ECDH-ES" ? Snn(r.enc) : parseInt(e.slice(-5, -2), 10), i, a);
        if (e === "ECDH-ES") return l;
        if (n === void 0) throw new Wa("JWE Encrypted Key missing");
        return bnn(e.slice(-6), l, n);
      }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      {
        if (n === void 0) throw new Wa("JWE Encrypted Key missing");
        return S2c(e, t, n);
      }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      {
        if (n === void 0) throw new Wa("JWE Encrypted Key missing");
        if (typeof r.p2c !== "number") throw new Wa('JOSE Header "p2c" (PBES2 Count) missing or invalid');
        let s = (o === null || o === void 0 ? void 0 : o.maxPBES2Count) || 10000 /* 1e4 */;
        if (r.p2c > s) throw new Wa('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
        if (typeof r.p2s !== "string") throw new Wa('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
        let i;
        try {
          i = VT(r.p2s);
        } catch (a) {
          throw new Wa("Failed to base64url decode the p2s");
        }
        return y2c(e, t, n, r.p2c, i);
      }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      {
        if (n === void 0) throw new Wa("JWE Encrypted Key missing");
        return bnn(e, t, n);
      }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
      {
        if (n === void 0) throw new Wa("JWE Encrypted Key missing");
        if (typeof r.iv !== "string") throw new Wa('JOSE Header "iv" (Initialization Vector) missing or invalid');
        if (typeof r.tag !== "string") throw new Wa('JOSE Header "tag" (Authentication Tag) missing or invalid');
        let s;
        try {
          s = VT(r.iv);
        } catch (a) {
          throw new Wa("Failed to base64url decode the iv");
        }
        let i;
        try {
          i = VT(r.tag);
        } catch (a) {
          throw new Wa("Failed to base64url decode the tag");
        }
        return M2c(e, t, n, s, i);
      }
    default:
      throw new od('Invalid or unsupported "alg" (JWE Algorithm) header value');
  }
}
var $2c;