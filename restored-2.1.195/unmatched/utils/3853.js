// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BJ
// matched 2.1.88 source: src/services/mcp/config.ts
// class=new  jaccard=0.0179  score=0.7729  fileCov=0.018
// note: nearest: src/services/mcp/config.ts (0.0179); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BJ = E(() => {
  CAo();
});
function OPe() {
  let e = l9(),
    n = ["user", "project", "local"].flatMap(r => bT(r).errors);
  return {
    settings: e.settings,
    errors: [...e.errors, ...n]
  };
}
function $Vn() {
  let e = xg("localSettings");
  return [...OPe().errors.filter(n => !n.mcpErrorMetadata && n.severity !== "warning" && n.file !== e), ...LCe()];
}