// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dfn
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dfn = E(() => {
  ((HTs = require("fs/promises")), (TTs = require("path")));
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
