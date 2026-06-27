// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HN
// matched 2.1.88 source: src/utils/plugins/pluginPolicy.ts
// class=partial  jaccard=0.1265  score=0.3368  fileCov=0.1684
// note: low-confidence suggestion: src/utils/plugins/pluginPolicy.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HN] deps: context/notifications.tsx, utils/agentContext.ts, utils/model/model.ts, components/Settings/Config.tsx, highlight.js/lib/languages/reasonml.js
sCo = R(rt(), 1);
function isPluginBlockedByPolicy() {
  Cbr(structuredClone(yn("policySettings")));
}
function hzn() {
  let e = wbr();
  if (e === void 0) return true;
  return !Bun.deepEquals(e, yn("policySettings"));
}