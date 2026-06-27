// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Brl
// matched 2.1.88 source: src/commands/insights.ts
// class=new  jaccard=0.0062  score=0.3898  fileCov=0.0063
// note: nearest: src/commands/insights.ts (0.0062); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Brl = E(() => {
  S_();
  SAe();
  je();
  q0();
  vn();
  co();
  kt();
});
function _yt(e, t, n) {
  e.updateTranscript(t, r => ({
    ...r,
    ...(n.turnStartTime !== void 0 && {
      turnStartTime: n.turnStartTime
    }),
    ...(n.totalPausedMs !== void 0 && {
      totalPausedMs: n.totalPausedMs
    }),
    ...(n.tokenCount !== void 0 && {
      progress: {
        toolUseCount: 0,
        ...r.progress,
        tokenCount: n.tokenCount
      }
    })
  }));
}
function N6n(e) {
  return typeof e === "string" && e.length > 0 ? hu(e, `
`) + 1 : 0;
}
function U6n(e, t) {
  if (typeof t !== "object" || t === null) return {
    added: 0,
    removed: 0
  };
  let n = t;
  if (e === ka) return {
    added: N6n(n.new_string),
    removed: N6n(n.old_string)
  };
  if (e === Wc) return {
    added: N6n(n.content),
    removed: 0
  };
  if (e === RI) return {
    added: N6n(n.new_source),
    removed: 0
  };
  return {
    added: 0,
    removed: 0
  };
}
var B6n;