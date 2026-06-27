// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nsl
// matched 2.1.88 source: src/utils/model/contextWindowUpgradeCheck.ts
// class=modified  jaccard=0.6139  score=1  fileCov=0.6139
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nsl] deps: Ye
((esl = R(lt(), 1)), (tCo = R(se(), 1)));
function getAvailableUpgrade() {
  let e = GG();
  if (e === "opus" && ure())
    return {
      alias: "opus[1m]",
      name: "Opus 1M",
      multiplier: 5,
    };
  else if (e === "sonnet" && uSe())
    return {
      alias: "sonnet[1m]",
      name: "Sonnet 1M",
      multiplier: 5,
    };
  return null;
}
function getUpgradeMessage(context) {
  let t = getAvailableUpgrade();
  if (!t) return null;
  switch (context) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null;
  }
}
