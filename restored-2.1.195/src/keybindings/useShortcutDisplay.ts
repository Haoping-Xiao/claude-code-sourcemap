// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vl
// matched 2.1.88 source: src/keybindings/useShortcutDisplay.ts
// class=modified  jaccard=0.6551  score=1  fileCov=0.6551
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vl] deps: @xmldom/xmldom/lib/entities.js, react/cjs/react.production.js, components/design-system/Ratchet.tsx, ink/focus.ts, components/Settings/Config.tsx, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, components/design-system/StatusIcon.tsx, utils/format.ts, undici/lib/mock/mock-agent.js, components/ClickableImageRef.tsx, components/CustomSelect/select.tsx, components/CustomSelect/select-input-option.tsx, uzi, components/CustomSelect/select.tsx
((IPn = R(lt(), 1)), (One = R(rt(), 1)), (Zl = R(se(), 1)));
function useShortcutDisplay(action, context, fallback) {
  let r = KE(),
    o = r?.getDisplayText(action, context),
    s = o === void 0,
    i = r ? "action_not_found" : "no_context",
    a = xPn.useRef(false);
  if (
    (xPn.useEffect(() => {
      if (s && !a.current)
        ((a.current = true),
          G("tengu_keybinding_fallback_used", {
            action: action,
            context: $e(context),
            fallback: fallback,
            reason: $e(i),
          }));
    }, [s, action, context, fallback, i]),
    s)
  )
    return fallback;
  return o === null ? "" : o;
}
var xPn;
