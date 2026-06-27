// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C1o
// matched 2.1.88 source: src/types/textInputTypes.ts
// class=partial  jaccard=0.0712  score=1  fileCov=0.0712
// note: low-confidence suggestion: src/types/textInputTypes.ts; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var C1o = E(() => {
  MGe();
  m0();
  sr();
  A1o();
});
function I1o(e) {
  return e in wtr;
}
function x1o(e) {
  return e in xtr;
}
function I$l() {
  return {
    mode: "INSERT",
    insertedText: ""
  };
}
function x$l() {
  return {
    lastChange: null,
    lastFind: null,
    register: "",
    registerIsLinewise: false
  };
}
var wtr,
  Ctr,
  Itr,
  xtr,
  k1o,
  ktr = 10000 /* 1e4 */;