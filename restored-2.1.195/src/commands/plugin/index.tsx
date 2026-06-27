// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k7l
// matched 2.1.88 source: src/commands/plugin/index.tsx
// class=modified  jaccard=0.7175  score=1  fileCov=0.7175
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var k7l = E(() => {
  ((P9f = {
    type: "local-jsx",
    name: "plugin",
    aliases: ["plugins", "marketplace"],
    description: "Manage Claude Code plugins",
    immediate: !0,
    load: () => Promise.resolve().then(() => (w7l(), T7l)),
    getArgumentCompletions: (e, t) =>
      Promise.resolve()
        .then(() => (I7l(), C7l))
        .then((n) => n.getPluginArgumentCompletions(e, t)),
  }),
    (x7l = P9f));
});
var M9f, tTE;
