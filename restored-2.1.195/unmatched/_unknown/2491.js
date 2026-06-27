// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aVi
// matched 2.1.88 source: node_modules/semver/index.js
// class=new  jaccard=0.0449  score=0.8757  fileCov=0.0452
// note: nearest: node_modules/semver/index.js (0.0449); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aVi = Q((koy, iVi) => {
  var oVi = /^[0-9]+$/,
    sVi = (e, t) => {
      if (typeof e === "number" && typeof t === "number") return e === t ? 0 : e < t ? -1 : 1;
      let n = oVi.test(e),
        r = oVi.test(t);
      if (n && r) e = +e, t = +t;
      return e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
    },
    fqd = (e, t) => sVi(t, e);
  iVi.exports = {
    compareIdentifiers: sVi,
    rcompareIdentifiers: fqd
  };
});