// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tGl
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.002  score=0.3447  fileCov=0.002
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.002); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tGl = Q(eGl => {
  var l2f = "\x1B[47m\x1B[30m",
    c2f = "\x1B[40m\x1B[37m",
    u2f = function (e, t, n) {
      return {
        "00": "\x1B[0m " + e,
        "01": "\x1B[0m" + t + "\u2584" + e,
        "02": "\x1B[0m" + n + "\u2584" + e,
        10: "\x1B[0m" + t + "\u2580" + e,
        11: " ",
        12: "\u2584",
        20: "\x1B[0m" + n + "\u2580" + e,
        21: "\u2580",
        22: "\u2588"
      };
    },
    Q3l = function (e, t, n, r) {
      let o = t + 1;
      if (n >= o || r >= o || r < -1 || n < -1) return "0";
      if (n >= t || r >= t || r < 0 || n < 0) return "1";
      let s = r * t + n;
      return e[s] ? "2" : "1";
    },
    Z3l = function (e, t, n, r) {
      return Q3l(e, t, n, r) + Q3l(e, t, n, r + 1);
    };
  eGl.render = function (e, t, n) {
    let r = e.modules.size,
      o = e.modules.data,
      s = !!(t && t.inverse),
      i = t && t.inverse ? c2f : l2f,
      c = u2f(i, s ? "\x1B[30m" : "\x1B[37m", s ? "\x1B[37m" : "\x1B[30m"),
      u = `\x1B[0m
` + i,
      d = i;
    for (let p = -1; p < r + 1; p += 2) {
      for (let f = -1; f < r; f++) d += c[Z3l(o, r, f, p)];
      d += c[Z3l(o, r, r, p)] + u;
    }
    if (d += "\x1B[0m", typeof n === "function") n(null, d);
    return d;
  };
});