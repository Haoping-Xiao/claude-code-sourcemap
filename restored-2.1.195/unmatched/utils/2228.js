// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xNt
// matched 2.1.88 source: src/tools/BashTool/shouldUseSandbox.ts
// class=new  jaccard=0.0301  score=0.2482  fileCov=0.0331
// note: nearest: src/tools/BashTool/shouldUseSandbox.ts (0.0301); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xNt] deps: ih
wke = Mi();
function kNt() {
  return zee().map(e => e.sandbox?.bwrapPath).find(e => e != null);
}
function O1i() {
  return zee().map(e => e.sandbox?.socatPath).find(e => e != null);
}
function qkn() {
  let e = kNt();
  if (e) return zV(e);
  return zV("bwrap");
}