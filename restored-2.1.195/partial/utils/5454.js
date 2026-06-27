// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zhc
// matched 2.1.88 source: src/utils/suggestions/commandSuggestions.ts
// class=partial  jaccard=0.085  score=0.4232  fileCov=0.0962
// note: low-confidence suggestion: src/utils/suggestions/commandSuggestions.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
async function tyc(e, t) {
  let n = e.indexOf(" ");
  if (!e.startsWith("/") || n === -1) return [];
  let r = e.slice(1, n),
    o = e.slice(n + 1),
    s = o.split(/\s+/).filter(Boolean),
    i = o === "" || /\s$/.test(o),
    a = i ? "" : s.at(-1) ?? "",
    l = i ? s : s.slice(0, -1),
    c = await t(l, a),
    u = [`/${r}`, ...l].join(" ");
  return c.slice(0, 12).map(d => {
    let p = d.isFinal === true || d.value.toLowerCase() === a.toLowerCase(),
      f = !p && (d.appendSpace ?? true);
    return {
      id: `command-arg-${d.value}`,
      displayText: d.value,
      description: d.description,
      query: a === "" ? void 0 : a.toLowerCase(),
      metadata: {
        replacement: `${u} ${d.value}${f ? " " : ""}`,
        partial: !p
      }
    };
  });
}
var eyc = "command-arg-";
function nyc(e) {
  if (e.type === "prompt") return "skill";
  return rpm[e.name] ?? "action";
}
function generateCommandSuggestions(input) {
  if (input.type !== "prompt") return "builtin";
  switch (input.source) {
    case "builtin":
      return "builtin";
    case "bundled":
      return "bundled";
    case "mcp":
      return "mcp";
    case "plugin":
      return "plugin";
    case "userSettings":
      return "user";
    case "projectSettings":
    case "localSettings":
      return "project";
    case "policySettings":
      return "managed";
    case "flagSettings":
      return "flag";
  }
}
var rpm;