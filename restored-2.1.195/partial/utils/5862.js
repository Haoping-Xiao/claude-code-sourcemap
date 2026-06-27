// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BUc
// matched 2.1.88 source: src/hooks/useSessionBackgrounding.ts
// class=partial  jaccard=0.2205  score=1  fileCov=0.2205
// note: low-confidence suggestion: src/hooks/useSessionBackgrounding.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BUc = E(() => {
  yC();
  tQ();
  je();
});
function UUc({
  inputClosed: e,
  runningTasks: t
}) {
  return e && t.some(n => zJ(n) && wH(n));
}
function FUc({
  inputClosed: e,
  currentState: t,
  hasRunningBgTasks: n
}) {
  if (n && Oe.CLAUDE_CODE_BG_TASKS_REPORT_RUNNING) return false;
  return !e && t === "running";
}