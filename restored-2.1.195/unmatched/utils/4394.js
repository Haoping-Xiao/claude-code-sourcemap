// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JEl
// matched 2.1.88 source: src/ink/terminal-focus-state.ts
// class=new  jaccard=0.0534  score=0.16  fileCov=0.0743
// note: nearest: src/ink/terminal-focus-state.ts (0.0534); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module JEl] deps: Oct
Oyf = new n1n({
  gfm: true
});
function VRo(e) {
  return WRo.get(e);
}
function QEl(e) {
  let t = qRo.get(e);
  return t !== void 0 ? WRo.get(t) : void 0;
}
function NXn(e, t) {
  WRo.set(e, t);
}
function zRo(e, t) {
  qRo.set(e, t);
}
function KRo(e) {
  qRo.delete(e);
}
function YRo(e, t) {
  if (e === void 0 || e === "" || e === "owner") return {
    mode: "owner",
    isSharedLive: false
  };
  if (e === "users" || e === "org") return {
    mode: e,
    isSharedLive: (t ?? "") === ""
  };
  return {
    mode: "unknown",
    isSharedLive: true
  };
}
function ZEl(e) {
  if (e === "org") return "your organization";
  if (e === "users") return "specific users";
  return "others (unrecognized share mode \u2014 treating as shared)";
}
var WRo, qRo;