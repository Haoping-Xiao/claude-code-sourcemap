// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fzo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fzo = E(() => {
  co();
});
function rtn(e, t) {
  if (e && t && t.length > 0) return oE([...e, ...t], "name");
  return e || [];
}
function aAc(e, t) {
  return iAc.useMemo(() => rtn(e, t), [e, t]);
}
var iAc;