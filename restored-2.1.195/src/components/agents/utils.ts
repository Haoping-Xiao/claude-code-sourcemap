// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l4o
// matched 2.1.88 source: src/components/agents/utils.ts
// class=modified  jaccard=0.5292  score=1  fileCov=0.5292
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l4o] deps: si, Ox, tQ, fh, RN, R8e, xMe, $pe, Ppe, I8e, gAe, m4t, pyt, H3t, I3t, mRo, q0o, jjn, T6t, hRo, Ye, ps, sr, LW
((bYl = R(lt(), 1)), (SYl = R(rt(), 1)), (Usr = R(rt(), 1)), (Dse = R(se(), 1)));
function getAgentSourceDisplayName(source) {
  if (source === "all") return "Agents";
  if (source === "built-in") return "Built-in agents";
  if (source === "plugin") return "Plugin agents";
  return mqe(wG(source));
}
