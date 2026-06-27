// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GOc
// matched 2.1.88 source: src/migrations/migrateLegacyOpusToCurrent.ts
// class=modified  jaccard=0.5051  score=0.8751  fileCov=0.5443
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function WOc() {
  if (fr() !== "firstParty") return;
  if (!nje()) return;
  let e = yn("userSettings")?.model;
  if (
    e !== "claude-opus-4-20250514" &&
    e !== "claude-opus-4-1-20250805" &&
    e !== "claude-opus-4-0" &&
    e !== "claude-opus-4-1"
  )
    return;
  (io("userSettings", {
    model: "opus",
  }),
    gn((t) => ({
      ...t,
      legacyOpusMigrationTimestamp: Date.now(),
    })),
    G("tengu_legacy_opus_migration", {
      from_model: $e(e),
    }),
    xe("migration_legacy_opus_to_current"));
}
