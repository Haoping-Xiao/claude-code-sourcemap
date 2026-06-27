// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cc
// matched 2.1.88 source: src/context/modalContext.tsx
// class=modified  jaccard=0.2838  score=0.6314  fileCov=0.3402
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cc] deps: N0e, Ko
((F6i = R(lt(), 1)), (j6i = R(se(), 1)));
function YE() {
  return NGe.useContext(Xj) !== null;
}
function bb(e) {
  let t = G6i.c(3),
    n = NGe.useContext(Xj),
    r;
  if (t[0] !== n || t[1] !== e)
    ((r = n
      ? {
          rows: n.rows,
          columns: n.columns,
        }
      : e),
      (t[0] = n),
      (t[1] = e),
      (t[2] = r));
  else r = t[2];
  return r;
}
function elt() {
  return NGe.useContext(Xj)?.scrollRef ?? null;
}
function bPn() {
  return NGe.useContext(Xj)?.claimScrollBox ?? null;
}
var G6i, NGe, Xj;
