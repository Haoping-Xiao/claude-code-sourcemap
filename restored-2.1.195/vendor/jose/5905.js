// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B2c
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IDm = async e => {
    if (e instanceof Uint8Array) return {
      kty: "oct",
      k: xS(e)
    };
    if (!OC(e)) throw TypeError(_w(e, ...Z_, "Uint8Array"));
    if (!e.extractable) throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
    let {
      ext: t,
      key_ops: n,
      alg: r,
      use: o,
      ...s
    } = await Ru.subtle.exportKey("jwk", e);
    return s;
  },
  U2c;