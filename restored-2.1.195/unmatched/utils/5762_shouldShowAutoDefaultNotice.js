// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FPc
// matched 2.1.88 source: src/commands/plugin/ManageMarketplaces.tsx
// class=new  jaccard=0.008  score=0.1489  fileCov=0.0084
// note: nearest: src/commands/plugin/ManageMarketplaces.tsx (0.008); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: shouldShowAutoDefaultNotice, AUTO_DEFAULT_NOTICE_TEXT
function shouldShowAutoDefaultNotice(e) {
  {
    let t = Dt();
    return cwo() && e === "auto" && Zv() && t.hasCompletedOnboarding === true && !t.hasSeenAutoDefaultNotice;
  }
  return false;
}
var AUTO_DEFAULT_NOTICE_TEXT = `Auto mode is now Claude Code's default permission mode.

Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.

https://code.claude.com/docs/en/permission-modes`;