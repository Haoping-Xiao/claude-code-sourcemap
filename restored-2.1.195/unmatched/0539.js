// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fdn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fdn = Q((hrg, wys) => {
  wys.exports = (e, t = process.argv) => {
    let n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
      r = t.indexOf(n + e),
      o = t.indexOf("--");
    return r !== -1 && (o === -1 || r < o);
  };
});