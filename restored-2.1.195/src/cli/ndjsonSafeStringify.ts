// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nUc
// matched 2.1.88 source: src/cli/ndjsonSafeStringify.ts
// class=modified  jaccard=0.4413  score=1  fileCov=0.4413
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function escapeJsLineTerminators(e) {
  return e.replace(JS_LINE_TERMINATORS, (t) => (t === "\u2028" ? "\\u2028" : "\\u2029"));
}
function ndjsonSafeStringify(e) {
  return escapeJsLineTerminators(De(e));
}
var JS_LINE_TERMINATORS;
