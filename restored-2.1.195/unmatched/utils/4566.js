// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WLl
// matched 2.1.88 source: src/tasks/RemoteAgentTask/RemoteAgentTask.tsx
// class=new  jaccard=0.0133  score=0.3862  fileCov=0.0136
// note: nearest: src/tasks/RemoteAgentTask/RemoteAgentTask.tsx (0.0133); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WLl = E(() => {
  ft();
  jc();
  oo();
  tkf = {
    type: "local-jsx",
    name: "autofix-pr",
    description: "Monitor and autofix any issues with the current PR",
    argumentHint: void 0,
    isEnabled: () => jLl() && !Ir(),
    get isHidden() {
      return !jLl();
    },
    async load() {
      return await Promise.resolve().then(() => (FLl(), ULl));
    },
    userFacingName() {
      return "autofix-pr";
    }
  }, GLl = tkf;
});
var qLl;