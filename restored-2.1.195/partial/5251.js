// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yrc
// matched 2.1.88 source: src/utils/pasteStore.ts
// class=partial  jaccard=0.0904  score=0.4272  fileCov=0.1028
// note: low-confidence suggestion: src/utils/pasteStore.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yrc = E(() => {
  QGo();
  Gfe();
  kYe();
  WL();
  q$();
  kt();
  Pw();
  je();
  At();
  Is();
  Jt();
  zrc = require("crypto"), Dar = require("fs/promises"), Krc = require("path");
});
function $Ye(e) {
  console.error(wt.red(e));
}
function ws(e) {
  if (e) $Ye(e);
  sv("cli_error"), process.exit(1);
  return;
}
function _R(e) {
  if (e) process.stdout.write(e + `
`);
  process.exit(0);
  return;
}
async function V1e(e) {
  await new Promise(t => {
    process.stdout.write(e, () => t());
  });
}
function T3(e) {
  process.stderr.write(wt.yellow(e) + `
`);
}
async function yWo() {
  let {
    flushAnalyticsSinks: e
  } = await Promise.resolve().then(() => (Yp(), kWt));
  await e();
}
async function XN(e) {
  await yWo(), process.exit(e);
  return;
}
async function yg(e) {
  return await yWo(), ws(e);
}
async function nV(e) {
  if (e) process.stdout.write(e + `
`);
  return await yWo(), _R();
}