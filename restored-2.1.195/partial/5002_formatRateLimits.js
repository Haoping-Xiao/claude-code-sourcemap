// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R6l
// matched 2.1.88 source: src/components/Settings/Usage.tsx
// class=partial  jaccard=0.1086  score=0.2339  fileCov=0.1685
// note: low-confidence suggestion: src/components/Settings/Usage.tsx; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var R6l = E(() => {
  $7t();
  k6l = R(se(), 1);
});
var $6l = {};
_t($6l, {
  formatRateLimits: () => formatRateLimits,
  formatBehaviors: () => formatBehaviors,
  call: () => call
});
function formatRateLimits(e) {
  let {
    rate_limits: t,
    subscription_type: n
  } = e;
  if (!t) return null;
  let r = n === "max" || n === "team" || n === null,
    o = [{
      title: "Current session",
      limit: t.five_hour
    }, {
      title: "Current week (all models)",
      limit: t.seven_day
    }, ...(r ? [{
      title: "Current week (Sonnet only)",
      limit: t.seven_day_sonnet
    }] : []), ...nut(t.limits, lLe())],
    s = [];
  for (let {
    title: i,
    limit: a
  } of o) {
    if (!a || a.utilization === null) continue;
    let l = a.resets_at ? ` \xB7 resets ${XIt(a.resets_at, !0, !0, !0)}` : "";
    s.push(`${i}: ${Math.floor(a.utilization)}% used${l}`);
  }
  return s.length > 0 ? s.join(`
`) : null;
}
function formatBehaviors(e) {
  let {
    behaviors: t
  } = e;
  if (!t) return null;
  let n = [D6l("Last 24h", t.day), D6l("Last 7d", t.week)].filter(r => r !== null);
  if (n.length === 0) return null;
  return ["What's contributing to your limits usage?", "Approximate, based on local sessions on this machine \u2014 does not include other devices or claude.ai. Behaviors are independent characteristics, not a breakdown.", "", n.join(`

`)].join(`
`);
}
function D6l(e, t) {
  let n = t.behaviors.filter(i => i.pct >= Ntr),
    r = [Asr("Top skills", t.skills, i => `/${i}`), Asr("Top subagents", t.agents), Asr("Top plugins", t.plugins), Asr("Top MCP servers", t.mcp_servers)].filter(i => i !== null);
  if (n.length === 0 && r.length === 0) return null;
  let o = `${t.request_count} ${bn(t.request_count, "request")}`,
    s = `${t.session_count} ${bn(t.session_count, "session")}`;
  return [`${e} \xB7 ${o} \xB7 ${s}`, ...n.map(i => `  ${rqf[i.key](i.pct)}`), ...r.map(i => `  ${i}`)].join(`
`);
}
function Asr(e, t, n) {
  if (t.length === 0) return null;
  let r = t.slice(0, L6l).map(s => `${n ? n(s.name) : s.name} ${s.pct}%`).join(", "),
    o = t.length - L6l;
  return `${e}: ${r}${o > 0 ? `, +${o} more` : ""}`;
}
var call = async () => {
    let e = Di() !== null || cI();
    if (bo() && e && !zB()) {
      let t;
      if (ck.isUsingOverage) t = "You are currently using your overages to power your Claude Code usage. We will automatically switch you back to your subscription rate limits when they reset";else t = "You are currently using your subscription to power your Claude Code usage";
      let n = await L7t({
          includeBehaviors: Ir()
        }),
        r = formatRateLimits(n);
      if (r) t += `

${r}`;
      let o = formatBehaviors(n);
      if (o) t += `

${o}`;
      if (at("tengu_amber_lark", !1)) {
        let s = _el();
        if (s) t += `

${wt.dim(s)}`;
      }
      return {
        type: "text",
        value: t
      };
    }
    return {
      type: "text",
      value: Ja(hMe())
    };
  },
  L6l = 8,
  rqf;