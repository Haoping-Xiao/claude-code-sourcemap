// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iwl
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var iwl = E(() => {
  iit();
  LDo();
  ((owl = require("fs/promises")), (TKt = require("path")));
});
function uwl() {
  cwl = !0;
  for (let e of DDo) e();
  DDo = [];
}
async function dwl(e) {
  if (cwl || lwl) return;
  if (!process.env.CLAUDE_MEMORY_STORES?.trim()) return;
  if (!DJn)
    ((DJn = Promise.race([new Promise((t) => DDo.push(t)), Nn(awl)])),
      DJn.then(() => {
        lwl = !0;
      }));
  await Promise.race([DJn, Nn(awl, e)]);
}
var awl = 2500,
  cwl = !1,
  DJn = null,
  lwl = !1,
  DDo;
