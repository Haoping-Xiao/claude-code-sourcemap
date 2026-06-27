// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CTa
// matched 2.1.88 source: node_modules/fs-extra/lib/move/move.js
// class=partial  jaccard=0.1974  score=1  fileCov=0.1974
// note: low-confidence suggestion: node_modules/fs-extra/lib/move/move.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CTa = Q((ZGy, wTa) => {
  var HEp = Jb(),
    Cuo = require("path"),
    TEp = ZBn().copy,
    vTa = Y4t().remove,
    vEp = yre().mkdirp,
    wEp = FLe().pathExists,
    HTa = J5e();
  function CEp(e, t, n, r) {
    if (typeof n === "function") r = n, n = {};
    n = n || {};
    let o = n.overwrite || n.clobber || false;
    HTa.checkPaths(e, t, "move", n, (s, i) => {
      if (s) return r(s);
      let {
        srcStat: a,
        isChangingCase: l = false
      } = i;
      HTa.checkParentPaths(e, a, t, "move", c => {
        if (c) return r(c);
        if (IEp(t)) return TTa(e, t, o, l, r);
        vEp(Cuo.dirname(t), u => {
          if (u) return r(u);
          return TTa(e, t, o, l, r);
        });
      });
    });
  }
  function IEp(e) {
    let t = Cuo.dirname(e);
    return Cuo.parse(t).root === t;
  }
  function TTa(e, t, n, r, o) {
    if (r) return wuo(e, t, n, o);
    if (n) return vTa(t, s => {
      if (s) return o(s);
      return wuo(e, t, n, o);
    });
    wEp(t, (s, i) => {
      if (s) return o(s);
      if (i) return o(Error("dest already exists."));
      return wuo(e, t, n, o);
    });
  }
  function wuo(e, t, n, r) {
    HEp.rename(e, t, o => {
      if (!o) return r();
      if (o.code !== "EXDEV") return r(o);
      return xEp(e, t, n, r);
    });
  }
  function xEp(e, t, n, r) {
    TEp(e, t, {
      overwrite: n,
      errorOnExist: true
    }, s => {
      if (s) return r(s);
      return vTa(e, r);
    });
  }
  wTa.exports = CEp;
});