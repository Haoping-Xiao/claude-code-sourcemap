// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r1c
// matched 2.1.88 source: src/migrations/resetAutoModeOptInForDefaultOffer.ts
// class=modified  jaccard=0.3374  score=0.5866  fileCov=0.4426
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var r1c = E(() => {
  dn();
  kt();
  er();
  vn();
  Fh();
  dr();
});
function o1c() {
  if (Dt().hasResetAutoModeOptInForDefaultOffer) return;
  if (fKe() !== "enabled") return;
  try {
    let t = yn("userSettings");
    if (t?.skipAutoPermissionPrompt && t?.permissions?.defaultMode !== "auto")
      (io("userSettings", {
        skipAutoPermissionPrompt: void 0,
      }),
        G("tengu_migrate_reset_auto_opt_in_for_default_offer", {}),
        xe("migration_reset_auto_mode_opt_in"));
    gn((n) => {
      if (n.hasResetAutoModeOptInForDefaultOffer) return n;
      return {
        ...n,
        hasResetAutoModeOptInForDefaultOffer: true,
      };
    });
  } catch (t) {
    (ke(Error(`Failed to reset auto mode opt-in: ${t}`)),
      Le("migration_reset_auto_mode_opt_in", "migration_reset_auto_mode_write_failed"));
  }
}
