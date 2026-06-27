// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t1c
// matched 2.1.88 source: src/migrations/migrateSonnet1mToSonnet45.ts
// class=partial  jaccard=0.0603  score=0.1011  fileCov=0.13
// note: low-confidence suggestion: src/migrations/migrateSonnet1mToSonnet45.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var t1c = E(() => {
  dn();
  kt();
  oo();
  er();
  Ls();
  dr();
});
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