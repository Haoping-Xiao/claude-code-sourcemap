// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B3s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var B3s = E(() => {
  N3s = R(ZH(), 1);
});
var U3s = e => {
    let t = [];
    for (let n in Gtt) {
      let r = Gtt[n];
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
  F3s = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(n => {
      t[n.algorithmId()] = n.checksumConstructor();
    }), t;
  };