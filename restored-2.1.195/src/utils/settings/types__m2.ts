// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hws
// matched 2.1.88 source: src/utils/settings/types.ts
// class=modified (alt of src/utils/settings/types.ts)  jaccard=0.0361  score=0.3294  fileCov=0.0389
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Hws = E(() => {
  Xr();
  NB();
  ((r1u = ["autoMode", "deepLink", "voice", "briefView", "screenReader"]),
    (emn = {
      autoMode: {
        buildGate: () => true,
        shape: () => ({
          skipAutoPermissionPrompt: H.boolean()
            .optional()
            .describe("Whether the user has accepted the auto mode opt-in dialog"),
          useAutoModeDuringPlan: H.boolean()
            .optional()
            .describe(
              "Whether plan mode uses auto mode semantics when auto mode is available (default: true)",
            ),
          autoMode: H.object({
            allow: H.array(H.string())
              .optional()
              .describe(
                'Rules for the auto mode classifier allow section. Include the literal string "$defaults" to inherit the built-in rules at that position.',
              ),
            soft_deny: H.array(H.string())
              .optional()
              .describe(
                'Rules for the auto mode classifier SOFT BLOCK section \u2014 destructive/irreversible actions that user intent can clear. Include the literal string "$defaults" to inherit the built-in rules at that position.',
              ),
            hard_deny: H.array(H.string())
              .optional()
              .describe(
                'Rules for the auto mode classifier HARD BLOCK section \u2014 security boundaries that user intent does NOT clear. Include the literal string "$defaults" to inherit the built-in rules at that position.',
              ),
            ...false,
            ...{},
            environment: H.array(H.string())
              .optional()
              .describe(
                'Entries for the auto mode classifier environment section. Include the literal string "$defaults" to inherit the built-in entries at that position.',
              ),
            classifyAllShell: H.boolean()
              .optional()
              .describe(
                "When true, every Bash/PowerShell allow rule is suspended while auto mode is active so all shell commands are routed through the classifier (higher safety, more classifier calls). Default: false.",
              ),
          })
            .optional()
            .describe("Auto mode classifier prompt customization"),
        }),
        permissionsShape: () => ({
          disableAutoMode: H.enum(["disable"]).optional().describe("Disable auto mode"),
        }),
        permissionModes: () => yM.filter((e) => !yY.includes(e)),
      },
      deepLink: {
        buildGate: () => true,
        shape: () => ({
          disableDeepLinkRegistration: H.enum(["disable"])
            .optional()
            .describe("Prevent claude-cli:// protocol handler registration with the OS"),
        }),
      },
      voice: {
        buildGate: () => true,
        shape: () => ({
          voiceEnabled: H.boolean()
            .optional()
            .describe("Enable voice mode (hold-to-talk dictation)"),
        }),
      },
      briefView: {
        buildGate: () => true,
        shape: () => ({
          defaultView: H.enum(["chat", "transcript"])
            .optional()
            .describe(
              "Default transcript view: chat (SendUserMessage checkpoints only) or transcript (full)",
            ),
        }),
      },
      screenReader: {
        buildGate: () => true,
        shape: () => ({
          axScreenReader: H.boolean()
            .optional()
            .describe(
              "Render screen-reader friendly output (flat text, no decorative borders or animations). Overridden by the CLAUDE_AX_SCREEN_READER env var and the --ax-screen-reader CLI flag.",
            ),
        }),
      },
    }));
});
function hc(e) {
  let t = e.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (e.startsWith("claude.ai ")) t = t.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return t;
}
function eI(e) {
  let t = e.split("__"),
    [n, r, ...o] = t;
  if (n !== "mcp" || !r) return null;
  let s = o.length > 0 ? o.join("__") : void 0;
  return {
    serverName: r,
    toolName: s,
  };
}
function xG(e) {
  return `mcp__${hc(e)}__`;
}
function i9(e, t) {
  return `${xG(e)}${hc(t)}`;
}
function nLr(e) {
  let t = {
      always_allow: 0,
      always_ask: 1,
      always_deny: 2,
    },
    n = new Map();
  for (let [i, a] of Object.entries(e)) {
    if (a.type !== "http" && a.type !== "sse") continue;
    for (let l of a.tools ?? []) {
      let c = l.permission_policy;
      if (c === void 0) continue;
      let u = t[c];
      if (u === void 0) continue;
      let d = i9(i, l.name),
        p = n.get(d);
      if (p === void 0 || u > (t[p] ?? -1)) n.set(d, c);
    }
  }
  let r = [],
    o = [],
    s = [];
  for (let [i, a] of n)
    if (a === "always_allow") r.push(i);
    else if (a === "always_deny") o.push(i);
    else s.push(i);
  return {
    allow: r,
    deny: o,
    ask: s,
  };
}
function Tws(e, t) {
  let n = Object.fromEntries(Object.entries(t).filter(([, i]) => i.scope === "dynamic")),
    { allow: r, deny: o, ask: s } = nLr(n);
  if (r.length === 0 && o.length === 0 && s.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      ...(r.length > 0 && {
        mcpServerPolicy: r,
      }),
    },
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      ...(o.length > 0 && {
        mcpServerPolicy: o,
      }),
    },
    alwaysAskRules: {
      ...e.alwaysAskRules,
      ...(s.length > 0 && {
        mcpServerPolicy: s,
      }),
    },
  };
}
function Rhe(e) {
  return e.mcpInfo ? i9(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name;
}
function tmn(e, t) {
  let n = `mcp__${hc(t)}__`;
  return e.replace(n, "");
}
function nmn(e) {
  let t = e.replace(/\s*\(MCP\)\s*$/, "");
  t = t.trim();
  let n = t.indexOf(" - ");
  if (n !== -1) return t.substring(n + 3).trim();
  return t;
}
function ACe(e, t) {
  if (!t || !e.startsWith("plugin:")) return e;
  let n = e.split(":");
  if (n.length < 3) return e;
  let r = n[1];
  return `${n.slice(2).join(":")} (from plugin ${r})`;
}
function rLr(e, t) {
  if (e.startsWith("plugin:") || t.startsWith("plugin:")) return e === t;
  return hc(e) === hc(t);
}
var Ox = () => {};
function wD(e) {
  return Object.hasOwn(oLr, e) ? oLr[e] : e;
}
function rmn(e) {
  let t = [];
  for (let [n, r] of Object.entries(oLr)) if (r === e) t.push(n);
  return t;
}
function omn(e, t) {
  let n = t && Object.hasOwn(t, e) ? t[e] : void 0;
  return n !== void 0 && n !== e ? [e, n] : [e];
}
function smn(e, t) {
  if (!t) return [];
  let n = [];
  for (let [r, o] of Object.entries(t)) if (o === e) n.push(r);
  return n;
}
function HCe(e) {
  return e.includes("*");
}
function sLr(e, t) {
  return new RegExp(
    `^${e
      .split("*")
      .map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join(".*")}$`,
    "s",
  ).test(t);
}
function iLr(e, t) {
  return sLr(e, t);
}
function o1u(e) {
  return e.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
function s1u(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")").replaceAll("\\\\", "\\");
}
function Ig(e) {
  let t = i1u(e, "(");
  if (t === -1)
    return {
      toolName: wD(e),
    };
  let n = a1u(e, ")");
  if (n === -1 || n <= t)
    return {
      toolName: wD(e),
    };
  if (n !== e.length - 1)
    return {
      toolName: wD(e),
    };
  let r = e.substring(0, t),
    o = e.substring(t + 1, n);
  if (!r)
    return {
      toolName: wD(e),
    };
  if (o === "" || o === "*")
    return {
      toolName: wD(r),
    };
  let s = s1u(o);
  return {
    toolName: wD(r),
    ruleContent: s,
  };
}
function Pp(e) {
  if (!e.ruleContent) return e.toolName;
  let t = o1u(e.ruleContent);
  return `${e.toolName}(${t})`;
}
function i1u(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t) {
      let r = 0,
        o = n - 1;
      while (o >= 0 && e[o] === "\\") (r++, o--);
      if (r % 2 === 0) return n;
    }
  return -1;
}
function a1u(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (e[n] === t) {
      let r = 0,
        o = n - 1;
      while (o >= 0 && e[o] === "\\") (r++, o--);
      if (r % 2 === 0) return n;
    }
  return -1;
}
var oLr,
  Met = "workspace",
  rLt,
  vws;
