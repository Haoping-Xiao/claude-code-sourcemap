// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cvc
// matched 2.1.88 source: src/skills/bundled/debug.ts
// class=modified  jaccard=0.334  score=0.534  fileCov=0.4714
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function dvc() {
  Nd({
    name: "debug",
    menuDescription: "Turn on debug logging and investigate problems",
    description: "Enable debug logging for this session and help diagnose issues",
    allowedTools: ["Read", "Grep", "Glob"],
    argumentHint: "[issue description]",
    disableModelInvocation: true,
    userInvocable: true,
    async getPromptForCommand(e) {
      let t = zEr(),
        n = Yge(),
        [r, o] = await Promise.all([pvc(n), pSm()]);
      return [
        {
          type: "text",
          text: `# Debug Skill

Help the user debug an issue they're encountering in this current Claude Code session.
${
  t
    ? ""
    : `
## Debug Logging Just Enabled

Debug logging was OFF for this session until now. Nothing prior to this /debug invocation was captured.

Tell the user that debug logging is now active at \`${n}\`, ask them to reproduce the issue, then re-read the log. If they can't reproduce, they can also restart with \`claude --debug\` to capture logs from startup.
`
}
## Session Debug Log

The debug log for the current session is at: \`${n}\`

${r}

For additional context, grep for [ERROR] and [WARN] lines across the full file.

${o}

## Issue Description

${e || "The user did not describe a specific issue. Read the debug log and summarize any errors, warnings, or notable issues."}

## Settings

Remember that settings are in:
* user - ${xg("userSettings")}
* project - ${xg("projectSettings")}
* local - ${xg("localSettings")}

## Instructions

1. Review the user's issue description
2. The last ${Bpr} lines show the debug file format. Look for [ERROR] and [WARN] entries, stack traces, and failure patterns across the file
3. Consider launching the ${O$o} subagent to understand the relevant Claude Code features
4. Explain what you found in plain language
5. Suggest concrete fixes or next steps
`,
        },
      ];
    },
  });
}
async function pSm() {
  let e = VOe(),
    [t, n, r] = await Promise.all([uvc(Nfe()), uvc(GJt()), pvc(e)]);
  if (t === null && n === null)
    return `## Daemon

No daemon lock or status file found \u2014 the background daemon does not appear to be running. If the issue involves background sessions or \`claude agents\`, the daemon log (if any) is at \`${e}\`.`;
  return `## Daemon

The background daemon manages \`& <prompt>\` jobs and \`claude agents\`. If the issue involves background sessions, look here.

### daemon.lock
\`\`\`json
${t ?? "(missing)"}
\`\`\`

### daemon.status.json
\`\`\`json
${n ?? "(missing)"}
\`\`\`

### Daemon log (\`${e}\`)
${r}

Other daemon state on disk (Read if relevant \u2014 roster contains user prompts and env vars):
- \`${gse()}\` \u2014 live worker roster
- \`${pL()}/<short>/state.json\` \u2014 per-job state`;
}
async function pvc(e) {
  try {
    let { content: t, bytesTotal: n } = await vx(e, uSm),
      r = t
        .split(
          `
`,
        )
        .slice(-Bpr).join(`
`);
    return `Log size: ${Ra(n)}

### Last ${Bpr} lines

\`\`\`
${r}
\`\`\``;
  } catch (t) {
    return wn(t) ? "No log file exists yet." : `Failed to read last ${Bpr} lines: ${be(t)}`;
  }
}
async function uvc(e) {
  try {
    return (await vx(e, dSm)).content;
  } catch (t) {
    return wn(t) ? null : `(read error: ${be(t)})`;
  }
}
var Bpr = 20,
  uSm = 65536,
  dSm = 8192;
