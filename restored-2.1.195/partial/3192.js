// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $va
// matched 2.1.88 source: node_modules/fs-extra/lib/ensure/link.js
// class=partial  jaccard=0.208  score=1  fileCov=0.208
// note: low-confidence suggestion: node_modules/fs-extra/lib/ensure/link.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $va = Q((_Wy, Mva) => {
  var OAp = _T().fromCallback,
    Lva = require("path"),
    KLe = Jb(),
    Dva = bre(),
    NAp = VLe().pathExists,
    {
      areIdentical: Pva
    } = Z5e();
  function BAp(e, t, n) {
    function r(o, s) {
      KLe.link(o, s, i => {
        if (i) return n(i);
        n(null);
      });
    }
    KLe.lstat(t, (o, s) => {
      KLe.lstat(e, (i, a) => {
        if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
        if (s && Pva(a, s)) return n(null);
        let l = Lva.dirname(t);
        NAp(l, (c, u) => {
          if (c) return n(c);
          if (u) return r(e, t);
          Dva.mkdirs(l, d => {
            if (d) return n(d);
            r(e, t);
          });
        });
      });
    });
  }
  function UAp(e, t) {
    let n;
    try {
      n = KLe.lstatSync(t);
    } catch {}
    try {
      let s = KLe.lstatSync(e);
      if (n && Pva(s, n)) return;
    } catch (s) {
      throw s.message = s.message.replace("lstat", "ensureLink"), s;
    }
    let r = Lva.dirname(t);
    if (KLe.existsSync(r)) return KLe.linkSync(e, t);
    return Dva.mkdirsSync(r), KLe.linkSync(e, t);
  }
  Mva.exports = {
    createLink: OAp(BAp),
    createLinkSync: UAp
  };
});