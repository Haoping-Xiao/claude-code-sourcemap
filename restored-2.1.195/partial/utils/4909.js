// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hor
// matched 2.1.88 source: src/utils/model/contextWindowUpgradeCheck.ts
// class=partial  jaccard=0.08  score=0.2975  fileCov=0.0986
// note: low-confidence suggestion: src/utils/model/contextWindowUpgradeCheck.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hor = E(() => {
  Ye();
  $5l = R(lt(), 1), Aor = R(se(), 1);
});
function N5l() {
  let e = $yt(),
    t = O5l.useMemo(jPt, [e]),
    n = wnr();
  if (!t && !n) return null;
  let r = t && n ? `${t.slice(0, -1)}, auto-updated)` : n ? " (auto-updated)" : t;
  return B5l.jsxs(GHe, {
    command: "/model",
    children: ["Using ", KY(e), r]
  });
}
var O5l, B5l;