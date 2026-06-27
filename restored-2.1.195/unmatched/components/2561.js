// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cc = E(() => {
  N0e();
  Ko();
  F6i = R(lt(), 1), j6i = R(se(), 1);
});
function YE() {
  return NGe.useContext(Xj) !== null;
}
function bb(e) {
  let t = G6i.c(3),
    n = NGe.useContext(Xj),
    r;
  if (t[0] !== n || t[1] !== e) r = n ? {
    rows: n.rows,
    columns: n.columns
  } : e, t[0] = n, t[1] = e, t[2] = r;else r = t[2];
  return r;
}
function elt() {
  return NGe.useContext(Xj)?.scrollRef ?? null;
}
function bPn() {
  return NGe.useContext(Xj)?.claimScrollBox ?? null;
}
var G6i, NGe, Xj;