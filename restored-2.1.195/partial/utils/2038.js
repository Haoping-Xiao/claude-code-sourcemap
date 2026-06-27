// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gx
// matched 2.1.88 source: src/utils/slashCommandParsing.ts
// class=partial  jaccard=0.2156  score=1  fileCov=0.2156
// note: low-confidence suggestion: src/utils/slashCommandParsing.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function KCn(e, t = process.argv) {
  let n;
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (o === "--") break;
    if (o?.startsWith(`${e}=`)) {
      n = o.slice(e.length + 1);
      continue;
    }
    if (o === e && r + 1 < t.length) {
      n = t[++r];
      continue;
    }
    if (o !== void 0 && uwi.has(o)) r++;
  }
  return n;
}
function dwi(e, t = process.argv) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (r === "--") break;
    if (r === e) return true;
    if (r !== void 0 && uwi.has(r)) n++;
  }
  return false;
}
var uwi;