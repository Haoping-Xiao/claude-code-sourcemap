// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lC
// matched 2.1.88 source: src/tools/PowerShellTool/PowerShellTool.tsx
// class=new  jaccard=0.0197  score=0.6461  fileCov=0.0199
// note: nearest: src/tools/PowerShellTool/PowerShellTool.tsx (0.0197); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lC = E(() => {
  k0();
  fh();
});
var Ss = "PowerShell";
function q1() {
  let e = process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if (Vt() !== "windows") return ut(e);
  if (ml(e)) return !1;
  if (ut(e)) return !0;
  if (Hhe() === null) return !0;
  return at("tengu_cobalt_ridge", !1);
}
function Su() {
  if (Vt() !== "windows") return !0;
  return Hhe() !== null;
}
function XWe() {
  return Su() ? "bash" : "powershell";
}
var W1;