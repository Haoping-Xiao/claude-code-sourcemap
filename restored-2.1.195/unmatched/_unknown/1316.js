// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bJs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bJs = E(() => {
  _Js = R(ZH(), 1);
});
var SJs = e => {
    let t = [];
    for (let n in Lnt) {
      let r = Lnt[n];
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
  EJs = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(n => {
      t[n.algorithmId()] = n.checksumConstructor();
    }), t;
  };