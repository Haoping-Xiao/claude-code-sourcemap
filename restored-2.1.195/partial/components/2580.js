// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O0
// matched 2.1.88 source: src/hooks/useCommandKeybindings.tsx
// class=partial  jaccard=0.1794  score=1  fileCov=0.1794
// note: low-confidence suggestion: src/hooks/useCommandKeybindings.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var O0 = E(() => {
  ps();
  yzi();
  _zi = R(rt(), 1);
});
function Szi(e) {
  if (e.startsWith("command:")) return {
    description: e.slice(8)
  };
  return Wzd[e];
}
var Wzd;