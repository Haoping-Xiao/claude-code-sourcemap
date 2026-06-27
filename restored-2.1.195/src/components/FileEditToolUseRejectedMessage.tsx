// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uvo
// matched 2.1.88 source: src/components/FileEditToolUseRejectedMessage.tsx
// class=modified  jaccard=0.3113  score=0.4642  fileCov=0.486
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Uvo] deps: _i, Ye, ql, T4t
((htl = R(lt(), 1)), (DF = R(se(), 1)));
function TMe(e) {
  let t = _tl.c(38),
    {
      file_path: n,
      operation: r,
      patch: o,
      firstLine: s,
      fileContent: i,
      content: a,
      style: l,
      verbose: c,
    } = e,
    { columns: u } = br(),
    d;
  if (t[0] !== r)
    ((d = tq.jsxs(w, {
      color: "subtle",
      children: ["User rejected ", r, " to "],
    })),
      (t[0] = r),
      (t[1] = d));
  else d = t[1];
  let p;
  if (t[2] !== n || t[3] !== c)
    ((p = c ? n : btl.relative($t(), n)), (t[2] = n), (t[3] = c), (t[4] = p));
  else p = t[4];
  let f;
  if (t[5] !== p)
    ((f = tq.jsx(w, {
      bold: true,
      color: "subtle",
      children: p,
    })),
      (t[5] = p),
      (t[6] = f));
  else f = t[6];
  let m;
  if (t[7] !== d || t[8] !== f)
    ((m = tq.jsxs(U, {
      flexDirection: "row",
      children: [d, f],
    })),
      (t[7] = d),
      (t[8] = f),
      (t[9] = m));
  else m = t[9];
  let g = m;
  if (l === "condensed" && !c) {
    let _;
    if (t[10] !== g)
      ((_ = tq.jsx(qn, {
        children: g,
      })),
        (t[10] = g),
        (t[11] = _));
    else _ = t[11];
    return _;
  }
  if (r === "write" && a !== void 0) {
    let _, S;
    if (t[12] !== a || t[13] !== c) {
      let D = a.split(`
`);
      ((_ = D.length - ytl),
        (S = c
          ? a
          : D.slice(0, ytl).join(`
`)),
        (t[12] = a),
        (t[13] = c),
        (t[14] = _),
        (t[15] = S));
    } else ((_ = t[14]), (S = t[15]));
    let v = S || "(No content)",
      C = u - 12,
      x;
    if (t[16] !== n || t[17] !== v || t[18] !== C)
      ((x = tq.jsx(LF, {
        code: v,
        filePath: n,
        width: C,
        dim: true,
      })),
        (t[16] = n),
        (t[17] = v),
        (t[18] = C),
        (t[19] = x));
    else x = t[19];
    let I;
    if (t[20] !== _ || t[21] !== c)
      ((I =
        !c &&
        tq.jsx(d$, {
          count: _,
        })),
        (t[20] = _),
        (t[21] = c),
        (t[22] = I));
    else I = t[22];
    let k;
    if (t[23] !== x || t[24] !== I || t[25] !== g)
      ((k = tq.jsx(qn, {
        children: tq.jsxs(U, {
          flexDirection: "column",
          children: [g, x, I],
        }),
      })),
        (t[23] = x),
        (t[24] = I),
        (t[25] = g),
        (t[26] = k));
    else k = t[26];
    return k;
  }
  if (!o || o.length === 0) {
    let _;
    if (t[27] !== g)
      ((_ = tq.jsx(qn, {
        children: g,
      })),
        (t[27] = g),
        (t[28] = _));
    else _ = t[28];
    return _;
  }
  let h = u - 12,
    y;
  if (t[29] !== i || t[30] !== n || t[31] !== s || t[32] !== o || t[33] !== h)
    ((y = tq.jsx($5e, {
      hunks: o,
      dim: true,
      width: h,
      filePath: n,
      firstLine: s,
      fileContent: i,
    })),
      (t[29] = i),
      (t[30] = n),
      (t[31] = s),
      (t[32] = o),
      (t[33] = h),
      (t[34] = y));
  else y = t[34];
  let b;
  if (t[35] !== y || t[36] !== g)
    ((b = tq.jsx(qn, {
      children: tq.jsxs(U, {
        flexDirection: "column",
        children: [g, y],
      }),
    })),
      (t[35] = y),
      (t[36] = g),
      (t[37] = b));
  else b = t[37];
  return b;
}
var _tl,
  btl,
  tq,
  ytl = 10;
