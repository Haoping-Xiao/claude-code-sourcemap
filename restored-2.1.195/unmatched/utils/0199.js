// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UIt
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UIt = E(() => {
  BIt();
  BXe();
  NKc = Object.prototype, BKc = NKc.hasOwnProperty;
  pwe = UKc;
});
function FKc(e, t, n, r) {
  var o = !n;
  n || (n = {});
  var s = -1,
    i = t.length;
  while (++s < i) {
    var a = t[s],
      l = r ? r(n[a], e[a], a, n, e) : void 0;
    if (l === void 0) l = e[a];
    if (o) dwe(n, a, l);else pwe(n, a, l);
  }
  return n;
}
var UK;