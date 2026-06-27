// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VLe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VLe = Q((lWy, VTa) => {
  var UEp = _T().fromPromise,
    qTa = Q5e();
  function FEp(e) {
    return qTa.access(e).then(() => true).catch(() => false);
  }
  VTa.exports = {
    pathExists: UEp(FEp),
    pathExistsSync: qTa.existsSync
  };
});