// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JOc
// matched 2.1.88 source: src/migrations/migrateSonnet1mToSonnet45.ts
// class=modified  jaccard=0.3223  score=0.7697  fileCov=0.3567
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var JOc = E(() => {
  dn();
  er();
});
function QOc() {
  if (Dt().sonnet1m45MigrationComplete) return;
  let t = false;
  if (yn("userSettings")?.model === "sonnet[1m]")
    (io("userSettings", {
      model: "sonnet-4-5-20250929[1m]",
    }),
      (t = true));
  if (r_() === "sonnet[1m]") (py("sonnet-4-5-20250929[1m]"), (t = true));
  if (
    (gn((o) => ({
      ...o,
      sonnet1m45MigrationComplete: true,
    })),
    t)
  )
    xe("migration_sonnet1m_to_sonnet45");
}
