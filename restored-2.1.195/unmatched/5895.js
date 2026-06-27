// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k2c
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var k2c = E(() => {
  rB();
  wm();
  sB();
  YXo = _Dm;
});
async function R2c(e, t, n) {
  if (typeof e !== "string" || e.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) throw TypeError('"spki" must be SPKI formatted string');
  return KXo(e, t, n);
}
async function L2c(e, t, n) {
  if (typeof e !== "string" || e.indexOf("-----BEGIN CERTIFICATE-----") !== 0) throw TypeError('"x509" must be X.509 formatted string');
  return x2c(e, t, n);
}
async function D2c(e, t, n) {
  if (typeof e !== "string" || e.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) throw TypeError('"pkcs8" must be PKCS#8 formatted string');
  return C2c(e, t, n);
}
async function YNe(e, t, n) {
  var r;
  if (!eb(e)) throw TypeError("JWK must be an object");
  switch (t || (t = e.alg), e.kty) {
    case "oct":
      if (typeof e.k !== "string" || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
      if (n !== null && n !== void 0 || (n = e.ext !== !0), n) return YXo({
        ...e,
        alg: t,
        ext: (r = e.ext) !== null && r !== void 0 ? r : !1
      });
      return VT(e.k);
    case "RSA":
      if (e.oth !== void 0) throw new od('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
    case "EC":
    case "OKP":
      return YXo({
        ...e,
        alg: t
      });
    default:
      throw new od('Unsupported "kty" (Key Type) Parameter value');
  }
}