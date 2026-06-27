// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bwa
// matched 2.1.88 source: node_modules/fs-extra/lib/move/move.js
// class=partial  jaccard=0.1974  score=1  fileCov=0.1974
// note: low-confidence suggestion: node_modules/fs-extra/lib/move/move.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bwa = Q((IWy, _wa) => {
  var fHp = Jb(),
    Uuo = require("path"),
    mHp = aUn().copy,
    ywa = r3t().remove,
    gHp = bre().mkdirp,
    hHp = VLe().pathExists,
    gwa = Z5e();
  function yHp(e, t, n, r) {
    if (typeof n === "function") r = n, n = {};
    n = n || {};
    let o = n.overwrite || n.clobber || false;
    gwa.checkPaths(e, t, "move", n, (s, i) => {
      if (s) return r(s);
      let {
        srcStat: a,
        isChangingCase: l = false
      } = i;
      gwa.checkParentPaths(e, a, t, "move", c => {
        if (c) return r(c);
        if (_Hp(t)) return hwa(e, t, o, l, r);
        gHp(Uuo.dirname(t), u => {
          if (u) return r(u);
          return hwa(e, t, o, l, r);
        });
      });
    });
  }
  function _Hp(e) {
    let t = Uuo.dirname(e);
    return Uuo.parse(t).root === t;
  }
  function hwa(e, t, n, r, o) {
    if (r) return Buo(e, t, n, o);
    if (n) return ywa(t, s => {
      if (s) return o(s);
      return Buo(e, t, n, o);
    });
    hHp(t, (s, i) => {
      if (s) return o(s);
      if (i) return o(Error("dest already exists."));
      return Buo(e, t, n, o);
    });
  }
  function Buo(e, t, n, r) {
    fHp.rename(e, t, o => {
      if (!o) return r();
      if (o.code !== "EXDEV") return r(o);
      return bHp(e, t, n, r);
    });
  }
  function bHp(e, t, n, r) {
    mHp(e, t, {
      overwrite: n,
      errorOnExist: true
    }, s => {
      if (s) return r(s);
      return ywa(e, r);
    });
  }
  _wa.exports = yHp;
});