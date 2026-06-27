// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lxo = Q(($db, cdl) => {
  var Mdb = cdl.exports = {
    nextSkippingChildren: qlf,
    nextAncestorSibling: Rxo,
    next: Vlf,
    previous: zlf,
    deepLastChild: ldl
  };
  function qlf(e, t) {
    if (e === t) return null;
    if (e.nextSibling !== null) return e.nextSibling;
    return Rxo(e, t);
  }
  function Rxo(e, t) {
    for (e = e.parentNode; e !== null; e = e.parentNode) {
      if (e === t) return null;
      if (e.nextSibling !== null) return e.nextSibling;
    }
    return null;
  }
  function Vlf(e, t) {
    var n = e.firstChild;
    if (n !== null) return n;
    if (e === t) return null;
    if (n = e.nextSibling, n !== null) return n;
    return Rxo(e, t);
  }
  function ldl(e) {
    while (e.lastChild) e = e.lastChild;
    return e;
  }
  function zlf(e, t) {
    var n = e.previousSibling;
    if (n !== null) return ldl(n);
    if (n = e.parentNode, n === t) return null;
    return n;
  }
});