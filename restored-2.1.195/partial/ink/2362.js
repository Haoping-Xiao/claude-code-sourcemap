// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aGe
// matched 2.1.88 source: src/utils/signal.ts
// class=partial  jaccard=0.1847  score=1  fileCov=0.1847
// note: low-confidence suggestion: src/utils/signal.ts; dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Uit(e) {
  let t = VRn.get(e);
  if (t !== void 0) return t;
  let n = rn(e);
  if (VRn.size >= O4d) VRn.clear();
  return VRn.set(e, n), n;
}
var VRn,
  O4d = 4096;