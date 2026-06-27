// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iwn
// matched 2.1.88 source: node_modules/semver/ranges/outside.js
// class=partial  jaccard=0.2034  score=1  fileCov=0.2034
// note: low-confidence suggestion: node_modules/semver/ranges/outside.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iwn = Q((t0h, bbi) => {
  var gAd = cU(),
    _bi = iOt(),
    {
      ANY: hAd
    } = _bi,
    yAd = l7(),
    _Ad = lOt(),
    hbi = oOt(),
    ybi = ewn(),
    bAd = nwn(),
    SAd = twn(),
    EAd = (e, t, n, r) => {
      e = new gAd(e, r), t = new yAd(t, r);
      let o, s, i, a, l;
      switch (n) {
        case ">":
          o = hbi, s = bAd, i = ybi, a = ">", l = ">=";
          break;
        case "<":
          o = ybi, s = SAd, i = hbi, a = "<", l = "<=";
          break;
        default:
          throw TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (_Ad(e, t, r)) return !1;
      for (let c = 0; c < t.set.length; ++c) {
        let u = t.set[c],
          d = null,
          p = null;
        if (u.forEach(f => {
          if (f.semver === hAd) f = new _bi(">=0.0.0");
          if (d = d || f, p = p || f, o(f.semver, d.semver, r)) d = f;else if (i(f.semver, p.semver, r)) p = f;
        }), d.operator === a || d.operator === l) return !1;
        if ((!p.operator || p.operator === a) && s(e, p.semver)) return !1;else if (p.operator === l && i(e, p.semver)) return !1;
      }
      return !0;
    };
  bbi.exports = EAd;
});