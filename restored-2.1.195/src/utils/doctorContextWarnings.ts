// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cnr
// matched 2.1.88 source: src/utils/doctorContextWarnings.ts
// class=modified  jaccard=0.4082  score=0.9585  fileCov=0.4155
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Cnr = E(() => {
  ft();
  U1();
  er();
});
async function Z$f() {
  if (gce()) return null;
  let e = XRe(await Wv());
  if (e.length === 0) return null;
  let t = YRe(),
    n = e
      .sort((o, s) => s.content.length - o.content.length)
      .map((o) => `${o.path}: ${o.content.length.toLocaleString()} chars`);
  return {
    type: "claudemd_files",
    severity: "warning",
    message:
      e.length === 1
        ? `Large CLAUDE.md file detected (${e[0].content.length.toLocaleString()} chars > ${t.toLocaleString()})`
        : `${e.length} large CLAUDE.md files detected (each > ${t.toLocaleString()} chars)`,
    details: n,
    currentValue: e.length,
    threshold: t,
  };
}
async function eOf(e) {
  if (!e) return null;
  let t = Y7t(e);
  if (t <= xKe) return null;
  let n = e.activeAgents
      .filter((o) => o.source !== "built-in")
      .map((o) => {
        let s = `${o.agentType}: ${o.whenToUse}`;
        return {
          name: o.agentType,
          tokens: If(s),
        };
      })
      .sort((o, s) => s.tokens - o.tokens),
    r = n.slice(0, 5).map((o) => `${o.name}: ~${o.tokens.toLocaleString()} tokens`);
  if (n.length > 5) r.push(`(${n.length - 5} more custom agents)`);
  return {
    type: "agent_descriptions",
    severity: "warning",
    message: `Large agent descriptions (~${t.toLocaleString()} tokens > ${xKe.toLocaleString()})`,
    details: r,
    currentValue: t,
    threshold: xKe,
  };
}
async function tOf(e) {
  let t = await e(),
    n = xo.isSandboxingEnabled() && xo.isAutoAllowBashIfSandboxedEnabled(),
    r = vnr(t, {
      sandboxAutoAllowEnabled: n,
    });
  if (r.length === 0) return null;
  let o = r.flatMap((s) => [`${Pp(s.rule.ruleValue)}: ${s.reason}`, `  Fix: ${s.fix}`]);
  return {
    type: "unreachable_rules",
    severity: "warning",
    message: `${r.length} ${bn(r.length, "unreachable permission rule")} detected`,
    details: o,
    currentValue: r.length,
    threshold: 0,
  };
}
async function zNl(e, t) {
  let [n, r, o] = await Promise.all([Z$f(), eOf(e), tOf(t)]);
  return {
    claudeMdWarning: n,
    agentWarning: r,
    unreachableRulesWarning: o,
  };
}
