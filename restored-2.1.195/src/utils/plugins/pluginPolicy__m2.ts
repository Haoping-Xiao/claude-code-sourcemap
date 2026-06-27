// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jDl
// matched 2.1.88 source: src/utils/plugins/pluginPolicy.ts
// class=modified (alt of src/utils/plugins/pluginPolicy.ts)  jaccard=0.4816  score=1  fileCov=0.4816
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jDl = E(() => {
  Ber = new Int32Array(64);
});
function nKe(e) {
  return N_() ? yn("policySettings")?.statusLine : e;
}
function Fer(e) {
  if (Mj()) return;
  if (!yke()) return;
  return N_() ? yn("policySettings")?.fileSuggestion : e;
}
