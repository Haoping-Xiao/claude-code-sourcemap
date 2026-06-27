// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ztl
// matched 2.1.88 source: src/tools/GlobTool/GlobTool.ts
// class=new  jaccard=0.0342  score=0.1664  fileCov=0.0413
// note: nearest: src/tools/GlobTool/GlobTool.ts (0.0342); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ztl = E(() => {
  ql();
  co();
  E5();
  Ye();
  oc();
  es();
  gAe();
  uyt = R(se(), 1);
  Vtl = L$.renderToolResultMessage;
});
function Fef(e) {
  let t = e.filenames.length;
  if (e.totalMatches === void 0) return "(Results are truncated. Consider using a more specific path or pattern.)";
  if (e.countIsComplete) {
    let n = e.totalMatches - t;
    return `(Showing ${t} of ${e.totalMatches} matching files; ${n} more are not listed. Narrow the pattern or path to see the rest.)`;
  }
  return `(Showing the first ${t} files; there are more than ${e.totalMatches} matches. Narrow the pattern or path to see the rest.)`;
}
var Bef, Uef, Z4;