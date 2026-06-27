// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kRn
// matched 2.1.88 source: node_modules/semver/ranges/outside.js
// class=partial  jaccard=0.2034  score=1  fileCov=0.2034
// note: low-confidence suggestion: node_modules/semver/ranges/outside.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kRn = Q((YKh, Oji) => {
  var ejd = kU(),
    $ji = pBt(),
    {
      ANY: tjd
    } = $ji,
    njd = G7(),
    rjd = mBt(),
    Pji = uBt(),
    Mji = TRn(),
    ojd = wRn(),
    sjd = vRn(),
    ijd = (e, t, n, r) => {
      e = new ejd(e, r), t = new njd(t, r);
      let o, s, i, a, l;
      switch (n) {
        case ">":
          o = Pji, s = ojd, i = Mji, a = ">", l = ">=";
          break;
        case "<":
          o = Mji, s = sjd, i = Pji, a = "<", l = "<=";
          break;
        default:
          throw TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (rjd(e, t, r)) return !1;
      for (let c = 0; c < t.set.length; ++c) {
        let u = t.set[c],
          d = null,
          p = null;
        if (u.forEach(f => {
          if (f.semver === tjd) f = new $ji(">=0.0.0");
          if (d = d || f, p = p || f, o(f.semver, d.semver, r)) d = f;else if (i(f.semver, p.semver, r)) p = f;
        }), d.operator === a || d.operator === l) return !1;
        if ((!p.operator || p.operator === a) && s(e, p.semver)) return !1;else if (p.operator === l && i(e, p.semver)) return !1;
      }
      return !0;
    };
  Oji.exports = ijd;
});