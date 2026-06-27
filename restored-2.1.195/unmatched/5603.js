// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gTc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gTc = E(() => {
  id();
  BI();
  Kv();
  Ld();
  aE();
  jur();
  Rpr = R(rt(), 1);
});
function yTc(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_./\s]+/).map(t => t.trim()).filter(t => t.length > 2 && t.length <= 20);
}
function _bm(e) {
  let t = pKo.basename(e).replace(/\.[^.]+$/, "");
  return yTc(t);
}
async function fKo(e) {
  let t = new Set(ybm);
  try {
    let n = rc();
    if (n) {
      let r = pKo.basename(n);
      if (r.length > 2 && r.length <= 50) t.add(r);
    }
  } catch {}
  try {
    let n = await ub();
    if (n) for (let r of yTc(n)) t.add(r);
  } catch {}
  if (e) for (let n of e) {
    if (t.size >= hTc) break;
    for (let r of _bm(n)) t.add(r);
  }
  return [...t].slice(0, hTc);
}
var pKo,
  ybm,
  hTc = 50;