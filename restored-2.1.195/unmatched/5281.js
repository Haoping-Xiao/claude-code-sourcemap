// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Aic
// matched 2.1.88 source: src/entrypoints/sdk/coreTypes.ts
// class=new  jaccard=0.0331  score=1  fileCov=0.0331
// note: nearest: src/entrypoints/sdk/coreTypes.ts (0.0331); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Aic = E(() => {
  sp();
  E5e();
});
async function o5e(e, t, n, r) {
  let {
      globs: o,
      triggerFilePath: s,
      parentFilePath: i,
      timeoutMs: a = lp
    } = r ?? {},
    l = {
      ...Td(void 0),
      hook_event_name: "InstructionsLoaded",
      file_path: e,
      memory_type: t,
      load_reason: n,
      globs: o,
      trigger_file_path: s,
      parent_file_path: i
    };
  await Kk({
    hookInput: l,
    timeoutMs: a,
    matchQuery: n
  });
}