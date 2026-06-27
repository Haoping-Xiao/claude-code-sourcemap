// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o8
// matched 2.1.88 source: src/utils/settings/pluginOnlyPolicy.ts
// class=partial  jaccard=0.2036  score=1  fileCov=0.2036
// note: low-confidence suggestion: src/utils/settings/pluginOnlyPolicy.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function VE(e) {
  let t = yn("policySettings")?.strictPluginOnlyCustomization;
  if (t === true) return true;
  if (Array.isArray(t)) return t.includes(e);
  return false;
}
function L_e(e) {
  return e !== void 0 && V1d.has(e);
}
var V1d;