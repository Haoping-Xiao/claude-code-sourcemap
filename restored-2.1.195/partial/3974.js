// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JJ
// matched 2.1.88 source: src/tasks/RemoteAgentTask/RemoteAgentTask.tsx
// class=partial  jaccard=0.1097  score=0.4127  fileCov=0.13
// note: low-confidence suggestion: src/tasks/RemoteAgentTask/RemoteAgentTask.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JJ = E(() => {
  ft();
  Xr();
  cWt();
  np();
  dn();
  kt();
  yC();
  Fgo();
  jjn();
  POa();
  je();
  bm();
  co();
  tA();
  _a();
  Jt();
  bH();
  Cv();
  gP();
  qQp = ["remote-agent", "ultraplan", "ultrareview", "autofix-pr", "remote-workflow"];
  zQp = new Map();
  XQp = {
    session_error: "cloud session returned an error",
    poll_timeout: "cloud session exceeded 30 minutes",
    poll_timeout_after_api_error: "cloud session exceeded 30 minutes (API polls were failing)",
    no_review_output: "no review output \u2014 orchestrator may have exited early",
    orchestrator_error: "orchestrator reported an error",
    cancelled: "cancelled"
  };
  tZp = /^Task #(\S+) created successfully/, nZp = ve(() => H.object({
    subject: H.string(),
    activeForm: H.string().optional()
  })), rZp = ve(() => H.object({
    taskId: H.string(),
    status: H.enum(["pending", "in_progress", "completed", "deleted"]).optional(),
    subject: H.string().optional(),
    activeForm: H.string().optional()
  }));
  a8e = {
    name: "RemoteAgentTask",
    type: "remote_agent",
    async kill(e, t, n) {
      let r,
        o,
        s,
        i = !1,
        a = !1,
        l = 0,
        c = !1;
      if (t.update(e, u => {
        if (u.status !== "running") return u;
        return r = u.toolUseId, o = u.description, s = u.sessionId, i = u.isUltraplan ?? !1, a = u.isRemoteReview ?? !1, l = u.pollStartedAt, c = !0, {
          ...u,
          status: "killed",
          notified: !0,
          endTime: Date.now()
        };
      }), c) {
        if (xf(e, "stopped", {
          toolUseId: r,
          summary: o
        }), s) X5(s).catch(u => T(`RemoteAgentTask archive failed: ${String(u)}`));
        if (a) Le("task_remote_agent", "task_remote_agent_review_failed", {
          remote_task_type: We("ultrareview"),
          reason: $e("cancelled")
        });
        if (i) G("tengu_ultraplan_stopped", {
          duration_ms: Date.now() - l
        }), n(u => u.ultraplanSessionUrl || u.ultraplanPendingChoice ? {
          ...u,
          ultraplanSessionUrl: void 0,
          ultraplanPendingChoice: void 0
        } : u);
      }
      jy(e), aAe(e), T(`RemoteAgentTask ${e} killed, archiving session ${s ?? "unknown"}`);
    }
  };
});
function XZa(e, t) {
  return `<${ypn} from="${ip(e)}">
${HLe(ypn, t)}
</${ypn}>`;
}
var Q5 = "main";