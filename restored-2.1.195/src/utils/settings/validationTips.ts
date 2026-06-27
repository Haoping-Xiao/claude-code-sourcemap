// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bws
// matched 2.1.88 source: src/utils/settings/validationTips.ts
// class=modified  jaccard=0.3953  score=0.4195  fileCov=0.8726
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Bws = E(() => {
  sr();
  ((f1u = [
    {
      matches: (e) => e.path === "permissions.defaultMode" && e.code === "invalid_value",
      tip: {
        suggestion:
          'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
        docLink: `${Lhe}/iam#permission-modes`,
      },
    },
    {
      matches: (e) => e.path === "apiKeyHelper" && e.code === "invalid_type",
      tip: {
        suggestion:
          'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"',
      },
    },
    {
      matches: (e) => e.path === "cleanupPeriodDays" && e.code === "too_small",
      tip: {
        suggestion:
          'cleanupPeriodDays must be at least 1. To keep transcripts for a long time, set a large number (e.g. 3650 for ~10 years). To disable transcript writes entirely, remove this setting and use the --no-session-persistence CLI flag or the SDK persistSession:false option instead. (0 is rejected because it previously silently disabled all transcript writes, which users setting it to mean "never clean up" did not expect.)',
      },
    },
    {
      matches: (e) => e.path.startsWith("env.") && e.code === "invalid_type",
      tip: {
        suggestion:
          'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
        docLink: `${Lhe}/settings#environment-variables`,
      },
    },
    {
      matches: (e) =>
        (e.path === "permissions.allow" || e.path === "permissions.deny") &&
        e.code === "invalid_type" &&
        e.expected === "array",
      tip: {
        suggestion:
          'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.',
      },
    },
    {
      matches: (e) => e.path.startsWith("hooks.") && e.code === "invalid_key",
      tip: {
        suggestion:
          "Not a recognized hook event. Common events: PreToolUse, PostToolUse, UserPromptSubmit, SessionStart, SessionEnd, Stop. Check spelling and capitalization.",
        docLink: `${Lhe}/hooks`,
      },
    },
    {
      matches: (e) =>
        /\.hooks\.\d+\.command$/.test(e.path) &&
        e.code === "invalid_type" &&
        e.received === "undefined",
      tip: {
        suggestion:
          'Command hooks require `command`. For exec form (no shell), set `command` to the executable and `args` to its arguments: {"type": "command", "command": "echo", "args": ["hi"]}. For shell form, set `command` to the full shell string: {"type": "command", "command": "echo hi"}.',
        docLink: `${Lhe}/hooks#exec-form-and-shell-form`,
      },
    },
    {
      matches: (e) => e.path.includes("hooks") && e.code === "invalid_type",
      tip: {
        suggestion:
          'Hooks use a matcher + hooks array. The matcher is a string: a tool name ("Bash"), pipe-separated list ("Edit|Write"), or empty to match all. Example: {"PostToolUse": [{"matcher": "Edit|Write", "hooks": [{"type": "command", "command": "echo Done"}]}]}',
      },
    },
    {
      matches: (e) => e.code === "invalid_type" && e.expected === "boolean",
      tip: {
        suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true',
      },
    },
    {
      matches: (e) => e.code === "unrecognized_keys",
      tip: {
        suggestion: "Check for typos or refer to the documentation for valid fields",
        docLink: `${Lhe}/settings`,
      },
    },
    {
      matches: (e) => e.code === "invalid_value" && e.enumValues !== void 0,
      tip: {
        suggestion: void 0,
      },
    },
    {
      matches: (e) =>
        e.code === "invalid_type" &&
        e.expected === "object" &&
        e.received === null &&
        e.path === "",
      tip: {
        suggestion:
          "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error.",
      },
    },
    {
      matches: (e) => e.path === "permissions.additionalDirectories" && e.code === "invalid_type",
      tip: {
        suggestion:
          'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
        docLink: `${Lhe}/iam#working-directories`,
      },
    },
  ]),
    (m1u = {
      permissions: `${Lhe}/iam#configuring-permissions`,
      env: `${Lhe}/settings#environment-variables`,
      hooks: `${Lhe}/hooks`,
    }));
});
function Uws(e) {
  return e.code === "invalid_type";
}
function Fws(e) {
  return e.code === "invalid_value";
}
function h1u(e) {
  return e.code === "unrecognized_keys";
}
function jws(e) {
  return e.code === "too_small";
}
function Oet(e) {
  if (e === null) return "null";
  if (e === void 0) return "undefined";
  if (Array.isArray(e)) return "array";
  return typeof e;
}
function Gws(e) {
  let t = e.match(/received (\w+)/);
  return t ? t[1] : void 0;
}
function Net(e, t) {
  return e.issues.map((n) => {
    let r = n.path.map(String).join("."),
      o = n.message,
      s,
      i,
      a,
      l,
      c;
    if (Fws(n))
      ((i = n.values.map((d) => String(d))), (a = i.join(" | ")), (l = void 0), (c = void 0));
    else if (Uws(n)) {
      a = n.expected;
      let d = Gws(n.message);
      ((l = d ?? Oet(n.input)), (c = d ?? Oet(n.input)));
    } else if (jws(n)) a = String(n.minimum);
    else if (n.code === "custom" && "params" in n) ((l = n.params.received), (c = l));
    let u = Nws({
      path: r,
      code: n.code,
      expected: a,
      received: l,
      enumValues: i,
      message: n.message,
      value: l,
    });
    if (Fws(n))
      ((s = i?.map((d) => `"${d}"`).join(", ")), (o = `Invalid value. Expected one of: ${s}`));
    else if (Uws(n)) {
      let d = Gws(n.message) ?? Oet(n.input);
      if (n.expected === "object" && d === "null" && r === "") o = "Invalid or malformed JSON";
      else o = `Expected ${n.expected}, but received ${d}`;
    } else if (h1u(n)) {
      let d = n.keys.join(", ");
      o = `Unrecognized ${bn(n.keys.length, "field")}: ${d}`;
    } else if (jws(n))
      ((o = `Number must be greater than or equal to ${n.minimum}`), (s = String(n.minimum)));
    return {
      file: t,
      path: r,
      message: o,
      expected: s,
      invalidValue: c,
      suggestion: u?.suggestion,
      docLink: u?.docLink,
    };
  });
}
function fLr(e) {
  try {
    let t = Ft(e),
      n = g1u().safeParse(t);
    if (n.success)
      return {
        isValid: true,
      };
    return {
      isValid: false,
      error:
        `Settings validation failed:
` +
        Net(n.error, "settings").map((s) => {
          let i = `- ${s.path}: ${s.message}`;
          if (s.suggestion) i += `. ${s.suggestion}`;
          return i;
        }).join(`
`),
      fullSchema: pLr(),
    };
  } catch (t) {
    return {
      isValid: false,
      error: `Invalid JSON: ${t instanceof Error ? t.message : "Unknown parsing error"}`,
      fullSchema: pLr(),
    };
  }
}
function y1u(e, t) {
  if (!e || typeof e !== "object") return [];
  let n = e;
  if (!n.permissions || typeof n.permissions !== "object") return [];
  let r = n.permissions,
    o = [];
  for (let s of ["allow", "deny", "ask"]) {
    let i = r[s];
    if (!Array.isArray(i)) continue;
    r[s] = i.filter((a) => {
      if (typeof a !== "string")
        return (
          o.push({
            file: t,
            path: `permissions.${s}`,
            message: `Non-string value in ${s} array was removed`,
            severity: "warning",
            invalidValue: a,
          }),
          false
        );
      let l = lLr(a, s);
      if (!l.valid) {
        let c = `Invalid permission rule "${a}" was skipped: ${l.error}`;
        if (l.suggestion) c += `. ${l.suggestion}`;
        return (
          o.push({
            file: t,
            path: `permissions.${s}`,
            message: c,
            severity: "warning",
            invalidValue: a,
          }),
          false
        );
      }
      return true;
    });
  }
  return o;
}
function b1u(e, t) {
  if (!e || typeof e !== "object") return [];
  let n = e;
  if (!("hooks" in n)) return [];
  if (n.hooks === null || typeof n.hooks !== "object" || Array.isArray(n.hooks)) {
    let s = Oet(n.hooks);
    return (
      delete n.hooks,
      [
        {
          file: t,
          path: "hooks",
          message: `"hooks" must be an object mapping event names to matcher arrays; received ${s}. This field was ignored.`,
          severity: "warning",
          invalidValue: s,
          docLink: "https://code.claude.com/docs/en/hooks",
        },
      ]
    );
  }
  let r = n.hooks,
    o = [];
  for (let s of Object.keys(r)) {
    if (!_1u.has(s)) {
      (delete r[s],
        o.push({
          file: t,
          path: `hooks.${s}`,
          message: `Unknown hook event "${s}" was ignored. Valid events: ${GO.join(", ")}`,
          severity: "warning",
          invalidValue: s,
          docLink: "https://code.claude.com/docs/en/hooks",
        }));
      continue;
    }
    if (!Array.isArray(r[s])) {
      let i = Oet(r[s]);
      (delete r[s],
        o.push({
          file: t,
          path: `hooks.${s}`,
          message: `Hook event "${s}" must be an array of matchers; received ${i}. This entry was ignored.`,
          severity: "warning",
          invalidValue: i,
          docLink: "https://code.claude.com/docs/en/hooks",
        }));
    }
  }
  if (o.length > 0 && Object.keys(r).length === 0) delete n.hooks;
  return o;
}
function E1u(e, t) {
  if (!e || typeof e !== "object") return [];
  let n = e,
    r = [];
  for (let { key: o, schema: s } of S1u) {
    if (!(o in n)) continue;
    if (!Array.isArray(n[o])) {
      let l = n[o];
      (delete n[o],
        r.push({
          file: t,
          path: o,
          message: `"${o}" must be an array; received ${Oet(l)}. This field was ignored.`,
          severity: "warning",
          invalidValue: l,
        }));
      continue;
    }
    let i = n[o],
      a = [];
    for (let l = 0; l < i.length; l++) {
      let c = s().safeParse(i[l]);
      if (c.success) a.push(i[l]);
      else
        r.push({
          file: t,
          path: `${o}[${l}]`,
          message: `Invalid entry was ignored: ${c.error.issues[0]?.message ?? "failed validation"}`,
          severity: "warning",
          invalidValue: i[l],
        });
    }
    if (a.length < i.length) n[o] = a;
  }
  return r;
}
function Dhe(e, t, n) {
  return [...y1u(e, t), ...b1u(e, t), ...(n?.skipMcpServerEntryFilter ? [] : E1u(e, t))];
}
var g1u, _1u, S1u;
