// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u4l
// matched 2.1.88 source: src/commands/mcp/index.ts
// class=partial  jaccard=0.2369  score=0.3967  fileCov=0.3703
// note: low-confidence suggestion: src/commands/mcp/index.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var u4l = E(() => {
  l4l = {
    type: "local",
    name: "mcp",
    supportsNonInteractive: true,
    description: "Manage MCP servers",
    argumentHint: "[reconnect|enable|disable [<server>|all]]",
    load: () => Promise.resolve().then(() => (ZFl(), QFl))
  }, pUf = {
    type: "local-jsx",
    name: "mcp",
    description: "Manage MCP servers",
    immediate: true,
    argumentHint: "[reconnect <server>|enable|disable [<server>|all]]",
    load: () => Promise.resolve().then(() => (a4l(), i4l))
  }, c4l = pUf;
});