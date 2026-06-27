// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xpn
// matched 2.1.88 source: src/utils/cwd.ts
// class=partial  jaccard=0.1856  score=1  fileCov=0.1856
// note: low-confidence suggestion: src/utils/cwd.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xpn] deps: lodash-es/_apply.js, xEs
oPu = IEs(function (e, t, n, r) {
  fEs(e, t, n, r);
}), ZV = oPu;
function sPu(e, t) {
  return kpn.run({
    cwd: o_(e)
  }, t);
}
function Ehe(e, t) {
  return sPu(e ?? $t(), t);
}
function MFe() {
  return kpn.getStore() !== void 0;
}
function qkr(e) {
  let t = kpn.getStore();
  if (t) t.cwd = o_(e);else see(e);
}
function Rpn() {
  return kpn.getStore()?.cwd ?? CK();
}
function $t() {
  try {
    return Rpn();
  } catch {
    return yr();
  }
}
var kEs, kpn;