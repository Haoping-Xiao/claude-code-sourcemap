// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G5i
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var G5i = E(() => {
  l0e();
  Ine = R(rt(), 1);
});
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
      return !1;
    },
    focus: r => e?.focus(r),
    blur: () => e?.blur(),
    subscribe: e?.subscribe ?? W5i
  }), [n, e, t]);
}
var hat,
  W5i = () => () => {};