// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jwi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Jwi = Q(ist => {
  Object.defineProperty(ist, "__esModule", {
    value: true
  });
  ist.isCompatible = ist._makeCompatibilityCheck = void 0;
  var ORd = P8r(),
    Ywi = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function Xwi(e) {
    let t = new Set([e]),
      n = new Set(),
      r = e.match(Ywi);
    if (!r) return () => false;
    let o = {
      major: +r[1],
      minor: +r[2],
      patch: +r[3],
      prerelease: r[4]
    };
    if (o.prerelease != null) return function (l) {
      return l === e;
    };
    function s(a) {
      return n.add(a), false;
    }
    function i(a) {
      return t.add(a), true;
    }
    return function (l) {
      if (t.has(l)) return true;
      if (n.has(l)) return false;
      let c = l.match(Ywi);
      if (!c) return s(l);
      let u = {
        major: +c[1],
        minor: +c[2],
        patch: +c[3],
        prerelease: c[4]
      };
      if (u.prerelease != null) return s(l);
      if (o.major !== u.major) return s(l);
      if (o.major === 0) {
        if (o.minor === u.minor && o.patch <= u.patch) return i(l);
        return s(l);
      }
      if (o.minor <= u.minor) return i(l);
      return s(l);
    };
  }
  ist._makeCompatibilityCheck = Xwi;
  ist.isCompatible = Xwi(ORd.VERSION);
});