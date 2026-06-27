// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DSa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DSa = Q((y3y, Sco) => {
  var $_p = CSa(),
    O_p = xSa(),
    N_p = RSa(),
    LSa = e => {
      if (typeof e !== "string" || e.length === 0) return 0;
      if (e = $_p(e), e.length === 0) return 0;
      e = e.replace(N_p(), "  ");
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        let r = e.codePointAt(n);
        if (r <= 31 || r >= 127 && r <= 159) continue;
        if (r >= 768 && r <= 879) continue;
        if (r > 65535) n++;
        t += O_p(r) ? 2 : 1;
      }
      return t;
    };
  Sco.exports = LSa;
  Sco.exports.default = LSa;
});