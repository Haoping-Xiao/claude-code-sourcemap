// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gb
// matched 2.1.88 source: src/utils/plugins/managedPlugins.ts
// class=modified  jaccard=0.6184  score=1  fileCov=0.6184
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gb = E(() => {
  ft();
  wr();
  fn();
  ((W1d = {
    claudeMd: !0,
    skills: !0,
    workflows: !1,
    plugins: !0,
    pluginMonitors: !1,
    themes: !1,
    hooks: !0,
    statusLine: !1,
    fileSuggestion: !1,
    mcpAutoDiscovered: !1,
    mcpClaudeAi: !1,
    mcpAgentFrontmatter: !0,
    agents: !0,
    outputStyles: !1,
    lspServers: !0,
    keybindings: !1,
  }),
    (q1d = {
      claudeMd: !1,
      skills: !1,
      workflows: !1,
      plugins: !1,
      pluginMonitors: !1,
      themes: !1,
      hooks: !0,
      statusLine: !0,
      fileSuggestion: !0,
      mcpAutoDiscovered: !1,
      mcpClaudeAi: !1,
      mcpAgentFrontmatter: !1,
      agents: !1,
      outputStyles: !1,
      lspServers: !1,
      keybindings: !1,
    }));
});
function R0() {
  let e = yn("policySettings")?.enabledPlugins;
  if (!e) return null;
  let t = new Set();
  for (let [n, r] of Object.entries(e)) {
    if (typeof r !== "boolean" || !n.includes("@")) continue;
    let o = bi(n, "@");
    if (o) t.add(o);
  }
  return t.size > 0 ? t : null;
}
function R7() {
  let e = yn("policySettings")?.enabledPlugins;
  if (!e) return null;
  let t = new Set();
  for (let [n, r] of Object.entries(e)) if (r === !0 && n.includes("@")) t.add(n);
  return t.size > 0 ? t : null;
}
