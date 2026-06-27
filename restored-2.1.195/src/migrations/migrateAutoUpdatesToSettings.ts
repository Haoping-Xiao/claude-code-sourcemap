// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OOc
// matched 2.1.88 source: src/migrations/migrateAutoUpdatesToSettings.ts
// class=modified  jaccard=0.44  score=0.7218  fileCov=0.5298
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OOc] deps: kt, pke, DD, Ls, dr
$xm = {};
function NOc() {
  let e = Dt();
  if (e.autoUpdates !== false || e.autoUpdatesProtectedForNative === true) return;
  try {
    let t = yn("userSettings") || {};
    (io("userSettings", {
      ...t,
      env: {
        ...t.env,
        DISABLE_AUTOUPDATER: "1",
      },
    }),
      G("tengu_migrate_autoupdates_to_settings", {
        was_user_preference: true,
        already_had_env_var: !!t.env?.DISABLE_AUTOUPDATER,
      }),
      Oe.set("DISABLE_AUTOUPDATER", true),
      gn((n) => {
        let { autoUpdates: r, autoUpdatesProtectedForNative: o, ...s } = n;
        return s;
      }),
      xe("migration_auto_updates_to_settings"));
  } catch (t) {
    (T(`Failed to migrate auto-updates: ${t}`, {
      level: "error",
    }),
      G("tengu_migrate_autoupdates_error", {
        has_error: true,
      }),
      Le("migration_auto_updates_to_settings", "migration_auto_updates_write_failed"));
  }
}
