// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Aic
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=modified (alt of src/entrypoints/sdk/coreSchemas.ts)  jaccard=0.0139  score=0.5988  fileCov=0.014
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
async function o5e(e, t, n, r) {
  let { globs: o, triggerFilePath: s, parentFilePath: i, timeoutMs: a = lp } = r ?? {},
    l = {
      ...Td(void 0),
      hook_event_name: "InstructionsLoaded",
      file_path: e,
      memory_type: t,
      load_reason: n,
      globs: o,
      trigger_file_path: s,
      parent_file_path: i,
    };
  await Kk({
    hookInput: l,
    timeoutMs: a,
    matchQuery: n,
  });
}
