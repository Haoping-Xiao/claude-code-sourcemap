// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N5o
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0067  score=0.4981  fileCov=0.0067
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0067); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function cJ(e, t = lp) {
  let {
      message: n,
      title: r,
      notificationType: o
    } = e,
    s = {
      ...Td(void 0),
      hook_event_name: "Notification",
      message: n,
      title: r,
      notification_type: o
    };
  await Kk({
    hookInput: s,
    timeoutMs: t,
    matchQuery: o
  });
}