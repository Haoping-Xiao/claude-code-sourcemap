// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lze
// matched 2.1.88 source: src/components/SessionPreview.tsx
// class=partial  jaccard=0.0626  score=0.5065  fileCov=0.0666
// note: low-confidence suggestion: src/components/SessionPreview.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lze = E(() => {
  ft();
  dn();
  kt();
  er();
  PM();
  pQ();
  sr();
  EIl = require("crypto"), xTf = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
});
function vIl() {
  return at("tengu_onyx_plover", null);
}
function xQn() {
  let e = vIl();
  if (e?.enabled === !0 || e?.available === !0) return !0;
  return ZKr();
}
function GKt() {
  if (!xQn()) return !1;
  let e = Dr().autoDreamEnabled;
  if (e !== void 0) return e;
  if (vIl()?.enabled === !0) return !0;
  return ZKr();
}