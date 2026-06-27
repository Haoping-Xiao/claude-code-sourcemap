// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zkn
// matched 2.1.88 source: src/Tool.ts
// class=new  jaccard=0.0295  score=1  fileCov=0.0295
// note: nearest: src/Tool.ts (0.0295); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zkn = E(() => {
  Ls();
  b1d = [PKr, tNi, nNi], Jkn = new Set(b1d);
});
function kke(e) {
  return e.filter(t => t.data?.type !== "hook_progress");
}
function Ql(e, t) {
  return e.name === t || (e.aliases?.includes(t) ?? !1);
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
    isBypassPermissionsModeAvailable: !1,
    mcpPermissionModeOverrides: {}
  }),
  sNi,
  rNi,
  oNi,
  E1d;