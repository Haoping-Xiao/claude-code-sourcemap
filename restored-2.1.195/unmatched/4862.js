// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y3l
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.002  score=0.5673  fileCov=0.002
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.002); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Y3l = Q(Frr => {
  var o2f = LXt(),
    s2f = {
      WW: " ",
      WB: "\u2584",
      BB: "\u2588",
      BW: "\u2580"
    },
    i2f = {
      BB: " ",
      BW: "\u2584",
      WW: "\u2588",
      WB: "\u2580"
    };
  function a2f(e, t, n) {
    if (e && t) return n.BB;
    if (e && !t) return n.BW;
    if (!e && t) return n.WB;
    return n.WW;
  }
  Frr.render = function (e, t, n) {
    let r = o2f.getOptions(t),
      o = s2f;
    if (r.color.dark.hex === "#ffffff" || r.color.light.hex === "#000000") o = i2f;
    let s = e.modules.size,
      i = e.modules.data,
      a = "",
      l = Array(s + r.margin * 2 + 1).join(o.WW);
    l = Array(r.margin / 2 + 1).join(l + `
`);
    let c = Array(r.margin + 1).join(o.WW);
    a += l;
    for (let u = 0; u < s; u += 2) {
      a += c;
      for (let d = 0; d < s; d++) {
        let p = i[u * s + d],
          f = i[(u + 1) * s + d];
        a += a2f(p, f, o);
      }
      a += c + `
`;
    }
    if (a += l.slice(0, -1), typeof n === "function") n(null, a);
    return a;
  };
  Frr.renderToFile = function (t, n, r, o) {
    if (typeof o > "u") o = r, r = void 0;
    let s = require("fs"),
      i = Frr.render(n, r);
    s.writeFile(t, i, o);
  };
});