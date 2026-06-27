// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ljn
// matched 2.1.88 source: src/tools/BashTool/UI.tsx
// class=partial  jaccard=0.1147  score=0.4979  fileCov=0.1297
// note: low-confidence suggestion: src/tools/BashTool/UI.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ljn] deps: Ye, es
bMa = R(lt(), 1), ajn = R(se(), 1);
function BackgroundHint(e) {
  let t = SMa.c(30),
    {
      output: n,
      fullOutput: r,
      elapsedTimeSeconds: o,
      totalLines: s,
      totalBytes: i,
      timeoutMs: a,
      verbose: l
    } = e,
    c;
  if (t[0] !== r) c = Ja(r.trim()), t[0] = r, t[1] = c;else c = t[1];
  let u = c,
    d,
    p;
  if (t[2] !== n || t[3] !== u || t[4] !== l) d = Ja(n.trim()).split(`
`).filter(pRp), p = l ? u : d.slice(-5).join(`
`), t[2] = n, t[3] = u, t[4] = l, t[5] = d, t[6] = p;else d = t[5], p = t[6];
  let f = p;
  if (!d.length) {
    let x;
    if (t[7] === Symbol.for("react.memo_cache_sentinel")) x = j4.jsx(w, {
      dimColor: true,
      children: "Running\u2026 "
    }), t[7] = x;else x = t[7];
    let I;
    if (t[8] !== o || t[9] !== a) I = j4.jsx(qn, {
      children: j4.jsxs(cP, {
        children: [x, j4.jsx(Vqe, {
          elapsedTimeSeconds: o,
          timeoutMs: a
        })]
      })
    }), t[8] = o, t[9] = a, t[10] = I;else I = t[10];
    return I;
  }
  let m = s ? Math.max(0, s - 5) : 0,
    g = "";
  if (!l && i && s) g = `~${s} lines`;else if (!l && m > 0) g = `+${m} lines`;
  let h = l ? void 0 : Math.min(5, d.length),
    y;
  if (t[11] !== f) y = j4.jsx(w, {
    dimColor: true,
    children: f
  }), t[11] = f, t[12] = y;else y = t[12];
  let b;
  if (t[13] !== h || t[14] !== y) b = j4.jsx(U, {
    height: h,
    flexDirection: "column",
    overflow: "hidden",
    children: y
  }), t[13] = h, t[14] = y, t[15] = b;else b = t[15];
  let _;
  if (t[16] !== g) _ = g ? j4.jsx(w, {
    dimColor: true,
    children: g
  }) : null, t[16] = g, t[17] = _;else _ = t[17];
  let S;
  if (t[18] !== o || t[19] !== a) S = j4.jsx(Vqe, {
    elapsedTimeSeconds: o,
    timeoutMs: a
  }), t[18] = o, t[19] = a, t[20] = S;else S = t[20];
  let A;
  if (t[21] !== i) A = i ? j4.jsx(w, {
    dimColor: true,
    children: Ra(i)
  }) : null, t[21] = i, t[22] = A;else A = t[22];
  let v;
  if (t[23] !== _ || t[24] !== S || t[25] !== A) v = j4.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    children: [_, S, A]
  }), t[23] = _, t[24] = S, t[25] = A, t[26] = v;else v = t[26];
  let C;
  if (t[27] !== b || t[28] !== v) C = j4.jsx(qn, {
    children: j4.jsx(cP, {
      children: j4.jsxs(U, {
        flexDirection: "column",
        children: [b, v]
      })
    })
  }), t[27] = b, t[28] = v, t[29] = C;else C = t[29];
  return C;
}
function pRp(e) {
  return e;
}
var SMa, j4;