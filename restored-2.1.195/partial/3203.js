// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Twa
// matched 2.1.88 source: node_modules/fs-extra/lib/move/move-sync.js
// class=partial  jaccard=0.1823  score=1  fileCov=0.1823
// note: low-confidence suggestion: node_modules/fs-extra/lib/move/move-sync.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Twa = Q((xWy, Hwa) => {
  var Ewa = Jb(),
    juo = require("path"),
    SHp = aUn().copySync,
    Awa = r3t().removeSync,
    EHp = bre().mkdirpSync,
    Swa = Z5e();
  function AHp(e, t, n) {
    n = n || {};
    let r = n.overwrite || n.clobber || !1,
      {
        srcStat: o,
        isChangingCase: s = !1
      } = Swa.checkPathsSync(e, t, "move", n);
    if (Swa.checkParentPathsSync(e, o, t, "move"), !HHp(t)) EHp(juo.dirname(t));
    return THp(e, t, r, s);
  }
  function HHp(e) {
    let t = juo.dirname(e);
    return juo.parse(t).root === t;
  }
  function THp(e, t, n, r) {
    if (r) return Fuo(e, t, n);
    if (n) return Awa(t), Fuo(e, t, n);
    if (Ewa.existsSync(t)) throw Error("dest already exists.");
    return Fuo(e, t, n);
  }
  function Fuo(e, t, n) {
    try {
      Ewa.renameSync(e, t);
    } catch (r) {
      if (r.code !== "EXDEV") throw r;
      return vHp(e, t, n);
    }
  }
  function vHp(e, t, n) {
    return SHp(e, t, {
      overwrite: n,
      errorOnExist: !0
    }), Awa(e);
  }
  Hwa.exports = AHp;
});