// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JLn
// matched 2.1.88 source: src/keybindings/reservedShortcuts.ts
// class=modified  jaccard=0.6435  score=0.7134  fileCov=0.8678
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var JLn = E(() => {
  Is();
  ((aUt = [
    {
      key: "ctrl+c",
      reason: "Cannot be rebound - used for interrupt/exit (hardcoded)",
      severity: "error",
    },
    {
      key: "ctrl+d",
      reason: "Cannot be rebound - used for exit (hardcoded)",
      severity: "error",
    },
    {
      key: "ctrl+m",
      reason: "Cannot be rebound - identical to Enter in terminals (both send CR)",
      severity: "error",
    },
    {
      key: "capslock",
      reason: "Caps Lock is not delivered to terminal applications",
      severity: "error",
    },
  ]),
    (eQr = [
      {
        key: "ctrl+z",
        reason: "Unix process suspend (SIGTSTP)",
        severity: "warning",
      },
      {
        key: "ctrl+\\",
        reason: "Terminal quit signal (SIGQUIT)",
        severity: "error",
      },
    ]),
    (tQr = [
      {
        key: "cmd+c",
        reason: "macOS system copy",
        severity: "error",
      },
      {
        key: "cmd+v",
        reason: "macOS system paste",
        severity: "error",
      },
      {
        key: "cmd+x",
        reason: "macOS system cut",
        severity: "error",
      },
      {
        key: "cmd+q",
        reason: "macOS quit application",
        severity: "error",
      },
      {
        key: "cmd+w",
        reason: "macOS close window/tab",
        severity: "error",
      },
      {
        key: "cmd+tab",
        reason: "macOS app switcher",
        severity: "error",
      },
      {
        key: "cmd+space",
        reason: "macOS Spotlight",
        severity: "error",
      },
    ]));
  r5d = {
    esc: "escape",
    return: "enter",
    del: "delete",
    "\u2191": "up",
    "\u2193": "down",
    "\u2190": "left",
    "\u2192": "right",
    caps: "capslock",
    "caps-lock": "capslock",
    caps_lock: "capslock",
  };
});
function cqi(e) {
  return s5d.has(e);
}
var Cat, s5d, uqi, nQr, i5d, jry;
