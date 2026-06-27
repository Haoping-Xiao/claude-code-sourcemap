// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fzo
// matched 2.1.88 source: node_modules/@inquirer/core/dist/esm/lib/use-memo.mjs
// class=partial  jaccard=0.1996  score=1  fileCov=0.1996
// note: low-confidence suggestion: node_modules/@inquirer/core/dist/esm/lib/use-memo.mjs; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function rtn(e, t) {
  if (e && t && t.length > 0) return oE([...e, ...t], "name");
  return e || [];
}
function aAc(e, t) {
  return iAc.useMemo(() => rtn(e, t), [e, t]);
}
var iAc;