// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mg
// matched 2.1.88 source: src/components/ScrollKeybindingHandler.tsx
// class=modified (alt of src/components/ScrollKeybindingHandler.tsx)  jaccard=0.077  score=0.4426  fileCov=0.0853
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mg] deps: @mixmark-io/domino/lib/Document.js, state/AppState.tsx, projectOnboardingState.ts, marked/lib/marked.esm.js, hooks/renderPlaceholder.ts, ink/terminal.ts, hooks/useTerminalSize.ts, components/design-system/color.ts, components/TextInput.tsx
((I6i = R(rt(), 1)), (bZr = R(se(), 1)));
function x6i(key) {
  let t = z6d[key.name],
    n = {
      upArrow: t === "upArrow",
      downArrow: t === "downArrow",
      leftArrow: t === "leftArrow",
      rightArrow: t === "rightArrow",
      pageDown: t === "pageDown",
      pageUp: t === "pageUp",
      wheelUp: false,
      wheelDown: false,
      home: t === "home",
      end: t === "end",
      return: t === "return",
      escape: t === "escape",
      tab: t === "tab",
      backspace: t === "backspace",
      delete: t === "delete",
      ctrl: key.ctrl,
      shift: key.shift,
      super: key.superKey,
      meta: key.meta,
    };
  return {
    input:
      key.name === "enter"
        ? `
`
        : [...key.key].length === 1
          ? key.key
          : "",
    key: n,
  };
}
function k6i(e, key) {
  let n = "";
  if (key.escape) n = "escape";
  else if (key.return) n = "return";
  else if (key.tab) n = "tab";
  else if (key.backspace) n = "backspace";
  else if (key.delete) n = "delete";
  else if (key.upArrow) n = "up";
  else if (key.downArrow) n = "down";
  else if (key.leftArrow) n = "left";
  else if (key.rightArrow) n = "right";
  else if (key.pageUp) n = "pageup";
  else if (key.pageDown) n = "pagedown";
  else if (key.wheelUp) n = "wheelup";
  else if (key.wheelDown) n = "wheeldown";
  else if (key.home) n = "home";
  else if (key.end) n = "end";
  else if (
    e ===
    `
`
  )
    n = "enter";
  return {
    name: n,
    key: e,
    ctrl: key.ctrl,
    shift: key.shift,
    meta: key.meta,
    superKey: key.super,
  };
}
var z6d;
