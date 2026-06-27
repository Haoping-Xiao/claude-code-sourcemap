// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hyr
// matched 2.1.88 source: src/ink/dom.ts
// class=new  jaccard=0.0171  score=1  fileCov=0.0171
// note: nearest: src/ink/dom.ts (0.0171); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hyr]
yon = H9c;
function w9c(e, t, n, r, o, s) {
  var i = n & T9c,
    a = e.length,
    l = t.length;
  if (a != l && !(i && l > a)) return false;
  var c = s.get(e),
    u = s.get(t);
  if (c && u) return c == t && u == e;
  var d = -1,
    p = true,
    f = n & v9c ? new hon() : void 0;
  s.set(e, t), s.set(t, e);
  while (++d < a) {
    var m = e[d],
      g = t[d];
    if (r) var h = i ? r(g, m, d, t, e, s) : r(m, g, d, e, t, s);
    if (h !== void 0) {
      if (h) continue;
      p = false;
      break;
    }
    if (f) {
      if (!Ets(t, function (y, b) {
        if (!yon(f, b) && (m === y || o(m, y, n, r, s))) return f.push(b);
      })) {
        p = false;
        break;
      }
    } else if (!(m === g || o(m, g, n, r, s))) {
      p = false;
      break;
    }
  }
  return s.delete(e), s.delete(t), p;
}
var T9c = 1,
  v9c = 2,
  _on;