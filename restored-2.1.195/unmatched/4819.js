// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y4l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y4l = Q(Lrr => {
  var gUf = c1e().getSymbolSize;
  Lrr.getRowColCoords = function (t) {
    if (t === 1) return [];
    let n = Math.floor(t / 7) + 2,
      r = gUf(t),
      o = r === 145 ? 26 : Math.ceil((r - 13) / (2 * n - 2)) * 2,
      s = [r - 7];
    for (let i = 1; i < n - 1; i++) s[i] = s[i - 1] - o;
    return s.push(6), s.reverse();
  };
  Lrr.getPositions = function (t) {
    let n = [],
      r = Lrr.getRowColCoords(t),
      o = r.length;
    for (let s = 0; s < o; s++) for (let i = 0; i < o; i++) {
      if (s === 0 && i === 0 || s === 0 && i === o - 1 || s === o - 1 && i === 0) continue;
      n.push([r[s], r[i]]);
    }
    return n;
  };
});