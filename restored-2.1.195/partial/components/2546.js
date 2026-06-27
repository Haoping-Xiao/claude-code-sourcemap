// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Ge
// matched 2.1.88 source: src/ink/focus.ts
// class=partial  jaccard=0.0991  score=0.7598  fileCov=0.1023
// note: low-confidence suggestion: src/ink/focus.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $Ge] deps: react/cjs/react.production.js
dbe = R(rt(), 1);
function M0(e, t, n = false) {
  _6i.useEffect(() => {
    let r = e.current;
    if (!r) return;
    let o = bne(r);
    if (!t) {
      if (n && o.activeElement === r) o.blur();
      return;
    }
    return o.focus(r), o.subscribe(() => {
      let s = e.current;
      if (!s || o.activeElement === s) return;
      if (!o.activeElement) {
        o.focus(s);
        return;
      }
      let i = s.parentNode;
      while (i) {
        if (i === o.activeElement) {
          o.focus(s);
          return;
        }
        i = i.parentNode;
      }
    });
  }, [t, e, n]);
}
var _6i;