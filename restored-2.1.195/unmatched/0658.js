// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FAs = Q((_ug, UAs) => {
  var l0r = require("fs"),
    KPu = BAs();
  function YPu(e) {
    let n = Buffer.alloc(150),
      r;
    try {
      r = l0r.openSync(e, "r"), l0r.readSync(r, n, 0, 150, 0), l0r.closeSync(r);
    } catch (o) {}
    return KPu(n.toString());
  }
  UAs.exports = YPu;
});