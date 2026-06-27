// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HN
// matched 2.1.88 source: src/utils/plugins/pluginPolicy.ts
// class=partial  jaccard=0.1265  score=0.3368  fileCov=0.1684
// note: low-confidence suggestion: src/utils/plugins/pluginPolicy.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HN = E(() => {
  uo();
  Ao();
  vM();
  fzn();
  w4();
  sCo = R(rt(), 1);
});
function gzn() {
  Cbr(structuredClone(yn("policySettings")));
}
function hzn() {
  let e = wbr();
  if (e === void 0) return true;
  return !Bun.deepEquals(e, yn("policySettings"));
}