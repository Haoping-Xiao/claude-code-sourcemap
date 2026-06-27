// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iv
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iv = E(() => {
  je();
  fKr();
  WOd = /[{}[\]*&#!|>%@`]|: /;
  I_e = /^---\s*\n([\s\S]*?)---\s*\n?/;
  _1i = ["bash", "powershell"];
});
function Nkn() {
  return ut(process.env.CLAUDE_CODE_DISABLE_WORKFLOWS) || a0()?.settings.disableWorkflows === true;
}