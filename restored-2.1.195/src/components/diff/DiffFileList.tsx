// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SNo
// matched 2.1.88 source: src/components/diff/DiffFileList.tsx
// class=modified  jaccard=0.2764  score=0.389  fileCov=0.4883
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SNo] deps: _i, Ye, Lo, oc, sr, vKe, LW, B_, Kut
((K1l = R(lt(), 1)), (Y1l = require("path")), (Rb = R(se(), 1)));
function DiffFileList(t0) {
  let t = onr.c(36),
    { files: n, selectedIndex: r } = t0,
    { columns: o } = br(),
    s;
  e: {
    if (n.length === 0 || n.length <= U7t) {
      let _;
      if (t[0] !== n.length)
        ((_ = {
          startIndex: 0,
          endIndex: n.length,
        }),
          (t[0] = n.length),
          (t[1] = _));
      else _ = t[1];
      s = _;
      break e;
    }
    let h = Math.max(0, r - Math.floor(U7t / 2)),
      y = h + U7t;
    if (y > n.length) ((y = n.length), (h = Math.max(0, y - U7t)));
    let b;
    if (t[2] !== y || t[3] !== h)
      ((b = {
        startIndex: h,
        endIndex: y,
      }),
        (t[2] = y),
        (t[3] = h),
        (t[4] = b));
    else b = t[4];
    s = b;
  }
  let { startIndex: i, endIndex: a } = s;
  if (n.length === 0) {
    let h;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((h = WN.jsx(Fl, {
        children: "No changed files",
      })),
        (t[5] = h));
    else h = t[5];
    return h;
  }
  let l, c, u, d, p, f;
  if (t[6] !== o || t[7] !== a || t[8] !== n || t[9] !== r || t[10] !== i) {
    let h = n.slice(i, a),
      y = i > 0;
    ((c = a < n.length), (u = n.length > U7t));
    let b = Math.max(20, o - 16 - 3 - 4);
    if (((l = U), (d = "column"), t[17] !== y || t[18] !== u || t[19] !== i))
      ((p =
        u &&
        WN.jsx(w, {
          dimColor: true,
          children: y ? ` \u2191 ${i} more ${bn(i, "file")}` : " ",
        })),
        (t[17] = y),
        (t[18] = u),
        (t[19] = i),
        (t[20] = p));
    else p = t[20];
    let _;
    if (t[21] !== b || t[22] !== r || t[23] !== i)
      ((_ = (S, A) =>
        WN.jsx(
          FileItem,
          {
            file: S,
            isSelected: i + A === r,
            maxPathWidth: b,
          },
          S.path,
        )),
        (t[21] = b),
        (t[22] = r),
        (t[23] = i),
        (t[24] = _));
    else _ = t[24];
    ((f = h.map(_)),
      (t[6] = o),
      (t[7] = a),
      (t[8] = n),
      (t[9] = r),
      (t[10] = i),
      (t[11] = l),
      (t[12] = c),
      (t[13] = u),
      (t[14] = d),
      (t[15] = p),
      (t[16] = f));
  } else ((l = t[11]), (c = t[12]), (u = t[13]), (d = t[14]), (p = t[15]), (f = t[16]));
  let m;
  if (t[25] !== a || t[26] !== n.length || t[27] !== c || t[28] !== u)
    ((m =
      u &&
      WN.jsx(w, {
        dimColor: true,
        children: c ? ` \u2193 ${n.length - a} more ${bn(n.length - a, "file")}` : " ",
      })),
      (t[25] = a),
      (t[26] = n.length),
      (t[27] = c),
      (t[28] = u),
      (t[29] = m));
  else m = t[29];
  let g;
  if (t[30] !== l || t[31] !== d || t[32] !== p || t[33] !== f || t[34] !== m)
    ((g = WN.jsxs(l, {
      flexDirection: d,
      children: [p, f, m],
    })),
      (t[30] = l),
      (t[31] = d),
      (t[32] = p),
      (t[33] = f),
      (t[34] = m),
      (t[35] = g));
  else g = t[35];
  return g;
}
function FileItem(t0) {
  let t = onr.c(14),
    { file: n, isSelected: r, maxPathWidth: o } = t0,
    s;
  if (t[0] !== n.path || t[1] !== o) ((s = UV(n.path, o)), (t[0] = n.path), (t[1] = o), (t[2] = s));
  else s = t[2];
  let i = s,
    l = `${r ? nt.pointer + " " : "  "}${i}`,
    c = r ? "background" : void 0,
    u;
  if (t[3] !== r || t[4] !== l || t[5] !== c)
    ((u = WN.jsx(w, {
      bold: r,
      color: c,
      inverse: r,
      children: l,
    })),
      (t[3] = r),
      (t[4] = l),
      (t[5] = c),
      (t[6] = u));
  else u = t[6];
  let d;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((d = WN.jsx(U, {
      flexGrow: 1,
    })),
      (t[7] = d));
  else d = t[7];
  let p;
  if (t[8] !== n || t[9] !== r)
    ((p = WN.jsx(n$f, {
      file: n,
      isSelected: r,
    })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = p));
  else p = t[10];
  let f;
  if (t[11] !== u || t[12] !== p)
    ((f = WN.jsxs(U, {
      flexDirection: "row",
      children: [u, d, p],
    })),
      (t[11] = u),
      (t[12] = p),
      (t[13] = f));
  else f = t[13];
  return f;
}
function n$f(e) {
  let t = onr.c(16),
    { file: n, isSelected: r } = e;
  if (n.isUntracked) {
    let a = !r,
      l;
    if (t[0] !== a)
      ((l = WN.jsx(w, {
        dimColor: a,
        italic: true,
        children: "untracked",
      })),
        (t[0] = a),
        (t[1] = l));
    else l = t[1];
    return l;
  }
  if (n.isBinary) {
    let a = !r,
      l;
    if (t[2] !== a)
      ((l = WN.jsx(w, {
        dimColor: a,
        italic: true,
        children: "Binary file",
      })),
        (t[2] = a),
        (t[3] = l));
    else l = t[3];
    return l;
  }
  if (n.isLargeFile) {
    let a = !r,
      l;
    if (t[4] !== a)
      ((l = WN.jsx(w, {
        dimColor: a,
        italic: true,
        children: "Large file modified",
      })),
        (t[4] = a),
        (t[5] = l));
    else l = t[5];
    return l;
  }
  let o;
  if (t[6] !== n.linesAdded || t[7] !== n.linesRemoved || t[8] !== r)
    ((o = WN.jsx(d5, {
      added: n.linesAdded,
      removed: n.linesRemoved,
      bold: r,
    })),
      (t[6] = n.linesAdded),
      (t[7] = n.linesRemoved),
      (t[8] = r),
      (t[9] = o));
  else o = t[9];
  let s;
  if (t[10] !== n.isTruncated || t[11] !== r)
    ((s =
      n.isTruncated &&
      WN.jsx(w, {
        dimColor: !r,
        children: " (truncated)",
      })),
      (t[10] = n.isTruncated),
      (t[11] = r),
      (t[12] = s));
  else s = t[12];
  let i;
  if (t[13] !== o || t[14] !== s)
    ((i = WN.jsxs(w, {
      children: [o, s],
    })),
      (t[13] = o),
      (t[14] = s),
      (t[15] = i));
  else i = t[15];
  return i;
}
var onr,
  WN,
  U7t = 5;
