// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eJo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0073  score=0.0665  fileCov=0.0081
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0073); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function xDm(e, t, n, r, o = {}) {
  let s, i, a;
  switch (XNe(e, n, "encrypt"), e) {
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
        if (!Qmr(n)) throw new od("ECDH with the provided key is not allowed or not supported by your javascript runtime");
        let {
            apu: l,
            apv: c
          } = o,
          {
            epk: u
          } = o;
        u || (u = (await p2c(n)).privateKey);
        let {
            x: d,
            y: p,
            crv: f,
            kty: m
          } = await ngr(u),
          g = await Jmr(n, u, e === "ECDH-ES" ? t : e, e === "ECDH-ES" ? Snn(t) : parseInt(e.slice(-5, -2), 10), l, c);
        if (i = {
          epk: {
            x: d,
            crv: f,
            kty: m
          }
        }, m === "EC") i.epk.y = p;
        if (l) i.apu = xS(l);
        if (c) i.apv = xS(c);
        if (e === "ECDH-ES") {
          a = g;
          break;
        }
        a = r || Qme(t);
        let h = e.slice(-6);
        s = await _nn(h, g, a);
        break;
      }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      {
        a = r || Qme(t), s = await b2c(e, n, a);
        break;
      }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      {
        a = r || Qme(t);
        let {
          p2c: l,
          p2s: c
        } = o;
        ({
          encryptedKey: s,
          ...i
        } = await h2c(e, n, a, l, c));
        break;
      }
    case "A128KW":
    case "A192KW":
    case "A256KW":
      {
        a = r || Qme(t), s = await _nn(e, n, a);
        break;
      }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
      {
        a = r || Qme(t);
        let {
          iv: l
        } = o;
        ({
          encryptedKey: s,
          ...i
        } = await P2c(e, n, a, l));
        break;
      }
    default:
      throw new od('Invalid or unsupported "alg" (JWE Algorithm) header value');
  }
  return {
    cek: a,
    encryptedKey: s,
    parameters: i
  };
}
var rgr;