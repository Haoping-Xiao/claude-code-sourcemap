// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QLn
// matched 2.1.88 source: src/keybindings/schema.ts
// class=modified  jaccard=0.5633  score=0.5799  fileCov=0.9515
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var QLn = E(() => {
  Xr();
  ((Cat = [
    "Global",
    "Chat",
    "Autocomplete",
    "Confirmation",
    "Help",
    "Transcript",
    "HistorySearch",
    "Task",
    "ThemePicker",
    "Settings",
    "Tabs",
    "Attachments",
    "Footer",
    "MessageSelector",
    "DiffDialog",
    "ModelPicker",
    "Select",
    "Plugin",
    "Scroll",
    "Doctor",
  ]),
    (s5d = new Set(Cat)));
  ((uqi = {
    Global: "Active everywhere, regardless of focus",
    Chat: "When the chat input is focused",
    Autocomplete: "When autocomplete menu is visible",
    Confirmation: "When a confirmation/permission dialog is shown",
    Help: "When the help overlay is open",
    Transcript: "When viewing the transcript",
    HistorySearch: "When searching command history (ctrl+r)",
    Task: "When a task/agent is running in the foreground",
    ThemePicker: "When the theme picker is open",
    Settings: "When the settings menu is open",
    Tabs: "When tab navigation is active",
    Attachments: "When navigating image attachments in a select dialog",
    Footer: "When footer indicators are focused",
    MessageSelector: "When the message selector (rewind) is open",
    DiffDialog: "When the diff dialog is open",
    ModelPicker: "When the model picker is open",
    Select: "When a select/list component is focused",
    Plugin: "When the plugin dialog is open",
    Scroll: "When a scrollable view is focused (fullscreen layout)",
    Doctor: "When the /doctor diagnostics screen is open",
  }),
    (nQr = [
      "app:interrupt",
      "app:exit",
      "app:toggleTodos",
      "app:toggleTranscript",
      "app:toggleBrief",
      "app:toggleReplTab",
      "app:toggleTerminal",
      "app:redraw",
      "app:openArtifact",
      "history:search",
      "history:previous",
      "history:next",
      "chat:cancel",
      "chat:killAgents",
      "chat:cycleMode",
      "chat:modelPicker",
      "chat:fastMode",
      "chat:thinkingToggle",
      "chat:workflowKeywordToggle",
      "chat:submit",
      "chat:newline",
      "chat:undo",
      "chat:externalEditor",
      "chat:stash",
      "chat:imagePaste",
      "chat:clearInput",
      "chat:clearScreen",
      "autocomplete:accept",
      "autocomplete:dismiss",
      "autocomplete:previous",
      "autocomplete:next",
      "confirm:yes",
      "confirm:no",
      "confirm:previous",
      "confirm:next",
      "confirm:nextField",
      "confirm:previousField",
      "confirm:cycleMode",
      "confirm:toggle",
      "confirm:toggleExplanation",
      "tabs:next",
      "tabs:previous",
      "transcript:toggleShowAll",
      "transcript:exit",
      "historySearch:next",
      "historySearch:accept",
      "historySearch:cancel",
      "historySearch:execute",
      "historySearch:cycleScope",
      "task:background",
      "theme:toggleSyntaxHighlighting",
      "theme:editCustom",
      "help:dismiss",
      "attachments:next",
      "attachments:previous",
      "attachments:remove",
      "attachments:exit",
      "footer:up",
      "footer:down",
      "footer:next",
      "footer:previous",
      "footer:openSelected",
      "footer:clearSelection",
      "footer:close",
      "messageSelector:up",
      "messageSelector:down",
      "messageSelector:top",
      "messageSelector:bottom",
      "messageSelector:select",
      "diff:dismiss",
      "diff:previousSource",
      "diff:nextSource",
      "diff:back",
      "diff:viewDetails",
      "diff:previousFile",
      "diff:nextFile",
      "modelPicker:decreaseEffort",
      "modelPicker:increaseEffort",
      "modelPicker:thisSessionOnly",
      "select:next",
      "select:previous",
      "select:pageUp",
      "select:pageDown",
      "select:first",
      "select:last",
      "select:accept",
      "select:cancel",
      "plugin:toggle",
      "plugin:install",
      "plugin:favorite",
      "doctor:fix",
      "permission:toggleDebug",
      "settings:search",
      "settings:retry",
      "settings:periodDay",
      "settings:periodWeek",
      "settings:sortByTokens",
      "voice:pushToTalk",
      "scroll:pageUp",
      "scroll:pageDown",
      "scroll:lineUp",
      "scroll:lineDown",
      "scroll:top",
      "scroll:bottom",
      "scroll:halfPageUp",
      "scroll:halfPageDown",
      "scroll:fullPageUp",
      "scroll:fullPageDown",
      "selection:copy",
      "selection:clear",
      "selection:extendLeft",
      "selection:extendRight",
      "selection:extendUp",
      "selection:extendDown",
      "selection:extendLineStart",
      "selection:extendLineEnd",
    ]),
    (i5d = ve(() =>
      H.object({
        context: H.enum(Cat).describe(
          "UI context where these bindings apply. Global bindings work everywhere.",
        ),
        bindings: H.record(
          H.string().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'),
          H.union([
            H.enum(nQr),
            H.string()
              .regex(/^command:[a-zA-Z0-9:\-_]+$/)
              .describe(
                'Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.',
              ),
            H.null().describe("Set to null to unbind a default shortcut"),
          ]).describe("Action to trigger, command to invoke, or null to unbind"),
        ).describe("Map of keystroke patterns to actions"),
      }).describe("A block of keybindings for a specific context"),
    )),
    (jry = ve(() =>
      H.object({
        $schema: H.string().optional().describe("JSON Schema URL for editor validation"),
        $docs: H.string().optional().describe("Documentation URL"),
        bindings: H.array(i5d()).describe("Array of keybinding blocks by context"),
      }).describe(
        "Claude Code keybindings configuration. Customize keyboard shortcuts by context.",
      ),
    )));
});
function l5d(e) {
  return a5d().safeParse(e).success;
}
function ZLn(e) {
  return Array.isArray(e) && e.every(l5d);
}
function c5d(e) {
  return dqi.includes(e);
}
function u5d(e) {
  let t = e.toLowerCase().split("+");
  for (let r of t)
    if (!r.trim())
      return {
        type: "parse_error",
        severity: "error",
        message: `Empty key part in "${e}"`,
        key: e,
        suggestion: 'Remove extra "+" characters',
      };
  let n = TGe(e);
  if (!n.key && !n.ctrl && !n.alt && !n.shift && !n.meta && !n.super)
    return {
      type: "parse_error",
      severity: "error",
      message: `Could not parse keystroke "${e}"`,
      key: e,
    };
  return null;
}
function d5d(e, t) {
  let n = [];
  if (typeof e !== "object" || e === null)
    return (
      n.push({
        type: "parse_error",
        severity: "error",
        message: `Keybinding block ${t + 1} is not an object`,
      }),
      n
    );
  let r = e,
    o = r.context,
    s;
  if (typeof o !== "string")
    n.push({
      type: "parse_error",
      severity: "error",
      message: `Keybinding block ${t + 1} missing "context" field`,
    });
  else if (!c5d(o))
    n.push({
      type: "invalid_context",
      severity: "error",
      message: `Unknown context "${o}"`,
      context: o,
      suggestion: `Valid contexts: ${dqi.join(", ")}`,
    });
  else s = o;
  if (typeof r.bindings !== "object" || r.bindings === null)
    return (
      n.push({
        type: "parse_error",
        severity: "error",
        message: `Keybinding block ${t + 1} missing "bindings" field`,
      }),
      n
    );
  let i = r.bindings;
  for (let [a, l] of Object.entries(i)) {
    let c = u5d(a);
    if (c) ((c.context = s), n.push(c));
    if (l !== null && typeof l !== "string")
      n.push({
        type: "invalid_action",
        severity: "error",
        message: `Invalid action for "${a}": must be a string or null`,
        key: a,
        context: s,
      });
    else if (typeof l === "string" && l.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(l))
        n.push({
          type: "invalid_action",
          severity: "warning",
          message: `Invalid command binding "${l}" for "${a}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`,
          key: a,
          context: s,
          action: l,
        });
      if (s && s !== "Chat")
        n.push({
          type: "invalid_action",
          severity: "warning",
          message: `Command binding "${l}" must be in "Chat" context, not "${s}"`,
          key: a,
          context: s,
          action: l,
          suggestion: 'Move this binding to a block with "context": "Chat"',
        });
    } else if (l === "voice:pushToTalk") {
      let u = CW(a)[0];
      if (u && !u.ctrl && !u.alt && !u.shift && !u.meta && !u.super && /^[a-z]$/.test(u.key))
        n.push({
          type: "invalid_action",
          severity: "warning",
          message: `Binding "${a}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`,
          key: a,
          context: s,
          action: l,
        });
    }
  }
  return n;
}
function rQr(e) {
  let t = [],
    n = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
    r;
  while ((r = n.exec(e)) !== null) {
    let o = r[1];
    if (!o) continue;
    let a = e.slice(0, r.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown",
      l = /"([^"]+)"\s*:/g,
      c = new Map(),
      u;
    while ((u = l.exec(o)) !== null) {
      let d = u[1];
      if (!d) continue;
      let p = (c.get(d) ?? 0) + 1;
      if ((c.set(d, p), p === 2))
        t.push({
          type: "duplicate",
          severity: "warning",
          message: `Duplicate key "${d}" in ${a} bindings`,
          key: d,
          context: a,
          suggestion:
            "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored.",
        });
    }
  }
  return t;
}
function p5d(e) {
  let t = [];
  if (!Array.isArray(e))
    return (
      t.push({
        type: "parse_error",
        severity: "error",
        message: "keybindings.json must contain an array",
        suggestion: "Wrap your bindings in [ ]",
      }),
      t
    );
  for (let n = 0; n < e.length; n++) t.push(...d5d(e[n], n));
  return t;
}
function f5d(e) {
  let t = [],
    n = new Map();
  for (let r of e) {
    let o = n.get(r.context) ?? new Map();
    n.set(r.context, o);
    for (let [s, i] of Object.entries(r.bindings)) {
      let a = vGe(s),
        l = o.get(a);
      if (l && l !== i)
        t.push({
          type: "duplicate",
          severity: "warning",
          message: `Duplicate binding "${s}" in ${r.context} context`,
          key: s,
          context: r.context,
          action: i ?? "null (unbind)",
          suggestion: `Previously bound to "${l}". Only the last binding will be used.`,
        });
      o.set(a, i ?? "null");
    }
  }
  return t;
}
function m5d(e) {
  let t = [],
    n = lqi();
  for (let r of e) {
    let o = nX(r.chord),
      s = vGe(o);
    for (let i of n)
      if (vGe(i.key) === s)
        t.push({
          type: "reserved",
          severity: i.severity,
          message: `"${o}" may not work: ${i.reason}`,
          key: o,
          context: r.context,
          action: r.action ?? void 0,
        });
  }
  return t;
}
function g5d(e) {
  let t = [];
  for (let n of e)
    for (let [r, o] of Object.entries(n.bindings)) {
      let s = r.split(" ").map((i) => TGe(i));
      t.push({
        chord: s,
        action: o,
        context: n.context,
      });
    }
  return t;
}
function oQr(e, t) {
  let n = [];
  if ((n.push(...p5d(e)), ZLn(e))) {
    n.push(...f5d(e));
    let o = g5d(e);
    n.push(...m5d(o));
  }
  let r = new Set();
  return n.filter((o) => {
    let s = `${o.type}:${o.key}:${o.context}`;
    if (r.has(s)) return false;
    return (r.add(s), true);
  });
}
var a5d, dqi;
