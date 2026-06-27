// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rze
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0057  score=0.1674  fileCov=0.0059
// note: nearest: src/cli/print.ts (0.0057); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rze = E(() => {
  je();
  wr();
  Jin();
  FKt = Oe.CLAUDE_CODE_PROFILE_QUERY, IPo = new Map();
});
function CQn(e) {
  return xTf.has(e.toLowerCase());
}
function AIl(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    let r = n.attachment;
    if (!r.met || r.sentinel) continue;
    return {
      condition: r.condition,
      iterations: r.iterations,
      durationMs: r.durationMs,
      tokens: r.tokens
    };
  }
  return null;
}
function HIl(e) {
  return `Last check: ${Gd(e.trim())}`;
}
function dSt(e, t) {
  let n = [];
  for (let r of XMe(e, t, "Stop").get("Stop") ?? []) {
    if (r.matcher !== "" || r.skillRoot !== void 0) continue;
    for (let o of r.hooks) if (o.type === "prompt") n.push(o);
  }
  return n;
}
function xPo() {
  if (Mj() || hce()) return {
    message: RTf,
    code: "hooks_gate"
  };
  if (!Ir() && !ad()) return {
    message: kTf,
    code: "trust_gate"
  };
  return null;
}
function pSt(e, t) {
  let n = xPo();
  if (n !== null) return It("goal_set", n.code), n.message;
  let r = Rt();
  for (let s of dSt(t.getAppState(), r)) t.sessionHooksRegistry.remove(r, "Stop", s);
  t.sessionHooksRegistry.add(r, "Stop", "", {
    type: "prompt",
    prompt: e
  });
  let o = {
    condition: e,
    iterations: 0,
    setAt: Date.now(),
    tokensAtStart: Gb()
  };
  return t.setAppState(s => ({
    ...s,
    activeGoal: o
  })), t.applyMessageOp({
    type: "append",
    messages: [TIl(false, e)]
  }), G("tengu_stop_hook_added", {
    promptLength: e.length,
    via: We("goal")
  }), xe("goal_set"), null;
}
function fSt(e) {
  let t = Rt(),
    n = dSt(e.getAppState(), t);
  if (n.length === 0) return null;
  let r = n[0].prompt;
  for (let o of n) e.sessionHooksRegistry.remove(t, "Stop", o);
  return e.setAppState(o => o.activeGoal === void 0 ? o : {
    ...o,
    activeGoal: void 0
  }), e.applyMessageOp({
    type: "append",
    messages: [TIl(true, r)]
  }), G("tengu_stop_hook_removed", {
    via: We("goal")
  }), r;
}
function TIl(e, t) {
  return {
    type: "attachment",
    uuid: EIl.randomUUID(),
    timestamp: new Date().toISOString(),
    attachment: {
      type: "goal_status",
      met: e,
      sentinel: true,
      condition: t
    }
  };
}
var EIl,
  uSt = 4000,
  xTf,
  IQn = e => `A session-scoped Stop hook is now active with condition: "${e}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`,
  kTf = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  RTf = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";