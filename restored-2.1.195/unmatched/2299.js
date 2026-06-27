// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vke
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vke = E(() => {
  je();
  At();
  GUd = new Set(["EIO", "ENOTTY", "EBADF"]);
});
function VFi(e, t) {
  if (e < 2) return;
  if (mRn.size >= (VUd ?? qUd)) {
    a7r = !0;
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
  mRn.clear(), a7r = !1;
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
  if (WFi) return !1;
  return WFi = !0, !0;
}
function n2i() {
  if (qFi) return !1;
  return qFi = !0, !0;
}
var gRn = !1,
  rGe = !1,
  WUd = 32768,
  qUd = 131072,
  mRn,
  a7r = !1,
  VUd = null,
  fRn = null,
  WFi = !1,
  qFi = !1,
  zFi = !1,
  KFi = !1,
  l7r = !1,
  XFi = 0,
  JFi = "none",
  QFi = 0;