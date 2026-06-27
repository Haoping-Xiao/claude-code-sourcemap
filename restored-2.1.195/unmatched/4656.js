// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q1o
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.0027  score=1  fileCov=0.0027
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.0027); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Q1o = E(() => {
  db();
  je();
  fn();
  At();
  Jt();
  SOl = require("path");
});
function NDf(e) {
  let t = e.map(n => n.messageCount).filter(n => n > 0).sort((n, r) => n - r);
  if (t.length === 0) return null;
  return {
    p25: t[Math.floor(t.length * 0.25)],
    p50: t[Math.floor(t.length * 0.5)],
    p75: t[Math.floor(t.length * 0.75)]
  };
}
function Z1o(e, t = {}) {
  let {
      terminalWidth: n = 80,
      showMonthLabels: r = !0
    } = t,
    o = 4,
    s = n - 4,
    i = Math.min(52, Math.max(10, s)),
    a = new Map();
  for (let b of e) a.set(b.date, b);
  let l = NDf(e),
    c = new Date();
  c.setHours(0, 0, 0, 0);
  let u = new Date(c);
  u.setDate(c.getDate() - c.getDay());
  let d = new Date(u);
  d.setDate(d.getDate() - (i - 1) * 7);
  let p = Array.from({
      length: 7
    }, () => Array(i).fill("")),
    f = [],
    m = -1,
    g = new Date(d);
  for (let b = 0; b < i; b++) for (let _ = 0; _ < 7; _++) {
    if (g > c) {
      p[_][b] = " ", g.setDate(g.getDate() + 1);
      continue;
    }
    let S = pse(g),
      A = a.get(S);
    if (_ === 0) {
      let C = g.getMonth();
      if (C !== m) f.push({
        month: C,
        week: b
      }), m = C;
    }
    let v = BDf(A?.messageCount || 0, l);
    p[_][b] = UDf(v), g.setDate(g.getDate() + 1);
  }
  let h = [];
  if (r) {
    let b = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      _ = f.map(v => v.month),
      S = Math.floor(i / Math.max(_.length, 1)),
      A = _.map(v => b[v].padEnd(S)).join("");
    h.push("    " + A);
  }
  let y = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let b = 0; b < 7; b++) {
    let S = ([1, 3, 5].includes(b) ? y[b].padEnd(3) : "   ") + " " + p[b].join("");
    h.push(S);
  }
  return h.push(""), h.push("    Less " + [FOe("\u2591"), FOe("\u2592"), FOe("\u2593"), FOe("\u2588")].join(" ") + " More"), h.join(`
`);
}
function BDf(e, t) {
  if (e === 0 || !t) return 0;
  if (e >= t.p75) return 4;
  if (e >= t.p50) return 3;
  if (e >= t.p25) return 2;
  return 1;
}
function UDf(e) {
  switch (e) {
    case 0:
      return wt.gray("\xB7");
    case 1:
      return FOe("\u2591");
    case 2:
      return FOe("\u2592");
    case 3:
      return FOe("\u2593");
    case 4:
      return FOe("\u2588");
    default:
      return wt.gray("\xB7");
  }
}
var FOe;