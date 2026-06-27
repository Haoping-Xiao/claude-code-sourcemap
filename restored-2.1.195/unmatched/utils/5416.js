// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P8o
// matched 2.1.88 source: src/cli/transports/ccrClient.ts
// class=new  jaccard=0.0205  score=0.5848  fileCov=0.0208
// note: nearest: src/cli/transports/ccrClient.ts (0.0205); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P8o = E(() => {
  Tnt();
  dn();
  kt();
  je();
  Mm();
  At();
  Mh();
  aze();
  kM();
  Jt();
  _gc();
  Sgc();
  D8o = require("crypto");
  _Ne = class _Ne extends Error {
    reason;
    httpStatus;
    constructor(e, t) {
      super(`CCRClient init failed: ${e}`);
      this.reason = e;
      this.httpStatus = t;
    }
  };
});
function _um() {
  return !0;
}
function bum(e) {
  let t = e.pathname;
  if (t.endsWith("/stream")) t = t.slice(0, -7);
  return `${e.protocol}//${e.host}${t}`;
}
var pum = 1000,
  fum = 30000,
  Tgc = 45000,
  mum,
  pen = 10,
  gum = 500,
  hum = 8000,
  yum,
  fen;