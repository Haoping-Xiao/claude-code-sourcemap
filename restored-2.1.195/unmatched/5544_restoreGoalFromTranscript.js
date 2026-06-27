// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lpr
// matched 2.1.88 source: src/utils/transcriptSearch.ts
// class=new  jaccard=0.0576  score=0.2499  fileCov=0.0697
// note: nearest: src/utils/transcriptSearch.ts (0.0576); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var lpr = E(() => {
  ft();
  L7();
});
var Nzo = {};
_t(Nzo, {
  restoreGoalFromTranscript: () => restoreGoalFromTranscript,
  findGoalToRestore: () => findGoalToRestore
});
function findGoalToRestore(e) {
  if (!e) return null;
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    return n.attachment.met || n.attachment.failed ? null : n.attachment.condition;
  }
  return null;
}
function restoreGoalFromTranscript(e, t) {
  let n = findGoalToRestore(e),
    r = n !== null ? xPo() : null;
  if (r !== null) It("goal_set", r.code);
  if (n === null || r !== null) {
    t(o => o.activeGoal === void 0 ? o : {
      ...o,
      activeGoal: void 0
    });
    return;
  }
  W8t(t, Rt(), "Stop", "", {
    type: "prompt",
    prompt: n
  }), t(o => ({
    ...o,
    activeGoal: {
      condition: n,
      iterations: 0,
      setAt: Date.now(),
      tokensAtStart: Gb()
    }
  })), G("tengu_goal_restored_on_resume", {
    promptLength: n.length
  });
}