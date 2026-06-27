// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lze
// matched 2.1.88 source: src/services/autoDream/config.ts
// class=modified  jaccard=0.3412  score=0.5798  fileCov=0.4533
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Lze] deps: ft, dn, kt, er, PM, pQ, sr
((EIl = require("crypto")), (xTf = new Set(["clear", "stop", "off", "reset", "none", "cancel"])));
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
