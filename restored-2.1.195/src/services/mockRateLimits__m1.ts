// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ii
// matched 2.1.88 source: src/services/mockRateLimits.ts
// class=modified (alt of src/services/mockRateLimits.ts)  jaccard=0.0069  score=0.0974  fileCov=0.0074
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ii]
((rNi = new WeakMap()), (oNi = new WeakSet()));
E1d = {
  isEnabled: () => true,
  isConcurrencySafe: (e) => false,
  isReadOnly: (e) => false,
  isDestructive: (e) => false,
  checkPermissions: (e, t) =>
    Promise.resolve({
      behavior: "allow",
      updatedInput: e,
    }),
  toAutoClassifierInput: (e) => "",
  userFacingName: (e) => "",
};
function MKr(e) {
  return false;
}
function Pj(e) {
  return e.type === "fallback";
}
function nit() {
  let e = Dr().viewMode;
  return e ? e === "focus" : (Dt().briefTranscript ?? false);
}
function RNt() {
  for (let e of A1d) $Ct().delete(`focus_mode${e}`);
}
var A1d;
