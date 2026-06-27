// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HN
// matched 2.1.88 source: src/utils/plugins/pluginPolicy.ts
// class=modified (alt of src/utils/plugins/pluginPolicy.ts)  jaccard=0.4816  score=1  fileCov=0.4816
// note: deminified; 0 identifiers renamed from _t exports
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
  if (e === void 0) return !0;
  return !Bun.deepEquals(e, yn("policySettings"));
}
