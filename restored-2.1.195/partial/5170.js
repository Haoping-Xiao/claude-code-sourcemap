// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eZl
// matched 2.1.88 source: src/commands/brief.ts
// class=partial  jaccard=0.0603  score=1  fileCov=0.0603
// note: low-confidence suggestion: src/commands/brief.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eZl = E(() => {
  ZQl = {
    isEnabled: () => !1,
    isHidden: !0,
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