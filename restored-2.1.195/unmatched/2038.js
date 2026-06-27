// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gx
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Gx = E(() => {
  Hp();
  Rc();
  oo();
  je();
  Ls();
  oje();
});
function KCn(e, t = process.argv) {
  let n;
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (o === "--") break;
    if (o?.startsWith(`${e}=`)) {
      n = o.slice(e.length + 1);
      continue;
    }
    if (o === e && r + 1 < t.length) {
      n = t[++r];
      continue;
    }
    if (o !== void 0 && uwi.has(o)) r++;
  }
  return n;
}
function dwi(e, t = process.argv) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (r === "--") break;
    if (r === e) return !0;
    if (r !== void 0 && uwi.has(r)) n++;
  }
  return !1;
}
var uwi;