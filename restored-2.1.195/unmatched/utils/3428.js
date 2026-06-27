// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pho
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0065  score=0.281  fileCov=0.0066
// note: nearest: src/components/Settings/Config.tsx (0.0065); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pho] deps: Jt
R1a = require("crypto");
function L1a(e) {
  Mho = e;
}
async function wft() {
  if (Mho) await Mho();
}
var Mho = null;
function Kl(e) {
  let t = D1a.c(21),
    {
      onConfirm: n,
      onCancel: r,
      confirmLabel: o,
      cancelLabel: s,
      cancelFirst: i,
      focus: a
    } = e,
    l = o === void 0 ? "Yes" : o,
    c = s === void 0 ? "No" : s,
    u = i === void 0 ? false : i,
    d = a === void 0 ? "confirm" : a;
  if (Sd()) {
    let S;
    if (t[0] !== c || t[1] !== l || t[2] !== r || t[3] !== n) S = $ho.jsx(J6i, {
      confirmLabel: l,
      cancelLabel: c,
      onConfirm: n,
      onCancel: r
    }), t[0] = c, t[1] = l, t[2] = r, t[3] = n, t[4] = S;else S = t[4];
    return S;
  }
  let f;
  if (t[5] !== l) f = {
    label: l,
    value: "confirm"
  }, t[5] = l, t[6] = f;else f = t[6];
  let m = f,
    g;
  if (t[7] !== c) g = {
    label: c,
    value: "cancel"
  }, t[7] = c, t[8] = g;else g = t[8];
  let h = g,
    y;
  if (t[9] !== h || t[10] !== u || t[11] !== m) y = u ? [h, m] : [m, h], t[9] = h, t[10] = u, t[11] = m, t[12] = y;else y = t[12];
  let b;
  if (t[13] !== r || t[14] !== n) b = S => S === "confirm" ? n() : r(), t[13] = r, t[14] = n, t[15] = b;else b = t[15];
  let _;
  if (t[16] !== d || t[17] !== r || t[18] !== y || t[19] !== b) _ = $ho.jsx(Sr, {
    options: y,
    defaultFocusValue: d,
    onChange: b,
    onCancel: r
  }), t[16] = d, t[17] = r, t[18] = y, t[19] = b, t[20] = _;else _ = t[20];
  return _;
}
var D1a, $ho;