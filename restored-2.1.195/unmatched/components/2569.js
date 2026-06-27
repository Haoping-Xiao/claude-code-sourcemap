// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xce
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=new  jaccard=0.0563  score=0.4483  fileCov=0.0605
// note: nearest: src/components/CustomSelect/select.tsx (0.0563); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xce = E(() => {
  si();
  $Ge();
  Ye();
  IZr = R(lt(), 1), ozi = R(rt(), 1), qU = R(se(), 1);
});
function U0e(e) {
  let t = szi.c(9),
    {
      isFocused: n,
      isSelected: r,
      children: o,
      description: s,
      shouldShowDownArrow: i,
      shouldShowUpArrow: a,
      declareCursor: l,
      onClick: c
    } = e,
    u;
  if (t[0] !== o || t[1] !== l || t[2] !== s || t[3] !== n || t[4] !== r || t[5] !== c || t[6] !== i || t[7] !== a) u = izi.jsx(mH, {
    isFocused: n,
    isSelected: r,
    description: s,
    showScrollDown: i,
    showScrollUp: a,
    styled: false,
    declareCursor: l,
    onClick: c,
    children: o
  }), t[0] = o, t[1] = l, t[2] = s, t[3] = n, t[4] = r, t[5] = c, t[6] = i, t[7] = a, t[8] = u;else u = t[8];
  return u;
}
var szi, izi;