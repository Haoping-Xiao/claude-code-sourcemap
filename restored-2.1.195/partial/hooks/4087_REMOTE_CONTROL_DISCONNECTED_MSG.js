// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dzn
// matched 2.1.88 source: src/hooks/useMainLoopModel.ts
// class=partial  jaccard=0.0954  score=0.1983  fileCov=0.1554
// note: low-confidence suggestion: src/hooks/useMainLoopModel.ts; dir inferred from dep-graph -> hooks; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: REMOTE_CONTROL_DISCONNECTED_MSG, BRIDGE_SESSION_ENDED_DETAIL, BRIDGE_LOGIN_INSTRUCTION, BRIDGE_LOGIN_HINT, BRIDGE_LOGIN_ERROR
// [unwrapped __esm module dzn] deps: Ye
rsl = R(lt(), 1), nCo = R(se(), 1), srf = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g, irf = {
  ")": "(",
  "]": "[",
  "}": "{"
};
var BRIDGE_LOGIN_INSTRUCTION = "Remote Control is only available with claude.ai subscriptions. Please use `/login` to sign in with your claude.ai account.",
  BRIDGE_LOGIN_ERROR = "Error: You must be logged in to use Remote Control.\n\nRemote Control is only available with claude.ai subscriptions. Please use `/login` to sign in with your claude.ai account.",
  REMOTE_CONTROL_DISCONNECTED_MSG = "Remote Control disconnected.",
  BRIDGE_LOGIN_HINT = "/login",
  BRIDGE_SESSION_ENDED_DETAIL = "session ended";
function t6e() {
  let [e, t] = pzn.useReducer(n => n + 1, 0);
  return pzn.useEffect(() => H7(t), []), e;
}
var pzn;