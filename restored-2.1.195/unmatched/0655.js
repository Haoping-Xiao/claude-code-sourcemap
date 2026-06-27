// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MAs = Q((gug, a0r) => {
  var i0r = /([()\][%!^"`<>&|;, *?])/g;
  function qPu(e) {
    return e = e.replace(i0r, "^$1"), e;
  }
  function VPu(e, t) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace(i0r, "^$1"), t) e = e.replace(i0r, "^$1");
    return e;
  }
  a0r.exports.command = qPu;
  a0r.exports.argument = VPu;
});