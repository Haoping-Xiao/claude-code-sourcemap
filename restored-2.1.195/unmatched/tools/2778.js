// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lC
// matched 2.1.88 source: src/tools/PowerShellTool/PowerShellTool.tsx
// class=new  jaccard=0.0197  score=0.6461  fileCov=0.0199
// note: nearest: src/tools/PowerShellTool/PowerShellTool.tsx (0.0197); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lC = E(() => {
  k0();
  fh();
});
var Ss = "PowerShell";
function q1() {
  let e = process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if (Vt() !== "windows") return ut(e);
  if (ml(e)) return false;
  if (ut(e)) return true;
  if (Hhe() === null) return true;
  return at("tengu_cobalt_ridge", false);
}
function Su() {
  if (Vt() !== "windows") return true;
  return Hhe() !== null;
}
function XWe() {
  return Su() ? "bash" : "powershell";
}
var W1;