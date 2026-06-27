// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hOc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0023  score=0.6488  fileCov=0.0023
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hOc = E(() => {
  Un();
  kt();
  pke();
  gOc();
  dyt();
  p8t();
  __();
  Gy();
  Hoe();
});
function yOc({ deferToCleanup: e }) {
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
