// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TZr
// matched 2.1.88 source: src/keybindings/useShortcutDisplay.ts
// class=modified (alt of src/keybindings/useShortcutDisplay.ts)  jaccard=0.5362  score=0.895  fileCov=0.5722
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TZr] deps: YZe, Lo, ys, Hu, id, je
((iX = require("path")),
  (D6i = new bG({
    max: M6i,
    ttl: $6i,
  })),
  (P6i = new bG({
    max: M6i,
    ttl: $6i,
  })));
function $0(e, t, n) {
  let r = KE(),
    o = r ? uQr(e, t, r.bindings) : void 0,
    s = o === void 0,
    i = r ? "action_not_found" : "no_context",
    a = gPn.useRef(false);
  if (
    (gPn.useEffect(() => {
      if (s && !a.current)
        ((a.current = true),
          G("tengu_keybinding_fallback_used", {
            action: e,
            context: $e(t),
            fallback: n,
            reason: $e(i),
          }));
    }, [s, e, t, n, i]),
    o === void 0)
  )
    return n;
  return o === null ? "" : nX(o);
}
var gPn;
