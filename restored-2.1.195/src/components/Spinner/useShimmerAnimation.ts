// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NVt
// matched 2.1.88 source: src/components/Spinner/useShimmerAnimation.ts
// class=modified  jaccard=0.358  score=1  fileCov=0.358
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var NVt = E(() => {
  Ye();
  Pne();
  ((pJa = R(lt(), 1)),
    (K4 = R(se(), 1)),
    (cJa = ube()),
    (uJa = [...cJa, ...[...cJa].reverse()]),
    (kXp = {
      r: 171,
      g: 43,
      b: 63,
    }),
    (RXp = {
      r: 0,
      g: 0,
      b: 0,
    }));
});
function BVt(e, t, n) {
  let r = e === "requesting" ? 50 : 200,
    [o, s] = Kf(n ? null : r),
    i = fJa.useMemo(() => rn(t), [t]);
  if (n) return [o, -100];
  let a = Math.floor(s / r),
    l = i + 20;
  if (e === "requesting") return [o, (a % l) - 10];
  return [o, i + 10 - (a % l)];
}
var fJa;
