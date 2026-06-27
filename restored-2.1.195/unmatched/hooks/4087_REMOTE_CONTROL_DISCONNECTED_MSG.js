// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dzn
// matched 2.1.88 source: src/components/ResumeTask.tsx
// class=new  jaccard=0.0294  score=0.211  fileCov=0.033
// note: nearest: src/components/ResumeTask.tsx (0.0294); dir inferred from dep-graph -> hooks; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
var dzn = E(() => {
  Ye();
  rsl = R(lt(), 1), nCo = R(se(), 1), srf = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g, irf = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
});
var osl = {};
_t(osl, {
  REMOTE_CONTROL_DISCONNECTED_MSG: () => REMOTE_CONTROL_DISCONNECTED_MSG,
  BRIDGE_SESSION_ENDED_DETAIL: () => BRIDGE_SESSION_ENDED_DETAIL,
  BRIDGE_LOGIN_INSTRUCTION: () => BRIDGE_LOGIN_INSTRUCTION,
  BRIDGE_LOGIN_HINT: () => BRIDGE_LOGIN_HINT,
  BRIDGE_LOGIN_ERROR: () => BRIDGE_LOGIN_ERROR
});
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