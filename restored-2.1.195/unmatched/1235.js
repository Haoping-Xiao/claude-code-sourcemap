// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bzs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bzs = E(() => {
  Nzs = R(ZH(), 1);
});
var Uzs = e => {
    let t = [];
    for (let n in mnt) {
      let r = mnt[n];
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
  Fzs = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(n => {
      t[n.algorithmId()] = n.checksumConstructor();
    }), t;
  };