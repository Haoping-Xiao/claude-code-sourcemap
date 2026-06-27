// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u4l
// matched 2.1.88 source: src/commands/mcp/index.ts
// class=modified  jaccard=0.3357  score=0.4883  fileCov=0.5178
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var u4l = E(() => {
  ((l4l = {
    type: "local",
    name: "mcp",
    supportsNonInteractive: true,
    description: "Manage MCP servers",
    argumentHint: "[reconnect|enable|disable [<server>|all]]",
    load: () => Promise.resolve().then(() => (ZFl(), QFl)),
  }),
    (pUf = {
      type: "local-jsx",
      name: "mcp",
      description: "Manage MCP servers",
      immediate: true,
      argumentHint: "[reconnect <server>|enable|disable [<server>|all]]",
      load: () => Promise.resolve().then(() => (a4l(), i4l)),
    }),
    (c4l = pUf));
});
