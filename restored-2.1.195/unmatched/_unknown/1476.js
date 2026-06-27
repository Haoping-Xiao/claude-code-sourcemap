// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ssi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ssi = Q(($sh, djr) => {
  var bsi = Symbol();
  function Gpd(e, t, n) {
    let r = t[bsi];
    if (r) return t.stat(e, (s, i) => {
      if (s) return n(s);
      n(null, i.mtime, r);
    });
    let o = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
    t.utimes(e, o, o, s => {
      if (s) return n(s);
      t.stat(e, (i, a) => {
        if (i) return n(i);
        let l = a.mtime.getTime() % 1000 === 0 ? "s" : "ms";
        Object.defineProperty(t, bsi, {
          value: l
        }), n(null, a.mtime, l);
      });
    });
  }
  function Wpd(e) {
    let t = Date.now();
    if (e === "s") t = Math.ceil(t / 1000) * 1000;
    return new Date(t);
  }
  djr.exports.probe = Gpd;
  djr.exports.getMtime = Wpd;
});