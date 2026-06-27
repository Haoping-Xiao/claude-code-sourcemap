// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yrc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0027  score=0.4789  fileCov=0.0027
// note: nearest: src/screens/REPL.tsx (0.0027); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yrc] deps: QGo, Gfe, kYe, WL, q$, kt, Pw, je, At, Is, Jt
zrc = require("crypto"), Dar = require("fs/promises"), Krc = require("path");
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