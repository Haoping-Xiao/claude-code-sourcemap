// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mAs = Q((lug, fAs) => {
  fAs.exports = pAs;
  pAs.sync = $Pu;
  var uAs = require("fs");
  function MPu(e, t) {
    var n = t.pathExt !== void 0 ? t.pathExt : process.env.PATHEXT;
    if (!n) return true;
    if (n = n.split(";"), n.indexOf("") !== -1) return true;
    for (var r = 0; r < n.length; r++) {
      var o = n[r].toLowerCase();
      if (o && e.substr(-o.length).toLowerCase() === o) return true;
    }
    return false;
  }
  function dAs(e, t, n) {
    if (!e.isSymbolicLink() && !e.isFile()) return false;
    return MPu(t, n);
  }
  function pAs(e, t, n) {
    uAs.stat(e, function (r, o) {
      n(r, r ? false : dAs(o, e, t));
    });
  }
  function $Pu(e, t) {
    return dAs(uAs.statSync(e), e, t);
  }
});