// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LTa
// matched 2.1.88 source: node_modules/fs-extra/lib/move/move-sync.js
// class=partial  jaccard=0.1823  score=1  fileCov=0.1823
// note: low-confidence suggestion: node_modules/fs-extra/lib/move/move-sync.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LTa = Q((eWy, RTa) => {
  var xTa = Jb(),
    xuo = require("path"),
    kEp = ZBn().copySync,
    kTa = Y4t().removeSync,
    REp = yre().mkdirpSync,
    ITa = J5e();
  function LEp(e, t, n) {
    n = n || {};
    let r = n.overwrite || n.clobber || false,
      {
        srcStat: o,
        isChangingCase: s = false
      } = ITa.checkPathsSync(e, t, "move", n);
    if (ITa.checkParentPathsSync(e, o, t, "move"), !DEp(t)) REp(xuo.dirname(t));
    return PEp(e, t, r, s);
  }
  function DEp(e) {
    let t = xuo.dirname(e);
    return xuo.parse(t).root === t;
  }
  function PEp(e, t, n, r) {
    if (r) return Iuo(e, t, n);
    if (n) return kTa(t), Iuo(e, t, n);
    if (xTa.existsSync(t)) throw Error("dest already exists.");
    return Iuo(e, t, n);
  }
  function Iuo(e, t, n) {
    try {
      xTa.renameSync(e, t);
    } catch (r) {
      if (r.code !== "EXDEV") throw r;
      return MEp(e, t, n);
    }
  }
  function MEp(e, t, n) {
    return kEp(e, t, {
      overwrite: n,
      errorOnExist: true
    }), kTa(e);
  }
  RTa.exports = LEp;
});