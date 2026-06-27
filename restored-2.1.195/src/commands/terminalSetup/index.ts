// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I6l
// matched 2.1.88 source: src/commands/terminalSetup/index.ts
// class=modified  jaccard=0.378  score=0.4605  fileCov=0.6783
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module I6l] deps: main.tsx
((C6l = {
  ghostty: "Ghostty",
  kitty: "Kitty",
  WarpTerminal: "Warp",
  WezTerm: "WezTerm",
  "windows-terminal": "Windows Terminal",
}),
  (eqf = {
    type: "local-jsx",
    name: "terminal-setup",
    get description() {
      if (Oe.terminal === "Apple_Terminal")
        return "Enable Option+Enter key binding for newlines and visual bell";
      if (Oe.terminal !== null && Object.hasOwn(C6l, Oe.terminal))
        return `Check terminal setup (Shift+Enter is natively supported in ${C6l[Oe.terminal]})`;
      if (
        process.env.__CFBundleIdentifier === "com.googlecode.iterm2" &&
        (Oe.terminal === "iTerm.app" ||
          Oe.terminal === "tmux" ||
          Oe.terminal === "screen" ||
          Oe.terminal === null)
      )
        return "Enable iTerm2 clipboard access for /copy";
      return "Install Shift+Enter key binding for newlines";
    },
    requires: {
      ink: true,
    },
    load: () => Promise.resolve().then(() => (R0e(), P8i)),
  }),
  (wjo = eqf));
var k6l,
  call = async (e, t, n, r) =>
    k6l.jsx(WOe, {
      onClose: e,
      context: t,
      defaultTab: r === "stats" ? "Stats" : "Usage",
    });
