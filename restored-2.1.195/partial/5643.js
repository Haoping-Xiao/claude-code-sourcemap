// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qvc
// matched 2.1.88 source: src/skills/bundled/keybindings.ts
// class=partial  jaccard=0.2359  score=0.9574  fileCov=0.2384
// note: low-confidence suggestion: src/skills/bundled/keybindings.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qvc = E(() => {
  AA();
});
function gEm() {
  return _Ko(["Context", "Description"], Cat.map(e => [`\`${e}\``, uqi[e]]));
}
function hEm() {
  let e = {};
  for (let t of wat) for (let [n, r] of Object.entries(t.bindings)) if (r) {
    if (!e[r]) e[r] = {
      keys: [],
      context: t.context
    };
    e[r].keys.push(n);
  }
  return _Ko(["Action", "Default Key(s)", "Context"], nQr.map(t => {
    let n = e[t],
      r = n ? n.keys.map(s => `\`${s}\``).join(", ") : "(none)",
      o = n ? n.context : yEm(t);
    return [`\`${t}\``, r, o];
  }));
}
function yEm(e) {
  let t = e.split(":")[0];
  return {
    app: "Global",
    history: "Global or Chat",
    chat: "Chat",
    autocomplete: "Autocomplete",
    confirm: "Confirmation",
    tabs: "Tabs",
    transcript: "Transcript",
    historySearch: "HistorySearch",
    task: "Task",
    theme: "ThemePicker",
    help: "Help",
    attachments: "Attachments",
    footer: "Footer",
    messageSelector: "MessageSelector",
    diff: "DiffDialog",
    modelPicker: "ModelPicker",
    select: "Select",
    permission: "Confirmation"
  }[t ?? ""] ?? "Unknown";
}
function _Em() {
  let e = [];
  e.push("### Non-rebindable (errors)");
  for (let t of aUt) e.push(`- \`${t.key}\` \u2014 ${t.reason}`);
  e.push(""), e.push("### Terminal reserved (errors/warnings)");
  for (let t of eQr) e.push(`- \`${t.key}\` \u2014 ${t.reason} (${t.severity === "error" ? "will not work" : "may conflict"})`);
  e.push(""), e.push("### macOS reserved (errors)");
  for (let t of tQr) e.push(`- \`${t.key}\` \u2014 ${t.reason}`);
  return e.join(`
`);
}
function Zvc() {
  Nd({
    name: "keybindings-help",
    description: 'Use when the user wants to customize keyboard shortcuts, rebind keys, add chord bindings, or modify ~/.claude/keybindings.json. Examples: "rebind ctrl+s", "add a chord shortcut", "change the submit key", "customize keybindings".',
    allowedTools: ["Read"],
    userInvocable: !1,
    isEnabled: E8,
    async getPromptForCommand(e) {
      let t = gEm(),
        n = hEm(),
        r = _Em(),
        o = [HEm, TEm, vEm, wEm, CEm, IEm, xEm, kEm, `## Reserved Shortcuts

${r}`, `## Available Contexts

${t}`, `## Available Actions

${n}`];
      if (e) o.push(`## User Request

${e}`);
      return [{
        type: "text",
        text: o.join(`

`)
      }];
    }
  });
}
function _Ko(e, t) {
  let n = e.map(() => "---");
  return [`| ${e.join(" | ")} |`, `| ${n.join(" | ")} |`, ...t.map(r => `| ${r.join(" | ")} |`)].join(`
`);
}
var bEm, SEm, EEm, AEm, HEm, TEm, vEm, wEm, CEm, IEm, xEm, kEm;