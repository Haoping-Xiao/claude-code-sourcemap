// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f0e
// matched 2.1.88 source: src/ink/render-border.ts
// class=modified (alt of src/ink/render-border.ts)  jaccard=0.109  score=0.7158  fileCov=0.1139
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function pat(e, t) {
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
function AWd(e) {
  let t = XWi.c(26),
    n = GD(),
    r;
  if (t[0] !== e.borderColor || t[1] !== n)
    ((r = pat(e.borderColor, n)), (t[0] = e.borderColor), (t[1] = n), (t[2] = r));
  else r = t[2];
  let o;
  if (t[3] !== e.borderTopColor || t[4] !== n)
    ((o = pat(e.borderTopColor, n)), (t[3] = e.borderTopColor), (t[4] = n), (t[5] = o));
  else o = t[5];
  let s;
  if (t[6] !== e.borderBottomColor || t[7] !== n)
    ((s = pat(e.borderBottomColor, n)), (t[6] = e.borderBottomColor), (t[7] = n), (t[8] = s));
  else s = t[8];
  let i;
  if (t[9] !== e.borderLeftColor || t[10] !== n)
    ((i = pat(e.borderLeftColor, n)), (t[9] = e.borderLeftColor), (t[10] = n), (t[11] = i));
  else i = t[11];
  let a;
  if (t[12] !== e.borderRightColor || t[13] !== n)
    ((a = pat(e.borderRightColor, n)), (t[12] = e.borderRightColor), (t[13] = n), (t[14] = a));
  else a = t[14];
  let l;
  if (t[15] !== e.backgroundColor || t[16] !== n)
    ((l = pat(e.backgroundColor, n)), (t[15] = e.backgroundColor), (t[16] = n), (t[17] = l));
  else l = t[17];
  let c;
  if (
    t[18] !== e ||
    t[19] !== r ||
    t[20] !== o ||
    t[21] !== s ||
    t[22] !== i ||
    t[23] !== a ||
    t[24] !== l
  )
    ((c = JWi.jsx(Iy, {
      ...e,
      borderColor: r,
      borderTopColor: o,
      borderBottomColor: s,
      borderLeftColor: i,
      borderRightColor: a,
      backgroundColor: l,
    })),
      (t[18] = e),
      (t[19] = r),
      (t[20] = o),
      (t[21] = s),
      (t[22] = i),
      (t[23] = a),
      (t[24] = l),
      (t[25] = c));
  else c = t[25];
  return c;
}
var XWi, JWi, U;
