// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mg
// matched 2.1.88 source: src/components/ScrollKeybindingHandler.tsx
// class=modified (alt of src/components/ScrollKeybindingHandler.tsx)  jaccard=0.077  score=0.4426  fileCov=0.0853
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mg] deps: iu, nbe, WQr, mZr, lPn, p8, Ye, _Ge, _Zr
((I6i = R(rt(), 1)), (bZr = R(se(), 1)));
function x6i(e) {
  let t = z6d[e.name],
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
      ctrl: e.ctrl,
      shift: e.shift,
      super: e.superKey,
      meta: e.meta,
    };
  return {
    input:
      e.name === "enter"
        ? `
`
        : [...e.key].length === 1
          ? e.key
          : "",
    key: n,
  };
}
function k6i(e, t) {
  let n = "";
  if (t.escape) n = "escape";
  else if (t.return) n = "return";
  else if (t.tab) n = "tab";
  else if (t.backspace) n = "backspace";
  else if (t.delete) n = "delete";
  else if (t.upArrow) n = "up";
  else if (t.downArrow) n = "down";
  else if (t.leftArrow) n = "left";
  else if (t.rightArrow) n = "right";
  else if (t.pageUp) n = "pageup";
  else if (t.pageDown) n = "pagedown";
  else if (t.wheelUp) n = "wheelup";
  else if (t.wheelDown) n = "wheeldown";
  else if (t.home) n = "home";
  else if (t.end) n = "end";
  else if (
    e ===
    `
`
  )
    n = "enter";
  return {
    name: n,
    key: e,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super,
  };
}
var z6d;
