// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M8e
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/mongrule.mjs
// class=new  jaccard=0.0363  score=0.4532  fileCov=0.038
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/mongrule.mjs (0.0363); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module M8e] deps: er, ih
pwo = Mi(), _rl = new Map();
function fwo(e) {
  brl = e;
}
function Srl() {
  return brl;
}
var brl;
function k6n(e) {
  let t = x0()?.cedar_lagoon;
  if (typeof t !== "object" || t === null) return false;
  let n = mo(e);
  return Object.entries(t).some(([r, o]) => o === true && n.includes(r));
}