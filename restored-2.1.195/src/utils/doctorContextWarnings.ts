// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cnr
// matched 2.1.88 source: src/utils/doctorContextWarnings.ts
// class=modified  jaccard=0.4082  score=0.9585  fileCov=0.4155
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function checkClaudeMdFiles() {
  if (gce()) return null;
  let largeFiles = XRe(await Wv());
  if (largeFiles.length === 0) return null;
  let t = YRe(),
    n = largeFiles
      .sort((o, s) => s.content.length - o.content.length)
      .map((o) => `${o.path}: ${o.content.length.toLocaleString()} chars`);
  return {
    type: "claudemd_files",
    severity: "warning",
    message:
      largeFiles.length === 1
        ? `Large CLAUDE.md file detected (${largeFiles[0].content.length.toLocaleString()} chars > ${t.toLocaleString()})`
        : `${largeFiles.length} large CLAUDE.md files detected (each > ${t.toLocaleString()} chars)`,
    details: n,
    currentValue: largeFiles.length,
    threshold: t,
  };
}
async function checkAgentDescriptions(agentInfo) {
  if (!agentInfo) return null;
  let t = Y7t(agentInfo);
  if (t <= xKe) return null;
  let agentTokens = agentInfo.activeAgents
      .filter((o) => o.source !== "built-in")
      .map((o) => {
        let s = `${o.agentType}: ${o.whenToUse}`;
        return {
          name: o.agentType,
          tokens: If(s),
        };
      })
      .sort((o, s) => s.tokens - o.tokens),
    r = agentTokens.slice(0, 5).map((o) => `${o.name}: ~${o.tokens.toLocaleString()} tokens`);
  if (agentTokens.length > 5) r.push(`(${agentTokens.length - 5} more custom agents)`);
  return {
    type: "agent_descriptions",
    severity: "warning",
    message: `Large agent descriptions (~${t.toLocaleString()} tokens > ${xKe.toLocaleString()})`,
    details: r,
    currentValue: t,
    threshold: xKe,
  };
}
async function checkUnreachableRules(getToolPermissionContext) {
  let t = await getToolPermissionContext(),
    n = xo.isSandboxingEnabled() && xo.isAutoAllowBashIfSandboxedEnabled(),
    unreachable = vnr(t, {
      sandboxAutoAllowEnabled: n,
    });
  if (unreachable.length === 0) return null;
  let o = unreachable.flatMap((s) => [`${Pp(s.rule.ruleValue)}: ${s.reason}`, `  Fix: ${s.fix}`]);
  return {
    type: "unreachable_rules",
    severity: "warning",
    message: `${unreachable.length} ${bn(unreachable.length, "unreachable permission rule")} detected`,
    details: o,
    currentValue: unreachable.length,
    threshold: 0,
  };
}
async function zNl(e, t) {
  let [n, r, o] = await Promise.all([
    checkClaudeMdFiles(),
    checkAgentDescriptions(e),
    checkUnreachableRules(t),
  ]);
  return {
    claudeMdWarning: n,
    agentWarning: r,
    unreachableRulesWarning: o,
  };
}
