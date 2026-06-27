// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rd
// matched 2.1.88 source: src/utils/settings/constants.ts
// class=modified  jaccard=0.6584  score=0.8162  fileCov=0.7729
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Rd] deps: cvs, je, vn, SG, Jt
Eet = require("fs/promises");
uvs = JC(dvs, (e) => e, 50);
Ia = Object.assign(
  function (t, n = true) {
    if (!t) return null;
    let r = t.length > tOu ? dvs(t, n) : uvs(t, n);
    return r.ok ? r.value : null;
  },
  {
    cache: uvs.cache,
  },
);
function getSettingSourceName(source) {
  switch (source) {
    case "userSettings":
      return "user";
    case "projectSettings":
      return "project";
    case "localSettings":
      return "project, gitignored";
    case "flagSettings":
      return "cli flag";
    case "policySettings":
      return "managed";
  }
}
function getSourceDisplayName(source) {
  switch (source) {
    case "userSettings":
      return "User";
    case "projectSettings":
      return "Project";
    case "localSettings":
      return "Local";
    case "flagSettings":
      return "Flag";
    case "policySettings":
      return "Managed";
    case "plugin":
      return "Plugin";
    case "built-in":
      return "Built-in";
    case "mcp":
      return "MCP";
  }
}
function getSettingSourceDisplayNameLowercase(source) {
  switch (source) {
    case "userSettings":
      return "user settings";
    case "projectSettings":
      return "shared project settings";
    case "localSettings":
      return "project local settings";
    case "flagSettings":
      return "command line arguments";
    case "policySettings":
      return "enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
    case "toolsNarrowing":
      return "CLI tool narrowing";
    case "mcpServerPolicy":
      return "MCP server policy";
  }
}
function getSettingSourceDisplayNameCapitalized(source) {
  switch (source) {
    case "userSettings":
      return "User settings";
    case "projectSettings":
      return "Shared project settings";
    case "localSettings":
      return "Project local settings";
    case "flagSettings":
      return "Command line arguments";
    case "policySettings":
      return "Enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "Command configuration";
    case "session":
      return "Current session";
    case "toolsNarrowing":
      return "CLI tool narrowing";
    case "mcpServerPolicy":
      return "MCP server policy";
  }
}
function parseSettingSourcesFlag(flag) {
  if (flag === "") return [];
  let t = flag.split(",").map((r) => r.trim()),
    n = [];
  for (let r of t)
    switch (r) {
      case "user":
        n.push("userSettings");
        break;
      case "project":
        n.push("projectSettings");
        break;
      case "local":
        n.push("localSettings");
        break;
      default:
        throw Error(`Invalid setting source: ${r}. Valid options are: user, project, local`);
    }
  return n;
}
function $w() {
  let e = wCt();
  if (vRr?.allowed === e) return vRr.result;
  let t = new Set(e);
  (t.add("flagSettings"), t.add("policySettings"));
  let n = fv.filter((r) => t.has(r));
  return (
    (vRr = {
      allowed: e,
      result: n,
    }),
    n
  );
}
function Om(e) {
  return $w().includes(e);
}
var fv, vRr, OO, DRt;
