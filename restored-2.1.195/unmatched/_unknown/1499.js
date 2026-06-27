// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rii = Q(dHn => {
  Object.defineProperty(dHn, "__esModule", {
    value: true
  });
  dHn.numToUint8 = void 0;
  function Ufd(e) {
    return new Uint8Array([(e & 4278190080) >> 24, (e & 16711680) >> 16, (e & 65280) >> 8, e & 255]);
  }
  dHn.numToUint8 = Ufd;
});