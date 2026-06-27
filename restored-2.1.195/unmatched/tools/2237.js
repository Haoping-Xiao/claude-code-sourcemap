// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ii
// matched 2.1.88 source: src/Tool.ts
// class=new  jaccard=0.0576  score=0.5496  fileCov=0.0604
// note: nearest: src/Tool.ts (0.0576); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ii]
rNi = new WeakMap(), oNi = new WeakSet();
E1d = {
  isEnabled: () => true,
  isConcurrencySafe: e => false,
  isReadOnly: e => false,
  isDestructive: e => false,
  checkPermissions: (e, t) => Promise.resolve({
    behavior: "allow",
    updatedInput: e
  }),
  toAutoClassifierInput: e => "",
  userFacingName: e => ""
};
function MKr(e) {
  return false;
}
function Pj(e) {
  return e.type === "fallback";
}
function nit() {
  let e = Dr().viewMode;
  return e ? e === "focus" : Dt().briefTranscript ?? false;
}
function RNt() {
  for (let e of A1d) $Ct().delete(`focus_mode${e}`);
}
var A1d;