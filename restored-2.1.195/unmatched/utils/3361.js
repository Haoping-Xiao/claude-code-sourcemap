// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bmo
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0027  score=0.2367  fileCov=0.0027
// note: nearest: src/cli/print.ts (0.0027); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Bmo] deps: Mmo, sr, sN, xRe, Omo
FPa = /^\d+$/, UPa = /^[A-Za-z_][A-Za-z0-9_]*=/, M0p = new Set(["nice"]);
function Upt(e) {
  let t = {
    CLAUDECODE: "1",
    CLAUDE_CODE_SESSION_ID: e.sessionId,
    CLAUDE_CODE_CHILD_SESSION: "1"
  };
  if (e.source === "agent") t.AI_AGENT = _yr("agent");
  if (e.effortLevel !== void 0) t.CLAUDE_EFFORT = e.effortLevel;
  if (ZDt()) {
    let n = EFn();
    if (n !== void 0) t.TRACEPARENT = n;
  }
  return t;
}
function Wqe(e) {
  return {
    sessionId: e.session_id,
    effortLevel: e.effort?.level,
    source: "harness"
  };
}