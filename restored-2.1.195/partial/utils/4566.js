// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WLl
// matched 2.1.88 source: src/commands/bridge/index.ts
// class=partial  jaccard=0.1773  score=0.4527  fileCov=0.2257
// note: low-confidence suggestion: src/commands/bridge/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WLl] deps: ft, jc, oo
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
var qLl;