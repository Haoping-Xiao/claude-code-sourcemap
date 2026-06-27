// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vi
// matched 2.1.88 source: src/components/design-system/Dialog.tsx
// class=partial  jaccard=0.175  score=0.5708  fileCov=0.2016
// note: low-confidence suggestion: src/components/design-system/Dialog.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vi] deps: react/cjs/react.production.js, commander/lib/command.js, screens/REPL.tsx, hooks/useTerminalSize.ts, ink/components/ScrollBox.tsx, components/PromptInput/PromptInput.tsx, context/modalContext.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx
Pzi = R(lt(), 1), hbe = R(rt(), 1), N0 = R(se(), 1), Dzi = N0.jsxs(Tn, {
  children: [N0.jsx(ht, {
    chord: "enter",
    action: "confirm"
  }), N0.jsx(mr, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: "cancel"
  })]
});
function Va(e) {
  let t = Mzi.c(4),
    {
      error: n
    } = e;
  if (!n) return null;
  let r;
  if (t[0] !== n) r = be(n), t[0] = n, t[1] = r;else r = t[1];
  let o;
  if (t[2] !== r) o = $zi.jsx(w, {
    color: "error",
    children: r
  }), t[2] = r, t[3] = o;else o = t[3];
  return o;
}
var Mzi, $zi;