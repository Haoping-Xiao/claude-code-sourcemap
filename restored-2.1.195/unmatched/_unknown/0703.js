// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module svs
// matched 2.1.88 source: node_modules/jsonc-parser/lib/esm/main.js
// class=new  jaccard=0.0404  score=1  fileCov=0.0404
// note: nearest: node_modules/jsonc-parser/lib/esm/main.js (0.0404); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function ARr(e, t, n, r) {
  return ovs(e, t, n, r);
}
function HRr(e, t) {
  let n = t.slice(0).sort((o, s) => {
      let i = o.offset - s.offset;
      if (i === 0) return o.length - s.length;
      return i;
    }),
    r = e.length;
  for (let o = n.length - 1; o >= 0; o--) {
    let s = n[o];
    if (s.offset + s.length <= r) e = Tfn(e, s);else throw Error("Overlapping edit");
    r = s.offset;
  }
  return e;
}
var ivs, avs, vfn, lvs;