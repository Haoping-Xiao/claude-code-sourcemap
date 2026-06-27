// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ii
// matched 2.1.88 source: src/services/mockRateLimits.ts
// class=new  jaccard=0.0107  score=0.4801  fileCov=0.0109
// note: nearest: src/services/mockRateLimits.ts (0.0107); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ii = E(() => {
  rNi = new WeakMap(), oNi = new WeakSet();
  E1d = {
    isEnabled: () => !0,
    isConcurrencySafe: e => !1,
    isReadOnly: e => !1,
    isDestructive: e => !1,
    checkPermissions: (e, t) => Promise.resolve({
      behavior: "allow",
      updatedInput: e
    }),
    toAutoClassifierInput: e => "",
    userFacingName: e => ""
  };
});
function MKr(e) {
  return !1;
}
function Pj(e) {
  return e.type === "fallback";
}
function nit() {
  let e = Dr().viewMode;
  return e ? e === "focus" : Dt().briefTranscript ?? !1;
}
function RNt() {
  for (let e of A1d) $Ct().delete(`focus_mode${e}`);
}
var A1d;