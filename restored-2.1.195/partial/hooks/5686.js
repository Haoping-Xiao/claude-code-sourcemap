// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V0c
// matched 2.1.88 source: src/components/EffortIndicator.ts
// class=partial  jaccard=0.0757  score=0.3707  fileCov=0.0869
// note: low-confidence suggestion: src/components/EffortIndicator.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module V0c] deps: hooks/useTerminalSize.ts
rfr = R(rt(), 1);
function ofr() {
  let e = Ht(n => n.effortValue),
    t = lL(As(), e);
  return t ? {
    effort_level: $e(t)
  } : {};
}