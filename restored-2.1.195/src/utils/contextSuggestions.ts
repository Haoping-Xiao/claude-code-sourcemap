// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f1l
// matched 2.1.88 source: src/utils/contextSuggestions.ts
// class=modified  jaccard=0.5397  score=0.8198  fileCov=0.6124
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module f1l] deps: components/Settings/Config.tsx
((d1l = u1l("vim", "Editor mode")), (p1l = u1l("output-style", "Output style")));
function h1l(e) {
  let t = [];
  return (
    checkNearCapacity(e, t),
    UPf(e, t),
    checkReadResultBloat(e, t),
    checkMemoryBloat(e, t),
    checkAutoCompactDisabled(e, t),
    t.sort((n, r) => {
      if (n.severity !== r.severity) return n.severity === "warning" ? -1 : 1;
      return (r.savingsTokens ?? 0) - (n.savingsTokens ?? 0);
    }),
    t
  );
}
function checkNearCapacity(data, suggestions) {
  if (data.percentage >= g1l)
    suggestions.push({
      severity: "warning",
      title: `Context is ${data.percentage}% full`,
      detail: data.isAutoCompactEnabled
        ? "Autocompact will trigger soon, which discards older messages. Use /compact now to control what gets kept."
        : Oe.DISABLE_COMPACT
          ? "Compaction is disabled."
          : "Autocompact is disabled. Use /compact to free space, or enable autocompact in /config.",
    });
}
function UPf(e, t) {
  if (!e.messageBreakdown) return;
  for (let n of e.messageBreakdown.toolCallsByType) {
    let r = n.callTokens + n.resultTokens,
      o = (r / e.rawMaxTokens) * 100;
    if (o < m1l || r < iNo) continue;
    let s = getLargeToolSuggestion(n.name, r, o);
    if (s) t.push(s);
  }
}
function getLargeToolSuggestion(toolName, tokens, percent) {
  let r = gl(tokens);
  switch (toolName) {
    case Co:
    case Ss:
      return {
        severity: "warning",
        title: `${toolName} results using ${r} tokens (${percent.toFixed(0)}%)`,
        detail:
          toolName === Ss
            ? "Pipe output through Select-Object -First/-Last or Select-String to reduce result size. Avoid Get-Content on large files \u2014 use Read with offset/limit instead."
            : "Pipe output through head, tail, or grep to reduce result size. Avoid cat on large files \u2014 use Read with offset/limit instead.",
        savingsTokens: Math.floor(tokens * 0.5),
      };
    case Ds:
      return {
        severity: "info",
        title: `Read results using ${r} tokens (${percent.toFixed(0)}%)`,
        detail:
          "Use offset and limit parameters to read only the sections you need. Avoid re-reading entire files when you only need a few lines.",
        savingsTokens: Math.floor(tokens * 0.3),
      };
    case qc:
      return {
        severity: "info",
        title: `Grep results using ${r} tokens (${percent.toFixed(0)}%)`,
        detail:
          "Add more specific patterns or use the glob or type parameter to narrow file types. Consider Glob for file discovery instead of Grep.",
        savingsTokens: Math.floor(tokens * 0.3),
      };
    case Sb:
      return {
        severity: "info",
        title: `WebFetch results using ${r} tokens (${percent.toFixed(0)}%)`,
        detail:
          "Web page content can be very large. Consider extracting only the specific information needed.",
        savingsTokens: Math.floor(tokens * 0.4),
      };
    default:
      if (percent >= 20)
        return {
          severity: "info",
          title: `${toolName} using ${r} tokens (${percent.toFixed(0)}%)`,
          detail: "This tool is consuming a significant portion of context.",
          savingsTokens: Math.floor(tokens * 0.2),
        };
      return null;
  }
}
function checkReadResultBloat(data, suggestions) {
  if (!data.messageBreakdown) return;
  let r = data.messageBreakdown.toolCallsByType.find((a) => a.name === Ds);
  if (!r) return;
  let o = r.callTokens + r.resultTokens,
    s = (o / data.rawMaxTokens) * 100,
    i = (r.resultTokens / data.rawMaxTokens) * 100;
  if (s >= m1l && o >= iNo) return;
  if (i >= $Pf && r.resultTokens >= iNo)
    suggestions.push({
      severity: "info",
      title: `File reads using ${gl(r.resultTokens)} tokens (${i.toFixed(0)}%)`,
      detail:
        "If you are re-reading files, consider referencing earlier reads. Use offset/limit for large files.",
      savingsTokens: Math.floor(r.resultTokens * 0.3),
    });
}
function checkMemoryBloat(data, suggestions) {
  let n = data.memoryFiles.reduce((o, s) => o + s.tokens, 0),
    r = (n / data.rawMaxTokens) * 100;
  if (r >= OPf && n >= NPf) {
    let o = [...data.memoryFiles]
      .sort((s, i) => i.tokens - s.tokens)
      .slice(0, 3)
      .map((s) => `${kd(s.path)} (${gl(s.tokens)})`)
      .join(", ");
    suggestions.push({
      severity: "info",
      title: `Memory files using ${gl(n)} tokens (${r.toFixed(0)}%)`,
      detail: `Largest: ${o}. Use /memory to review and prune stale entries.`,
      savingsTokens: Math.floor(n * 0.3),
    });
  }
}
function checkAutoCompactDisabled(data, suggestions) {
  if (
    !data.isAutoCompactEnabled &&
    !Oe.DISABLE_COMPACT &&
    data.percentage >= 50 &&
    data.percentage < g1l
  )
    suggestions.push({
      severity: "info",
      title: "Autocompact is disabled",
      detail:
        "Without autocompact, you will hit context limits and lose the conversation. Enable it in /config or use /compact manually.",
    });
}
var m1l = 15,
  iNo = 1e4,
  $Pf = 5,
  g1l = 80,
  OPf = 5,
  NPf = 5000;
