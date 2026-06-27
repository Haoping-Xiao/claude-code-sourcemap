// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hOc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0028  score=0.4353  fileCov=0.0028
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function run({ deferToCleanup: e }) {
  let t = performance.now(),
    n = IRl();
  if (
    (pa("action_after_plugins_init"),
    n.then(async () => {
      (G("tengu_timer", {
        event: We("plugins_init"),
        durationMs: Math.round(performance.now() - t),
        headless: e,
      }),
        await lRl(),
        cyt());
    }),
    e)
  )
    return Ci(() => n);
  return;
}
