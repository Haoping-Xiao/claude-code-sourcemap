// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UHn
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/internal/utils/values.mjs
// class=new  jaccard=0.0523  score=1  fileCov=0.0523
// note: nearest: node_modules/@anthropic-ai/bedrock-sdk/internal/utils/values.mjs (0.0523); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UHn = E(() => {
  p0();
});
function FHn(e) {
  return e != null && typeof e === "object" && !Array.isArray(e);
}
var U4r = e => (U4r = Array.isArray, U4r(e)),
  F4r,
  xdi = e => {
    try {
      return JSON.parse(e);
    } catch (t) {
      return;
    }
  };