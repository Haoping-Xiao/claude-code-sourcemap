// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OOc
// matched 2.1.88 source: src/migrations/migrateAutoUpdatesToSettings.ts
// class=modified  jaccard=0.4014  score=0.5308  fileCov=0.6221
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var OOc = E(() => {
  kt();
  pke();
  DD();
  Ls();
  dr();
  $xm = {};
});
function NOc() {
  let e = Dt();
  if (e.autoUpdates !== !1 || e.autoUpdatesProtectedForNative === !0) return;
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
        was_user_preference: !0,
        already_had_env_var: !!t.env?.DISABLE_AUTOUPDATER,
      }),
      Oe.set("DISABLE_AUTOUPDATER", !0),
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
        has_error: !0,
      }),
      Le("migration_auto_updates_to_settings", "migration_auto_updates_write_failed"));
  }
}
