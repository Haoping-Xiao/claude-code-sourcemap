// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A1l
// matched 2.1.88 source: src/commands/context/context-noninteractive.ts
// class=modified  jaccard=0.3083  score=0.7559  fileCov=0.3424
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A1l] deps: hooks/useTerminalSize.ts, components/ContextSuggestions.tsx, utils/nativeInstaller/download.ts, utils/profilerBase.ts, utils/agentContext.ts, utils/settings/changeDetector.ts, services/teamMemorySync/secretScanner.ts, components/ContextVisualization.tsx, components/AgentProgressLine.tsx
((Xtr = R(lt(), 1)), (Pi = R(se(), 1)));
zPf = ["Project", "User", "Managed", "Plugin", "MCP", "Built-in"];
function formatContextAsMarkdownTable(data, t) {
  let {
      categories: n,
      totalTokens: r,
      rawMaxTokens: o,
      percentage: s,
      model: i,
      memoryFiles: a,
      mcpTools: l,
      agents: c,
      skills: u,
      messageBreakdown: d,
      systemTools: p,
      systemPromptSections: f,
    } = data,
    m = `## Context Usage

`;
  ((m += `**Model:** ${i}  
`),
    (m += `**Tokens:** ${gl(r)} / ${gl(o)} (${s}%)
`),
    (m += `
`));
  let g = n.filter(
    (h) => h.tokens > 0 && h.name !== "Free space" && h.name !== "Autocompact buffer",
  );
  if (g.length > 0) {
    ((m += `### Estimated usage by category

`),
      (m += `| Category | Tokens | Percentage |
`),
      (m += `|----------|--------|------------|
`));
    for (let b of g) {
      let _ = ((b.tokens / o) * 100).toFixed(1);
      m += `| ${b.name} | ${gl(b.tokens)} | ${_}% |
`;
    }
    let h = n.find((b) => b.name === "Free space");
    if (h && h.tokens > 0) {
      let b = ((h.tokens / o) * 100).toFixed(1);
      m += `| Free space | ${gl(h.tokens)} | ${b}% |
`;
    }
    let y = n.find((b) => b.name === "Autocompact buffer");
    if (y && y.tokens > 0) {
      let b = ((y.tokens / o) * 100).toFixed(1);
      m += `| Autocompact buffer | ${gl(y.tokens)} | ${b}% |
`;
    }
    m += `
`;
  }
  if (l.length > 0) {
    ((m += `### MCP Tools

`),
      (m += `| Tool | Server | Tokens |
`),
      (m += `|------|--------|--------|
`));
    for (let h of l)
      m += `| ${h.name} | ${h.serverName} | ${gl(h.tokens)} |
`;
    m += `
`;
  }
  if ((p && p.length > 0, f && f.length > 0, c.length > 0)) {
    ((m += `### Custom Agents

`),
      (m += `| Agent Type | Source | Tokens |
`),
      (m += `|------------|--------|--------|
`));
    for (let h of c) {
      let y;
      switch (h.source) {
        case "projectSettings":
          y = "Project";
          break;
        case "userSettings":
          y = "User";
          break;
        case "localSettings":
          y = "Local";
          break;
        case "flagSettings":
          y = "Flag";
          break;
        case "policySettings":
          y = "Policy";
          break;
        case "plugin":
          y = "Plugin";
          break;
        case "built-in":
          y = "Built-in";
          break;
        default:
          y = String(h.source);
      }
      m += `| ${h.agentType} | ${y} | ${gl(h.tokens)} |
`;
    }
    m += `
`;
  }
  if (a.length > 0) {
    ((m += `### Memory Files

`),
      (m += `| Type | Path | Tokens |
`),
      (m += `|------|------|--------|
`));
    for (let h of a)
      m += `| ${h.type} | ${h.path} | ${gl(h.tokens)} |
`;
    m += `
`;
  }
  if (u && u.tokens > 0 && u.skillFrontmatter.length > 0) {
    ((m += `### Skills

`),
      (m += `| Skill | Source | Tokens |
`),
      (m += `|-------|--------|--------|
`));
    for (let h of u.skillFrontmatter) {
      let y = Tet(h.source) + (h.pluginName ? ` (${h.pluginName})` : "");
      m += `| ${h.name} | ${y} | ${sae(h.tokens)} |
`;
    }
    m += `
`;
  }
  return m;
}
