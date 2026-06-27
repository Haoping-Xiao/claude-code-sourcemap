// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JEl
// matched 2.1.88 source: src/ink/terminal-focus-state.ts
// class=partial  jaccard=0.0803  score=0.1202  fileCov=0.1948
// note: low-confidence suggestion: src/ink/terminal-focus-state.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JEl = E(() => {
  Oct();
  Oyf = new n1n({
    gfm: !0
  });
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
    isSharedLive: !1
  };
  if (e === "users" || e === "org") return {
    mode: e,
    isSharedLive: (t ?? "") === ""
  };
  return {
    mode: "unknown",
    isSharedLive: !0
  };
}
function ZEl(e) {
  if (e === "org") return "your organization";
  if (e === "users") return "specific users";
  return "others (unrecognized share mode \u2014 treating as shared)";
}
var WRo, qRo;