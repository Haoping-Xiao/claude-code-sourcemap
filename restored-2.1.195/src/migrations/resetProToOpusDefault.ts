// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s1c
// matched 2.1.88 source: src/migrations/resetProToOpusDefault.ts
// class=modified  jaccard=0.3473  score=0.6954  fileCov=0.4096
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var s1c = E(() => {
  kt();
  dn();
  er();
  vn();
  __();
  dr();
});
function i1c() {
  if (Dt().opusProMigrationComplete) return;
  if (fr() !== "firstParty" || !Aye()) {
    (gn((r) => ({
      ...r,
      opusProMigrationComplete: true,
    })),
      G("tengu_reset_pro_to_opus_default", {
        skipped: true,
      }));
    return;
  }
  if (jo()?.model === void 0) {
    let r = Date.now();
    (gn((o) => ({
      ...o,
      opusProMigrationComplete: true,
      opusProMigrationTimestamp: r,
    })),
      G("tengu_reset_pro_to_opus_default", {
        skipped: false,
        had_custom_model: false,
      }));
  } else
    (gn((r) => ({
      ...r,
      opusProMigrationComplete: true,
    })),
      G("tengu_reset_pro_to_opus_default", {
        skipped: false,
        had_custom_model: true,
      }));
  xe("migration_reset_pro_to_opus_default");
}
