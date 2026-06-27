// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xto
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs
// class=partial  jaccard=0.0888  score=1  fileCov=0.0888
// note: low-confidence suggestion: node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function MFt(e, t) {
  let n = e.toLowerCase();
  if (t === "*") return true;
  if (t.startsWith("*.")) {
    if (WJi.isIP(qne(n))) return false;
    let r = t.substring(2).toLowerCase();
    return n.endsWith("." + r);
  }
  return n === t.toLowerCase();
}
var WJi;