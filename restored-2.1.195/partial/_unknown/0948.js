// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oBs
// matched 2.1.88 source: node_modules/@smithy/types/dist-cjs/index.js
// class=partial  jaccard=0.0846  score=1  fileCov=0.0846
// note: low-confidence suggestion: node_modules/@smithy/types/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var oBs = E(() => {
  rBs = R(ZH(), 1);
});
var sBs = e => {
    let t = [];
    for (let n in wtt) {
      let r = wtt[n];
      if (e[r] === void 0) continue;
      t.push({
        algorithmId: () => r,
        checksumConstructor: () => e[r]
      });
    }
    return {
      addChecksumAlgorithm(n) {
        t.push(n);
      },
      checksumAlgorithms() {
        return t;
      }
    };
  },
  iBs = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(n => {
      t[n.algorithmId()] = n.checksumConstructor();
    }), t;
  };