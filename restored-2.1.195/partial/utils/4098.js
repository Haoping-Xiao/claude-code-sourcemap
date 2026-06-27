// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ezn
// matched 2.1.88 source: src/components/LogoV2/Clawd.tsx
// class=partial  jaccard=0.2421  score=0.3856  fileCov=0.3943
// note: low-confidence suggestion: src/components/LogoV2/Clawd.tsx; dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
function Clawd(e) {
  let t = hCo.c(26),
    n;
  if (t[0] !== e) n = e === void 0 ? {} : e, t[0] = e, t[1] = n;else n = t[1];
  let {
      pose: r
    } = n,
    o = r === void 0 ? "default" : r;
  if (Sd()) return null;
  if (Oe.terminal === "Apple_Terminal") {
    let y;
    if (t[2] !== o) y = kL.jsx(AppleTerminalClawd, {
      pose: o
    }), t[2] = o, t[3] = y;else y = t[3];
    return y;
  }
  let i = brf[o],
    a;
  if (t[4] !== i.r1L) a = kL.jsx(w, {
    color: "clawd_body",
    children: i.r1L
  }), t[4] = i.r1L, t[5] = a;else a = t[5];
  let l;
  if (t[6] !== i.r1E) l = kL.jsx(w, {
    color: "clawd_body",
    backgroundColor: "clawd_background",
    children: i.r1E
  }), t[6] = i.r1E, t[7] = l;else l = t[7];
  let c;
  if (t[8] !== i.r1R) c = kL.jsx(w, {
    color: "clawd_body",
    children: i.r1R
  }), t[8] = i.r1R, t[9] = c;else c = t[9];
  let u;
  if (t[10] !== a || t[11] !== l || t[12] !== c) u = kL.jsxs(w, {
    children: [a, l, c]
  }), t[10] = a, t[11] = l, t[12] = c, t[13] = u;else u = t[13];
  let d;
  if (t[14] !== i.r2L) d = kL.jsx(w, {
    color: "clawd_body",
    children: i.r2L
  }), t[14] = i.r2L, t[15] = d;else d = t[15];
  let p;
  if (t[16] === Symbol.for("react.memo_cache_sentinel")) p = kL.jsx(w, {
    color: "clawd_body",
    backgroundColor: "clawd_background",
    children: "\u2588\u2588\u2588\u2588\u2588"
  }), t[16] = p;else p = t[16];
  let f;
  if (t[17] !== i.r2R) f = kL.jsx(w, {
    color: "clawd_body",
    children: i.r2R
  }), t[17] = i.r2R, t[18] = f;else f = t[18];
  let m;
  if (t[19] !== d || t[20] !== f) m = kL.jsxs(w, {
    children: [d, p, f]
  }), t[19] = d, t[20] = f, t[21] = m;else m = t[21];
  let g;
  if (t[22] === Symbol.for("react.memo_cache_sentinel")) g = kL.jsxs(w, {
    color: "clawd_body",
    children: ["  ", "\u2598\u2598 \u259D\u259D", "  "]
  }), t[22] = g;else g = t[22];
  let h;
  if (t[23] !== m || t[24] !== u) h = kL.jsxs(U, {
    flexDirection: "column",
    flexShrink: 0,
    children: [u, m, g]
  }), t[23] = m, t[24] = u, t[25] = h;else h = t[25];
  return h;
}
function AppleTerminalClawd(e) {
  let t = hCo.c(10),
    {
      pose: n
    } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = kL.jsx(w, {
    color: "clawd_body",
    children: "\u2597"
  }), t[0] = r;else r = t[0];
  let o = Srf[n],
    s;
  if (t[1] !== o) s = kL.jsx(w, {
    color: "clawd_background",
    backgroundColor: "clawd_body",
    children: o
  }), t[1] = o, t[2] = s;else s = t[2];
  let i;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) i = kL.jsx(w, {
    color: "clawd_body",
    children: "\u2596"
  }), t[3] = i;else i = t[3];
  let a;
  if (t[4] !== s) a = kL.jsxs(w, {
    children: [r, s, i]
  }), t[4] = s, t[5] = a;else a = t[5];
  let l, c;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) l = kL.jsx(w, {
    backgroundColor: "clawd_body",
    children: " ".repeat(7)
  }), c = kL.jsx(w, {
    color: "clawd_body",
    children: "\u2598\u2598 \u259D\u259D"
  }), t[6] = l, t[7] = c;else l = t[6], c = t[7];
  let u;
  if (t[8] !== a) u = kL.jsxs(U, {
    flexDirection: "column",
    alignItems: "center",
    children: [a, l, c]
  }), t[8] = a, t[9] = u;else u = t[9];
  return u;
}
var hCo, kL, brf, Srf;