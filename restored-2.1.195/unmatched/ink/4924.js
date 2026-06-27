// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wql
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wql = E(() => {
  ZS();
  OM();
  q7();
  sr();
});
function Mor(e, t, n) {
  let r = e.width,
    o = n * r,
    s = -1;
  for (let c = r - 1; c >= 0; c--) {
    let u = X7(e, o + c);
    if (u.width === 2) continue;
    if (u.char === " " && (u.styleId & 1) === 0 && u.hyperlink === void 0) continue;
    s = c;
    break;
  }
  if (s < 0) return "";
  let i = "",
    a = t.none,
    l;
  for (let c = 0; c <= s; c++) {
    let u = X7(e, o + c);
    if (u.width === 2 || u.width === 3) continue;
    if (u.hyperlink !== l) {
      if (l !== void 0) i += J3e;
      if (u.hyperlink !== void 0) i += Hit(u.hyperlink);
      l = u.hyperlink;
    }
    i += t.transition(a, u.styleId), a = u.styleId, i += u.char;
  }
  if (l !== void 0) i += J3e;
  if (a !== t.none) i += P3f;
  return i;
}
var P3f = "\x1B[0m";