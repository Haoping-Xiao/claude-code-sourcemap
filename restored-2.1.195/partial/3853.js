// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BJ
// matched 2.1.88 source: src/components/TrustDialog/TrustDialog.tsx
// class=partial  jaccard=0.0688  score=1  fileCov=0.0688
// note: low-confidence suggestion: src/components/TrustDialog/TrustDialog.tsx; 0 renamed
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