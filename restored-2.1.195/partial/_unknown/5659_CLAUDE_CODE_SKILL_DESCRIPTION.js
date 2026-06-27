// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wxc
// matched 2.1.88 source: src/tools/AgentTool/built-in/claudeCodeGuideAgent.ts
// class=partial  jaccard=0.0645  score=0.124  fileCov=0.1186
// note: low-confidence suggestion: src/tools/AgentTool/built-in/claudeCodeGuideAgent.ts; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var wxc = E(() => {
  bxc();
  Exc();
  Hxc();
  $Hm = Txc, OHm = {
    "references/live-sources.md": Sxc,
    "references/recent-changes.md": Axc
  };
});
var kxc = {};
_t(kxc, {
  registerClaudeCodeSkill: () => registerClaudeCodeSkill,
  CLAUDE_CODE_SKILL_NAME: () => CLAUDE_CODE_SKILL_NAME,
  CLAUDE_CODE_SKILL_DESCRIPTION: () => CLAUDE_CODE_SKILL_DESCRIPTION
});
function Cxc() {
  return NHm ??= Promise.resolve().then(() => (wxc(), vxc));
}
function UHm(e, t) {
  let n = [],
    o = e.options.commands.filter(f => !f.isHidden),
    s = f => f.type !== "prompt" || f.source === "builtin" || f.source === "bundled",
    i = o.filter(s);
  if (i.length > 0) {
    let f = i.map(m => {
      let g = m.aliases?.length ? ` (aliases: ${m.aliases.map(h => `/${h}`).join(", ")})` : "";
      return `- /${m.name}${g}: ${m.description}`;
    }).sort();
    n.push(`**Available commands (${i.length} in this build):**
${f.join(`
`)}`);
  }
  let a = o.filter(f => !s(f));
  if (a.length > 0) {
    let f = a.map(m => `- /${m.name}: ${m.description}`).sort();
    n.push(`**Custom skills configured:**
${f.join(`
`)}`);
  }
  let l = e.options.agentDefinitions.activeAgents.filter(f => f.source !== "built-in");
  if (l.length > 0) {
    let f = l.map(m => `- ${m.agentType}: ${m.whenToUse}`).sort();
    n.push(`**Custom agents configured:**
${f.join(`
`)}`);
  }
  let c = e.options.mcpClients;
  if (c && c.length > 0) {
    let f = c.map(m => `- ${m.name}`).sort();
    n.push(`**Configured MCP servers:**
${f.join(`
`)}`);
  }
  let u = Object.keys(jo()).sort();
  if (u.length > 0) n.push(`**Settings keys configured (values omitted):** ${u.join(", ")}. To see values, the user can run \`claude config list\` or open \`~/.claude/settings.json\`.`);
  let d = bi({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION, "-"),
    p = Jrr(t).filter(([f]) => jst(f, d)).slice(-10).reverse();
  if (p.length > 0) {
    let f = p.map(([m, g]) => `### ${m}
` + g.map(h => `- ${h}`).join(`
`));
    n.push(`**Recent releases (you are running v${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION}):**
${f.join(`

`)}`);
  }
  if (g7()) n.push("**Provider context:** This session is not using Anthropic's first-party API. WebSearch may be unavailable, `/feedback` is unavailable, and some features behave differently \u2014 check the docs page for the user's specific provider. Direct issues to https://github.com/anthropics/claude-code/issues.");
  return n.join(`

`);
}
function FHm(e, t, n, r) {
  let o = [e],
    s = UHm(n, r);
  if (s) o.push(`---

# Current Build

Generated from the running Claude Code binary at invocation time. This is ground truth \u2014 it overrides your training data and any documentation when they disagree about what exists in this build.

${s}`);
  if (t.trim()) o.push(`---

## User Request

${t}`);
  return o.join(`

`);
}
function registerClaudeCodeSkill() {
  Nd({
    name: CLAUDE_CODE_SKILL_NAME,
    menuDescription: "Answer questions about Claude Code features and settings",
    description: CLAUDE_CODE_SKILL_DESCRIPTION,
    allowedTools: ["Read", "Grep", "Glob", "WebFetch"],
    argumentHint: "[question]",
    userInvocable: !0,
    files: () => Cxc().then(e => e.SKILL_FILES),
    isEnabled() {
      return at("tengu_birch_kettle", !1);
    },
    async getPromptForCommand(e, t) {
      G("tengu_claude_code_skill_loaded", {
        has_args: e.trim().length > 0
      });
      let [n, {
        SKILL_PROMPT: r
      }] = await Promise.all([UXt(), Cxc()]);
      return [{
        type: "text",
        text: FHm(r, e, t, n)
      }];
    }
  });
}
var NHm,
  CLAUDE_CODE_SKILL_NAME = "claude-code-docs",
  BHm = `Answer questions about Claude Code itself: commands, flags, settings, hooks, skills, MCP servers, subagents, IDE integrations, sandboxing, deployment. Verifies against the running build before recommending any command, flag, or setting.
`,
  CLAUDE_CODE_SKILL_DESCRIPTION;