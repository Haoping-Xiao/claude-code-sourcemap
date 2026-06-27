// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $I
// matched 2.1.88 source: src/utils/permissions/shellRuleMatching.ts
// class=modified  jaccard=0.2319  score=0.6699  fileCov=0.2619
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $I] deps: utils/debug.ts, utils/settings/settings.ts, utils/fsOperations.ts, utils/task/diskOutput.ts, tools/TaskStopTool/prompt.ts, utils/permissions/PermissionUpdate.ts
Gca = require("path");
function Qjt(e) {
  return e.match(/^(.+):\*$/)?.[1] ?? null;
}
function Mao(e) {
  if (e.endsWith(":*")) return false;
  for (let t = 0; t < e.length; t++)
    if (e[t] === "*") {
      let n = 0,
        r = t - 1;
      while (r >= 0 && e[r] === "\\") (n++, r--);
      if (n % 2 === 0) return true;
    }
  return false;
}
function Wca(e) {
  let t = e.trimEnd();
  if (!t.endsWith("*")) return false;
  let n = 0,
    r = t.length - 2;
  while (r >= 0 && t[r] === "\\") (n++, r--);
  return n % 2 === 0;
}
function matchWildcardPattern(pattern, command, n = false, r = false) {
  let o = pattern.trim(),
    s = r ? o.replace(/[ \t]+/g, " ") : o,
    i = r ? command.replace(/[ \t]+/g, " ") : command,
    a = "",
    l = 0;
  while (l < s.length) {
    let h = s[l];
    if (h === "\\" && l + 1 < s.length) {
      let y = s[l + 1];
      if (y === "*") {
        ((a += "\x00ESCAPED_STAR\x00"), (l += 2));
        continue;
      } else if (y === "\\") {
        ((a += "\x00ESCAPED_BACKSLASH\x00"), (l += 2));
        continue;
      }
    }
    ((a += h), l++);
  }
  let p = a
      .replace(/[.+?^${}()|[\]\\'"]/g, "\\$&")
      .replace(uup, "\x00GLOBSTAR\x00")
      .replaceAll("*", ".*")
      .replace(dup, "/(?:.*/)?")
      .replace(lup, "\\*")
      .replace(cup, "\\\\"),
    f = (a.match(/\*/g) || []).length;
  if (p.endsWith(" .*") && f === 1) p = p.slice(0, -3) + "( .*)?";
  let m = "s" + (n ? "i" : "");
  return new RegExp(`^${p}$`, m).test(i);
}
function parsePermissionRule(permissionRule) {
  let t = Qjt(permissionRule);
  if (t !== null)
    return {
      type: "prefix",
      prefix: t,
    };
  if (Mao(permissionRule))
    return {
      type: "wildcard",
      pattern: permissionRule,
    };
  return {
    type: "exact",
    command: permissionRule,
  };
}
function suggestionForExactCommand(toolName, command) {
  return [
    {
      type: "addRules",
      rules: [
        {
          toolName: toolName,
          ruleContent: command,
        },
      ],
      behavior: "allow",
      destination: "localSettings",
    },
  ];
}
function Zjt(e, t) {
  return [
    {
      type: "addRules",
      rules: [
        {
          toolName: e,
          ruleContent: `${t} *`,
        },
      ],
      behavior: "allow",
      destination: "localSettings",
    },
  ];
}
var lup, cup, uup, dup;
