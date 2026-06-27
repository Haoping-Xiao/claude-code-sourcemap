// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XXo
// matched 2.1.88 source: node_modules/qrcode/lib/core/polynomial.js
// class=partial  jaccard=0.1367  score=0.2541  fileCov=0.2284
// note: low-confidence suggestion: node_modules/qrcode/lib/core/polynomial.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XXo = E(() => {
  YP();
  $Xo();
  OXo();
  rB();
  wm();
  iie();
  Tnn = TDm;
});
async function P2c(e, t, n, r) {
  let o = e.slice(0, 7);
  r || (r = qmr(o));
  let {
    ciphertext: s,
    tag: i
  } = await Tnn(o, n, t, r, new Uint8Array(0));
  return {
    encryptedKey: s,
    iv: xS(r),
    tag: xS(i)
  };
}
async function M2c(e, t, n, r, o) {
  let s = e.slice(0, 7);
  return Ymr(s, t, n, r, o, new Uint8Array(0));
}