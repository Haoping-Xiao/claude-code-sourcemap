// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wnc
// matched 2.1.88 source: src/context.ts
// class=modified (alt of src/context.ts)  jaccard=0.0173  score=0.0492  fileCov=0.0261
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: default
// [unwrapped __esm module Wnc] deps: At
((vHt = require("fs/promises")),
  (car = require("path")),
  (NXf = /<command-name>\/([\w:-]+)<\/command-name>/g),
  (BXf = /"name":"mcp__([^"]+?)__([^"]+)"/g),
  (qXf = /"customTitle":"([^"]+)"/),
  (VXf = /"prNumber":(\d+)/),
  (zXf = /"role":"user"[^}]*"content":"([^"]+)"/));
function YXf(e) {
  try {
    return new URL(e).origin;
  } catch {
    return;
  }
}
async function XXf(e) {
  try {
    let t = await qnc.readFile(uar.join(e, ".mcp.json"), "utf8"),
      n = Ft(t);
    if (
      n &&
      typeof n === "object" &&
      "mcpServers" in n &&
      n.mcpServers &&
      typeof n.mcpServers === "object"
    )
      return n.mcpServers;
  } catch (t) {
    if (!wn(t))
      T(
        `team-onboarding: failed to read .mcp.json: ${t instanceof Error ? t.message : String(t)}`,
        {
          level: "error",
        },
      );
  }
  return {};
}
async function JXf(e) {
  let t = yr(),
    n = aj(t),
    r = await Gnc(n, e),
    o = [...r.slashCommandCounts.entries()]
      .sort((u, d) => d[1] - u[1])
      .map(([u, d]) => ({
        name: `/${u}`,
        count: d,
      })),
    s = await XXf(t),
    i = [...r.mcpServerCounts.entries()]
      .sort((u, d) => d[1] - u[1])
      .map(([u, d]) => {
        let p = s[u];
        return {
          name: u,
          callCount: d,
          urlOrigin: typeof p?.url === "string" ? YXf(p.url) : void 0,
        };
      }),
    a = (
      await Gr("git", ["config", "user.name"], {
        cwd: t,
      })
    ).stdout.trim(),
    l = (
      await Gr("git", ["remote", "get-url", "origin"], {
        cwd: t,
      })
    ).stdout.trim();
  return {
    usageData: De(
      {
        generatedBy: a || void 0,
        currentRepo: KFe(l) ?? uar.basename(t),
        windowDays: e,
        sessionCount: r.sessionFileCount,
        slashCommands: o,
        mcpServers: i,
        sessionDescriptors: r.sessionDescriptors,
      },
      null,
      2,
    ),
    sessionCount: r.sessionFileCount,
    slashCommandCount: r.slashCommandCounts.size,
    mcpServerCount: r.mcpServerCounts.size,
  };
}
var qnc,
  uar,
  KXf = 30,
  QXf = `# Welcome to [Team Name]

## How We Use Claude

Based on [name]'s usage over the last [N] days:

Work Type Breakdown:
  [Category 1]  [ascii bar]  [N]%
  [Category 2]  [ascii bar]  [N]%
  [Category 3]  [ascii bar]  [N]%
  ...

Top Skills & Commands:
  [/command]  [ascii bar]  [N]x/month
  ...

Top MCP Servers:
  [Server]  [ascii bar]  [N] calls
  ...

## Your Setup Checklist

### Codebases
- [ ] [repo-name] \u2014 [repo url]
...

### MCP Servers to Activate
- [ ] [Server] \u2014 [what it's for]. [How to get access]
...

### Skills to Know About
- [/command] \u2014 [what it does, when the team uses it]
...

## Team Tips

_TODO_

## Get Started

_TODO_

<!-- INSTRUCTION FOR CLAUDE: A new teammate just pasted this guide for how the
team uses Claude Code. You're their onboarding buddy \u2014 warm, conversational,
not lecture-y.

Open with a warm welcome \u2014 include the team name from the title. Then: "Your
teammate uses Claude Code for [list all the work types]. Let's get you started."

Check what's already in place against everything under Setup Checklist
(including skills), using markdown checkboxes \u2014 [x] done, [ ] not yet. Lead
with what they already have. One sentence per item, all in one message.

Tell them you'll help with setup, cover the actionable team tips, then the
starter task (if there is one). Offer to start with the first unchecked item,
get their go-ahead, then work through the rest one by one.

After setup, walk them through the remaining sections \u2014 offer to help where you
can (e.g. link to channels), and just surface the purely informational bits.

Don't invent sections or summaries that aren't in the guide. The stats are the
guide creator's personal usage data \u2014 don't extrapolate them into a "team
workflow" narrative. -->`,
  ZXf = `You are helping a power user generate an onboarding guide for teammates who are new to Claude Code. The guide will live in the team's onboarding docs and can be pasted into Claude for an interactive walkthrough.

You're co-authoring this with them \u2014 collaborative and helpful, like a teammate who's done this before and is happy to share.

## Usage data (last {{WINDOW_DAYS}} days)

This was scanned from the guide creator's local Claude Code transcripts:

\`\`\`json
{{USAGE_DATA}}
\`\`\`

## Your task

Before anything else \u2014 including before thinking through the classification \u2014 output exactly this line as your first visible text:

> Looking at how you've used Claude over the last {{WINDOW_DAYS}} days to put together an onboarding guide for teammates new to Claude Code.

This must come before any extended thinking about session descriptors. The guide creator is staring at a blank screen until you do. Classification is step 2, not step 1.

Generate the guide immediately, then ask for revisions. Don't wait for answers first \u2014 it's easier for the guide creator to edit a concrete draft than answer abstract questions.

1. **Output the acknowledgment line above.** No thinking, no classification, no tool calls before this. One line, then move on.

2. **Derive the work-type breakdown.** Read the \`sessionDescriptors\` array \u2014 each entry describes one session via its title, any linked code reviews (\`prNumbers\`), and first user message. Classify each session into one of these task types:

   - **build_feature** \u2014 new functionality, scripts, tools, config/CI/env setup
   - **debug_fix** \u2014 investigating and fixing bugs
   - **improve_quality** \u2014 refactoring, tests, cleanup, code review
   - **analyze_data** \u2014 queries, metrics, number crunching
   - **plan_design** \u2014 architecture, approach, strategy, understanding unfamiliar code, design review
   - **prototype** \u2014 spikes, POCs, throwaway exploration
   - **write_docs** \u2014 PRDs, RFCs, READMEs, design docs, copy/doc review

   Categories describe the *type of task*, not the project or domain \u2014 a teammate on any project should recognize them. Review sessions belong with whatever's being reviewed: code review is improve_quality, doc review is write_docs, design review is plan_design. Most sessions fit the list; only invent a new category if it's genuinely a different type of task. Pick the top 3-5 with rough percentages. First messages alone are usually enough; titles and code-review links are enrichment. If first messages are uninformative, use tool and MCP counts as a weak hint. If there are ~0 sessions, leave the breakdown as a TODO.

   In the rendered guide, display categories with spaces and title case (e.g. "Build Feature" not "build_feature").

3. **Gather the remaining pieces.** For repos, start with \`currentRepo\` and check the workspace for sibling repo directories. For MCP server setup, use each entry's \`name\` (and \`urlOrigin\` where present) to infer what the server does and how a teammate would get access. Leave the Team Tips and Get Started sections as TODO placeholders \u2014 you'll ask for these in Review and fill them in after.

4. **Write the guide to \`ONBOARDING.md\`** following this template:

\`\`\`
{{GUIDE_TEMPLATE}}
\`\`\`

   Fill in real numbers from the usage data (not placeholders). Use \`generatedBy\` for the name; if it's missing, omit the name. Ascii bar charts: \`\u2588\` for filled, \`\u2591\` for empty, 20 chars wide. Keep the HTML comment instruction at the bottom exactly as shown.

5. **Render the guide in a code block, then close out the first turn.** You're co-authoring this guide with the guide creator \u2014 frame the follow-up as collaboration, not corrections.

   After the code block, add a \`---\` horizontal rule and a \`**Review**\` heading so the guide is visually separated from your questions. Under the heading, number these three questions:

   1. "I went with '[X]' for the team name \u2014 let me know if that sounds right." (or if you couldn't tell: "What's the team name? I'll add it in.")
   2. Is there a starter task for someone new to Claude Code? (ticket or doc link \u2014 optional)
   3. Any team tips you'd tell a new teammate that aren't already in CLAUDE.md?

   After they answer, update \`ONBOARDING.md\` with their team name, tips, and starter task. Then close with this exact line (not numbered, not paraphrased):

   Saved to \`ONBOARDING.md\`. Drop it in your team docs and channels \u2014 when a new teammate pastes it into Claude Code, they get a guided onboarding tour from there.

   Apply any edits they come back with to the file.`,
  eJf,
  tJf,
  nJf,
  rJf;
