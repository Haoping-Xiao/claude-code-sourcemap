// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m2c
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/coffeescript.js
// class=new  jaccard=0.0114  score=0.0963  fileCov=0.0127
// note: nearest: node_modules/highlight.js/lib/languages/coffeescript.js (0.0114); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var m2c = E(() => {
  wm();
});
function mDm(e, t) {
  if (e instanceof Uint8Array) return Ru.subtle.importKey("raw", e, "PBKDF2", false, ["deriveBits"]);
  if (OC(e)) return dV(e, t, "deriveBits", "deriveKey"), e;
  throw TypeError(_w(e, ...Z_, "Uint8Array"));
}
async function g2c(e, t, n, r) {
  WXo(e);
  let o = ZFc(t, e),
    s = parseInt(t.slice(13, 16), 10),
    i = {
      hash: `SHA-${t.slice(8, 11)}`,
      iterations: n,
      name: "PBKDF2",
      salt: o
    },
    a = {
      length: s,
      name: "AES-KW"
    },
    l = await mDm(r, t);
  if (l.usages.includes("deriveBits")) return new Uint8Array(await Ru.subtle.deriveBits(i, l, s));
  if (l.usages.includes("deriveKey")) return Ru.subtle.deriveKey(i, l, a, false, ["wrapKey", "unwrapKey"]);
  throw TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var h2c = async (e, t, n, r = 2048, o = VNe(new Uint8Array(16))) => {
    let s = await g2c(o, e, r, t);
    return {
      encryptedKey: await _nn(e.slice(-6), s, n),
      p2c: r,
      p2s: xS(o)
    };
  },
  y2c = async (e, t, n, r, o) => {
    let s = await g2c(o, e, r, t);
    return bnn(e.slice(-6), s, n);
  };