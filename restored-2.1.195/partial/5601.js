// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uKo
// matched 2.1.88 source: node_modules/qrcode/lib/renderer/canvas.js
// class=partial  jaccard=0.1931  score=1  fileCov=0.1931
// note: low-confidence suggestion: node_modules/qrcode/lib/renderer/canvas.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uKo = E(() => {
  ft();
  ufn();
  RN();
  u_();
  W9t();
  bMe();
  Ppe();
  nC();
  pyt();
  fd();
  h6();
  je();
  fn();
  Bi();
  sa();
  Ao();
  pTc();
  _a();
  bKn();
  kYA = hbm();
});
function dKo(e, t, n) {
  return (r, o, s, i, a) => {
    let l = t.current++;
    e.current[l] = {
      id: l,
      type: "image",
      content: r,
      mediaType: o ?? "image/png",
      filename: s,
      dimensions: i,
      sourcePath: a
    }, n(new J_e(`${KDn(l)} `));
  };
}