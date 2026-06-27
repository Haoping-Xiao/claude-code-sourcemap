// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b1s
// matched 2.1.88 source: node_modules/@aws-sdk/token-providers/dist-cjs/index.js
// class=new  jaccard=0.0569  score=1  fileCov=0.0569
// note: nearest: node_modules/@aws-sdk/token-providers/dist-cjs/index.js (0.0569); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var b1s = E(() => {
  _1s = R(by(), 1);
});
var S1s,
  sIe = (e, t, n = !1) => {
    if (typeof t > "u") throw new S1s.TokenProviderError(`Value not present for '${e}' in SSO Token${n ? ". Cannot refresh" : ""}. ${ctt}`, !1);
  };