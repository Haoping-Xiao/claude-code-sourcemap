// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kIa
// matched 2.1.88 source: src/utils/codeIndexing.ts
// class=new  jaccard=0.0332  score=1  fileCov=0.0332
// note: nearest: src/utils/codeIndexing.ts (0.0332); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kIa] deps: ft, kt
kvp = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;
function RIa(e) {
  let t = e.trim(),
    n = t.split(/\s+/)[0]?.toLowerCase();
  if (!n) return;
  if (n === "npx" || n === "bunx") {
    let r = t.split(/\s+/)[1]?.toLowerCase();
    if (r && r in Bdo) return Bdo[r];
  }
  return Bdo[n];
}
function LIa(e) {
  for (let {
    pattern: t,
    tool: n
  } of Rvp) if (t.test(e)) return n;
  return;
}
var Bdo, Rvp;