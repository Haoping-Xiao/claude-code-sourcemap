// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZOc
// matched 2.1.88 source: src/migrations/migrateSonnet45ToSonnet46.ts
// class=modified  jaccard=0.5981  score=0.9156  fileCov=0.633
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function e1c() {
  if (fr() !== "firstParty") return;
  if (!Aye() && !mle() && !QIe()) return;
  let e = yn("userSettings")?.model;
  if (
    e !== "claude-sonnet-4-5-20250929" &&
    e !== "claude-sonnet-4-5-20250929[1m]" &&
    e !== "sonnet-4-5-20250929" &&
    e !== "sonnet-4-5-20250929[1m]"
  )
    return;
  let t = e.endsWith("[1m]");
  if (
    (io("userSettings", {
      model: t ? "sonnet[1m]" : "sonnet",
    }),
    Dt().numStartups > 1)
  )
    gn((r) => ({
      ...r,
      sonnet45To46MigrationTimestamp: Date.now(),
    }));
  (G("tengu_sonnet45_to_46_migration", {
    from_model: $e(e),
    has_1m: t,
  }),
    xe("migration_sonnet45_to_sonnet46"));
}
