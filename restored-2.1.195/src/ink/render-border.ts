// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bWi
// matched 2.1.88 source: src/ink/render-border.ts
// class=modified  jaccard=0.647  score=0.9742  fileCov=0.6582
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module bWi] (exports=yQh, module=hJr)
var yQh = {};
var hJr = {
  exports: yQh,
};
var _Wi = yWi();
hJr.exports = _Wi;
hJr.exports.default = _Wi;
function SWi(borderLine, t, n, r = 0, o) {
  let s = rn(t),
    i = borderLine.length;
  if (s >= i - 2) {
    let u = w1(t, 0, i);
    if (rn(u) > i) u = w1(t, 0, i - 1);
    let d = o.repeat(Math.max(0, i - rn(u)));
    return ["", u, d];
  }
  let a;
  if (n === "center") a = Math.floor((i - s) / 2);
  else if (n === "start") a = r + 1;
  else a = i - s - r - 1;
  a = Math.max(1, Math.min(a, i - s - 1));
  let l = borderLine.substring(0, 1) + Ff(o, a - 1),
    c = Ff(o, i - a - s - 1) + borderLine.substring(i - 1);
  return [l, t, c];
}
function aat(e, t, n) {
  let r = V_e(e, t);
  if (n) r = wt.dim(r);
  return r;
}
var EWi,
  FGd,
  renderBorder = (e, t, node, output) => {
    if (node.style.borderStyle) {
      let o = Math.floor(node.yogaNode.getComputedWidth()),
        s = Math.floor(node.yogaNode.getComputedHeight()),
        i =
          typeof node.style.borderStyle === "string"
            ? (FGd[node.style.borderStyle] ?? EWi.default[node.style.borderStyle])
            : node.style.borderStyle,
        a = node.style.borderTopColor ?? node.style.borderColor,
        l = node.style.borderBottomColor ?? node.style.borderColor,
        c = node.style.borderLeftColor ?? node.style.borderColor,
        u = node.style.borderRightColor ?? node.style.borderColor,
        d = node.style.borderTopDimColor ?? node.style.borderDimColor,
        p = node.style.borderBottomDimColor ?? node.style.borderDimColor,
        f = node.style.borderLeftDimColor ?? node.style.borderDimColor,
        m = node.style.borderRightDimColor ?? node.style.borderDimColor,
        g = node.style.borderTop !== false,
        h = node.style.borderBottom !== false,
        y = node.style.borderLeft !== false,
        b = node.style.borderRight !== false,
        _ = Math.max(0, o - (y ? 1 : 0) - (b ? 1 : 0)),
        S = g ? (y ? i.topLeft : "") + i.top.repeat(_) + (b ? i.topRight : "") : "",
        A = Array.isArray(node.style.borderText)
          ? node.style.borderText
          : node.style.borderText
            ? [node.style.borderText]
            : [],
        v = A.find((M) => M.position === "top"),
        C = A.find((M) => M.position === "bottom"),
        x;
      if (g && v) {
        let [M, N, B] = SWi(S, v.content, v.align, v.offset, i.top);
        x = aat(M, a, d) + N + aat(B, a, d);
      } else if (g) x = aat(S, a, d);
      let I = s;
      if (g) I -= 1;
      if (h) I -= 1;
      I = Math.max(0, I);
      let k = (
        V_e(i.left, c) +
        `
`
      ).repeat(I);
      if (f) k = wt.dim(k);
      let D = (
        V_e(i.right, u) +
        `
`
      ).repeat(I);
      if (m) D = wt.dim(D);
      let P = h ? (y ? i.bottomLeft : "") + i.bottom.repeat(_) + (b ? i.bottomRight : "") : "",
        O;
      if (h && C) {
        let [M, N, B] = SWi(P, C.content, C.align, C.offset, i.bottom);
        O = aat(M, l, p) + N + aat(B, l, p);
      } else if (h) O = aat(P, l, p);
      let L = g ? 1 : 0;
      if (x) output.write(e, t, x);
      if (y) output.write(e, t + L, k);
      if (b) output.write(e + o - 1, t + L, D);
      if (O) output.write(e, t + s - 1, O);
    }
  },
  AWi;
