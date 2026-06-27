// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wAc
// matched 2.1.88 source: src/context/voice.tsx
// class=partial  jaccard=0.0976  score=0.3503  fileCov=0.1192
// note: low-confidence suggestion: src/context/voice.tsx; dir inferred from dep-graph -> bootstrap; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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