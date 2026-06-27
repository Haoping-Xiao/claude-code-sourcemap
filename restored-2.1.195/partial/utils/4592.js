// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rPl
// matched 2.1.88 source: src/commands/branch/index.ts
// class=partial  jaccard=0.1701  score=0.306  fileCov=0.2769
// note: low-confidence suggestion: src/commands/branch/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rPl = E(() => {
  m0f = {
    type: "local",
    name: "clear",
    description: "Start a new session with empty context; previous session stays on disk (resumable with /resume)",
    argumentHint: "[name]",
    aliases: ["reset", "new"],
    supportsNonInteractive: true,
    thinClientDispatch: "post-text",
    load: () => Promise.resolve().then(() => (nPl(), tPl))
  }, Wer = m0f;
});
function oPl(e) {
  if (rp()) return;
  return e.standaloneAgentContext?.name;
}
function qer(e, t) {
  let n = e.standaloneAgentContext;
  if (!Object.keys(t).some(o => n?.[o] !== t[o])) return e;
  return {
    ...e,
    standaloneAgentContext: {
      ...n,
      name: n?.name ?? "",
      ...t
    }
  };
}