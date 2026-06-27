// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P5i
// matched 2.1.88 source: src/ink/dom.ts
// class=new  jaccard=0.0484  score=1  fileCov=0.0484
// note: nearest: src/ink/dom.ts (0.0484); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P5i = E(() => {
  Tne();
  L5i = R(lt(), 1), D5i = R(se(), 1);
});
function gat(e) {
  let t = M5i.c(6),
    {
      lines: n,
      width: r
    } = e;
  if (n.length === 0) return null;
  let o;
  if (t[0] !== n) o = n.join(`
`), t[0] = n, t[1] = o;else o = t[1];
  let s;
  if (t[2] !== n.length || t[3] !== o || t[4] !== r) s = $5i.jsx("ink-raw-ansi", {
    rawText: o,
    rawWidth: r,
    rawHeight: n.length
  }), t[2] = n.length, t[3] = o, t[4] = r, t[5] = s;else s = t[5];
  return s;
}
var M5i, $5i;