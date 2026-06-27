// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gb
// matched 2.1.88 source: src/utils/plugins/schemas.ts
// class=new  jaccard=0.0151  score=0.2929  fileCov=0.0156
// note: nearest: src/utils/plugins/schemas.ts (0.0151); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gb] deps: services/analytics/index.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs
W1d = {
  claudeMd: true,
  skills: true,
  workflows: false,
  plugins: true,
  pluginMonitors: false,
  themes: false,
  hooks: true,
  statusLine: false,
  fileSuggestion: false,
  mcpAutoDiscovered: false,
  mcpClaudeAi: false,
  mcpAgentFrontmatter: true,
  agents: true,
  outputStyles: false,
  lspServers: true,
  keybindings: false
}, q1d = {
  claudeMd: false,
  skills: false,
  workflows: false,
  plugins: false,
  pluginMonitors: false,
  themes: false,
  hooks: true,
  statusLine: true,
  fileSuggestion: true,
  mcpAutoDiscovered: false,
  mcpClaudeAi: false,
  mcpAgentFrontmatter: false,
  agents: false,
  outputStyles: false,
  lspServers: false,
  keybindings: false
};
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
  for (let [n, r] of Object.entries(e)) if (r === true && n.includes("@")) t.add(n);
  return t.size > 0 ? t : null;
}