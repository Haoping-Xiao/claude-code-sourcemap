// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o8
// matched 2.1.88 source: src/utils/plugins/pluginPolicy.ts
// class=modified  jaccard=0.4816  score=1  fileCov=0.4816
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var o8 = E(() => {
  dr();
  sr();
});
function VE(e) {
  let t = yn("policySettings")?.strictPluginOnlyCustomization;
  if (t === !0) return !0;
  if (Array.isArray(t)) return t.includes(e);
  return !1;
}
function L_e(e) {
  return e !== void 0 && V1d.has(e);
}
var V1d;
