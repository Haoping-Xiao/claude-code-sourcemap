// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RZr
// matched 2.1.88 source: src/components/CustomSelect/use-multi-select-state.ts
// class=partial  jaccard=0.0894  score=0.489  fileCov=0.0986
// note: low-confidence suggestion: src/components/CustomSelect/use-multi-select-state.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module RZr] deps: components/CustomSelect/use-select-navigation.ts
tk = R(rt(), 1), fzi = require("util");
function mzi({
  visibleOptionCount: e = 5,
  options: t,
  defaultValue: n,
  onChange: r,
  onCancel: o,
  onFocus: s,
  focusValue: i
}) {
  let [a, l] = CPn.useState(n),
    c = wPn({
      visibleOptionCount: e,
      options: t,
      initialFocusValue: void 0,
      onFocus: s,
      focusValue: i
    }),
    u = CPn.useCallback(() => {
      l(c.focusedValue);
    }, [c.focusedValue]);
  return {
    ...c,
    value: a,
    selectFocusedOption: u,
    onChange: r,
    onCancel: o
  };
}
var CPn;