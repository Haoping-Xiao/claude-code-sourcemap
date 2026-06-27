// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pz
// matched 2.1.88 source: src/components/PromptInput/inputModes.ts
// class=partial  jaccard=0.2165  score=1  fileCov=0.2165
// note: low-confidence suggestion: src/components/PromptInput/inputModes.ts; dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pz = E(() => {
  Ye();
  iOl = R(lt(), 1), P7t = R(se(), 1);
});
function yDf(e) {
  let t = $2t(e),
    n = Math.min(t.length, WWe());
  return 2 + e.name.length + 2 + n + 1;
}
function j1o(e, t, n) {
  let r = new Map();
  for (let c of e) {
    if (c.type !== "prompt" || c.disableModelInvocation) continue;
    let u = c.pluginInfo?.pluginManifest.name;
    if (!u) continue;
    let d = yDf(c),
      p = r.get(u) ?? [];
    p.push({
      name: c.name,
      chars: d,
      approxTokens: Math.round(d / t)
    }), r.set(u, p);
  }
  let o = [...r.entries()].map(([c, u]) => {
      u.sort((p, f) => f.chars - p.chars);
      let d = u.reduce((p, f) => p + f.chars, 0);
      return {
        pluginName: c,
        skillCount: u.length,
        chars: d,
        approxTokens: Math.round(d / t),
        skills: u
      };
    }).sort((c, u) => u.chars - c.chars),
    s = o.reduce((c, u) => c + u.chars, 0),
    i = qWe(n, t),
    a = s > i,
    l = a ? i : s;
  return {
    byPlugin: o,
    totalChars: l,
    totalTokens: Math.round(l / t),
    overBudget: a,
    budgetTokens: Math.round(i / t)
  };
}