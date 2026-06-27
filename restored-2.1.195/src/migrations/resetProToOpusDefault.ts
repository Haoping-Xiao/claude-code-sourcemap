// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s1c
// matched 2.1.88 source: src/migrations/resetProToOpusDefault.ts
// class=modified  jaccard=0.2794  score=0.5948  fileCov=0.3451
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
      opusProMigrationComplete: !0,
    })),
      G("tengu_reset_pro_to_opus_default", {
        skipped: !0,
      }));
    return;
  }
  if (jo()?.model === void 0) {
    let r = Date.now();
    (gn((o) => ({
      ...o,
      opusProMigrationComplete: !0,
      opusProMigrationTimestamp: r,
    })),
      G("tengu_reset_pro_to_opus_default", {
        skipped: !1,
        had_custom_model: !1,
      }));
  } else
    (gn((r) => ({
      ...r,
      opusProMigrationComplete: !0,
    })),
      G("tengu_reset_pro_to_opus_default", {
        skipped: !1,
        had_custom_model: !0,
      }));
  xe("migration_reset_pro_to_opus_default");
}
