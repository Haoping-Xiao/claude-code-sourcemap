// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rGl
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rGl = Q(nGl => {
  var d2f = J3l(),
    p2f = tGl();
  nGl.render = function (e, t, n) {
    if (t && t.small) return p2f.render(e, t, n);
    return d2f.render(e, t, n);
  };
});