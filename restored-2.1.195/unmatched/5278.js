// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _ic
// matched 2.1.88 source: src/utils/hooks.ts
// class=new  jaccard=0.0071  score=1  fileCov=0.0071
// note: nearest: src/utils/hooks.ts (0.0071); 0 renamed
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
    blocked: !1
  }));
  return o;
}