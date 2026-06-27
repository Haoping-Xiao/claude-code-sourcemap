// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zNo
// matched 2.1.88 source: src/hooks/notifs/useModelMigrationNotifications.tsx
// class=modified  jaccard=0.1265  score=0.4716  fileCov=0.1474
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function wnr() {
  if (r_() !== void 0) return false;
  let e = Dt(),
    t = [
      e.sonnet45To46MigrationTimestamp,
      e.legacyOpusMigrationTimestamp,
      e.opusProMigrationTimestamp,
    ],
    n = Date.now() - process.uptime() * 1000;
  return t.some((r) => r !== void 0 && r >= n - 3000);
}
function Y7t(e) {
  if (!e) return 0;
  return e.activeAgents
    .filter((t) => t.source !== "built-in")
    .reduce((t, n) => {
      let r = `${n.agentType}: ${n.whenToUse}`;
      return t + If(r);
    }, 0);
}
var xKe = 15000;
