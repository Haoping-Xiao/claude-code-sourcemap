// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P8o
// matched 2.1.88 source: src/cli/transports/ccrClient.ts
// class=modified (alt of src/cli/transports/ccrClient.ts)  jaccard=0.0282  score=0.5875  fileCov=0.0287
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module P8o] deps: Tnt, dn, kt, je, Mm, At, Mh, aze, kM, Jt, _gc, Sgc
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
function _um() {
  return true;
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
