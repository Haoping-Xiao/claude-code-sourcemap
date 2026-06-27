// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ows
// matched 2.1.88 source: src/utils/settings/validationTips.ts
// class=modified (alt of src/utils/settings/validationTips.ts)  jaccard=0.1053  score=0.7165  fileCov=0.1099
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function getValidationTip(context) {
  let t = f1u.find((r) => r.matches(context));
  if (!t) return null;
  let n = {
    ...t.tip,
  };
  if (context.code === "invalid_value" && context.enumValues && !n.suggestion)
    n.suggestion = `Valid values: ${context.enumValues.map((r) => `"${r}"`).join(", ")}`;
  if (!n.docLink && context.path) n.docLink = m1u[bi(context.path, ".")];
  return n;
}
var DOCUMENTATION_BASE = "https://code.claude.com/docs/en",
  f1u,
  m1u;
