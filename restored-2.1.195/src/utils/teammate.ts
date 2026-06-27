// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sj
// matched 2.1.88 source: src/utils/teammate.ts
// class=modified  jaccard=0.4431  score=0.5188  fileCov=0.7522
// note: deminified; 17 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: waitForTeammatesToBecomeIdle, setDynamicTeamContext, runWithTeammateContext, isTeammate, isTeamLead, isPlanModeRequired, isNestedInteractiveClaudeSession, isModelDrivenSession, isInProcessTeammate, hasWorkingInProcessTeammates, hasNonLeadTeammate, hasActiveInProcessTeammates, getTeammateContext, getTeammateColor, getTeamName, getParentSessionId, getDynamicTeamContext, getAgentName, getAgentId, createTeammateContext, clearDynamicTeamContext, _tmuxGlobalEnvOutputHasMarker, _setAmb …
// [unwrapped __esm module Sj]
((Yoi = require("async_hooks")), (X2r = new Yoi.AsyncLocalStorage()));
var ejr = {};
function getParentSessionId() {
  let e = w0();
  if (e) return e.parentSessionId;
  return k9?.parentSessionId;
}
function setDynamicTeamContext(e) {
  k9 = e;
}
function clearDynamicTeamContext() {
  k9 = null;
}
function getDynamicTeamContext() {
  return k9;
}
function getAgentId() {
  let e = w0();
  if (e) return e.agentId;
  return k9?.agentId;
}
function getAgentName() {
  let e = w0();
  if (e) return e.agentName;
  return k9?.agentName;
}
function getTeamName(e) {
  let t = w0();
  if (t) return t.teamName;
  if (k9?.teamName) return k9.teamName;
  return e?.teamName;
}
function isTeammate() {
  if (w0()) return true;
  return !!(k9?.agentId && k9?.teamName);
}
function isModelDrivenSession(e) {
  return e !== void 0 || isTeammate() || Oe.CLAUDE_CODE_CHILD_SESSION;
}
function isNestedInteractiveClaudeSession() {
  if (Oe.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return false;
  if (!(Oe.CLAUDE_CODE_CHILD_SESSION && Ax() && !isTeammate())) return false;
  return !Cpd();
}
function wpd(e) {
  ((J2r = e), (DAn = null));
}
function Cpd() {
  if (DAn === null) DAn = Ipd();
  return DAn;
}
function Ipd() {
  if (J2r)
    try {
      return J2r();
    } catch {
      return false;
    }
  if (!Oe.TMUX) return false;
  let e;
  try {
    e = Xoi.spawnSync("tmux", ["show-environment", "-g", "CLAUDE_CODE_CHILD_SESSION"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      windowsHide: true,
    });
  } catch {
    return false;
  }
  if (e.status !== 0) return false;
  return Joi(e.stdout);
}
function Joi(e) {
  return e
    .split(
      `
`,
    )
    .some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function getTeammateColor() {
  let e = w0();
  if (e) return e.color;
  return k9?.color;
}
function isPlanModeRequired() {
  let e = w0();
  if (e) return e.planModeRequired;
  if (k9 !== null) return k9.planModeRequired;
  return Oe.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function hasNonLeadTeammate(e) {
  if (!e) return false;
  let { leadAgentId: t, teammates: n } = e;
  return Object.keys(n).some((r) => r !== t);
}
function isTeamLead(e) {
  if (!e?.leadAgentId) return false;
  let t = getAgentId(),
    n = e.leadAgentId;
  if (t === n) return true;
  if (!t) return true;
  return false;
}
function hasActiveInProcessTeammates(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running") return true;
  return false;
}
function hasWorkingInProcessTeammates(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return true;
  return false;
}
function waitForTeammatesToBecomeIdle(e, t) {
  let n = [];
  for (let [r, o] of Object.entries(t.tasks))
    if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) n.push(r);
  if (n.length === 0) return Promise.resolve();
  return new Promise((r) => {
    let o = n.length,
      s = () => {
        if ((o--, o === 0)) r();
      };
    e((i) => {
      let a = {
        ...i.tasks,
      };
      for (let l of n) {
        let c = a[l];
        if (c && c.type === "in_process_teammate")
          if (c.isIdle) s();
          else
            a[l] = {
              ...c,
              onIdleCallbacks: [...(c.onIdleCallbacks ?? []), s],
            };
      }
      return {
        ...i,
        tasks: a,
      };
    });
  });
}
var Xoi,
  k9 = null,
  DAn = null,
  J2r = null;
