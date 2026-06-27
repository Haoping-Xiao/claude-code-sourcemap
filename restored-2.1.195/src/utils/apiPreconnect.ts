// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yzn
// matched 2.1.88 source: src/utils/apiPreconnect.ts
// class=modified  jaccard=0.6819  score=0.8429  fileCov=0.7812
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function ssl() {
  iCo = false;
}
function isl() {
  if (iCo) return;
  if (
    ((iCo = true),
    ut(process.env.CLAUDE_CODE_USE_BEDROCK) ||
      ut(process.env.CLAUDE_CODE_USE_VERTEX) ||
      ut(process.env.CLAUDE_CODE_USE_FOUNDRY) ||
      ut(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) ||
      ut(process.env.CLAUDE_CODE_USE_MANTLE) ||
      km())
  )
    return;
  if (
    process.env.HTTPS_PROXY ||
    process.env.https_proxy ||
    process.env.HTTP_PROXY ||
    process.env.http_proxy ||
    process.env.ANTHROPIC_UNIX_SOCKET ||
    process.env.CLAUDE_CODE_CLIENT_CERT ||
    process.env.CLAUDE_CODE_CLIENT_KEY
  )
    return;
  let e = process.env.ANTHROPIC_BASE_URL || $s().BASE_API_URL;
  fetch(e, {
    method: "HEAD",
    signal: AbortSignal.timeout(10000 /* 1e4 */),
  }).catch(() => {});
}
var iCo = false;
