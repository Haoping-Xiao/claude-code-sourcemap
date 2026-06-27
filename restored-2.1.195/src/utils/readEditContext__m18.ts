// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $3o
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $3o = E(() => {
  fn();
  jS();
  Jt();
  FZl = require("fs/promises");
});
async function qZl(e, t = {}) {
  let n = FS(e);
  if (!n) return;
  let r = await rCe(n, t.dir);
  if (!r) return;
  let o = await Wpn(r.filePath);
  if (!o) return;
  return fbt(n, o, r.projectPath) ?? void 0;
}
