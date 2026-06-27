// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FPc
// class=new  (no 2.1.88 match)
// note: 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var FPc = E(() => {
  Un();
  er();
  dr();
  __();
});
var jPc = {};
_t(jPc, {
  shouldShowAutoDefaultNotice: () => shouldShowAutoDefaultNotice,
  AUTO_DEFAULT_NOTICE_TEXT: () => AUTO_DEFAULT_NOTICE_TEXT
});
function shouldShowAutoDefaultNotice(e) {
  {
    let t = Dt();
    return cwo() && e === "auto" && Zv() && t.hasCompletedOnboarding === !0 && !t.hasSeenAutoDefaultNotice;
  }
  return !1;
}
var AUTO_DEFAULT_NOTICE_TEXT = `Auto mode is now Claude Code's default permission mode.

Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and blocks the rest.

https://code.claude.com/docs/en/permission-modes`;