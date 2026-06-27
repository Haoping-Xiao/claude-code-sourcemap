// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zkn
// matched 2.1.88 source: src/Tool.ts
// class=partial  jaccard=0.0658  score=0.6653  fileCov=0.0681
// note: low-confidence suggestion: src/Tool.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Zkn] deps: utils/status.tsx
b1d = [PKr, tNi, nNi], Jkn = new Set(b1d);
function filterToolProgressMessages(progressMessagesForMessage) {
  return progressMessagesForMessage.filter(t => t.data?.type !== "hook_progress");
}
function Ql(e, t) {
  return e.name === t || (e.aliases?.includes(t) ?? false);
}
function iNi(e) {
  sNi = e;
}
function tit() {
  return sNi?.();
}
function S1d(e) {
  let t = new Map();
  for (let n of e) {
    if (!t.has(n.name)) t.set(n.name, n);
    if (n.aliases) {
      for (let r of n.aliases) if (!t.has(r)) t.set(r, n);
    }
  }
  return t;
}
function _l(e, t, n) {
  let r = n && Object.hasOwn(n, t) ? n[t] : void 0;
  if (r !== void 0 && r !== t) return _l(e, r);
  let o = rNi.get(e);
  if (o) return o.get(t);
  if (oNi.has(e)) {
    let s = S1d(e);
    return rNi.set(e, s), s.get(t);
  }
  return oNi.add(e), e.find(s => Ql(s, t));
}
function ti(e) {
  return Object.defineProperties({
    ...E1d,
    userFacingName: () => e.name
  }, Object.getOwnPropertyDescriptors(e));
}
var b1 = () => ({
    mode: "default",
    additionalWorkingDirectories: new Map(),
    alwaysAllowRules: {},
    alwaysDenyRules: {},
    alwaysAskRules: {},
    isBypassPermissionsModeAvailable: false,
    mcpPermissionModeOverrides: {}
  }),
  sNi,
  rNi,
  oNi,
  E1d;