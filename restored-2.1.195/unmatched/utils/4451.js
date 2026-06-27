// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iwl
// matched 2.1.88 source: src/utils/readFileInRange.ts
// class=new  jaccard=0.017  score=0.43  fileCov=0.0174
// note: nearest: src/utils/readFileInRange.ts (0.017); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iwl = E(() => {
  iit();
  LDo();
  owl = require("fs/promises"), TKt = require("path");
});
function uwl() {
  cwl = true;
  for (let e of DDo) e();
  DDo = [];
}
async function dwl(e) {
  if (cwl || lwl) return;
  if (!process.env.CLAUDE_MEMORY_STORES?.trim()) return;
  if (!DJn) DJn = Promise.race([new Promise(t => DDo.push(t)), Nn(awl)]), DJn.then(() => {
    lwl = true;
  });
  await Promise.race([DJn, Nn(awl, e)]);
}
var awl = 2500,
  cwl = false,
  DJn = null,
  lwl = false,
  DDo;