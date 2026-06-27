// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YP
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=new  jaccard=0.0221  score=1  fileCov=0.0221
// note: nearest: node_modules/node-forge/lib/util.js (0.0221); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YP] deps: RXo
IS = new TextEncoder(), fx = new TextDecoder();
var Fmr = e => {
    let t = e;
    if (typeof t === "string") t = IS.encode(t);
    let n = 32768,
      r = [];
    for (let o = 0; o < t.length; o += n) r.push(String.fromCharCode.apply(null, t.subarray(o, o + n)));
    return btoa(r.join(""));
  },
  xS = e => Fmr(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
  DXo = e => {
    let t = atob(e),
      n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return n;
  },
  VT = e => {
    let t = e;
    if (t instanceof Uint8Array) t = fx.decode(t);
    t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
      return DXo(t);
    } catch (n) {
      throw TypeError("The input to be decoded is not correctly encoded.");
    }
  };