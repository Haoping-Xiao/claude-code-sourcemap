// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fal
// matched 2.1.88 source: src/ink/Ansi.tsx
// class=new  jaccard=0.0453  score=0.5901  fileCov=0.0468
// note: nearest: src/ink/Ansi.tsx (0.0453); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fal = E(() => {
  ii();
});
function sKn(e) {
  let t = Gal.c(27),
    {
      children: n,
      color: r,
      bold: o
    } = e,
    s = LLn(),
    i,
    a,
    l,
    c,
    u,
    d;
  if (t[0] !== o || t[1] !== n || t[2] !== r || t[3] !== s) {
    d = Symbol.for("react.early_return_sentinel");
    e: {
      if (a = n.indexOf(jal), !s || a === -1) {
        let g;
        if (t[10] !== o || t[11] !== n || t[12] !== r) g = a_t.jsx(Q8e, {
          color: r,
          bold: o,
          children: n
        }), t[10] = o, t[11] = n, t[12] = r, t[13] = g;else g = t[13];
        d = g;
        break e;
      }
      i = w, l = r, c = o, u = n.slice(0, a);
    }
    t[0] = o, t[1] = n, t[2] = r, t[3] = s, t[4] = i, t[5] = a, t[6] = l, t[7] = c, t[8] = u, t[9] = d;
  } else i = t[4], a = t[5], l = t[6], c = t[7], u = t[8], d = t[9];
  if (d !== Symbol.for("react.early_return_sentinel")) return d;
  let p;
  if (t[14] !== o || t[15] !== r) p = a_t.jsx(xs, {
    url: u5e,
    children: a_t.jsx(w, {
      color: r,
      bold: o,
      underline: true,
      children: "learn more"
    })
  }), t[14] = o, t[15] = r, t[16] = p;else p = t[16];
  let f;
  if (t[17] !== n || t[18] !== a) f = n.slice(a + jal.length), t[17] = n, t[18] = a, t[19] = f;else f = t[19];
  let m;
  if (t[20] !== i || t[21] !== l || t[22] !== c || t[23] !== u || t[24] !== p || t[25] !== f) m = a_t.jsxs(i, {
    color: l,
    bold: c,
    children: [u, p, f]
  }), t[20] = i, t[21] = l, t[22] = c, t[23] = u, t[24] = p, t[25] = f, t[26] = m;else m = t[26];
  return m;
}
var Gal, a_t, jal;