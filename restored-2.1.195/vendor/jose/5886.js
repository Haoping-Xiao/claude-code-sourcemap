// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jXo
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jXo]
fDm = [{
  hash: "SHA-256",
  name: "HMAC"
}, true, ["sign"]], Ovt = fDm;
function u2c(e, t) {
  if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw TypeError(`Invalid key size for alg: ${t}`);
}
function d2c(e, t, n) {
  if (OC(e)) return dV(e, t, n), e;
  if (e instanceof Uint8Array) return Ru.subtle.importKey("raw", e, "AES-KW", true, [n]);
  throw TypeError(_w(e, ...Z_, "Uint8Array"));
}
var _nn = async (e, t, n) => {
    let r = await d2c(t, e, "wrapKey");
    u2c(r, e);
    let o = await Ru.subtle.importKey("raw", n, ...Ovt);
    return new Uint8Array(await Ru.subtle.wrapKey("raw", o, r, "AES-KW"));
  },
  bnn = async (e, t, n) => {
    let r = await d2c(t, e, "unwrapKey");
    u2c(r, e);
    let o = await Ru.subtle.unwrapKey("raw", n, r, "AES-KW", ...Ovt);
    return new Uint8Array(await Ru.subtle.exportKey("raw", o));
  };