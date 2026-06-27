// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H0e
// matched 2.1.88 source: src/keybindings/defaultBindings.ts
// class=modified (alt of src/keybindings/defaultBindings.ts)  jaccard=0.0399  score=0.4307  fileCov=0.0421
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H0e] deps: @xmldom/xmldom/lib/entities.js, utils/platform.ts
E5d = {
  escape: "escape",
  return: "enter",
  tab: "tab",
  backspace: "backspace",
  delete: "delete",
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  pageup: "pageup",
  pagedown: "pagedown",
  wheelup: "wheelup",
  wheeldown: "wheeldown",
  home: "home",
  end: "end",
};
function eC(e, t, n) {
  let r = nDn(Gj),
    o = rDn(e, t, r);
  if (o === void 0) {
    let s = `${e}:${t}`;
    if (!Tqi.has(s))
      (Tqi.add(s),
        G("tengu_keybinding_fallback_used", {
          action: e,
          context: $e(t),
          fallback: n,
          reason: We("action_not_found"),
        }));
    return n;
  }
  return o === null ? "" : o;
}
var Tqi;
