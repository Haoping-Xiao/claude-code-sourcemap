// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a1c
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0017  score=0.2268  fileCov=0.0017
// note: nearest: src/main.tsx (0.0017); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function c1c({
  remote: e,
  isNonInteractiveSession: t,
  isContinue: n,
  pendingAssistantChat: r,
  pendingConnectUrl: o,
  pendingSSHHost: s
}) {
  if (t) return false;
  if (n) return false;
  return e !== null || Boolean(r?.sessionId) || Boolean(r?.discover) || Boolean(o) || Boolean(s);
}
function u1c(e, t) {
  return e ? null : t;
}
function C7o(e) {
  if (l1c.test(e)) return e;
  if (e.includes("/") && !/\s/.test(e)) {
    for (let t of e.split(/[/?#]/)) if (l1c.test(t)) return t;
  }
  return null;
}
var l1c;