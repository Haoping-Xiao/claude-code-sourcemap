// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yAr
// matched 2.1.88 source: src/utils/claudeInChrome/toolRendering.tsx
// class=new  jaccard=0.0168  score=0.1449  fileCov=0.0186
// note: nearest: src/utils/claudeInChrome/toolRendering.tsx (0.0168); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yAr = E(() => {
  ZJe();
  Qge = R(require("ws"));
});
function oxt(e) {
  return `Before any browser action, you MUST call ${e ? `the ${e} tool` : "your ask-user tool (if available)"} with a question listing EVERY connected browser as a separate option (use the display name as the label, and include the deviceId in parentheses), plus one final option labeled exactly: "${q7c}" Do not skip any connected browser and do not pick one yourself. If the user picks a specific browser, call select_browser with that browser's deviceId. ` + "If the user picks the final option, call switch_browser \u2014 this sends a confirmation prompt to every connected Chrome extension and waits for the user to click Connect in the one they want; it also lets them name that browser.";
}
var W7c = "javascript_tool",
  rxt,
  Yis,
  q7c = "Open a confirmation screen in every connected Chrome extension and let me select the right one there.",
  sxt;