// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ger
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0019  score=0.6549  fileCov=0.0019
// note: nearest: src/screens/REPL.tsx (0.0019); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ger = E(() => {
  ft();
  ag();
  kt();
  fb();
  BI();
  S_();
  $S();
  h6();
  je();
  sp();
  vn();
  KI();
  _$();
  y_();
  _Le();
  _a();
  mVe();
  bH();
  aR();
  rKe();
  QDl = require("crypto");
});
var tPl = {};
_t(tPl, {
  call: () => call
});
var call = async (e, t) => {
  let n = e.trim() || void 0;
  for await (let r of r7t({
    ...t,
    clearedSessionTitle: n
  })) t.onQueryEvent?.(r);
  return {
    type: "text",
    value: ""
  };
};