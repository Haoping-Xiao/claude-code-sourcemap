// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VXl
// matched 2.1.88 source: src/commands/advisor.ts
// class=partial  jaccard=0.092  score=0.6613  fileCov=0.0966
// note: low-confidence suggestion: src/commands/advisor.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VXl] deps: _oe
qXl = {
  type: "local-jsx",
  name: "advisor",
  description: "Let Claude consult a stronger model at key moments",
  get argumentHint() {
    return `[${[...zht(), "off"].join("|")}]`;
  },
  isEnabled: () => F6(),
  get isHidden() {
    return !F6();
  },
  load: () => Promise.resolve().then(() => (WXl(), GXl))
};
function P1e() {
  if (!_u()) return false;
  return K4e();
}