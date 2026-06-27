// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hyr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hyr = E(() => {
  yon = H9c;
});
function w9c(e, t, n, r, o, s) {
  var i = n & T9c,
    a = e.length,
    l = t.length;
  if (a != l && !(i && l > a)) return !1;
  var c = s.get(e),
    u = s.get(t);
  if (c && u) return c == t && u == e;
  var d = -1,
    p = !0,
    f = n & v9c ? new hon() : void 0;
  s.set(e, t), s.set(t, e);
  while (++d < a) {
    var m = e[d],
      g = t[d];
    if (r) var h = i ? r(g, m, d, t, e, s) : r(m, g, d, e, t, s);
    if (h !== void 0) {
      if (h) continue;
      p = !1;
      break;
    }
    if (f) {
      if (!Ets(t, function (y, b) {
        if (!yon(f, b) && (m === y || o(m, y, n, r, s))) return f.push(b);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === g || o(m, g, n, r, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), p;
}
var T9c = 1,
  v9c = 2,
  _on;