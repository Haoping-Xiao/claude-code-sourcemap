// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kzi
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: css-tree; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kzi] deps: ink/styles.ts, hooks/useTerminalSize.ts, utils/debug.ts, utils/fsOperations.ts, components/PromptInput/PromptInput.tsx
PZr = R(lt(), 1), Jce = R(rt(), 1), xzi = R(se(), 1);
function qh(e) {
  let t = Rzi.c(27),
    {
      width: n,
      color: r,
      char: o,
      padding: s,
      title: i,
      titleAlign: a
    } = e,
    l = o === void 0 ? $ae : o,
    c = s === void 0 ? 0 : s,
    u = a === void 0 ? "center" : a,
    {
      columns: d
    } = br(),
    p = Math.max(0, (n ?? d) - c),
    f;
  if (t[0] !== r || t[1] !== i) f = i ? Qce.jsx(w, {
    color: r,
    dimColor: !r,
    children: Qce.jsx(bd, {
      children: i
    })
  }) : null, t[0] = r, t[1] = i, t[2] = f;else f = t[2];
  let m = f;
  if (i) {
    let b = rn(i) + 2,
      _ = Math.max(0, p - b),
      S = u === "start" ? Math.min(4, _) : Math.floor(_ / 2),
      A = _ - S,
      v = !r,
      C;
    if (t[3] !== l || t[4] !== S) C = l.repeat(S), t[3] = l, t[4] = S, t[5] = C;else C = t[5];
    let x;
    if (t[6] !== i) x = Qce.jsx(w, {
      dimColor: true,
      children: Qce.jsx(bd, {
        children: i
      })
    }), t[6] = i, t[7] = x;else x = t[7];
    let I;
    if (t[8] !== l || t[9] !== A) I = l.repeat(A), t[8] = l, t[9] = A, t[10] = I;else I = t[10];
    let k;
    if (t[11] !== r || t[12] !== v || t[13] !== C || t[14] !== x || t[15] !== I) k = Qce.jsxs(w, {
      color: r,
      dimColor: v,
      children: [C, " ", x, " ", I]
    }), t[11] = r, t[12] = v, t[13] = C, t[14] = x, t[15] = I, t[16] = k;else k = t[16];
    let D;
    if (t[17] !== m || t[18] !== k) D = Qce.jsx(_0e, {
      fallback: m,
      children: k
    }), t[17] = m, t[18] = k, t[19] = D;else D = t[19];
    return D;
  }
  let g = !r,
    h;
  if (t[20] !== l || t[21] !== p) h = l.repeat(p), t[20] = l, t[21] = p, t[22] = h;else h = t[22];
  let y;
  if (t[23] !== r || t[24] !== g || t[25] !== h) y = Qce.jsx(_0e, {
    children: Qce.jsx(w, {
      color: r,
      dimColor: g,
      children: h
    })
  }), t[23] = r, t[24] = g, t[25] = h, t[26] = y;else y = t[26];
  return y;
}
var Rzi, Qce;