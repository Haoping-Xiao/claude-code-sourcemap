// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bs
// matched 2.1.88 source: src/components/mcp/MCPListPanel.tsx
// class=new  jaccard=0.0549  score=1  fileCov=0.0549
// note: nearest: src/components/mcp/MCPListPanel.tsx (0.0549); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bs = E(() => {
  Ye();
  nzi = R(lt(), 1), rzi = R(rt(), 1), HPn = R(rt(), 1), BGe = R(se(), 1);
});
function mH(e) {
  let t = IZr.c(42),
    {
      isFocused: n,
      isSelected: r,
      children: o,
      description: s,
      showScrollDown: i,
      showScrollUp: a,
      styled: l,
      disabled: c,
      declareCursor: u,
      onClick: d,
      onHoverChange: p
    } = e,
    f = r === void 0 ? false : r,
    m = l === void 0 ? true : l,
    g = c === void 0 ? false : c,
    [h, y] = ozi.useState(false),
    b = !g && d !== void 0,
    _ = !g && (d !== void 0 || p !== void 0),
    S;
  if (t[0] !== p) S = V => {
    y(V), p?.(V);
  }, t[0] = p, t[1] = S;else S = t[1];
  let A = S,
    v;
  if (t[2] !== g || t[3] !== n || t[4] !== f || t[5] !== m) v = function () {
    if (g) return "inactive";
    if (!m) return;
    if (f) return "success";
    if (n) return "suggestion";
  }(), t[2] = g, t[3] = n, t[4] = f, t[5] = m, t[6] = v;else v = t[6];
  let C = v,
    x = n && !g && u !== false,
    I;
  if (t[7] !== x) I = {
    line: 0,
    column: 0,
    active: x
  }, t[7] = x, t[8] = I;else I = t[8];
  let k = RW(I),
    D = b ? d : void 0,
    P;
  if (t[9] !== _ || t[10] !== A) P = _ ? () => A(true) : void 0, t[9] = _, t[10] = A, t[11] = P;else P = t[11];
  let O;
  if (t[12] !== _ || t[13] !== A) O = _ ? () => A(false) : void 0, t[12] = _, t[13] = A, t[14] = O;else O = t[14];
  let L = h && b,
    M;
  if (t[15] !== g || t[16] !== n || t[17] !== i || t[18] !== a || t[19] !== L) M = qU.jsx(U, {
    flexShrink: 0,
    children: qU.jsx(wzd, {
      disabled: g,
      isFocused: n,
      showScrollUp: a,
      showScrollDown: i,
      hovered: L
    })
  }), t[15] = g, t[16] = n, t[17] = i, t[18] = a, t[19] = L, t[20] = M;else M = t[20];
  let N;
  if (t[21] !== o || t[22] !== g || t[23] !== m || t[24] !== C) N = m ? qU.jsx(w, {
    color: C,
    dimColor: g,
    children: o
  }) : o, t[21] = o, t[22] = g, t[23] = m, t[24] = C, t[25] = N;else N = t[25];
  let B;
  if (t[26] !== g || t[27] !== f) B = f && !g && qU.jsx(w, {
    color: "success",
    children: nt.tick
  }), t[26] = g, t[27] = f, t[28] = B;else B = t[28];
  let $;
  if (t[29] !== M || t[30] !== N || t[31] !== B) $ = qU.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    children: [M, N, B]
  }), t[29] = M, t[30] = N, t[31] = B, t[32] = $;else $ = t[32];
  let q;
  if (t[33] !== s) q = s && qU.jsx(U, {
    paddingLeft: 2,
    children: qU.jsx(w, {
      color: "inactive",
      children: s
    })
  }), t[33] = s, t[34] = q;else q = t[34];
  let W;
  if (t[35] !== k || t[36] !== O || t[37] !== $ || t[38] !== q || t[39] !== D || t[40] !== P) W = qU.jsxs(U, {
    ref: k,
    flexDirection: "column",
    onClick: D,
    onMouseEnter: P,
    onMouseLeave: O,
    children: [$, q]
  }), t[35] = k, t[36] = O, t[37] = $, t[38] = q, t[39] = D, t[40] = P, t[41] = W;else W = t[41];
  return W;
}
function wzd(e) {
  let t = IZr.c(6),
    {
      disabled: n,
      isFocused: r,
      showScrollUp: o,
      showScrollDown: s,
      hovered: i
    } = e;
  if (n) {
    let l;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) l = qU.jsx(w, {
      children: " "
    }), t[0] = l;else l = t[0];
    return l;
  }
  if (r) {
    let l;
    if (t[1] === Symbol.for("react.memo_cache_sentinel")) l = qU.jsx(w, {
      color: "suggestion",
      children: nt.pointer
    }), t[1] = l;else l = t[1];
    return l;
  }
  if (s) {
    let l;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) l = qU.jsx(w, {
      dimColor: true,
      children: nt.arrowDown
    }), t[2] = l;else l = t[2];
    return l;
  }
  if (o) {
    let l;
    if (t[3] === Symbol.for("react.memo_cache_sentinel")) l = qU.jsx(w, {
      dimColor: true,
      children: nt.arrowUp
    }), t[3] = l;else l = t[3];
    return l;
  }
  if (i) {
    let l;
    if (t[4] === Symbol.for("react.memo_cache_sentinel")) l = qU.jsx(w, {
      dimColor: true,
      children: nt.pointer
    }), t[4] = l;else l = t[4];
    return l;
  }
  let a;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) a = qU.jsx(w, {
    children: " "
  }), t[5] = a;else a = t[5];
  return a;
}
var IZr, ozi, qU;