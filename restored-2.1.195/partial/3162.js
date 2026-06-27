// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UHa
// matched 2.1.88 source: node_modules/fs-extra/lib/ensure/link.js
// class=partial  jaccard=0.208  score=1  fileCov=0.208
// note: low-confidence suggestion: node_modules/fs-extra/lib/ensure/link.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UHa = Q((FGy, BHa) => {
  var NSp = _T().fromCallback,
    $Ha = require("path"),
    GLe = Jb(),
    OHa = yre(),
    BSp = FLe().pathExists,
    {
      areIdentical: NHa
    } = J5e();
  function USp(e, t, n) {
    function r(o, s) {
      GLe.link(o, s, i => {
        if (i) return n(i);
        n(null);
      });
    }
    GLe.lstat(t, (o, s) => {
      GLe.lstat(e, (i, a) => {
        if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
        if (s && NHa(a, s)) return n(null);
        let l = $Ha.dirname(t);
        BSp(l, (c, u) => {
          if (c) return n(c);
          if (u) return r(e, t);
          OHa.mkdirs(l, d => {
            if (d) return n(d);
            r(e, t);
          });
        });
      });
    });
  }
  function FSp(e, t) {
    let n;
    try {
      n = GLe.lstatSync(t);
    } catch {}
    try {
      let s = GLe.lstatSync(e);
      if (n && NHa(s, n)) return;
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureLink"), s;
    }
    let r = $Ha.dirname(t);
    if (GLe.existsSync(r)) return GLe.linkSync(e, t);
    return OHa.mkdirsSync(r), GLe.linkSync(e, t);
  }
  BHa.exports = {
    createLink: NSp(USp),
    createLinkSync: FSp
  };
});