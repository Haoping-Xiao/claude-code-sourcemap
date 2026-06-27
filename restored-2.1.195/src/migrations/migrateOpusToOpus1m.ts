// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zOc
// matched 2.1.88 source: src/migrations/migrateOpusToOpus1m.ts
// class=modified  jaccard=0.2426  score=0.456  fileCov=0.3415
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zOc] deps: dn, er
Oxm = {
  "subscription-switch": "subscriptionNoticeCount",
};
function KOc() {
  if (!nT()) return;
  if (yn("userSettings")?.model !== "opus") return;
  let t = "opus[1m]",
    n = zo(t) === zo(Uw()) ? void 0 : t;
  (io("userSettings", {
    model: n,
  }),
    G("tengu_opus_to_opus1m_migration", {}),
    xe("migration_opus_to_opus1m"));
}
