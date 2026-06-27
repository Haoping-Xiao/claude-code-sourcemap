// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NB
// matched 2.1.88 source: src/types/permissions.ts
// class=partial  jaccard=0.1594  score=0.6833  fileCov=0.1721
// note: low-confidence suggestion: src/types/permissions.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NB]
yY = ["acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan"], Jvs = [...yY], yM = Jvs;
FRr = ["rule", "mode", "subcommandResults", "permissionPromptTool", "hook", "asyncAgent", "sandboxOverride", "workingDir", "safetyCheck", "classifier", "other"], WRt = {
  type: "asyncAgent",
  reason: jfn
};
function Gfn(e, t) {
  if (!e) return;
  if (t === "auto" && e === "acceptEdits") return;
  return Qvs[e] <= Qvs[t] ? e : void 0;
}
function xet(e) {
  return e !== "bubble";
}
function Wfn(e) {
  return Zvs[e] ?? Zvs.default;
}
function $x(e) {
  return Wfn(e).external;
}
function jO(e) {
  return yM.includes(e) ? e : "default";
}
function _Y(e) {
  return Wfn(e).title;
}
function tws(e) {
  return e === "default" || e === void 0;
}
function ket(e, t) {
  if (e === "auto") return "classify";
  if (e === "bypassPermissions" || e === "plan" && t) return "allow";
  if (e === "dontAsk") return "deny";
  return "ask";
}
function Ret(e) {
  return Wfn(e).symbol;
}
function BB(e) {
  return Wfn(e).color;
}
var ews, qRt, Qvs, Zvs;