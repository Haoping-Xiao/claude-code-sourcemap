// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module urs
// matched 2.1.88 source: src/hooks/useVoice.ts
// class=new  jaccard=0.0106  score=1  fileCov=0.0106
// note: nearest: src/hooks/useVoice.ts (0.0106); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function iJe(e) {
  if (!e) return {
    code: "en"
  };
  let t = e.toLowerCase().trim();
  if (!t) return {
    code: "en"
  };
  if (drs.has(t)) return {
    code: t
  };
  let n = azc[t];
  if (n) return {
    code: n
  };
  let r = t.split("-")[0];
  if (r && drs.has(r)) return {
    code: r
  };
  return {
    code: "en",
    fellBackFrom: e
  };
}
var azc, drs;