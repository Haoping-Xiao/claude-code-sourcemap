// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FLe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FLe = Q((RGy, XAa) => {
  var Fbp = _T().fromPromise,
    YAa = X5e();
  function jbp(e) {
    return YAa.access(e).then(() => true).catch(() => false);
  }
  XAa.exports = {
    pathExists: Fbp(jbp),
    pathExistsSync: YAa.existsSync
  };
});