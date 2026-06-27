// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z2n
// matched 2.1.88 source: src/utils/embeddedTools.ts
// class=partial  jaccard=0.1473  score=0.4818  fileCov=0.1751
// note: low-confidence suggestion: src/utils/embeddedTools.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z2n = E(() => {
  Ls();
  m5();
});
function WPa(e) {
  return F0p(e) + " < /dev/null";
}
function F0p(e) {
  return "'" + e.replaceAll("'", `'"'"'`) + "'";
}
function hC() {
  if (!ut("true")) return false;
  if (ubr()) return false;
  return process.env.CLAUDE_CODE_ENTRYPOINT !== "local-agent";
}
function Fpt() {
  if (!hC() || !Su()) return j0p;
  return G0p;
}
var j0p, G0p;