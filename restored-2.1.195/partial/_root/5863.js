// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jUc
// matched 2.1.88 source: src/server/types.ts
// class=partial  jaccard=0.0613  score=0.1089  fileCov=0.1231
// note: low-confidence suggestion: src/server/types.ts; dir inferred from dep-graph -> _root; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jUc = E(() => {
  wr();
});
function GUc() {
  return Oe.CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS ?? CLm;
}
function WUc({
  runningBackgroundTasks: e,
  inputClosed: t,
  hasMainThreadQueued: n,
  hasActiveTeammates: r,
  hasPendingNotification: o,
  ceilingExceeded: s,
  deadline: i,
  swept: a,
  now: l
}) {
  if (!(t && !n && !r && e.length > 0 && (s || !o && !e.some(zJ)))) return {
    deadline: null,
    swept: !1,
    shouldSweep: !1
  };
  if (i === null) return {
    deadline: s ? l : l + hXo,
    swept: s,
    shouldSweep: s
  };
  if (l < i) return {
    deadline: i,
    swept: a,
    shouldSweep: !1
  };
  return {
    deadline: i,
    swept: !0,
    shouldSweep: !a
  };
}
function qUc(e, t) {
  for (let n of e) if (vT(n)) T(`print wind-down: killing background shell ${n.id} ("${n.description}") after ${hXo}ms grace`), yAe(n.id, t);else T(`print wind-down: no longer waiting on background ${n.type} task ${n.id} after ${hXo}ms grace`), xf(n.id, "stopped", {
    toolUseId: n.toolUseId,
    summary: n.description
  });
  if (e.length > 0) xe("print_wind_down");
}
var hXo = 5000,
  CLm = 600000;