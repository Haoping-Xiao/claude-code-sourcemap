// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rGc
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function IQo(e, t, n) {
  if (typeof e !== "string" || e.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) throw TypeError('"pkcs8" must be PKCS#8 formatted string');
  return nGc(e, t, n);
}
async function xQo(e, t, n) {
  if (!B3(e)) throw TypeError("JWK must be an object");
  let r;
  switch (t ??= e.alg, r ??= n?.extractable ?? e.ext, e.kty) {
    case "oct":
      if (typeof e.k !== "string" || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
      return ege(e.k);
    case "RSA":
      if ("oth" in e && e.oth !== void 0) throw new nh('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      return Zvt({
        ...e,
        alg: t,
        ext: r
      });
    case "AKP":
      {
        if (typeof e.alg !== "string" || !e.alg) throw TypeError('missing "alg" (Algorithm) Parameter value');
        if (t !== void 0 && t !== e.alg) throw TypeError("JWK alg and alg option value mismatch");
        return Zvt({
          ...e,
          ext: r
        });
      }
    case "EC":
    case "OKP":
      return Zvt({
        ...e,
        alg: t,
        ext: r
      });
    default:
      throw new nh('Unsupported "kty" (Key Type) Parameter value');
  }
}