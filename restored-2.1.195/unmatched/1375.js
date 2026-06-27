// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lti
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lti = E(() => {
  ati = R(ZH(), 1);
});
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