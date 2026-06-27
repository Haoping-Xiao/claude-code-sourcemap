// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PDr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PDr = Q(eRs => {
  var Z0s = Q0s(),
    jB = Array.from({
      length: 256
    }, (e, t) => t.toString(16).padStart(2, "0")),
    oFu = () => {
      if (Z0s.randomUUID) return Z0s.randomUUID();
      let e = new Uint8Array(16);
      return crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, jB[e[0]] + jB[e[1]] + jB[e[2]] + jB[e[3]] + "-" + jB[e[4]] + jB[e[5]] + "-" + jB[e[6]] + jB[e[7]] + "-" + jB[e[8]] + jB[e[9]] + "-" + jB[e[10]] + jB[e[11]] + jB[e[12]] + jB[e[13]] + jB[e[14]] + jB[e[15]];
    };
  eRs.v4 = oFu;
});