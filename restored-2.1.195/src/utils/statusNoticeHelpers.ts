// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zNo
// matched 2.1.88 source: src/utils/statusNoticeHelpers.ts
// class=modified  jaccard=0.3068  score=1  fileCov=0.3068
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zNo = E(() => {
  Gy();
});
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
