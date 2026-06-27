// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ABn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ABn = E(() => {
  B5e();
});
function U5e(e, t) {
  Xut(n => {
    let r = n.get();
    if (!Array.isArray(r) || t.some((s, i) => !Object.is(s, r[i]))) N5e.queue(e);
    n.set(t);
  });
}