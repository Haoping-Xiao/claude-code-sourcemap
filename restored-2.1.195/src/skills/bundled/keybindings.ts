// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ewc
// matched 2.1.88 source: src/skills/bundled/keybindings.ts
// class=modified  jaccard=0.6122  score=0.9109  fileCov=0.6512
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ewc = E(() => {
  YLn();
  xne();
  JLn();
  QLn();
  Jt();
  AA();
  ((bEm = {
    $schema: "https://www.schemastore.org/claude-code-keybindings.json",
    $docs: "https://code.claude.com/docs/en/keybindings",
    bindings: [
      {
        context: "Chat",
        bindings: {
          "ctrl+e": "chat:externalEditor",
        },
      },
    ],
  }),
    (SEm = {
      context: "Chat",
      bindings: {
        "ctrl+s": null,
      },
    }),
    (EEm = {
      context: "Chat",
      bindings: {
        "ctrl+g": null,
        "ctrl+e": "chat:externalEditor",
      },
    }),
    (AEm = {
      context: "Global",
      bindings: {
        "ctrl+k ctrl+t": "app:toggleTodos",
      },
    }),
    (HEm = [
      "# Keybindings Skill",
      "",
      "Create or modify `~/.claude/keybindings.json` to customize keyboard shortcuts.",
      "",
      "## CRITICAL: Read Before Write",
      "",
      "**Always read `~/.claude/keybindings.json` first** (it may not exist yet). Merge changes with existing bindings \u2014 never replace the entire file.",
      "",
      "- Use **Edit** tool for modifications to existing files",
      "- Use **Write** tool only if the file does not exist yet",
    ].join(`
`)),
    (TEm = [
      "## File Format",
      "",
      "```json",
      De(bEm, null, 2),
      "```",
      "",
      "Always include the `$schema` and `$docs` fields.",
    ].join(`
`)),
    (vEm = [
      "## Keystroke Syntax",
      "",
      "**Modifiers** (combine with `+`):",
      "- `ctrl` (alias: `control`)",
      "- `alt` (aliases: `opt`, `option`) \u2014 note: `alt` and `meta` are identical in terminals",
      "- `shift`",
      "- `meta` (aliases: `cmd`, `command`)",
      "",
      "**Special keys**: `escape`/`esc`, `enter`/`return`, `tab`, `space`, `backspace`, `delete`, `up`, `down`, `left`, `right`",
      "",
      "**Chords**: Space-separated keystrokes, e.g. `ctrl+k ctrl+s` (1-second timeout between keystrokes)",
      "",
      "**Examples**: `ctrl+shift+p`, `alt+enter`, `ctrl+k ctrl+n`",
    ].join(`
`)),
    (wEm = [
      "## Unbinding Default Shortcuts",
      "",
      "Set a key to `null` to remove its default binding:",
      "",
      "```json",
      De(SEm, null, 2),
      "```",
    ].join(`
`)),
    (CEm = [
      "## How User Bindings Interact with Defaults",
      "",
      "- User bindings are **additive** \u2014 they are appended after the default bindings",
      "- To **move** a binding to a different key: unbind the old key (`null`) AND add the new binding",
      "- A context only needs to appear in the user's file if they want to change something in that context",
    ].join(`
`)),
    (IEm = [
      "## Common Patterns",
      "",
      "### Rebind a key",
      "To change the external editor shortcut from `ctrl+g` to `ctrl+e`:",
      "```json",
      De(EEm, null, 2),
      "```",
      "",
      "### Add a chord binding",
      "```json",
      De(AEm, null, 2),
      "```",
    ].join(`
`)),
    (xEm = [
      "## Behavioral Rules",
      "",
      "1. Only include contexts the user wants to change (minimal overrides)",
      "2. Validate that actions and contexts are from the known lists below",
      "3. Warn the user proactively if they choose a key that conflicts with reserved shortcuts or common tools like tmux (`ctrl+b`) and screen (`ctrl+a`)",
      "4. When adding a new binding for an existing action, the new binding is additive (existing default still works unless explicitly unbound)",
      "5. To fully replace a default binding, unbind the old key AND add the new one",
    ].join(`
`)),
    (kEm = [
      "## Validation with /doctor",
      "",
      'The `/doctor` command includes a "Keybinding Configuration Issues" section that validates `~/.claude/keybindings.json`.',
      "",
      "### Common Issues and Fixes",
      "",
      _Ko(
        ["Issue", "Cause", "Fix"],
        [
          [
            '`keybindings.json must have a "bindings" array`',
            "Missing wrapper object",
            'Wrap bindings in `{ "bindings": [...] }`',
          ],
          [
            '`"bindings" must be an array`',
            "`bindings` is not an array",
            'Set `"bindings"` to an array: `[{ context: ..., bindings: ... }]`',
          ],
          [
            '`Unknown context "X"`',
            "Typo or invalid context name",
            "Use exact context names from the Available Contexts table",
          ],
          [
            '`Duplicate key "X" in Y bindings`',
            "Same key defined twice in one context",
            "Remove the duplicate; JSON uses only the last value",
          ],
          [
            '`"X" may not work: ...`',
            "Key conflicts with terminal/OS reserved shortcut",
            "Choose a different key (see Reserved Shortcuts section)",
          ],
          [
            '`Could not parse keystroke "X"`',
            "Invalid key syntax",
            "Check syntax: use `+` between modifiers, valid key names",
          ],
          [
            '`Invalid action for "X"`',
            "Action value is not a string or null",
            'Actions must be strings like `"app:help"` or `null` to unbind',
          ],
        ],
      ),
      "",
      "### Example /doctor Output",
      "",
      "```",
      "Keybinding Configuration Issues",
      "Location: ~/.claude/keybindings.json",
      '  \u2514 [Error] Unknown context "chat"',
      "    \u2192 Valid contexts: Global, Chat, Autocomplete, ...",
      '  \u2514 [Warning] "ctrl+c" may not work: Terminal interrupt (SIGINT)',
      "```",
      "",
      "**Errors** prevent bindings from working and must be fixed. **Warnings** indicate potential conflicts but the binding may still work.",
    ].join(`
`)));
});
function nwc(e) {
  let t = 0,
    n = "";
  while (t < e) {
    let r = 10 + Math.floor(Math.random() * 11),
      o = 0;
    for (let s = 0; s < r && t < e; s++) {
      let i = twc[Math.floor(Math.random() * twc.length)];
      if (((n += i), t++, o++, s === r - 1 || t >= e)) n += ". ";
      else n += " ";
    }
    if (o > 0 && Math.random() < 0.2 && t < e)
      n += `

`;
  }
  return n.trim();
}
function rwc() {
  return;
}
var twc;
