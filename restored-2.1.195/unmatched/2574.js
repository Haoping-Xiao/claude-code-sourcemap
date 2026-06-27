// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RZr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RZr = E(() => {
  dzi();
  tk = R(rt(), 1), fzi = require("util");
});
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