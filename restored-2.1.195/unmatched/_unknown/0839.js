// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MRs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MRs = E(() => {
  PRs = R(ZH(), 1);
});
var $Rs = e => {
    let t = [];
    for (let n in Xet) {
      let r = Xet[n];
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
  ORs = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(n => {
      t[n.algorithmId()] = n.checksumConstructor();
    }), t;
  };