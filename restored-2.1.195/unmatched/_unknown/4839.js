// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VUo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VUo = Q(qUo => {
  var f1e = [{
    x: [0],
    y: [0]
  }, {
    x: [4],
    y: [0]
  }, {
    x: [0, 4],
    y: [4]
  }, {
    x: [2, 6],
    y: [0, 4]
  }, {
    x: [0, 2, 4, 6],
    y: [2, 6]
  }, {
    x: [1, 3, 5, 7],
    y: [0, 2, 4, 6]
  }, {
    x: [0, 1, 2, 3, 4, 5, 6, 7],
    y: [1, 3, 5, 7]
  }];
  qUo.getImagePasses = function (e, t) {
    let n = [],
      r = e % 8,
      o = t % 8,
      s = (e - r) / 8,
      i = (t - o) / 8;
    for (let a = 0; a < f1e.length; a++) {
      let l = f1e[a],
        c = s * l.x.length,
        u = i * l.y.length;
      for (let d = 0; d < l.x.length; d++) if (l.x[d] < r) c++;else break;
      for (let d = 0; d < l.y.length; d++) if (l.y[d] < o) u++;else break;
      if (c > 0 && u > 0) n.push({
        width: c,
        height: u,
        index: a
      });
    }
    return n;
  };
  qUo.getInterlaceIterator = function (e) {
    return function (t, n, r) {
      let o = t % f1e[r].x.length,
        s = (t - o) / f1e[r].x.length * 8 + f1e[r].x[o],
        i = n % f1e[r].y.length,
        a = (n - i) / f1e[r].y.length * 8 + f1e[r].y[i];
      return s * 4 + a * e * 4;
    };
  };
});