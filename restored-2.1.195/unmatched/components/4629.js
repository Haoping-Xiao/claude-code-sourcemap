// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module utr
// matched 2.1.88 source: src/keybindings/validate.ts
// class=new  jaccard=0.0208  score=0.6323  fileCov=0.0211
// note: nearest: src/keybindings/validate.ts (0.0208); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module utr] deps: commander/lib/command.js, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, components/PromptInput/PromptInput.tsx, utils/suggestions/directoryCompletion.ts, nk, context/notifications.tsx, utils/systemTheme.ts, utils/gracefulShutdown.ts, utils/settings/settings.ts, components/ThemePicker.tsx, components/CustomSelect/select.tsx, components/FileEditToolDiff.tsx, components/ConfigurableShortcutHint.tsx, components/StructuredDiff/Fallback.tsx, components/StructuredDiff.tsx
xMl = R(lt(), 1), kMl = R(rt(), 1), gE = R(se(), 1);
function GRf() {
  let e = x0()?.model_notices;
  if (typeof e !== "object" || e === null || Array.isArray(e)) return {};
  let t = {};
  for (let [n, r] of Object.entries(e)) if (n.trim().length > 0 && typeof r === "string" && r.length > 0) t[n] = r;
  return t;
}
function RMl(e) {
  let t = GRf();
  if (Object.keys(t).length === 0) return;
  let n = e.toLowerCase(),
    r = zo(e).toLowerCase(),
    o = mo(r).toLowerCase();
  for (let [s, i] of Object.entries(t)) {
    let a = s.toLowerCase();
    if (a === n || a === r || a === o || r.includes(a)) return i;
  }
  return;
}