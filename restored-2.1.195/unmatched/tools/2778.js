// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lC
// matched 2.1.88 source: src/tools/PowerShellTool/PowerShellTool.tsx
// class=new  jaccard=0.0136  score=0.4976  fileCov=0.0138
// note: nearest: src/tools/PowerShellTool/PowerShellTool.tsx (0.0136); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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