// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MQn
// matched 2.1.88 source: src/services/extractMemories/prompts.ts
// class=modified  jaccard=0.1581  score=0.3815  fileCov=0.2126
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function IIl(e, t, n) {
  let r = Su(),
    o = r ? Co : Ss,
    s = r
      ? "ls/find/cat/stat/wc/head/tail and similar"
      : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar",
    i = r ? "rm" : "Remove-Item",
    a =
      t.length > 0
        ? `

## Existing memory files

${t}

Check this list before writing \u2014 update an existing file rather than creating a duplicate.`
        : "",
    l = n ? "scope guidance, " : "",
    c = `Available tools: ${Ds}, ${qc}, ${wu}, read-only ${o} (${s}), and ${ka}/${Wc} for paths inside the memory directory only, and ${o} ${i} with paths inside the memory directory only. All other tools \u2014 MCP, Agent, write-capable ${o}, etc \u2014 will be denied.`,
    u = `You have a limited turn budget. ${ka} requires a prior ${Ds} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${Ds} calls in parallel for every file you might update; turn 2 \u2014 issue all ${Wc}/${ka} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [
    `You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`,
    "",
    c,
    "",
    u,
    "",
    `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` +
      a,
    "",
    "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.",
    "",
    "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.",
    "",
    `Apply the memory types, ${l}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`,
  ].join(`
`);
}
