// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dfn
// matched 2.1.88 source: src/utils/git/gitFilesystem.ts
// class=new  jaccard=0.0182  score=1  fileCov=0.0182
// note: nearest: src/utils/git/gitFilesystem.ts (0.0182); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dfn = E(() => {
  HTs = require("fs/promises"), TTs = require("path");
});
function hRt(e, t, n) {
  let r = (o, s) => {
    try {
      n(o, s);
    } catch (i) {
      ke(i);
    }
  };
  try {
    vTs.watchFile(e, t, r);
  } catch (o) {
    ke(o);
  }
  return r;
}
var vTs;