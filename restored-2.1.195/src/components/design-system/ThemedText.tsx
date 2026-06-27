// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RLn
// matched 2.1.88 source: src/components/design-system/ThemedText.tsx
// class=modified  jaccard=0.3398  score=0.7748  fileCov=0.377
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var RLn = E(() => {
  Tne();
  cne();
  ((XWi = R(lt(), 1)), (JWi = R(se(), 1)));
  U = AWd;
});
function QWi(e, t) {
  if (!e) return;
  if (
    e.startsWith("rgb(") ||
    e.startsWith("#") ||
    e.startsWith("ansi256(") ||
    e.startsWith("ansi:")
  )
    return e;
  return t[e];
}
function w(e) {
  let t = ZWi.c(31),
    n,
    r,
    o,
    s,
    i,
    a,
    l,
    c,
    u,
    d,
    p;
  if (t[0] !== e)
    (({
      color: s,
      backgroundColor: r,
      dimColor: i,
      bold: a,
      italic: l,
      underline: c,
      strikethrough: u,
      inverse: d,
      wrap: p,
      children: o,
      ...n
    } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u),
      (t[10] = d),
      (t[11] = p));
  else
    ((n = t[1]),
      (r = t[2]),
      (o = t[3]),
      (s = t[4]),
      (i = t[5]),
      (a = t[6]),
      (l = t[7]),
      (c = t[8]),
      (u = t[9]),
      (d = t[10]),
      (p = t[11]));
  let f = i === void 0 ? false : i,
    m = a === void 0 ? false : a,
    g = l === void 0 ? false : l,
    h = c === void 0 ? false : c,
    y = u === void 0 ? false : u,
    b = d === void 0 ? false : d,
    _ = p === void 0 ? "wrap" : p,
    S = GD(),
    A = t5i.useContext(DJr),
    v;
  if (t[12] !== s || t[13] !== f || t[14] !== A || t[15] !== S)
    ((v = f && !A ? S.inactive : QWi(s, S)),
      (t[12] = s),
      (t[13] = f),
      (t[14] = A),
      (t[15] = S),
      (t[16] = v));
  else v = t[16];
  let C = v,
    x;
  if (t[17] !== r || t[18] !== S) ((x = QWi(r, S)), (t[17] = r), (t[18] = S), (t[19] = x));
  else x = t[19];
  let I = x,
    k;
  if (
    t[20] !== n ||
    t[21] !== m ||
    t[22] !== o ||
    t[23] !== b ||
    t[24] !== g ||
    t[25] !== I ||
    t[26] !== C ||
    t[27] !== y ||
    t[28] !== h ||
    t[29] !== _
  )
    ((k = n5i.jsx(nS, {
      color: C,
      backgroundColor: I,
      bold: m,
      italic: g,
      underline: h,
      strikethrough: y,
      inverse: b,
      wrap: _,
      ...n,
      children: o,
    })),
      (t[20] = n),
      (t[21] = m),
      (t[22] = o),
      (t[23] = b),
      (t[24] = g),
      (t[25] = I),
      (t[26] = C),
      (t[27] = y),
      (t[28] = h),
      (t[29] = _),
      (t[30] = k));
  else k = t[30];
  return k;
}
var ZWi, e5i, t5i, n5i, DJr;
