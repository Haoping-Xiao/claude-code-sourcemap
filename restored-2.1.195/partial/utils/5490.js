// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q6o
// matched 2.1.88 source: src/components/design-system/Divider.tsx
// class=partial  jaccard=0.1447  score=0.2341  fileCov=0.2748
// note: low-confidence suggestion: src/components/design-system/Divider.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Q6o = E(() => {
  Ye();
  uo();
  ft();
  np();
  nIo();
  CTt();
  bm();
  co();
  Jt();
  d_t();
  ebc = R(lt(), 1), tbc = R(rt(), 1), Rdr = R(se(), 1), wmm = new Set();
  Ldr = tbc.memo(kmm);
});
function nbc(e, t, n) {
  if (e === 0 || n) return;
  if (t === null) return "History";
  return `History ${Math.max(1, t - e + 1)}/${t}`;
}
function Ben(e) {
  let t = rbc.c(27),
    {
      banner: n,
      columns: r,
      fastModeTag: o,
      borderOnly: s
    } = e;
  if (Sd()) {
    if (s || !n.text && !o) return null;
    let h;
    if (t[0] !== n.bgColor || t[1] !== n.text) h = n.text && LZ.jsx(pE, {
      color: n.bgColor,
      padded: true,
      children: n.text
    }), t[0] = n.bgColor, t[1] = n.text, t[2] = h;else h = t[2];
    let y;
    if (t[3] !== o) y = o && LZ.jsxs(w, {
      color: "fastMode",
      children: [" ", o]
    }), t[3] = o, t[4] = y;else y = t[4];
    let b;
    if (t[5] !== n.bgColor || t[6] !== h || t[7] !== y) b = LZ.jsxs(w, {
      color: n.bgColor,
      children: [h, y]
    }), t[5] = n.bgColor, t[6] = h, t[7] = y, t[8] = b;else b = t[8];
    return b;
  }
  let a = o ? rn(o) + 2 : 0,
    l = n.text ? rn(n.text) + 2 : 0,
    c = a || l ? "\u2500\u2500" : "",
    u = Math.max(0, r - a - l - c.length),
    d = n.gradient,
    p;
  if (t[9] !== n.bgColor || t[10] !== d) p = d?.at(-1) ?? n.bgColor, t[9] = n.bgColor, t[10] = d, t[11] = p;else p = t[11];
  let f;
  if (t[12] !== u || t[13] !== d) f = d ? LZ.jsx($mm, {
    count: u,
    colors: d
  }) : "\u2500".repeat(u), t[12] = u, t[13] = d, t[14] = f;else f = t[14];
  let m;
  if (t[15] !== n.bgColor || t[16] !== n.text || t[17] !== s || t[18] !== l || t[19] !== o || t[20] !== a || t[21] !== c) m = s ? "\u2500".repeat(a + l + c.length) : LZ.jsxs(LZ.Fragment, {
    children: [o ? ` ${o} ` : null, n.text ? LZ.jsx(pE, {
      color: n.bgColor,
      padded: true,
      children: n.text
    }) : null, c]
  }), t[15] = n.bgColor, t[16] = n.text, t[17] = s, t[18] = l, t[19] = o, t[20] = a, t[21] = c, t[22] = m;else m = t[22];
  let g;
  if (t[23] !== p || t[24] !== f || t[25] !== m) g = LZ.jsxs(w, {
    color: p,
    children: [f, m]
  }), t[23] = p, t[24] = f, t[25] = m, t[26] = g;else g = t[26];
  return g;
}
function $mm({
  count: e,
  colors: t
}) {
  if (e <= 0 || t.length === 0) return null;
  let n = Math.min(t.length, e),
    r = Math.floor(e / n),
    o = e - r * n;
  return t.slice(0, n).map((s, i) => {
    let a = r + (o-- > 0 ? 1 : 0);
    return LZ.jsx(w, {
      color: s,
      children: "\u2500".repeat(a)
    }, i);
  });
}
var rbc, LZ;