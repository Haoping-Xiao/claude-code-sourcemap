// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module glt
// matched 2.1.88 source: src/tools/AgentTool/agentDisplay.ts
// class=partial  jaccard=0.1171  score=0.2192  fileCov=0.2009
// note: low-confidence suggestion: src/tools/AgentTool/agentDisplay.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var glt = E(() => {
  dr();
  reo = new Map();
});
function OPn() {
  let e = $w();
  if (!e.includes("userSettings")) return [];
  let t = yn("userSettings")?.enabledPlugins;
  if (!t) return [];
  let n = e.filter(o => o !== "userSettings"),
    r = [];
  for (let [o, s] of Object.entries(t)) {
    if (s !== false) continue;
    let i = null;
    for (let a of n) {
      let l = yn(a)?.enabledPlugins?.[o];
      if (l === void 0) continue;
      i = l === false ? null : a;
    }
    if (i === null) continue;
    r.push({
      pluginId: o,
      overriddenBy: i
    });
  }
  return r;
}
function HKd(e) {
  switch (e.overriddenBy) {
    case "projectSettings":
      return `To opt out, set "enabledPlugins": {"${e.pluginId}": false} in .claude/settings.local.json.`;
    case "localSettings":
      return "To opt out, change it to false in .claude/settings.local.json (that file currently enables it).";
    case "flagSettings":
      return `This comes from the --settings flag; .claude/settings.local.json won't override it. Remove "${e.pluginId}" from the --settings value.`;
    case "policySettings":
      return "Managed policy can't be overridden locally \u2014 contact your " + "administrator.";
    case "userSettings":
      return "";
  }
}
function seo(e) {
  let t = wG(e.overriddenBy);
  return `"${e.pluginId}" is enabled by ${t} settings, which override your user setting. ${HKd(e)}`;
}