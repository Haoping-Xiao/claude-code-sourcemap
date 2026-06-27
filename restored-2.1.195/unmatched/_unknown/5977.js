// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kgr
// matched 2.1.88 source: node_modules/node-forge/lib/ed25519.js
// class=new  jaccard=0.0338  score=0.2578  fileCov=0.0374
// note: nearest: node_modules/node-forge/lib/ed25519.js (0.0338); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kgr = E(() => {
  nXe = R(H3c(), 1), gQo = nXe.default.Issuer, DzH = nXe.default.Strategy, PzH = nXe.default.TokenSet, MzH = nXe.default.errors, xgr = nXe.default.custom, Yvt = nXe.default.generators;
});
var T3c = 1;
function iD(...e) {
  let t = e.reduce((o, {
      length: s
    }) => o + s, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let o of e) n.set(o, r), r += o.length;
  return n;
}
function hQo(e, t, n) {
  if (t < 0 || t >= 4294967296) throw RangeError(`value must be >= 0 and <= 4294967295. Received ${t}`);
  e.set([t >>> 24, t >>> 16, t >>> 8, t & 255], n);
}
function yQo(e) {
  let t = Math.floor(e / 4294967296),
    n = e % 4294967296,
    r = new Uint8Array(8);
  return hQo(r, t, 0), hQo(r, n, 4), r;
}
function Rgr(e) {
  let t = new Uint8Array(4);
  return hQo(t, e), t;
}
function aD(e) {
  let t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r > 127) throw TypeError("non-ASCII string encountered in encode()");
    t[n] = r;
  }
  return t;
}
var rXe, oK;