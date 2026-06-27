// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f1c
// matched 2.1.88 source: src/utils/sessionState.ts
// class=modified  jaccard=0.3051  score=0.437  fileCov=0.5028
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var f1c = E(() => {
  Rx();
  At();
  Jt();
  p1c();
});
class Ztn {
  onStateChanged;
  onWaitingOnUserChanged;
  onTurnStarting;
  onMetadataChanged;
  onInternalMetadataChanged;
  onPermissionModeChanged;
  currentState = "idle";
  hasPendingAction = false;
  hasTaskSummary = false;
  hasTerminalGoalSnapshot = false;
  mainLoopRefcount = 0;
  lastWaitingOnUser = false;
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount === 0;
  }
  setMainLoopRefcount(e) {
    ((this.mainLoopRefcount = e), this.emitIfWaitingChanged());
  }
  emitIfWaitingChanged() {
    let e = this.waitingOnUser;
    if (e !== this.lastWaitingOnUser)
      ((this.lastWaitingOnUser = e), this.onWaitingOnUserChanged?.(e));
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyTurnStarting() {
    this.onTurnStarting?.();
  }
  notifyStateChanged(e, t) {
    if (
      ((this.currentState = e),
      (this.lastWaitingOnUser = this.waitingOnUser),
      this.onStateChanged?.(e, t),
      e === "requires_action" && t)
    )
      ((this.hasPendingAction = true),
        this.onMetadataChanged?.({
          pending_action: t,
        }));
    else if (this.hasPendingAction)
      ((this.hasPendingAction = false),
        this.onMetadataChanged?.({
          pending_action: null,
        }));
    if (e === "running") {
      if (
        (this.onMetadataChanged?.({
          post_turn_summary: null,
          recap: null,
        }),
        this.hasTerminalGoalSnapshot)
      )
        ((this.hasTerminalGoalSnapshot = false),
          this.onMetadataChanged?.({
            goal: null,
          }));
    }
    if (e === "idle" && this.hasTaskSummary)
      ((this.hasTaskSummary = false),
        this.notifyMetadataChanged({
          task_summary: null,
        }));
    if (ut(process.env.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS))
      zv({
        type: "system",
        subtype: "session_state_changed",
        state: e,
      });
  }
  republishPendingAction(e) {
    ((this.hasPendingAction = true),
      this.onMetadataChanged?.({
        pending_action: e,
      }));
  }
  notifyMetadataChanged(e) {
    if ((this.onMetadataChanged?.(e), "goal" in e))
      this.hasTerminalGoalSnapshot = e.goal?.met === true;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = true;
      zv({
        type: "system",
        subtype: "task_summary",
        detail: e.task_summary ?? null,
      });
    }
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
}
function m1c(e) {
  return `<system-reminder>
The container was restarted. The following background tasks were running and are now stopped:
${e.map((n) => `- ${n.description || "(no description)"} (task ${n.task_id})`).join(`
`)}
Re-create them if still needed.
</system-reminder>`;
}
