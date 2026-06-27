// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bAs = Q((cug, _As) => {
  _As.exports = hAs;
  hAs.sync = OPu;
  var gAs = require("fs");
  function hAs(e, t, n) {
    gAs.stat(e, function (r, o) {
      n(r, r ? false : yAs(o, t));
    });
  }
  function OPu(e, t) {
    return yAs(gAs.statSync(e), t);
  }
  function yAs(e, t) {
    return e.isFile() && NPu(e, t);
  }
  function NPu(e, t) {
    var {
        mode: n,
        uid: r,
        gid: o
      } = e,
      s = t.uid !== void 0 ? t.uid : process.getuid && process.getuid(),
      i = t.gid !== void 0 ? t.gid : process.getgid && process.getgid(),
      a = parseInt("100", 8),
      l = parseInt("010", 8),
      c = parseInt("001", 8),
      u = a | l,
      d = n & c || n & l && o === i || n & a && r === s || n & u && s === 0;
    return d;
  }
});