// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C1o
// matched 2.1.88 source: src/vim/types.ts
// class=partial  jaccard=0.205  score=1  fileCov=0.205
// note: low-confidence suggestion: src/vim/types.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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