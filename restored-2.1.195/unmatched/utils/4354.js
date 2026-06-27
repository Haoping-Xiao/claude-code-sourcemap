// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GF
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GF = E(() => {
  Ld();
  t1t();
});
function Dk(e, t) {
  return {
    name: e,
    compute: t,
    cacheBreak: false
  };
}
async function mbl(e) {
  let t = $Ct();
  return Promise.all(e.map(async n => {
    if (!n.cacheBreak && t.has(n.name)) return t.get(n.name) ?? null;
    let r = await n.compute();
    return rSr(n.name, r), r;
  }));
}
function k$e() {
  OCt(), UCt();
}