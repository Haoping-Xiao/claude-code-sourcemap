// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S9
// matched 2.1.88 source: src/utils/crypto.ts
// class=unchanged (alt of src/utils/crypto.ts)  jaccard=1  score=1  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var S9 = E(() => {
  Rc();
  fn();
  ((U7s = require("crypto")), (ZSn = require("os")), (F7s = require("path")));
  Pld = /^[a-zA-Z0-9._-]+$/;
  sle = {
    cache: {
      data: null,
      cachedAt: 0,
    },
    generation: 0,
    readInFlight: null,
  };
});
async function G7s() {}
function KB(e) {
  return e.slice(-20);
}
