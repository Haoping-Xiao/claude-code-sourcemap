// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TZr
// matched 2.1.88 source: src/keybindings/useShortcutDisplay.ts
// class=modified (alt of src/keybindings/useShortcutDisplay.ts)  jaccard=0.5362  score=0.895  fileCov=0.5722
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TZr] deps: lru-cache/dist/esm/index.js, utils/fsOperations.ts, utils/fsOperations.ts, utils/file.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/debug.ts
((iX = require("path")),
  (D6i = new bG({
    max: M6i,
    ttl: $6i,
  })),
  (P6i = new bG({
    max: M6i,
    ttl: $6i,
  })));
function useShortcutDisplay(action, context, fallback) {
  let r = KE(),
    o = r ? uQr(action, context, r.bindings) : void 0,
    s = o === void 0,
    i = r ? "action_not_found" : "no_context",
    a = gPn.useRef(false);
  if (
    (gPn.useEffect(() => {
      if (s && !a.current)
        ((a.current = true),
          G("tengu_keybinding_fallback_used", {
            action: action,
            context: $e(context),
            fallback: fallback,
            reason: $e(i),
          }));
    }, [s, action, context, fallback, i]),
    o === void 0)
  )
    return fallback;
  return o === null ? "" : nX(o);
}
var gPn;
