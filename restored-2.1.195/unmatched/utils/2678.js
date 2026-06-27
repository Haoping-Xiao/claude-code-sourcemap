// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xto
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xto = E(() => {
  SWe();
});
function MFt(e, t) {
  let n = e.toLowerCase();
  if (t === "*") return true;
  if (t.startsWith("*.")) {
    if (WJi.isIP(qne(n))) return false;
    let r = t.substring(2).toLowerCase();
    return n.endsWith("." + r);
  }
  return n === t.toLowerCase();
}
var WJi;