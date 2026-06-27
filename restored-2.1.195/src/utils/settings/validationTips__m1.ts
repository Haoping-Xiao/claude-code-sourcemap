// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ows
// matched 2.1.88 source: src/utils/settings/validationTips.ts
// class=modified (alt of src/utils/settings/validationTips.ts)  jaccard=0.1053  score=0.7165  fileCov=0.1099
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Nws(e) {
  let t = f1u.find((r) => r.matches(e));
  if (!t) return null;
  let n = {
    ...t.tip,
  };
  if (e.code === "invalid_value" && e.enumValues && !n.suggestion)
    n.suggestion = `Valid values: ${e.enumValues.map((r) => `"${r}"`).join(", ")}`;
  if (!n.docLink && e.path) n.docLink = m1u[bi(e.path, ".")];
  return n;
}
var Lhe = "https://code.claude.com/docs/en",
  f1u,
  m1u;
