// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vl
// matched 2.1.88 source: src/keybindings/useShortcutDisplay.ts
// class=modified  jaccard=0.6551  score=1  fileCov=0.6551
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vl] deps: si, fH, _i, $Ge, Kce, Tc, Ye, PUt, g0, gm, APn, xZr, TPn, uzi, gzi
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
