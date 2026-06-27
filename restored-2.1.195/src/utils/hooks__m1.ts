// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yic
// matched 2.1.88 source: src/utils/hooks.ts
// class=modified (alt of src/utils/hooks.ts)  jaccard=0.0279  score=0.3776  fileCov=0.0292
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function executePreCompactHooks(compactData, signal, n = lp) {
  let r = {
      ...Td(void 0),
      hook_event_name: "PreCompact",
      trigger: compactData.trigger,
      custom_instructions: compactData.customInstructions,
    },
    o = await Kk({
      hookInput: r,
      matchQuery: compactData.trigger,
      signal: signal,
      timeoutMs: n,
    });
  if (o.length === 0) return {};
  let s = o
      .filter((l) => l.succeeded && !l.blocked && l.output.trim().length > 0)
      .map((l) => l.output.trim()),
    i = [];
  for (let l of o)
    if (l.succeeded && !l.blocked) {
      if (l.output.trim())
        i.push(`PreCompact [${l.command}] completed successfully: ${l.output.trim()}`);
      else i.push(`PreCompact [${l.command}] completed successfully`);
    } else if (l.output.trim()) i.push(`PreCompact [${l.command}] failed: ${l.output.trim()}`);
    else i.push(`PreCompact [${l.command}] failed`);
  let a = o.filter((l) => l.blocked);
  return {
    newCustomInstructions:
      s.length > 0
        ? s.join(`

`)
        : void 0,
    userDisplayMessage:
      i.length > 0
        ? i.join(`
`)
        : void 0,
    ...(a.length > 0 && {
      blockedBy: a.map((l) => {
        let c = l.output.trim();
        return `[${l.command}]${c ? `: ${c}` : ""}`;
      }).join(`
`),
    }),
  };
}
async function executePostCompactHooks(compactData, signal, n = lp) {
  let r = {
      ...Td(void 0),
      hook_event_name: "PostCompact",
      trigger: compactData.trigger,
      compact_summary: compactData.compactSummary,
    },
    o = await Kk({
      hookInput: r,
      matchQuery: compactData.trigger,
      signal: signal,
      timeoutMs: n,
    });
  if (o.length === 0) return {};
  let s = [];
  for (let i of o)
    if (i.succeeded) {
      if (i.output.trim())
        s.push(`PostCompact [${i.command}] completed successfully: ${i.output.trim()}`);
      else s.push(`PostCompact [${i.command}] completed successfully`);
    } else if (i.output.trim()) s.push(`PostCompact [${i.command}] failed: ${i.output.trim()}`);
    else s.push(`PostCompact [${i.command}] failed`);
  return {
    userDisplayMessage:
      s.length > 0
        ? s.join(`
`)
        : void 0,
  };
}
