// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V9o
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js
// class=partial  jaccard=0.0782  score=0.2032  fileCov=0.1129
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var V9o = E(() => {
  jc();
  Ls();
});
function Ppc(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return `could not parse ${aur(e)} as a URL`;
  }
  if (llm.has(t.hostname)) {
    if (t.protocol !== "wss:" && t.protocol !== "https:") return `scheme ${aur(t.protocol)} is not permitted for host ${aur(t.hostname)}; only wss:// and https:// are accepted`;
    return null;
  }
  return `host ${aur(t.hostname)} is not an approved Anthropic endpoint`;
}
var aur = e => JSON.stringify(e),
  llm;