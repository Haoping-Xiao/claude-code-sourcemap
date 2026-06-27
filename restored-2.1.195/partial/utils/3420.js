// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fho
// matched 2.1.88 source: src/utils/model/model.ts
// class=partial  jaccard=0.1491  score=0.419  fileCov=0.1879
// note: low-confidence suggestion: src/utils/model/model.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fho = E(() => {
  ft();
  Ld();
  er();
  At();
  DD();
  Ao();
  Is();
  Un();
  aho();
  cho();
  H5e();
  QOa();
  pho = require("crypto"), e1a = require("os");
  xPp = new Set(["claude-fable-5", "claude-mythos-5", "claude-opus-4-8", "claude-opus-4-7", "claude-opus-4-6", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-6", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-haiku-4-5", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku", "claude-3-opus", "claude-3-sonnet", "claude-3-haiku"]);
  MPp = new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]), $Pp = [{
    messagePrefix: "File does not exist",
    topFrameIncludes: "FileReadTool.ts"
  }], OPp = [{
    topFile: "node:net",
    topFunction: "internalConnectMultipleTimeout"
  }, {
    topFile: "node:_http_server",
    topFunction: "#onClose"
  }];
});
function t1a() {
  return {
    scrolls: 0,
    pageJumps: 0,
    jumpToBottomClicks: 0,
    reachedScrollbackCap: false,
    scrolledUpMs: 0,
    unpinnedSince: null
  };
}
function s4n(e = aVe) {
  e.scrolls++;
}
function i4n(e = aVe) {
  e.pageJumps++;
}
function n1a(e = aVe) {
  e.jumpToBottomClicks++;
}
function TWt(e = aVe) {
  e.reachedScrollbackCap = true;
}
function mho(e, t = Date.now(), n = aVe) {
  if (e) {
    if (n.unpinnedSince !== null) n.scrolledUpMs += Math.max(0, t - n.unpinnedSince), n.unpinnedSince = null;
  } else if (n.unpinnedSince === null) n.unpinnedSince = t;
}
function r1a(e = Date.now(), t = aVe) {
  let n = t.scrolledUpMs;
  if (t.unpinnedSince !== null) n += Math.max(0, e - t.unpinnedSince);
  let r = {
    scrolls: t.scrolls,
    scroll_up_seconds: Math.round(n / 1000),
    jump_to_bottom_clicks: t.jumpToBottomClicks,
    page_jumps: t.pageJumps,
    reached_scrollback_cap: t.reachedScrollbackCap
  };
  return Object.assign(t, t1a()), r;
}
function o1a(e = aVe) {
  return e.scrolls > 0 || e.pageJumps > 0 || e.jumpToBottomClicks > 0 || e.reachedScrollbackCap || e.scrolledUpMs > 0 || e.unpinnedSince !== null;
}
var aVe;