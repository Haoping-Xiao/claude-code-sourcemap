// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N$o
// matched 2.1.88 source: src/tools/AgentTool/built-in/claudeCodeGuideAgent.ts
// class=modified  jaccard=0.3431  score=0.7057  fileCov=0.4005
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module N$o] deps: tools/GlobTool/prompt.ts, tools/ExitPlanModeTool/constants.ts, tools/PowerShellTool/PowerShellTool.tsx, TX, tools/GrepTool/prompt.ts, utils/http.ts, utils/xdg.ts, utils/settings/settings.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/fsOperations.ts
yLl = {
  agentType: O$o,
  whenToUse: `Use this agent when the user asks questions ("Can Claude...", "Does Claude...", "How do I...") about: (1) Claude Code (the CLI tool) - features, hooks, slash commands, MCP servers, settings, IDE integrations, keyboard shortcuts; (2) Claude Agent SDK - building custom agents; (3) Claude API (formerly Anthropic API) - API usage, tool use, Anthropic SDK usage. **IMPORTANT:** Before spawning a new agent, check if there is already a running or recently completed claude-code-guide agent that you can continue via ${Ly}.`,
  get tools() {
    return hC() && Su() ? [Co, Ds, Sb, GW] : [wu, qc, Ds, Sb, GW];
  },
  source: "built-in",
  baseDir: "built-in",
  model: "haiku",
  permissionMode: "dontAsk",
  getSystemPrompt({ toolUseContext: e }) {
    let t = e.options.commands,
      n = [],
      r = t.filter((u) => u.type === "prompt");
    if (r.length > 0) {
      let u = r.map((d) => `- /${d.name}: ${d.description}`).join(`
`);
      n.push(`**Available custom skills in this project:**
${u}`);
    }
    let o = e.options.agentDefinitions.activeAgents.filter((u) => u.source !== "built-in");
    if (o.length > 0) {
      let u = o.map((d) => `- ${d.agentType}: ${d.whenToUse}`).join(`
`);
      n.push(`**Available custom agents configured:**
${u}`);
    }
    let s = e.options.mcpClients;
    if (s && s.length > 0) {
      let u = s.map((d) => `- ${d.name}`).join(`
`);
      n.push(`**Configured MCP servers:**
${u}`);
    }
    let i = t.filter((u) => u.type === "prompt" && u.source === "plugin");
    if (i.length > 0) {
      let u = i.map((d) => `- /${d.name}: ${d.description}`).join(`
`);
      n.push(`**Available plugin skills:**
${u}`);
    }
    let a = jo();
    if (Object.keys(a).length > 0) {
      let u = De(a, null, 2);
      n.push(`**User's settings.json:**
\`\`\`json
${u}
\`\`\``);
    }
    let l = Nxf(),
      c = `${Oxf()}
${l}`;
    if (n.length > 0)
      return `${c}

---

# User's Current Configuration

The user has the following custom setup in their environment:

${n.join(`

`)}

When answering questions, consider these configured features and proactively suggest them when relevant.`;
    return c;
  },
};
function Bxf() {
  let e = Su(),
    t = e ? Co : Ss,
    n = hC() && e;
  return `You are a software architect and planning specialist for Claude Code. Your role is to explore the codebase and design implementation plans.

=== CRITICAL: READ-ONLY MODE - NO FILE MODIFICATIONS ===
This is a READ-ONLY planning task. You are STRICTLY PROHIBITED from:
- Creating new files (no Write, touch, or file creation of any kind)
- Modifying existing files (no Edit operations)
- Deleting files (no rm or deletion)
- Moving or copying files (no mv or cp)
- Creating temporary files anywhere, including /tmp
- Using redirect operators (>, >>, |) or heredocs to write to files
- Running ANY commands that change system state

Your role is EXCLUSIVELY to explore the codebase and design implementation plans. You do NOT have access to file editing tools - attempting to edit files will fail.

You will be provided with a set of requirements and optionally a perspective on how to approach the design process.

## Your Process

1. **Understand Requirements**: Focus on the requirements provided and apply your assigned perspective throughout the design process.

2. **Explore Thoroughly**:
   - Read any files provided to you in the initial prompt
   - Find existing patterns and conventions using ${n ? `\`find\`, \`grep\`, and ${Ds}` : `${wu}, ${qc}, and ${Ds}`}
   - Understand the current architecture
   - Identify similar features as reference
   - Trace through relevant code paths
   - Use ${t} ONLY for read-only operations (${e ? `ls, git status, git log, git diff, find${n ? ", grep" : ""}, cat, head, tail` : "Get-ChildItem, git status, git log, git diff, Get-Content, Select-Object -First/-Last"})
   - NEVER use ${t} for: ${e ? "mkdir, touch, rm, cp, mv, git add, git commit, npm install, pip install" : "New-Item, Remove-Item, Copy-Item, Move-Item, git add, git commit, npm install, pip install"}, or any file creation/modification

3. **Design Solution**:
   - Create implementation approach based on your assigned perspective
   - Consider trade-offs and architectural decisions
   - Follow existing patterns where appropriate

4. **Detail the Plan**:
   - Provide step-by-step implementation strategy
   - Identify dependencies and sequencing
   - Anticipate potential challenges

## Required Output

End your response with:

### Critical Files for Implementation
List 3-5 files most critical for implementing this plan:
- path/to/file1.ts
- path/to/file2.ts
- path/to/file3.ts

REMEMBER: You can ONLY explore and plan. You CANNOT and MUST NOT write, edit, or modify any files. You do NOT have access to file editing tools.`;
}
var Ter;
