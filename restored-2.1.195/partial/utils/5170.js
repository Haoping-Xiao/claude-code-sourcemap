// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eZl
// matched 2.1.88 source: src/commands/brief.ts
// class=partial  jaccard=0.0693  score=0.7428  fileCov=0.071
// note: low-confidence suggestion: src/commands/brief.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eZl = E(() => {
  ZQl = {
    isEnabled: () => false,
    isHidden: true,
    name: "stub"
  };
});
var nZl = {};
_t(nZl, {
  default: () => jzf
});
function Uzf() {
  let e = at("tengu_kairos_brief_config", tZl),
    t = Bzf().safeParse(e);
  return t.success ? t.data : tZl;
}
var Bzf, tZl, Fzf, jzf;