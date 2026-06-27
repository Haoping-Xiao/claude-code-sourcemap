// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Phi
// matched 2.1.88 source: src/utils/crypto.ts
// class=unchanged (alt of src/utils/crypto.ts)  jaccard=1  score=1  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Phi = E(() => {
  ((Dhi = require("crypto")),
    (zWr = {
      randomUUID: Dhi.randomUUID,
    }));
});
function KWr() {
  if (Lvn > Dvn.length - 16) (Mhi.randomFillSync(Dvn), (Lvn = 0));
  return Dvn.slice(Lvn, (Lvn += 16));
}
var Mhi, Dvn, Lvn;
