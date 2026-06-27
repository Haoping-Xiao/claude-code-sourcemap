// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vke
// matched 2.1.88 source: src/tools/SkillTool/prompt.ts
// class=new  jaccard=0.0165  score=0.1162  fileCov=0.0189
// note: nearest: src/tools/SkillTool/prompt.ts (0.0165); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vke] deps: utils/debug.ts, utils/errors.ts
GUd = new Set(["EIO", "ENOTTY", "EBADF"]);
function VFi(e, t) {
  if (e < 2) return;
  if (mRn.size >= (VUd ?? qUd)) {
    a7r = true;
    return;
  }
  mRn.add(e * WUd + t);
}
function oBt(e) {
  gRn = e;
}
function YFi(e) {
  rGe = e;
}
function c7r(e) {
  XFi++, JFi = e, QFi = performance.now();
}
function u7r() {
  return {
    count: XFi,
    lastReason: JFi,
    lastResetAt: QFi
  };
}
function sBt() {
  return {
    atlasKeys: mRn.size,
    saturated: a7r
  };
}
function d7r() {
  mRn.clear(), a7r = false;
}
function ZFi(e) {
  fRn = e;
}
function e2i() {
  if (!fRn) return null;
  return {
    size: fRn.size,
    overflowed: fRn.overflowed
  };
}
function t2i() {
  if (WFi) return false;
  return WFi = true, true;
}
function n2i() {
  if (qFi) return false;
  return qFi = true, true;
}
var gRn = false,
  rGe = false,
  WUd = 32768,
  qUd = 131072,
  mRn,
  a7r = false,
  VUd = null,
  fRn = null,
  WFi = false,
  qFi = false,
  zFi = false,
  KFi = false,
  l7r = false,
  XFi = 0,
  JFi = "none",
  QFi = 0;