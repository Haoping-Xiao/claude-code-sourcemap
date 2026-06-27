// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t1c
// matched 2.1.88 source: src/memdir/paths.ts
// class=new  jaccard=0.0204  score=0.1024  fileCov=0.0248
// note: nearest: src/memdir/paths.ts (0.0204); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function n1c() {
  let e = Dt(),
    t = yn("userSettings"),
    n = {};
  for (let r of Nst) {
    let o = e[r];
    if (o === void 0) continue;
    if (o === I7[r]) continue;
    if (t?.[r] !== void 0) continue;
    n[r] = o;
  }
  if (Object.keys(n).length === 0) return;
  try {
    io("userSettings", n), G("tengu_migrate_user_intent_to_settings", {
      migrated_count: Object.keys(n).length
    }), xe("migration_user_intent_to_settings");
  } catch (r) {
    ke(Error(`Failed to migrate user-intent settings: ${r}`)), Le("migration_user_intent_to_settings", "migration_user_intent_write_failed");
  }
}