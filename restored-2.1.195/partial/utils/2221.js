// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iv
// matched 2.1.88 source: src/hooks/useSettings.ts
// class=partial  jaccard=0.0912  score=0.148  fileCov=0.1921
// note: low-confidence suggestion: src/hooks/useSettings.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Iv] deps: utils/debug.ts, tools/AgentTool/loadAgentsDir.ts
WOd = /[{}[\]*&#!|>%@`]|: /;
I_e = /^---\s*\n([\s\S]*?)---\s*\n?/;
_1i = ["bash", "powershell"];
function Nkn() {
  return ut(process.env.CLAUDE_CODE_DISABLE_WORKFLOWS) || a0()?.settings.disableWorkflows === true;
}