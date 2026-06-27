// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V9o
// matched 2.1.88 source: node_modules/whatwg-url/lib/url-state-machine.js
// class=new  jaccard=0.0182  score=0.1269  fileCov=0.0208
// note: nearest: node_modules/whatwg-url/lib/url-state-machine.js (0.0182); 0 renamed
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