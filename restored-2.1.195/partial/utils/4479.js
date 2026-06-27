// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lze
// matched 2.1.88 source: src/components/SessionPreview.tsx
// class=partial  jaccard=0.0626  score=0.5065  fileCov=0.0666
// note: low-confidence suggestion: src/components/SessionPreview.tsx; dir inferred from dep-graph -> utils; 0 renamed
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
  if (e?.enabled === true || e?.available === true) return true;
  return ZKr();
}
function GKt() {
  if (!xQn()) return false;
  let e = Dr().autoDreamEnabled;
  if (e !== void 0) return e;
  if (vIl()?.enabled === true) return true;
  return ZKr();
}