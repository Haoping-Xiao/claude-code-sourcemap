// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BOc
// matched 2.1.88 source: src/migrations/migrateBypassPermissionsAcceptedToSettings.ts
// class=modified  jaccard=0.3677  score=0.6753  fileCov=0.4466
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function migrateBypassPermissionsAcceptedToSettings() {
  if (!Dt().bypassPermissionsModeAccepted) return;
  try {
    if (!uj())
      io("userSettings", {
        skipDangerousModePermissionPrompt: true,
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
