// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Pc
// matched 2.1.88 source: src/ink/hooks/use-interval.ts
// class=partial  jaccard=0.1049  score=0.193  fileCov=0.1868
// note: low-confidence suggestion: src/ink/hooks/use-interval.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function zCm() {
  return {
    classifier: null,
    shownTipIds: new Set(),
    lastAttemptTurn: -1 / 0,
    inFlight: false,
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