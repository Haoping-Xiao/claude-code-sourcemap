// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZGi
// matched 2.1.88 source: src/ink/dom.ts
// class=new  jaccard=0.0484  score=1  fileCov=0.0484
// note: nearest: src/ink/dom.ts (0.0484); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZGi = E(() => {
  lJr();
  K_e();
});
function eWi(e) {
  if (!e) return 0;
  let t = 0,
    n = TGd;
  n.length = 0, n.push(e);
  while (n.length > 0) {
    let r = n.pop();
    if (t++, r.alternate) t++;
    if (r.sibling) n.push(r.sibling);
    if (r.child) n.push(r.child);
  }
  return n.length = 0, t;
}
function tWi(e) {
  if (!e) return 0;
  let t = 0,
    n = vGd;
  n.length = 0, n.push(e);
  while (n.length > 0) {
    let r = n.pop();
    if (t++, "childNodes" in r) {
      let o = r.childNodes;
      for (let s = 0; s < o.length; s++) n.push(o[s]);
    }
  }
  return n.length = 0, t;
}
var TGd, vGd;