// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module se
// matched 2.1.88 source: src/ink/terminal-focus-state.ts
// class=modified  jaccard=0.27  score=0.9372  fileCov=0.275
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module se] (exports=I6h, module=hUi)
var I6h = {};
var hUi = {
  exports: I6h,
};
hUi.exports = gUi();
function LYr(e) {
  ((RYr = e ? "focused" : "blurred"), A_r(e));
  for (let t of kYr) t();
  if (!e) {
    for (let t of yUi) t();
    yUi.clear();
  }
}
function Sit() {
  return RYr !== "blurred";
}
function N7() {
  return RYr;
}
function K3e(e) {
  return (
    kYr.add(e),
    () => {
      kYr.delete(e);
    }
  );
}
var RYr = "unknown",
  yUi,
  kYr;
