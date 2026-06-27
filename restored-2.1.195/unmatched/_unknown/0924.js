// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E1s
// matched 2.1.88 source: node_modules/@aws-sdk/token-providers/dist-cjs/index.js
// class=new  jaccard=0.0175  score=1  fileCov=0.0175
// note: nearest: node_modules/@aws-sdk/token-providers/dist-cjs/index.js (0.0175); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var E1s = E(() => {
  S1s = R(by(), 1);
});
var A1s,
  H1s,
  d9u,
  T1s = (e, t) => {
    let n = A1s.getSSOTokenFilepath(e),
      r = JSON.stringify(t, null, 2);
    return d9u(n, r);
  };