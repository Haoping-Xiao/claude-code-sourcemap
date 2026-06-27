// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ye
// matched 2.1.88 source: src/hooks/useTerminalSize.ts
// class=modified  jaccard=0.5429  score=1  fileCov=0.5429
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ye] deps: components/design-system/ThemeProvider.tsx, ink/terminal.ts, components/design-system/color.ts, ink/render-border.ts, components/design-system/ThemedText.tsx, components/shell/ExpandShellOutputContext.tsx, components/design-system/ThemeProvider.tsx, ink/Ansi.tsx, ink/Ansi.tsx, ink/hooks/use-stdin.ts, components/CustomSelect/select.tsx, ink/termio/types.ts, ink/styles.ts, sharp/lib/input.js, ink/components/Text.tsx, ink/hooks/use-terminal-viewport.ts, stack-utils/index.js, ink/hit-test.ts, ink/events/emitter.ts, @mixmark-io/domino/lib/NodeList.es6.js, ink/styles.ts, ink/hooks/use-stdin.ts, react/cjs/react.production.js, ink/components/Box.tsx, ink/ink.tsx, components/VirtualMessageList.tsx, screens/REPL.tsx, ink/hooks/use-selection.ts, components/ConfigurableShortcutHint.tsx, react/cjs/react.production.js, readdirp/esm/index.js, ink/hooks/use-tab-status.ts, ink/components/ClockContext.tsx, react/cjs/react.production.js, components/VirtualMessageList.tsx, ink/measure-element.ts, screens/REPL.tsx, utils/env.ts, ink/dom.ts
z5i = R(rt(), 1);
function useTerminalSize() {
  let e = K5i.useContext(Dce);
  if (!e) throw Error("useTerminalSize must be used within an Ink App component");
  return e;
}
var K5i;
