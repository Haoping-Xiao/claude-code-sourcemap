// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZSa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZSa = Q((v3y, QSa) => {
  var k4t = DSa(),
    X_p = Eco(),
    J_p = XSa(),
    wco = new Set(["\x1B", "\x9B"]),
    JSa = e => `${wco.values().next().value}[${e}m`,
    Q_p = e => e.split(" ").map(t => k4t(t)),
    vco = (e, t, n) => {
      let r = [...t],
        o = false,
        s = k4t(X_p(e[e.length - 1]));
      for (let [i, a] of r.entries()) {
        let l = k4t(a);
        if (s + l <= n) e[e.length - 1] += a;else e.push(a), s = 0;
        if (wco.has(a)) o = true;else if (o && a === "m") {
          o = false;
          continue;
        }
        if (o) continue;
        if (s += l, s === n && i < r.length - 1) e.push(""), s = 0;
      }
      if (!s && e[e.length - 1].length > 0 && e.length > 1) e[e.length - 2] += e.pop();
    },
    Z_p = e => {
      let t = e.split(" "),
        n = t.length;
      while (n > 0) {
        if (k4t(t[n - 1]) > 0) break;
        n--;
      }
      if (n === t.length) return e;
      return t.slice(0, n).join(" ") + t.slice(n).join("");
    },
    ebp = (e, t, n = {}) => {
      if (n.trim !== false && e.trim() === "") return "";
      let r = "",
        o = "",
        s,
        i = Q_p(e),
        a = [""];
      for (let [l, c] of e.split(" ").entries()) {
        if (n.trim !== false) a[a.length - 1] = a[a.length - 1].trimLeft();
        let u = k4t(a[a.length - 1]);
        if (l !== 0) {
          if (u >= t && (n.wordWrap === false || n.trim === false)) a.push(""), u = 0;
          if (u > 0 || n.trim === false) a[a.length - 1] += " ", u++;
        }
        if (n.hard && i[l] > t) {
          let d = t - u,
            p = 1 + Math.floor((i[l] - d - 1) / t);
          if (Math.floor((i[l] - 1) / t) < p) a.push("");
          vco(a, c, t);
          continue;
        }
        if (u + i[l] > t && u > 0 && i[l] > 0) {
          if (n.wordWrap === false && u < t) {
            vco(a, c, t);
            continue;
          }
          a.push("");
        }
        if (u + i[l] > t && n.wordWrap === false) {
          vco(a, c, t);
          continue;
        }
        a[a.length - 1] += c;
      }
      if (n.trim !== false) a = a.map(Z_p);
      r = a.join(`
`);
      for (let [l, c] of [...r].entries()) {
        if (o += c, wco.has(c)) {
          let d = parseFloat(/\d[^m]*/.exec(r.slice(l, l + 4)));
          s = d === 39 ? null : d;
        }
        let u = J_p.codes.get(Number(s));
        if (s && u) {
          if (r[l + 1] === `
`) o += JSa(u);else if (c === `
`) o += JSa(s);
        }
      }
      return o;
    };
  QSa.exports = (e, t, n) => String(e).normalize().replace(/\r\n/g, `
`).split(`
`).map(r => ebp(r, t, n)).join(`
`);
});
function R4t(e, t) {
  return e.split(`
`).flatMap(n => tEa.default(n, t, {
    trim: false,
    hard: true
  }).split(`
`).map(r => r.trimEnd())).join(`
`);
}
function xBn() {
  return eEa.default({
    defaultWidth: 80,
    output: gco().output
  });
}
var eEa, tEa;