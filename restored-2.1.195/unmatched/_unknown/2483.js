// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lqi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lqi = Q((Hoy, Rqi) => {
  var kqi = () => !0,
    iDn = null,
    O5d = () => {
      if (!iDn) if (kqi() && process.report) {
        let e = process.report.excludeNetwork;
        process.report.excludeNetwork = !0, iDn = process.report.getReport(), process.report.excludeNetwork = e;
      } else iDn = {};
      return iDn;
    };
  Rqi.exports = {
    isLinux: kqi,
    getReport: O5d
  };
});