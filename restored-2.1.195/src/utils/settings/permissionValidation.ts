// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xws
// matched 2.1.88 source: src/utils/settings/permissionValidation.ts
// class=modified  jaccard=0.3675  score=0.5526  fileCov=0.523
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xws = E(() => {
  imn = {
    filePatternTools: ["Read", "Write", "Edit", "Glob", "NotebookRead", "NotebookEdit", "Cd"],
    bashPrefixTools: ["Bash"],
    customValidation: {
      WebSearch: (e) => {
        if (e.includes("*") || e.includes("?"))
          return {
            valid: false,
            error: "WebSearch does not support wildcards",
            suggestion: "Use exact search terms without * or ?",
            examples: ["WebSearch(claude ai)", "WebSearch(typescript tutorial)"],
          };
        return {
          valid: true,
        };
      },
      WebFetch: (e) => {
        if (e.includes("://") || e.startsWith("http"))
          return {
            valid: false,
            error: "WebFetch permissions use domain format, not URLs",
            suggestion: 'Use "domain:hostname" format',
            examples: ["WebFetch(domain:example.com)", "WebFetch(domain:github.com)"],
          };
        if (!e.startsWith("domain:"))
          return {
            valid: false,
            error: 'WebFetch permissions must use "domain:" prefix',
            suggestion: 'Use "domain:hostname" format',
            examples: ["WebFetch(domain:example.com)", "WebFetch(domain:*.google.com)"],
          };
        return {
          valid: true,
        };
      },
    },
  };
});
function kws(e, t) {
  let n = 0,
    r = t - 1;
  while (r >= 0 && e[r] === "\\") (n++, r--);
  return n % 2 !== 0;
}
function aLr(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === t && !kws(e, r)) n++;
  return n;
}
function l1u(e) {
  for (let t = 0; t < e.length - 1; t++)
    if (e[t] === "(" && e[t + 1] === ")") {
      if (!kws(e, t)) return true;
    }
  return false;
}
function amn(e) {
  if (!HCe(e)) return null;
  let t = eI(e);
  if (t && !HCe(t.serverName)) return null;
  return {
    valid: false,
    error: `Wildcard tool name "${e}" is not supported in allow rules`,
    suggestion:
      "An allow pattern must name the scope it widens \u2014 globs are permitted only in the tool position after a literal mcp__<server>__ prefix. Deny and ask rules accept wildcards anywhere",
    examples: ["mcp__puppeteer__*", "mcp__github__get_*"],
  };
}
function lLr(e, t) {
  if (!e || e.trim() === "")
    return {
      valid: false,
      error: "Permission rule cannot be empty",
    };
  let n = aLr(e, "("),
    r = aLr(e, ")");
  if (n !== r)
    return {
      valid: false,
      error: "Mismatched parentheses",
      suggestion: "Ensure all opening parentheses have matching closing parentheses",
    };
  if (l1u(e)) {
    let a = e.substring(0, e.indexOf("("));
    if (!a)
      return {
        valid: false,
        error: "Empty parentheses with no tool name",
        suggestion: "Specify a tool name before the parentheses",
      };
    return {
      valid: false,
      error: "Empty parentheses",
      suggestion: `Either specify a pattern or use just "${a}" without parentheses`,
      examples: [`${a}`, `${a}(some-pattern)`],
    };
  }
  let o = Ig(e),
    s = eI(o.toolName);
  if (s) {
    if (o.ruleContent !== void 0 || aLr(e, "(") > 0)
      return {
        valid: false,
        error: "MCP rules do not support patterns in parentheses",
        suggestion: `Use "${o.toolName}" without parentheses, or use "mcp__${s.serverName}__*" for all tools`,
        examples: [
          `mcp__${s.serverName}`,
          `mcp__${s.serverName}__*`,
          s.toolName && s.toolName !== "*" ? `mcp__${s.serverName}__${s.toolName}` : void 0,
        ].filter(Boolean),
      };
    if (t === "allow") {
      let a = amn(o.toolName);
      if (a) return a;
    }
    return {
      valid: true,
    };
  }
  if (!o.toolName || o.toolName.length === 0)
    return {
      valid: false,
      error: "Tool name cannot be empty",
    };
  if (t === "allow") {
    let a = amn(o.toolName);
    if (a) return a;
  }
  if (!o.toolName.includes("_") && o.toolName[0] !== o.toolName[0]?.toUpperCase())
    return {
      valid: false,
      error: "Tool names must start with uppercase",
      suggestion: `Use "${Cx(String(o.toolName))}"`,
    };
  let i = Iws(o.toolName);
  if (i && o.ruleContent !== void 0) {
    let a = i(o.ruleContent);
    if (!a.valid) return a;
  }
  if (Cws(o.toolName) && o.ruleContent !== void 0) {
    let a = o.ruleContent;
    if (a.includes(":*") && !a.endsWith(":*"))
      return {
        valid: false,
        error: "The :* pattern must be at the end",
        suggestion: "Move :* to the end for prefix matching, or use * for wildcard matching",
        examples: [
          "Bash(npm run:*) - prefix matching (legacy)",
          "Bash(npm run *) - wildcard matching",
        ],
      };
    if (a === ":*")
      return {
        valid: false,
        error: "Prefix cannot be empty before :*",
        suggestion: "Specify a command prefix before :*",
        examples: ["Bash(npm *)", "Bash(git *)"],
      };
  }
  if (wws(o.toolName) && o.ruleContent !== void 0) {
    if (o.ruleContent.includes(":*"))
      return {
        valid: false,
        error: 'The ":*" syntax is only for Bash prefix rules',
        suggestion: 'Use glob patterns like "*" or "**" for file matching',
        examples: [
          `${o.toolName}(*.ts) - matches .ts files`,
          `${o.toolName}(src/**) - matches all files in src`,
          `${o.toolName}(**/*.test.ts) - matches test files`,
        ],
      };
  }
  return {
    valid: true,
  };
}
function Lws(e) {
  return H.string().superRefine((t, n) => {
    let r = lLr(t, e);
    if (!r.valid) {
      let o = r.error;
      if (r.suggestion) o += `. ${r.suggestion}`;
      if (r.examples && r.examples.length > 0) o += `. Examples: ${r.examples.join(", ")}`;
      n.addIssue({
        code: H.ZodIssueCode.custom,
        message: o,
        params: {
          received: t,
        },
      });
    }
  });
}
var cLr, Rws;
