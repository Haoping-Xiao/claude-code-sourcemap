// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _ic
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0068  score=0.4915  fileCov=0.0069
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0068); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _ic = E(() => {
  sp();
});
async function vRe(e, t, n = lp) {
  let r = {
      ...Td(void 0),
      hook_event_name: "ConfigChange",
      source: e,
      file_path: t
    },
    o = await Kk({
      hookInput: r,
      timeoutMs: n,
      matchQuery: e
    });
  if (e === "policy_settings") return o.map(s => ({
    ...s,
    blocked: false
  }));
  return o;
}