// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hnn
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/util.mjs
// class=new  jaccard=0.0548  score=0.2097  fileCov=0.0691
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/util.mjs (0.0548); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hnn] deps: iie
XNe = EDm;
async function ADm(e, t, n, r, o) {
  if (!(n instanceof Uint8Array)) throw TypeError(_w(n, "Uint8Array"));
  let s = parseInt(e.slice(1, 4), 10),
    i = await Ru.subtle.importKey("raw", n.subarray(s >> 3), "AES-CBC", false, ["encrypt"]),
    a = await Ru.subtle.importKey("raw", n.subarray(0, s >> 3), {
      hash: `SHA-${s << 1}`,
      name: "HMAC"
    }, false, ["sign"]),
    l = new Uint8Array(await Ru.subtle.encrypt({
      iv: r,
      name: "AES-CBC"
    }, i, t)),
    c = oB(o, r, l, Nmr(o.length << 3)),
    u = new Uint8Array((await Ru.subtle.sign("HMAC", a, c)).slice(0, s >> 3));
  return {
    ciphertext: l,
    tag: u
  };
}
async function HDm(e, t, n, r, o) {
  let s;
  if (n instanceof Uint8Array) s = await Ru.subtle.importKey("raw", n, "AES-GCM", false, ["encrypt"]);else dV(n, e, "encrypt"), s = n;
  let i = new Uint8Array(await Ru.subtle.encrypt({
      additionalData: o,
      iv: r,
      name: "AES-GCM",
      tagLength: 128
    }, s, t)),
    a = i.slice(-16);
  return {
    ciphertext: i.slice(0, -16),
    tag: a
  };
}
var TDm = async (e, t, n, r, o) => {
    if (!OC(n) && !(n instanceof Uint8Array)) throw TypeError(_w(n, ...Z_, "Uint8Array"));
    switch (zmr(e, r), e) {
      case "A128CBC-HS256":
      case "A192CBC-HS384":
      case "A256CBC-HS512":
        if (n instanceof Uint8Array) Mvt(n, parseInt(e.slice(-3), 10));
        return ADm(e, t, n, r, o);
      case "A128GCM":
      case "A192GCM":
      case "A256GCM":
        if (n instanceof Uint8Array) Mvt(n, parseInt(e.slice(1, 4), 10));
        return HDm(e, t, n, r, o);
      default:
        throw new od("Unsupported JWE Content Encryption Algorithm");
    }
  },
  Tnn;