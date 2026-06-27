// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G5i
// matched 2.1.88 source: src/ink/ink.tsx
// class=new  jaccard=0.0169  score=0.6041  fileCov=0.0171
// note: nearest: src/ink/ink.tsx (0.0169); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module G5i] deps: components/shell/ExpandShellOutputContext.tsx
Ine = R(rt(), 1);
function yat() {
  let {
      focusManager: e,
      rootNode: t
    } = hat.useContext(J7),
    n = hat.useSyncExternalStore(e?.subscribe ?? W5i, () => e?.activeElement ?? null);
  return hat.useMemo(() => ({
    activeElement: n,
    focusNext: () => {
      if (e && t) e.focusNext(t);
    },
    focusPrevious: () => {
      if (e && t) e.focusPrevious(t);
    },
    focusDirection: r => {
      if (e && t) return e.focusDirection(r, t);
      return false;
    },
    focus: r => e?.focus(r),
    blur: () => e?.blur(),
    subscribe: e?.subscribe ?? W5i
  }), [n, e, t]);
}
var hat,
  W5i = () => () => {};