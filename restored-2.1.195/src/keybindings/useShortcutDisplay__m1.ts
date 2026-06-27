// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vl
// matched 2.1.88 source: src/keybindings/useShortcutDisplay.ts
// class=modified (alt of src/keybindings/useShortcutDisplay.ts)  jaccard=0.608  score=1  fileCov=0.608
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Vl = E(() => {
  si();
  fH();
  _i();
  $Ge();
  Kce();
  Tc();
  Ye();
  PUt();
  g0();
  gm();
  APn();
  xZr();
  TPn();
  uzi();
  gzi();
  ((IPn = R(lt(), 1)), (One = R(rt(), 1)), (Zl = R(se(), 1)));
});
function Uu(e, t, n) {
  let r = KE(),
    o = r?.getDisplayText(e, t),
    s = o === void 0,
    i = r ? "action_not_found" : "no_context",
    a = xPn.useRef(false);
  if (
    (xPn.useEffect(() => {
      if (s && !a.current)
        ((a.current = true),
          G("tengu_keybinding_fallback_used", {
            action: e,
            context: $e(t),
            fallback: n,
            reason: $e(i),
          }));
    }, [s, e, t, n, i]),
    s)
  )
    return n;
  return o === null ? "" : o;
}
var xPn;
