// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pXr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pXr = E(() => {
  dXr();
});
function s3i(e) {
  let t = [],
    n = [];
  for (let r of e) if (r.type === "ansi") t = JRn(t, [r]);else if (r.type === "char") n.push({
    ...r,
    styles: [...t]
  });
  return n;
}