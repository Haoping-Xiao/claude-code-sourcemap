// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fon
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fon = E(() => {
  P2();
  Vwt();
  I6c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, x6c = /^\w*$/;
  tJe = k6c;
});
function Nyr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(R6c);
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      s = n.cache;
    if (s.has(o)) return s.get(o);
    var i = e.apply(this, r);
    return n.cache = s.set(o, i) || s, i;
  };
  return n.cache = new (Nyr.Cache || $Be)(), n;
}
var R6c = "Expected a function",
  Cn;