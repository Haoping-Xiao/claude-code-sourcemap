// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pXr
// matched 2.1.88 source: node_modules/@alcalzone/ansi-tokenize/build/styledChars.js
// class=partial  jaccard=0.0851  score=1  fileCov=0.0851
// note: low-confidence suggestion: node_modules/@alcalzone/ansi-tokenize/build/styledChars.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function s3i(e) {
  let t = [],
    n = [];
  for (let r of e) if (r.type === "ansi") t = JRn(t, [r]);else if (r.type === "char") n.push({
    ...r,
    styles: [...t]
  });
  return n;
}