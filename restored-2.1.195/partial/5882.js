// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iie
// matched 2.1.88 source: node_modules/node-forge/lib/aes.js
// class=partial  jaccard=0.0921  score=0.1525  fileCov=0.1888
// note: low-confidence suggestion: node_modules/node-forge/lib/aes.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iie = E(() => {
  rB();
  Z_ = ["CryptoKey"];
});
async function lDm(e, t, n, r, o, s) {
  if (!(t instanceof Uint8Array)) throw TypeError(_w(t, "Uint8Array"));
  let i = parseInt(e.slice(1, 4), 10),
    a = await Ru.subtle.importKey("raw", t.subarray(i >> 3), "AES-CBC", !1, ["decrypt"]),
    l = await Ru.subtle.importKey("raw", t.subarray(0, i >> 3), {
      hash: `SHA-${i << 1}`,
      name: "HMAC"
    }, !1, ["sign"]),
    c = oB(s, r, n, Nmr(s.length << 3)),
    u = new Uint8Array((await Ru.subtle.sign("HMAC", l, c)).slice(0, i >> 3)),
    d;
  try {
    d = r2c(o, u);
  } catch (f) {}
  if (!d) throw new qNe();
  let p;
  try {
    p = new Uint8Array(await Ru.subtle.decrypt({
      iv: r,
      name: "AES-CBC"
    }, a, n));
  } catch (f) {}
  if (!p) throw new qNe();
  return p;
}
async function cDm(e, t, n, r, o, s) {
  let i;
  if (t instanceof Uint8Array) i = await Ru.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"]);else dV(t, e, "decrypt"), i = t;
  try {
    return new Uint8Array(await Ru.subtle.decrypt({
      additionalData: s,
      iv: r,
      name: "AES-GCM",
      tagLength: 128
    }, i, oB(n, o)));
  } catch (a) {
    throw new qNe();
  }
}
var uDm = async (e, t, n, r, o, s) => {
    if (!OC(t) && !(t instanceof Uint8Array)) throw TypeError(_w(t, ...Z_, "Uint8Array"));
    switch (zmr(e, r), e) {
      case "A128CBC-HS256":
      case "A192CBC-HS384":
      case "A256CBC-HS512":
        if (t instanceof Uint8Array) Mvt(t, parseInt(e.slice(-3), 10));
        return lDm(e, t, n, r, o, s);
      case "A128GCM":
      case "A192GCM":
      case "A256GCM":
        if (t instanceof Uint8Array) Mvt(t, parseInt(e.slice(1, 4), 10));
        return cDm(e, t, n, r, o, s);
      default:
        throw new od("Unsupported JWE Content Encryption Algorithm");
    }
  },
  Ymr;