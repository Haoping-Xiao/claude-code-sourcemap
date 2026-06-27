// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ows
// matched 2.1.88 source: src/utils/settings/validationTips.ts
// class=partial  jaccard=0.0948  score=1  fileCov=0.0948
// note: low-confidence suggestion: src/utils/settings/validationTips.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ows = E(() => {
  Xr();
  Jt();
  lj();
});
function Nws(e) {
  let t = f1u.find(r => r.matches(e));
  if (!t) return null;
  let n = {
    ...t.tip
  };
  if (e.code === "invalid_value" && e.enumValues && !n.suggestion) n.suggestion = `Valid values: ${e.enumValues.map(r => `"${r}"`).join(", ")}`;
  if (!n.docLink && e.path) n.docLink = m1u[bi(e.path, ".")];
  return n;
}
var Lhe = "https://code.claude.com/docs/en",
  f1u,
  m1u;