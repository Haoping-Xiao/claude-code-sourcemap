// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wAc
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/reasonml.js
// class=new  jaccard=0.023  score=0.2585  fileCov=0.0246
// note: nearest: node_modules/highlight.js/lib/languages/reasonml.js (0.023); dir inferred from dep-graph -> bootstrap; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wAc = E(() => {
  ih();
});
function zzo(e) {
  Vzo.setState(t => t.focus === e ? t : {
    focus: e
  });
}
function bym() {
  return CAc.useSyncExternalStore(Vzo.subscribe, () => Vzo.getState().focus !== null);
}
function hpr() {
  let e = bym(),
    t = bSt();
  return e ? "legacy-dialog" : t ? "typing" : null;
}
function IAc() {
  let e = o7e(),
    t = hpr();
  return !e ? "none" : t !== null ? "suppressed" : "visible";
}
function xAc() {
  let e = ATt();
  return hpr() !== null ? null : e;
}
var CAc, Vzo;