// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jCo
// matched 2.1.88 source: src/utils/ink.ts
// class=modified  jaccard=0.2875  score=1  fileCov=0.2875
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function V6(e) {
  if (!e) return DEFAULT_AGENT_THEME_COLOR;
  let t = C$[e];
  if (t) return t;
  return `ansi:${e}`;
}
var DEFAULT_AGENT_THEME_COLOR = "cyan_FOR_SUBAGENTS_ONLY";
