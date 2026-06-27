// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BOc
// matched 2.1.88 source: src/migrations/migrateBypassPermissionsAcceptedToSettings.ts
// class=modified  jaccard=0.4487  score=0.6169  fileCov=0.6221
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var BOc = E(() => {
  kt();
  dn();
  er();
  je();
  RE();
  dr();
});
function UOc() {
  if (!Dt().bypassPermissionsModeAccepted) return;
  try {
    if (!uj())
      io("userSettings", {
        skipDangerousModePermissionPrompt: !0,
      });
    (G("tengu_migrate_bypass_permissions_accepted", {}),
      gn((t) => {
        if (!("bypassPermissionsModeAccepted" in t)) return t;
        let { bypassPermissionsModeAccepted: n, ...r } = t;
        return r;
      }),
      xe("migration_bypass_permissions_to_settings"));
  } catch (t) {
    (T(`Failed to migrate bypass permissions accepted: ${t}`, {
      level: "error",
    }),
      Le("migration_bypass_permissions_to_settings", "migration_bypass_permissions_write_failed"));
  }
}
