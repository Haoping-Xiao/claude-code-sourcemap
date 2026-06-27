// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Pc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Pc = E(() => {
  ft();
  ZS();
  kt();
  wr();
  uf();
});
function zCm() {
  return {
    classifier: null,
    shownTipIds: new Set(),
    lastAttemptTurn: -1 / 0,
    inFlight: !1,
    maxIdleGapMinutes: 0,
    pending: null
  };
}
function bPc() {
  let e = gvt.useContext(KCm),
    t = gvt.useRef(null);
  if (e) return e;
  return t.current ??= zCm(), t.current;
}
var gvt, YCm, KCm;