// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lti
// matched 2.1.88 source: node_modules/@smithy/types/dist-cjs/index.js
// class=partial  jaccard=0.0846  score=1  fileCov=0.0846
// note: low-confidence suggestion: node_modules/@smithy/types/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lti]
ati = R(ZH(), 1);
var cti = e => {
    let t = [];
    for (let n in Nnt) {
      let r = Nnt[n];
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
  uti = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(n => {
      t[n.algorithmId()] = n.checksumConstructor();
    }), t;
  };