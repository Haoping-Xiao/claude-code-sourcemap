// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _2c
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0254  score=0.3107  fileCov=0.0269
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0254); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Y7e = (e, t) => {
  if (e.startsWith("RS") || e.startsWith("PS")) {
    let {
      modulusLength: n
    } = t.algorithm;
    if (typeof n !== "number" || n < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
  }
};
var b2c = async (e, t, n) => {
    if (!OC(t)) throw TypeError(_w(t, ...Z_));
    if (dV(t, e, "encrypt", "wrapKey"), Y7e(e, t), t.usages.includes("encrypt")) return new Uint8Array(await Ru.subtle.encrypt(Nvt(e), t, n));
    if (t.usages.includes("wrapKey")) {
      let r = await Ru.subtle.importKey("raw", n, ...Ovt);
      return new Uint8Array(await Ru.subtle.wrapKey("raw", r, t, Nvt(e)));
    }
    throw TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
  },
  S2c = async (e, t, n) => {
    if (!OC(t)) throw TypeError(_w(t, ...Z_));
    if (dV(t, e, "decrypt", "unwrapKey"), Y7e(e, t), t.usages.includes("decrypt")) return new Uint8Array(await Ru.subtle.decrypt(Nvt(e), t, n));
    if (t.usages.includes("unwrapKey")) {
      let r = await Ru.subtle.unwrapKey("raw", n, t, Nvt(e), ...Ovt);
      return new Uint8Array(await Ru.subtle.exportKey("raw", r));
    }
    throw TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
  };