// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b$r
// matched 2.1.88 source: node_modules/@aws-sdk/token-providers/dist-cjs/index.js
// class=new  jaccard=0.0285  score=1  fileCov=0.0285
// note: nearest: node_modules/@aws-sdk/token-providers/dist-cjs/index.js (0.0285); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var b$r = E(() => {
  y1s();
  b1s();
  E1s();
  v1s();
  Ttt = R(by(), 1), iIe = R(ej(), 1), w1s = new Date(0);
});
var C1s = () => {};
var vtt,
  Lhn = (e = {}) => vtt.memoize(vtt.chain(Rhn(e), async () => {
    throw new vtt.TokenProviderError("Could not load token from any providers", !1);
  }), t => t.expiration !== void 0 && t.expiration.getTime() - Date.now() < 300000, t => t.expiration !== void 0);