// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZCa
// matched 2.1.88 source: src/services/mcp/types.ts
// class=new  jaccard=0.0351  score=0.1089  fileCov=0.0493
// note: nearest: src/services/mcp/types.ts (0.0351); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZCa = E(() => {
  Un();
  YCa = ["microsoft365.mcp.claude.com", "gmail.mcp.claude.com", "gcal.mcp.claude.com"];
});
function r6(e, t) {
  if (t.type === "claudeai-proxy") return {
    kind: "claudeai-proxy",
    config: t
  };
  if (t.type !== "sse" && t.type !== "http") return {
    kind: "unsupported-transport",
    transport: t.type ?? "stdio"
  };
  if (JCa(t.url)) return {
    kind: "anthropic-hosted",
    config: t,
    message: QCa(e, {
      scope: t.scope
    })
  };
  return {
    kind: "oauth",
    config: t
  };
}