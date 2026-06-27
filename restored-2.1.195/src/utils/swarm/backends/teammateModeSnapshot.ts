// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zqe
// matched 2.1.88 source: src/utils/swarm/backends/teammateModeSnapshot.ts
// class=modified  jaccard=0.5868  score=0.8253  fileCov=0.67
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zqe = E(() => {
  ft();
  gjn();
  je();
  wr();
  fn();
  q0();
  co();
  dr();
  dn();
  Un();
});
var ago = {};
_t(ago, {
  setCliTeammateModeOverride: () => setCliTeammateModeOverride,
  hasTeammateModeSnapshot: () => hasTeammateModeSnapshot,
  getTeammateModeFromSnapshot: () => getTeammateModeFromSnapshot,
  getCliTeammateModeOverride: () => getCliTeammateModeOverride,
  clearCliTeammateModeOverride: () => clearCliTeammateModeOverride,
  captureTeammateModeSnapshot: () => captureTeammateModeSnapshot,
  DEFAULT_TEAMMATE_MODE: () => DEFAULT_TEAMMATE_MODE,
});
function setCliTeammateModeOverride(e) {
  YGt = e;
}
function getCliTeammateModeOverride() {
  return YGt;
}
function clearCliTeammateModeOverride(e) {
  ((YGt = null), ($De = e), T(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`));
}
function hasTeammateModeSnapshot() {
  return $De !== null;
}
function captureTeammateModeSnapshot() {
  if (YGt) (($De = YGt), T(`[TeammateModeSnapshot] Captured from CLI override: ${$De}`));
  else
    (($De = wc("teammateMode", DEFAULT_TEAMMATE_MODE).value),
      T(`[TeammateModeSnapshot] Captured from config: ${$De}`));
}
function getTeammateModeFromSnapshot() {
  if ($De === null)
    (ke(
      Error(
        "getTeammateModeFromSnapshot called before capture - this indicates an initialization bug",
      ),
    ),
      captureTeammateModeSnapshot());
  return $De ?? DEFAULT_TEAMMATE_MODE;
}
var DEFAULT_TEAMMATE_MODE = "in-process",
  $De = null,
  YGt = null;
