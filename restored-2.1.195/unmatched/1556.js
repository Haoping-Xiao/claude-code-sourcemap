// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cui = Q(RHn => {
  Object.defineProperty(RHn, "__esModule", {
    value: !0
  });
  RHn.numToUint8 = void 0;
  function smd(e) {
    return new Uint8Array([(e & 4278190080) >> 24, (e & 16711680) >> 16, (e & 65280) >> 8, e & 255]);
  }
  RHn.numToUint8 = smd;
});