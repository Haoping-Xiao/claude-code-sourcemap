// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F3c
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function KMm(e, t) {
  if (e instanceof Uint8Array) return crypto.subtle.importKey("raw", e, "PBKDF2", false, ["deriveBits"]);
  return iK(e, t, "deriveBits"), e;
}
async function j3c(e, t, n, r) {
  if (!(e instanceof Uint8Array) || e.length < 8) throw new Ac("PBES2 Salt Input must be 8 or more octets");
  let o = YMm(t, e),
    s = parseInt(t.slice(13, 16), 10),
    i = {
      hash: `SHA-${t.slice(8, 11)}`,
      iterations: n,
      name: "PBKDF2",
      salt: o
    },
    a = await KMm(r, t);
  return new Uint8Array(await crypto.subtle.deriveBits(i, a, s));
}
async function G3c(e, t, n, r = 2048, o = crypto.getRandomValues(new Uint8Array(16))) {
  let s = await j3c(o, e, r, t);
  return {
    encryptedKey: await qnn(e.slice(-6), s, n),
    p2c: r,
    p2s: ER(o)
  };
}
async function W3c(e, t, n, r, o) {
  let s = await j3c(o, e, r, t);
  return Vnn(e.slice(-6), s, n);
}
var YMm = (e, t) => iD(aD(e), Uint8Array.of(0), t);