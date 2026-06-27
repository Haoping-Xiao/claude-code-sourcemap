// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cTt
// matched 2.1.88 source: src/components/MCPServerDialogCopy.tsx
// class=partial  jaccard=0.1859  score=0.3115  fileCov=0.3155
// note: low-confidence suggestion: src/components/MCPServerDialogCopy.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
function MCPServerDialogCopy() {
  let e = gdc.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = qcr.jsxs(w, {
    children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", qcr.jsx(xs, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "."]
  }), e[0] = t;else t = e[0];
  return t;
}
var gdc, qcr;