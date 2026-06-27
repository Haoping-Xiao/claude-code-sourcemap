// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NVt
// matched 2.1.88 source: src/components/Spinner/useShimmerAnimation.ts
// class=partial  jaccard=0.2153  score=0.7424  fileCov=0.2327
// note: low-confidence suggestion: src/components/Spinner/useShimmerAnimation.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NVt] deps: Ye, Pne
pJa = R(lt(), 1), K4 = R(se(), 1), cJa = ube(), uJa = [...cJa, ...[...cJa].reverse()], kXp = {
  r: 171,
  g: 43,
  b: 63
}, RXp = {
  r: 0,
  g: 0,
  b: 0
};
function BVt(e, t, n) {
  let r = e === "requesting" ? 50 : 200,
    [o, s] = Kf(n ? null : r),
    i = fJa.useMemo(() => rn(t), [t]);
  if (n) return [o, -100];
  let a = Math.floor(s / r),
    l = i + 20;
  if (e === "requesting") return [o, a % l - 10];
  return [o, i + 10 - a % l];
}
var fJa;